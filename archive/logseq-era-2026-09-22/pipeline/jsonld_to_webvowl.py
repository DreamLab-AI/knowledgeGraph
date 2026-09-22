#!/usr/bin/env python3
"""Convert parsed JSON-LD corpus to WebVOWL JSON format.

Supports v2 schema (Class/Individual, nested relations, urn:ngm: IRIs).
"""

import json
import re
import sys
from pathlib import Path
from .jsonld_parser import PageData, parse_corpus

DOMAIN_COLOURS = {
    "artificial-intelligence": "#4CAF50",
    "spatial-computing": "#2196F3",
    "blockchain": "#FF9800",
    "infrastructure": "#9C27B0",
    "distributed-collaboration": "#00BCD4",
    "robotics": "#F44336",
}
DEFAULT_COLOUR = "#607D8B"
STUB_COLOUR = "#90A4AE"
INDIVIDUAL_COLOUR = "#FF5722"

BASE_CLASS_IRI = "https://narrativegoldmine.com/class/"
BASE_INDIVIDUAL_IRI = "https://narrativegoldmine.com/individual/"


def _remap_iri(iri: str) -> str:
    if iri.startswith("urn:ngm:class:"):
        return iri.replace("urn:ngm:class:", BASE_CLASS_IRI)
    if iri.startswith("urn:ngm:individual:"):
        return iri.replace("urn:ngm:individual:", BASE_INDIVIDUAL_IRI)
    if iri.startswith("urn:visionflow:owl:class:"):
        return iri.replace("urn:visionflow:owl:class:", BASE_CLASS_IRI)
    if iri.startswith("urn:visionflow:linked:"):
        return iri.replace("urn:visionflow:linked:", "https://narrativegoldmine.com/linked/")
    if iri.startswith("urn:visionflow:page:"):
        return iri.replace("urn:visionflow:page:", "https://narrativegoldmine.com/page/")
    return iri


def _slug_from_iri(iri: str) -> str:
    return iri.rsplit("/", 1)[-1] if "/" in iri else iri


def build_webvowl(pages: list[PageData]) -> dict:
    public_pages = [p for p in pages if p.is_public and p.ontology_class]

    declared_iris = {_remap_iri(p.ontology_class.iri) for p in public_pages}

    classes = []
    class_attrs = []
    properties = []
    prop_attrs = []
    prop_counter = 0

    for p in public_pages:
        oc = p.ontology_class
        node_id = _remap_iri(oc.iri)

        is_individual = oc.entity_type == "Individual"

        classes.append({
            "id": node_id,
            "type": "owl:NamedIndividual" if is_individual else "owl:Class",
        })

        legacy_term_id = ""
        for lp in p.raw_page_block.get("vc:legacyProperties", []):
            if lp.get("vc:key") == "legacy-term-id":
                legacy_term_id = lp.get("vc:value", "")
                break

        bg = INDIVIDUAL_COLOUR if is_individual else DOMAIN_COLOURS.get(oc.domain, DEFAULT_COLOUR)

        class_attrs.append({
            "id": node_id,
            "iri": node_id,
            "baseIri": BASE_INDIVIDUAL_IRI if is_individual else BASE_CLASS_IRI,
            "attributes": ["colored"],
            "backgroundColor": bg,
            "domain": oc.domain,
            "entityType": oc.entity_type,
            "term_id": legacy_term_id,
            "label": {"en": oc.label},
            "comment": {"en": oc.definition[:200] if oc.definition else ""},
        })

        if is_individual:
            for cls_ref in (oc.instance_of or oc.sub_class_of):
                target = _remap_iri(cls_ref.iri)
                if target not in declared_iris:
                    continue
                prop_id = f"prop-type-{prop_counter}"
                prop_counter += 1
                properties.append({"id": prop_id, "type": "rdf:type"})
                prop_attrs.append({
                    "id": prop_id,
                    "attributes": ["object"],
                    "domain": node_id,
                    "range": target,
                    "label": {"en": "type"},
                })
        else:
            for parent in oc.sub_class_of:
                target = _remap_iri(parent.iri)
                if target not in declared_iris:
                    continue
                prop_id = f"prop-sub-{prop_counter}"
                prop_counter += 1
                properties.append({"id": prop_id, "type": "rdfs:subClassOf"})
                prop_attrs.append({
                    "id": prop_id,
                    "attributes": ["subclass"],
                    "domain": node_id,
                    "range": target,
                })

        rel_map = {
            "has_part": ("vc:hasPart", "owl:objectProperty"),
            "requires": ("vc:requires", "owl:objectProperty"),
            "enables": ("vc:enables", "owl:objectProperty"),
            "depends_on": ("vc:dependsOn", "owl:objectProperty"),
            "implements": ("vc:implements", "owl:objectProperty"),
            "contrasts_with": ("vc:contrastsWith", "owl:objectProperty"),
            "bridges_to": ("vc:bridgesTo", "owl:objectProperty"),
            "uses": ("vc:uses", "owl:objectProperty"),
            "related_to": ("skos:related", "owl:objectProperty"),
            "supports": ("vc:supports", "owl:objectProperty"),
            "standardized_by": ("vc:standardizedBy", "owl:objectProperty"),
            "part_of": ("vc:isPartOf", "owl:objectProperty"),
        }

        for attr_name, (prop_iri, prop_type) in rel_map.items():
            refs = getattr(oc.relations, attr_name, [])
            for ref in refs:
                target = _remap_iri(ref.iri)
                if target not in declared_iris:
                    continue
                prop_id = f"prop-rel-{prop_counter}"
                prop_counter += 1
                properties.append({"id": prop_id, "type": prop_type})
                prop_attrs.append({
                    "id": prop_id,
                    "iri": prop_iri,
                    "baseIri": "https://narrativegoldmine.com/ns/v1#",
                    "attributes": ["object"],
                    "domain": node_id,
                    "range": target,
                    "label": {"en": prop_iri.split(":")[-1]},
                })

    return {
        "header": {
            "languages": ["en"],
            "title": {"en": "NarrativeGoldmine Ontology"},
            "iri": "https://narrativegoldmine.com/ontology",
            "version": "3.1.0",
            "author": ["Dr John O'Hare", "LCR Swarm"],
            "description": {
                "en": f"Knowledge graph ontology with {len(classes)} nodes across {len(set(ca['domain'] for ca in class_attrs))} domains"
            },
        },
        "class": classes,
        "classAttribute": class_attrs,
        "property": properties,
        "propertyAttribute": prop_attrs,
    }


def main():
    pages_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("mainKnowledgeGraph/pages")
    output = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("/tmp/ontology.json")

    pages = parse_corpus(pages_dir)
    vowl = build_webvowl(pages)

    output.parent.mkdir(parents=True, exist_ok=True)
    with open(output, "w") as f:
        json.dump(vowl, f, indent=2)

    print(f"WebVOWL: {len(vowl['class'])} nodes, {len(vowl['property'])} properties → {output}")


if __name__ == "__main__":
    main()
