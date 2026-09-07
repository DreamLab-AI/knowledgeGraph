"""Public build boundary: typed input policy, graph projection and clean outputs.

Kept identical in the authoring and extracted publisher. This is a build-time
boundary, not an atomic live-server activation protocol.
"""
from __future__ import annotations

from collections import Counter
from copy import deepcopy
from dataclasses import fields, is_dataclass
from functools import wraps
import json
import os
from pathlib import Path
import re
import shutil
import tempfile

FENCE = re.compile(r'```json-ld\s*\n(.*?)```', re.S)

class PublicationBlocked(ValueError, RuntimeError):
    """An input cannot safely cross the public build boundary."""


def inspect_publication_inputs(pages_dir: Path, excluded_dirs=()):
    """Account for every markdown input, before the parser can drop errors.

    Diagnostics contain aggregate reasons only. Private/excluded page names and
    authored values belong in local authoring tools, not the released census.
    """
    counts = Counter()
    for path in sorted(Path(pages_dir).rglob('*.md')):
        counts['input_files'] += 1
        parts = path.relative_to(pages_dir).parts
        if any(p.startswith('.') for p in parts) or parts[0] in excluded_dirs:
            counts['excluded_directory'] += 1
            continue
        try:
            text = path.read_text(encoding='utf-8')
            blocks = [json.loads(raw) for raw in FENCE.findall(text)]
        except (OSError, UnicodeError, json.JSONDecodeError):
            counts['invalid_input'] += 1
            continue
        if text.count('```json-ld') != len(blocks):
            counts['invalid_input'] += 1
            continue
        if any(not isinstance(block, dict) for block in blocks):
            counts['invalid_input'] += 1
            continue
        page_blocks = [b for b in blocks if b.get('@type') == 'Page']
        if not page_blocks:
            counts['excluded_no_page'] += 1
            continue
        if len(page_blocks) != 1:
            counts['invalid_input'] += 1
            continue
        flag = page_blocks[0].get('vc:public')
        # Never coerce string/numeric values into publication permission.
        if type(flag) is not bool:
            counts['invalid_publication_flag'] += 1
            continue
        authored = re.search(r'^public::\s*(.*?)\s*$', text, re.M)
        if authored and authored[1].lower() not in ('true', 'false'):
            counts['invalid_publication_flag'] += 1
        elif authored and (authored[1].lower() == 'true') != flag:
            counts['conflicting_publication_flags'] += 1
        else:
            counts['included_public' if flag else 'included_private'] += 1
    invalid = sum(v for k, v in counts.items() if k.startswith(('invalid_', 'conflicting_')))
    if invalid:
        raise PublicationBlocked('Public build refused input census: ' + json.dumps(dict(counts), sort_keys=True))
    return {'policy_version': 1, 'public_pages': counts['included_public'],
            'non_public_pages': counts['included_private'], 'rejected': 0,
            'excluded': counts['excluded_directory'] + counts['excluded_no_page'],
            'parsed': counts['included_public'] + counts['included_private'],
            **dict(counts), 'balanced':
            counts['input_files'] == sum(v for k, v in counts.items() if k != 'input_files')}


def excluded_page_identities(pages_dir, parse_page, excluded_dirs=()):
    """Retain identities of parseable excluded pages for reference filtering.

    Their content never becomes an output or a validation diagnostic. A held
    _misc or dot-directory page does not become public through an incoming link.
    """
    excluded = []
    for path in Path(pages_dir).rglob("*.md"):
        parts = path.relative_to(pages_dir).parts
        if not (any(p.startswith(".") for p in parts) or parts[0] in excluded_dirs):
            continue
        try:
            page = parse_page(path)
        except (OSError, ValueError, TypeError):
            continue
        if page is not None:
            page.is_public = False
            excluded.append(page)
    return excluded


def public_projection(pages):
    """Copy public pages, removing known private references from every field.

    Filtering precedes closure: private intermediate nodes never enter inferred
    ancestry. Explicit private references in prose/raw JSON are redacted as well
    as typed graph edges. Public/private identity collisions block publication.
    """
    public = [p for p in pages if p.is_public is True]
    private = [p for p in pages if p.is_public is not True]
    def identity(page):
        values = {page.page_iri, page.slug}
        if page.ontology_class:
            values.add(page.ontology_class.iri)
        return {v for v in values if v}
    public_ids = {v for p in public for v in identity(p)}
    private_ids = {v for p in private for v in identity(p)}
    if public_ids & private_ids:
        raise PublicationBlocked('Public/private identity collision; resolve in the authoring source')
    names = {p.title for p in private}
    names.update(p.ontology_class.label for p in private if p.ontology_class)
    public_names = {p.title for p in public}
    public_names.update(p.ontology_class.label for p in public if p.ontology_class)
    markers = private_ids | (names - public_names)
    # Recognise the HTTP projection as well as source URNs.
    for value in list(private_ids):
        for old, new in [('urn:ngm:class:', 'https://narrativegoldmine.com/class/'),
                         ('urn:ngm:individual:', 'https://narrativegoldmine.com/individual/'),
                         ('urn:visionflow:owl:class:', 'https://narrativegoldmine.com/class/'),
                         ('urn:visionflow:page:', 'https://narrativegoldmine.com/page/'),
                         ('urn:visionflow:linked:', 'https://narrativegoldmine.com/linked/')]:
            if value.startswith(old): markers.add(new + value[len(old):])
    pattern = re.compile(r'(?<![\w-])(?:' + '|'.join(re.escape(m) for m in sorted(markers, key=len, reverse=True) if m) + r')(?![\w-])') if markers else None
    def private_ref(value):
        if isinstance(value, str): return value in markers
        iri = getattr(value, 'iri', None)
        if isinstance(value, dict): iri = value.get('@id', value.get('iri'))
        return isinstance(iri, str) and iri in markers
    def clean(value):
        if isinstance(value, str): return pattern.sub('[private]', value) if pattern else value
        if isinstance(value, Path): return value
        if isinstance(value, list): return [clean(x) for x in value if not private_ref(x)]
        if isinstance(value, dict):
            return {clean(k): clean(v) for k, v in value.items() if not private_ref(v)}
        if is_dataclass(value):
            for f in fields(value): setattr(value, f.name, clean(getattr(value, f.name)))
        return value
    return [clean(deepcopy(p)) for p in public]


def emit_public_markdown(pages, pages_dir, output_dir):
    """Generate the title-form mirror from projected data, never raw sources.

    Preserve the established flattened namespace names and percent-encoded
    aliases. The JSON-LD and prose both passed the same publication boundary.
    """
    target = Path(output_dir) / "api" / "markdown"
    target.mkdir(parents=True, exist_ok=True)
    for page in pages:
        blocks = [page.raw_page_block]
        if page.ontology_class:
            blocks.append(page.ontology_class.raw)
        content = "\n\n".join("```json-ld\n" + json.dumps(b, ensure_ascii=False, indent=2) + "\n```" for b in blocks)
        content += "\n\n" + page.body + "\n"
        relative = page.path.relative_to(pages_dir).as_posix()
        for name in {relative.replace("/", "___"), relative.replace("/", "%2F")}:
            (target / name).write_text(content, encoding="utf-8")


def staged_publication(fn):
    """Never leave obsolete page exports in a successful rebuilt bundle.

    Preserve non-pipeline assets. Failed builds leave the previous destination
    intact; successful builds replace the generated api/data trees. Live readers
    still require an external generation-activation protocol.
    """
    @wraps(fn)
    def run(pages_dir, output_dir, *args, **kwargs):
        output_dir = Path(output_dir)
        output_dir.parent.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory(prefix='.publication-', dir=output_dir.parent) as tmp:
            stage = Path(tmp)
            result = fn(Path(pages_dir), stage, *args, **kwargs)
            existed = output_dir.exists()
            output_dir.mkdir(parents=True, exist_ok=True)
            backup = Path(tempfile.mkdtemp(prefix='.publication-recovery-', dir=output_dir.parent))
            installed, saved = [], []
            try:
                for child in list(stage.iterdir()):
                    dest = output_dir / child.name
                    if dest.exists() or dest.is_symlink():
                        os.replace(dest, backup / child.name)
                        saved.append(child.name)
                    os.replace(child, dest)
                    installed.append(child.name)
            except Exception as promotion_error:
                try:
                    for name in reversed(installed):
                        os.replace(output_dir / name, stage / name)
                    for name in reversed(saved):
                        os.replace(backup / name, output_dir / name)
                    if not existed:
                        output_dir.rmdir()
                except Exception as rollback_error:
                    # Never clean away an original bundle that could not be
                    # restored (for example a filesystem failing both renames).
                    raise PublicationBlocked(
                        f"Promotion and rollback failed; preserve recovery directory {backup}"
                    ) from rollback_error
                shutil.rmtree(backup)
                raise promotion_error
            # Completed bundle is authoritative. A cleanup failure may leave
            # an old local recovery tree, never erase the newly built bundle.
            shutil.rmtree(backup, ignore_errors=True)
            return result
    return run
