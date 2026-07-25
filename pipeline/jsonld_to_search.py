#!/usr/bin/env python3
"""Generate search index JSON from parsed JSON-LD corpus."""

import json
import re
import sys
from pathlib import Path
from .jsonld_parser import PageData, parse_corpus


def slugify(s: str) -> str:
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')


def build_search_index(pages: list[PageData]) -> list[dict]:
    index = []
    for page in pages:
        if not page.is_public:
            continue

        oc = page.ontology_class
        entry = {
            "id": page.slug,
            "title": page.title,
        }

        if oc:
            labels = [oc.label]
            for lp in page.raw_page_block.get("vc:legacyProperties", []):
                if lp.get("vc:key") == "preferred-term":
                    pt = lp.get("vc:value", "")
                    if pt and pt != oc.label:
                        labels.append(pt)

            entry.update({
                "domain": oc.domain,
                "domain_name": oc.domain.replace("-", " ").title() if oc.domain else "",
                "definition": oc.definition,
                "entityType": getattr(oc, 'entity_type', 'Class'),
                "qualityScore": oc.quality_score,
                "maturity": oc.maturity,
                "iri": oc.iri,
                "labels": labels,
                "is_subclass_of": [p.label for p in oc.sub_class_of],
                "wikilinks": [wl.label for wl in page.wikilinks[:20]],
            })
        else:
            entry["labels"] = [page.title]

        index.append(entry)

    return index


def main():
    pages_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("mainKnowledgeGraph/pages")
    output = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("/tmp/api/search-index.json")

    pages = parse_corpus(pages_dir)
    index = build_search_index(pages)

    output.parent.mkdir(parents=True, exist_ok=True)
    with open(output, "w") as f:
        json.dump(index, f, indent=2)

    print(f"Search index: {len(index)} entries → {output}")


if __name__ == "__main__":
    main()
