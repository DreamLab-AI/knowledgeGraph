#!/usr/bin/env python3
"""Parse JSON-LD blocks from Logseq markdown pages.

Reads pages/*.md files, extracts fenced ```json-ld blocks, and returns
structured PageData objects ready for downstream converters.

Supports both v1 (OntologyClass) and v2 (Class/Individual) schema.
"""

import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional


@dataclass
class WikilinkRef:
    iri: str
    label: str


@dataclass
class RelationSet:
    has_part: list[WikilinkRef] = field(default_factory=list)
    requires: list[WikilinkRef] = field(default_factory=list)
    enables: list[WikilinkRef] = field(default_factory=list)
    depends_on: list[WikilinkRef] = field(default_factory=list)
    implements: list[WikilinkRef] = field(default_factory=list)
    contrasts_with: list[WikilinkRef] = field(default_factory=list)
    bridges_to: list[WikilinkRef] = field(default_factory=list)
    uses: list[WikilinkRef] = field(default_factory=list)
    related_to: list[WikilinkRef] = field(default_factory=list)
    supports: list[WikilinkRef] = field(default_factory=list)
    standardized_by: list[WikilinkRef] = field(default_factory=list)
    part_of: list[WikilinkRef] = field(default_factory=list)


@dataclass
class OntologyEntity:
    iri: str
    label: str
    entity_type: str  # "Class" or "Individual"
    domain: str
    definition: str
    sub_class_of: list[WikilinkRef] = field(default_factory=list)
    instance_of: list[WikilinkRef] = field(default_factory=list)
    same_as: list[WikilinkRef] = field(default_factory=list)
    quality_score: float = 0.0
    maturity: str = "draft"
    inference_rule: str = ""
    relations: RelationSet = field(default_factory=RelationSet)
    provenance: dict = field(default_factory=dict)
    raw: dict = field(default_factory=dict)


# Keep backward compat alias
OntologyClass = OntologyEntity


@dataclass
class PageData:
    path: Path
    page_iri: str
    slug: str
    title: str
    is_public: bool
    schema_version: int
    wikilinks: list[WikilinkRef] = field(default_factory=list)
    ontology_class: Optional[OntologyEntity] = None
    body: str = ""
    raw_page_block: dict = field(default_factory=dict)
    #: The ``vc:public`` value exactly as authored, before coercion. ``MISSING``
    #: when the key was absent. ``is_public`` is ``True`` only for a literal
    #: JSON boolean ``true``; every other value publishes nothing and is
    #: reported by :mod:`pipeline.validate` as a ``PUBLIC_FLAG_NOT_BOOLEAN``
    #: error. The publication boundary selects what leaves the workspace, so it
    #: is never decided by Python truthiness.
    public_flag_raw: object = None
    #: The ``vc:schemaVersion`` value exactly as authored, before coercion.
    schema_version_raw: object = None


class _Missing:
    """Sentinel for an absent authored field (distinct from an authored null)."""

    __slots__ = ()

    def __repr__(self) -> str:  # pragma: no cover - debugging aid
        return "MISSING"

    def __bool__(self) -> bool:
        return False


MISSING = _Missing()


@dataclass(frozen=True)
class PageRejection:
    """One input file that produced no :class:`PageData`, and why.

    ``status`` is ``"rejected"`` for a file that looks like a corpus page but
    could not be read as one (a build-blocking defect under strict mode), and
    ``"excluded"`` for a file that is legitimately not a corpus page.
    """

    path: Path
    status: str
    code: str
    message: str

    def to_dict(self, root: Optional[Path] = None) -> dict:
        name = str(self.path.relative_to(root)) if root else str(self.path)
        return {
            "path": name,
            "status": self.status,
            "code": self.code,
            "message": self.message,
        }


JSONLD_BLOCK_RE = re.compile(
    r'```json-ld\s*\n(.*?)```',
    re.DOTALL,
)

ENTITY_TYPES = {"OntologyClass", "Class", "Individual"}


def _parse_refs(arr) -> list[WikilinkRef]:
    if isinstance(arr, dict):
        arr = [arr]
    if not isinstance(arr, list):
        return []
    out = []
    for item in arr:
        if not isinstance(item, dict):
            continue
        iri = item.get("@id", "")
        label = item.get("label", item.get("vc:label", ""))
        if iri:
            out.append(WikilinkRef(iri=iri, label=label))
    return out


def _extract_float(obj) -> float:
    if isinstance(obj, dict):
        v = obj.get("@value", "0")
    else:
        v = obj
    try:
        return float(v)
    except (ValueError, TypeError):
        return 0.0


def _extract_relations(block: dict) -> RelationSet:
    rs = RelationSet()

    # v1 flat keys
    v1_mapping = {
        "vc:hasPart": "has_part",
        "vc:requires": "requires",
        "vc:enables": "enables",
        "vc:depends-on": "depends_on",
        "vc:implements": "implements",
        "vc:contrasts-with": "contrasts_with",
        "vc:bridges-to": "bridges_to",
        "vc:uses": "uses",
        "vc:relatedTo": "related_to",
        "vc:supports": "supports",
        "vc:standardizedBy": "standardized_by",
        "vc:isPartOf": "part_of",
    }
    for json_key, attr_name in v1_mapping.items():
        val = block.get(json_key, [])
        refs = _parse_refs(val)
        if refs:
            setattr(rs, attr_name, refs)

    # v2 nested relations
    rel_block = block.get("relations", {})
    if isinstance(rel_block, dict):
        v2_mapping = {
            "hasPart": "has_part",
            "requires": "requires",
            "enables": "enables",
            "dependsOn": "depends_on",
            "implements": "implements",
            "contrastsWith": "contrasts_with",
            "bridgesTo": "bridges_to",
            "uses": "uses",
            "relatedTo": "related_to",
            "supports": "supports",
            "standardizedBy": "standardized_by",
            "partOf": "part_of",
        }
        for json_key, attr_name in v2_mapping.items():
            val = rel_block.get(json_key, [])
            refs = _parse_refs(val)
            if refs:
                existing = getattr(rs, attr_name)
                existing.extend(refs)

    return rs


def _extract_body(text: str) -> str:
    blocks = list(JSONLD_BLOCK_RE.finditer(text))
    if not blocks:
        return text.strip()
    last_block_end = blocks[-1].end()
    return text[last_block_end:].strip()


def parse_page_outcome(path: Path) -> tuple[Optional[PageData], Optional[PageRejection]]:
    """Parse one page, returning either the page or a typed reason it produced none.

    Exactly one element of the pair is non-``None``. Every early return that the
    original :func:`parse_page` expressed as a bare ``None`` now carries a code,
    so :mod:`pipeline.census` can account for every input file and strict builds
    can refuse to publish a corpus that silently lost one.
    """
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError as exc:
        return None, PageRejection(path, "rejected", "UNREADABLE", f"Cannot read file: {exc}")

    blocks = JSONLD_BLOCK_RE.findall(text)
    if not blocks:
        return None, PageRejection(
            path, "excluded", "NO_JSONLD_FENCE",
            "File contains no ```json-ld fence; not a corpus page")

    parsed_blocks = []
    decode_errors = []
    for raw in blocks:
        try:
            parsed_blocks.append(json.loads(raw))
        except json.JSONDecodeError as exc:
            decode_errors.append(f"line {exc.lineno} col {exc.colno}: {exc.msg}")

    if decode_errors:
        # A malformed fence is a defect in a file that declares itself a corpus
        # page. It is reported even when other fences in the same file parsed,
        # because a dropped Class fence silently deletes a class (ADR-2002).
        return None, PageRejection(
            path, "rejected", "MALFORMED_JSONLD",
            f"{len(decode_errors)} of {len(blocks)} json-ld fence(s) failed to decode: "
            + "; ".join(decode_errors[:3]))

    if not parsed_blocks:
        return None, PageRejection(
            path, "rejected", "NO_DECODABLE_BLOCK",
            "No json-ld fence decoded to a JSON value")

    page_block = None
    ontology_block = None

    for b in parsed_blocks:
        if not isinstance(b, dict):
            return None, PageRejection(
                path, "rejected", "NON_OBJECT_BLOCK",
                f"json-ld fence decoded to {type(b).__name__}, expected an object")
        btype = b.get("@type", "")
        if btype == "Page" and page_block is None:
            page_block = b
        elif btype in ENTITY_TYPES and ontology_block is None:
            ontology_block = b

    if page_block is None:
        return None, PageRejection(
            path, "rejected", "NO_PAGE_BLOCK",
            "No json-ld fence carries \"@type\": \"Page\"")

    wikilinks = _parse_refs(page_block.get("vc:outboundWikilinks", []))

    public_raw = page_block.get("vc:public", MISSING)
    schema_raw = page_block.get("vc:schemaVersion", MISSING)

    pd = PageData(
        path=path,
        page_iri=page_block.get("@id", ""),
        slug=page_block.get("vc:slug", ""),
        title=page_block.get("title", path.stem),
        # Strict: only a real JSON boolean true publishes. The string "false",
        # 0, [] and every other truthy/falsy value are non-publishing and are
        # raised as validation errors from the retained raw value.
        is_public=(public_raw is True),
        schema_version=schema_raw if isinstance(schema_raw, int) and not isinstance(schema_raw, bool) else 0,
        wikilinks=wikilinks,
        body=_extract_body(text),
        raw_page_block=page_block,
        public_flag_raw=public_raw,
        schema_version_raw=schema_raw,
    )

    if ontology_block:
        btype = ontology_block.get("@type", "Class")
        entity_type = "Individual" if btype == "Individual" else "Class"

        sub_class_of = _parse_refs(ontology_block.get("subClassOf", []))
        instance_of = _parse_refs(ontology_block.get("instanceOf", []))
        same_as = _parse_refs(ontology_block.get("sameAs", []))

        # v2 quality is a plain float; v1 is a typed object
        quality = _extract_float(
            ontology_block.get("quality",
                ontology_block.get("vc:qualityScore", 0))
        )

        # v2 provenance is nested; v1 uses prov: prefix
        prov = ontology_block.get("provenance", {})
        if not prov:
            attr = ontology_block.get("prov:wasAttributedTo", {})
            gen = ontology_block.get("prov:generatedAtTime", {})
            ir = ontology_block.get("vc:inferenceRule", "")
            prov = {}
            if isinstance(attr, dict) and attr.get("@id"):
                prov["attributedTo"] = attr["@id"]
            if isinstance(gen, dict) and gen.get("@value"):
                prov["generatedAt"] = gen["@value"]
            if ir:
                prov["inferenceRule"] = ir

        pd.ontology_class = OntologyEntity(
            iri=ontology_block.get("@id", ""),
            label=ontology_block.get("label", pd.title),
            entity_type=entity_type,
            domain=ontology_block.get("domain",
                ontology_block.get("vc:sourceDomain", "")),
            definition=ontology_block.get("definition", ""),
            sub_class_of=sub_class_of,
            instance_of=instance_of,
            same_as=same_as,
            quality_score=quality,
            maturity=ontology_block.get("maturity",
                ontology_block.get("vc:maturity", "draft")),
            inference_rule=prov.get("inferenceRule", ""),
            relations=_extract_relations(ontology_block),
            provenance=prov,
            raw=ontology_block,
        )

    return pd, None


def parse_page(path: Path) -> Optional[PageData]:
    """Backwards-compatible wrapper: the page, or ``None`` if it produced none."""
    page, _rejection = parse_page_outcome(path)
    return page


def parse_corpus(
    pages_dir: Path,
    rejections: Optional[list] = None,
) -> list[PageData]:
    """Parse every ``*.md`` under *pages_dir*.

    When *rejections* is a list it is extended with a :class:`PageRejection`
    for every input file that produced no page, so the caller can account for
    the difference between the file count and the page count.
    """
    pages = []
    for md_file in sorted(pages_dir.glob("*.md")):
        pd, rejection = parse_page_outcome(md_file)
        if pd is not None:
            pages.append(pd)
        elif rejections is not None:
            rejections.append(rejection)
    return pages


if __name__ == "__main__":
    pages_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("mainKnowledgeGraph/pages")
    pages = parse_corpus(pages_dir)
    with_oc = sum(1 for p in pages if p.ontology_class)
    individuals = sum(1 for p in pages if p.ontology_class and p.ontology_class.entity_type == "Individual")
    public = sum(1 for p in pages if p.is_public)
    print(f"Parsed {len(pages)} pages ({with_oc} entities: {with_oc - individuals} classes, {individuals} individuals, {public} public)")
