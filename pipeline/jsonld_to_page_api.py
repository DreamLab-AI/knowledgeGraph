#!/usr/bin/env python3
"""Generate per-page JSON API files from parsed JSON-LD corpus."""

import json
import re
import sys
from pathlib import Path
from .jsonld_parser import PageData, parse_corpus
from .backlinks import build_backlink_index


def slugify(s: str) -> str:
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')


def _refs_to_dicts(refs) -> list[dict]:
    return [{"id": r.iri, "label": r.label} for r in refs]


def build_page_api(pages: list[PageData], output_dir: Path):
    public_pages = [p for p in pages if p.is_public]
    backlinks = build_backlink_index(pages)
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
                "subClassOf": _refs_to_dicts(oc.sub_class_of),
                "entityType": getattr(oc, 'entity_type', 'Class'),
                "qualityScore": oc.quality_score,
                "maturity": oc.maturity,
                "relationships": {
                    "hasPart": _refs_to_dicts(oc.relations.has_part),
                    "requires": _refs_to_dicts(oc.relations.requires),
                    "enables": _refs_to_dicts(oc.relations.enables),
                    "dependsOn": _refs_to_dicts(oc.relations.depends_on),
                    "implements": _refs_to_dicts(oc.relations.implements),
                    "contrastsWith": _refs_to_dicts(oc.relations.contrasts_with),
                    "bridgesTo": _refs_to_dicts(oc.relations.bridges_to),
                    "uses": _refs_to_dicts(oc.relations.uses),
                    "supports": _refs_to_dicts(oc.relations.supports),
                    "standardizedBy": _refs_to_dicts(oc.relations.standardized_by),
                    "partOf": _refs_to_dicts(oc.relations.part_of),
                    "relatedTo": _refs_to_dicts(oc.relations.related_to),
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
            for wl in page.wikilinks
        ]
        entry["backlinks"] = [
            {"slug": s, "label": slug_to_page[s].title if s in slug_to_page else s}
            for s in backlinks.get(page.slug, [])
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
