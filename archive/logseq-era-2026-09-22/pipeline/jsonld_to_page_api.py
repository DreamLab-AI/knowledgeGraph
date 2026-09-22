#!/usr/bin/env python3
"""Generate per-page JSON API files from parsed JSON-LD corpus."""

import json
import re
import sys
from pathlib import Path
from typing import Optional

from .jsonld_parser import PageData, parse_corpus
from .backlinks import build_backlink_index
from .visibility import VisibilityPolicy, build_policy


def slugify(s: str) -> str:
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')


def _refs_to_dicts(refs, policy: VisibilityPolicy) -> list[dict]:
    return [{"id": r.iri, "label": r.label} for r in policy.filter_refs(refs)]


def build_page_api(pages: list[PageData], output_dir: Path,
                   policy: Optional[VisibilityPolicy] = None):
    """Emit one JSON file per public page.

    Every reference copied into a public file is passed through the visibility
    policy first. Without that filter a public page's ``subClassOf`` republishes
    the identifier *and label* of a private parent, which is the leak the estate
    review reproduced: dropping the private page's own file is not enough.
    """
    policy = build_policy(pages, policy)
    public_pages = [p for p in pages if p.is_public]
    # Backlinks are computed over public pages only: a private page linking to
    # a public one must not disclose its own slug on the public page.
    backlinks = build_backlink_index(public_pages)
    slug_to_page = {p.slug: p for p in public_pages}

    output_dir.mkdir(parents=True, exist_ok=True)
    markdown_dir = output_dir.parent / "markdown"
    markdown_dir.mkdir(parents=True, exist_ok=True)

    domain_index: dict[str, list[dict]] = {}
    generated = 0

    for page in public_pages:
        oc = page.ontology_class
        entry: dict = {
            "id": page.page_iri,
            "title": page.title,
            "slug": page.slug,
            "public": True,
        }

        if oc:
            entry.update({
                "classIri": oc.iri,
                "domain": oc.domain,
                "definition": oc.definition,
                "subClassOf": _refs_to_dicts(oc.sub_class_of, policy),
                "entityType": getattr(oc, 'entity_type', 'Class'),
                "qualityScore": oc.quality_score,
                "maturity": oc.maturity,
                "relationships": {
                    "hasPart": _refs_to_dicts(oc.relations.has_part, policy),
                    "requires": _refs_to_dicts(oc.relations.requires, policy),
                    "enables": _refs_to_dicts(oc.relations.enables, policy),
                    "dependsOn": _refs_to_dicts(oc.relations.depends_on, policy),
                    "implements": _refs_to_dicts(oc.relations.implements, policy),
                    "contrastsWith": _refs_to_dicts(oc.relations.contrasts_with, policy),
                    "bridgesTo": _refs_to_dicts(oc.relations.bridges_to, policy),
                    "uses": _refs_to_dicts(oc.relations.uses, policy),
                    "supports": _refs_to_dicts(oc.relations.supports, policy),
                    "standardizedBy": _refs_to_dicts(oc.relations.standardized_by, policy),
                    "partOf": _refs_to_dicts(oc.relations.part_of, policy),
                    "relatedTo": _refs_to_dicts(oc.relations.related_to, policy),
                },
            })

            domain = oc.domain or "unclassified"
            if domain not in domain_index:
                domain_index[domain] = []
            domain_index[domain].append({
                "slug": page.slug,
                "title": oc.label,
                "qualityScore": oc.quality_score,
            })

        entry["wikilinks"] = [
            {"slug": wl.iri.split(":")[-1], "label": wl.label}
            for wl in policy.filter_refs(page.wikilinks)
        ]
        entry["backlinks"] = [
            {"slug": s, "label": slug_to_page[s].title if s in slug_to_page else s}
            for s in backlinks.get(page.slug, [])
            if not policy.is_private_slug(s)
        ]

        page_file = output_dir / f"{page.slug}.json"
        with open(page_file, "w") as f:
            json.dump(entry, f, indent=2)

        if page.body:
            md_file = markdown_dir / f"{page.slug}.md"
            with open(md_file, "w") as f:
                f.write(page.body)

        generated += 1

    index_file = output_dir / "_domain-index.json"
    with open(index_file, "w") as f:
        json.dump(domain_index, f, indent=2)

    return generated


def main():
    pages_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("mainKnowledgeGraph/pages")
    output_dir = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("/tmp/api/pages")

    pages = parse_corpus(pages_dir)
    count = build_page_api(pages, output_dir)
    print(f"Page API: {count} files → {output_dir}")


if __name__ == "__main__":
    main()
