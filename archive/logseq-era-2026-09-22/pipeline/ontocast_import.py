#!/usr/bin/env python3
"""Stage OntoCast RDF output as reviewable Logseq ontology candidates.

This is deliberately an import boundary, not a second extraction engine.  It
accepts the Turtle returned by OntoCast (or any standards-compliant RDF
producer), mints project-local identities, maps the closed relation vocabulary,
and preserves every source statement in a non-publishing evidence block.
Candidates are private drafts and are never written without ``--write``.
"""

from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass, field
from pathlib import Path
from urllib.parse import unquote

from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, OWL, RDF, RDFS, SKOS

CONTEXT = "https://narrativegoldmine.com/ns/v2.jsonld"
STRUCTURAL_PREDICATES = {
    RDF.type, RDFS.label, RDFS.comment, RDFS.subClassOf,
    SKOS.prefLabel, SKOS.definition, OWL.sameAs,
}
RELATION_NAMES = {
    "haspart": "hasPart", "ispartof": "partOf", "partof": "partOf",
    "requires": "requires", "enables": "enables", "dependson": "dependsOn",
    "implements": "implements", "uses": "uses", "supports": "supports",
    "contrastswith": "contrastsWith", "bridgesto": "bridgesTo",
    "relatedto": "relatedTo", "related": "relatedTo",
    "standardizedby": "standardizedBy", "standardisedby": "standardizedBy",
}


def slugify(value: str) -> str:
    value = unquote(value).strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "unnamed-entity"


def _local_name(iri: URIRef) -> str:
    return re.split(r"[/#:]", str(iri).rstrip("/#:"))[-1]


def _label(graph: Graph, iri: URIRef) -> str:
    for predicate in (RDFS.label, SKOS.prefLabel):
        value = graph.value(iri, predicate)
        if isinstance(value, Literal) and str(value).strip():
            return str(value).strip()
    raw = re.sub(r"[_-]+", " ", unquote(_local_name(iri)))
    return raw.strip().title() or "Unnamed Entity"


def _definition(graph: Graph, iri: URIRef, label: str) -> str:
    for predicate in (RDFS.comment, SKOS.definition, DCTERMS.description):
        value = graph.value(iri, predicate)
        if isinstance(value, Literal) and str(value).strip():
            return str(value).strip()
    return f"A candidate entity named {label}, inferred from an OntoCast extraction and awaiting editorial definition."


def _json_object(value) -> dict:
    if isinstance(value, URIRef):
        return {"kind": "iri", "value": str(value)}
    if isinstance(value, Literal):
        result = {"kind": "literal", "value": str(value)}
        if value.datatype:
            result["datatype"] = str(value.datatype)
        if value.language:
            result["language"] = value.language
        return result
    return {"kind": "blank-node", "value": str(value)}


@dataclass(frozen=True)
class ImportConfig:
    project_token: str
    domain: str
    source_document: str
    default_parent_iri: str
    default_parent_label: str
    context: str = CONTEXT


@dataclass
class Candidate:
    source_iri: str
    slug: str
    title: str
    entity_type: str
    markdown: str
    statements: int


@dataclass
class ImportReport:
    candidates: list[Candidate] = field(default_factory=list)
    skipped: list[dict] = field(default_factory=list)

    def summary(self) -> dict:
        return {
            "candidate_count": len(self.candidates),
            "classes": sum(c.entity_type == "Class" for c in self.candidates),
            "individuals": sum(c.entity_type == "Individual" for c in self.candidates),
            "source_statements": sum(c.statements for c in self.candidates),
            "skipped": self.skipped,
            "candidates": [
                {"sourceIri": c.source_iri, "slug": c.slug,
                 "title": c.title, "entityType": c.entity_type,
                 "statements": c.statements}
                for c in self.candidates
            ],
        }


def _ref(graph: Graph, iri: URIRef, local_iris: dict[URIRef, str], token: str,
         entity_type: str = "class") -> dict:
    local = local_iris.get(iri)
    target = local or f"urn:{token}:{entity_type}/{slugify(_label(graph, iri))}"
    return {"@id": target, "label": _label(graph, iri)}


def _entity_subjects(graph: Graph) -> tuple[set[URIRef], set[URIRef]]:
    classes = {s for s in graph.subjects(RDF.type, OWL.Class) if isinstance(s, URIRef)}
    individuals = {
        s for s in graph.subjects(RDF.type, OWL.NamedIndividual)
        if isinstance(s, URIRef)
    }
    # OntoCast facts frequently type an entity directly with a catalog class
    # without also asserting owl:NamedIndividual.
    for subject, obj in graph.subject_objects(RDF.type):
        if isinstance(subject, URIRef) and obj in classes and subject not in classes:
            individuals.add(subject)
    return classes, individuals


def import_graph(graph: Graph, config: ImportConfig) -> ImportReport:
    classes, individuals = _entity_subjects(graph)
    subjects = [(s, "Class") for s in classes] + [(s, "Individual") for s in individuals]
    subjects.sort(key=lambda item: str(item[0]))
    local_iris: dict[URIRef, str] = {}
    used_slugs: dict[str, URIRef] = {}
    report = ImportReport()

    for subject, entity_type in subjects:
        title = _label(graph, subject)
        slug = slugify(title)
        if slug in used_slugs and used_slugs[slug] != subject:
            report.skipped.append({"sourceIri": str(subject), "reason": "slug-collision", "slug": slug})
            continue
        used_slugs[slug] = subject
        kind = "class" if entity_type == "Class" else "individual"
        local_iris[subject] = f"urn:{config.project_token}:{kind}/{slug}"

    for subject, entity_type in subjects:
        if subject not in local_iris:
            continue
        title = _label(graph, subject)
        slug = slugify(title)
        kind = "class" if entity_type == "Class" else "individual"
        entity: dict = {
            "@context": config.context,
            "@id": local_iris[subject],
            "@type": entity_type,
            "label": title,
            "definition": _definition(graph, subject, title),
            "domain": config.domain,
        }
        if entity_type == "Class":
            entity["maturity"] = "draft"
            parents = [o for o in graph.objects(subject, RDFS.subClassOf) if isinstance(o, URIRef)]
            entity["subClassOf"] = (
                [_ref(graph, o, local_iris, config.project_token) for o in parents]
                or [{"@id": config.default_parent_iri, "label": config.default_parent_label}]
            )
        else:
            types = [o for o in graph.objects(subject, RDF.type)
                     if isinstance(o, URIRef) and o not in {OWL.NamedIndividual}]
            entity["instanceOf"] = [_ref(graph, o, local_iris, config.project_token) for o in types]
            if not entity["instanceOf"]:
                report.skipped.append({"sourceIri": str(subject), "reason": "individual-without-class"})
                continue

        relations: dict[str, list[dict]] = {}
        for predicate, obj in graph.predicate_objects(subject):
            if not isinstance(obj, URIRef) or predicate in STRUCTURAL_PREDICATES:
                continue
            relation = RELATION_NAMES.get(_local_name(predicate).replace("-", "").lower())
            if relation:
                relations.setdefault(relation, []).append(_ref(graph, obj, local_iris, config.project_token))
        if relations:
            entity["relations"] = {key: sorted(value, key=lambda ref: ref["@id"])
                                   for key, value in sorted(relations.items())}

        same_as = sorted({str(o) for o in graph.objects(subject, OWL.sameAs) if isinstance(o, URIRef)} | {str(subject)})
        entity["sameAs"] = [{"@id": iri, "label": title} for iri in same_as]
        entity["grounding"] = {
            "method": "inferred",
            "confidence": 0.5,
            "sources": [{
                "dataset": "ontocast-rdf-extraction",
                "locator": f"{config.source_document}#{subject}",
                "query": f"DESCRIBE <{subject}>",
            }],
        }

        statements = [
            {"predicate": str(predicate), "object": _json_object(obj)}
            for predicate, obj in sorted(graph.predicate_objects(subject), key=lambda pair: (str(pair[0]), str(pair[1])))
        ]
        evidence = {
            "@context": config.context,
            "@type": "vc:ImportEvidence",
            "vc:sourceTool": "OntoCast",
            "vc:sourceIri": str(subject),
            "vc:sourceDocument": config.source_document,
            "vc:reviewStatus": "pending",
            "vc:statements": statements,
        }
        page = {
            "@context": config.context,
            "@id": f"urn:{config.project_token}:page/{slug}",
            "@type": "Page",
            "vc:slug": slug,
            "title": title,
            "vc:public": False,
            "vc:schemaVersion": 3,
            "vc:outboundWikilinks": [],
        }
        markdown = (
            "public:: false\n"
            "import-status:: pending-review\n\n"
            f"# {title}\n\n"
            f"```json-ld\n{json.dumps(page, indent=2, ensure_ascii=False)}\n```\n\n"
            f"```json-ld\n{json.dumps(entity, indent=2, ensure_ascii=False)}\n```\n\n"
            f"```json-ld\n{json.dumps(evidence, indent=2, ensure_ascii=False)}\n```\n\n"
            "- Imported as a private candidate from OntoCast RDF.\n"
            "- Review the definition, classification, grounding confidence, and every source statement before promotion.\n"
        )
        report.candidates.append(Candidate(str(subject), slug, title, entity_type, markdown, len(statements)))
    return report


def write_candidates(report: ImportReport, output_dir: Path) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)
    for candidate in report.candidates:
        # RDF labels are untrusted model output. Keep Logseq's readable title
        # where safe, but never let a slash or traversal token choose a path.
        safe_title = re.sub(r"[\\/\x00]+", "-", candidate.title).strip(" .")
        if not safe_title or safe_title in {".", ".."}:
            safe_title = candidate.slug
        target = output_dir / f"{safe_title}.md"
        if target.exists():
            raise FileExistsError(f"refusing to overwrite existing candidate: {target}")
        target.write_text(candidate.markdown, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", type=Path, help="OntoCast Turtle output")
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--project-token", required=True)
    parser.add_argument("--domain", required=True)
    parser.add_argument("--source-document", required=True,
                        help="stable document/run locator recorded in grounding")
    parser.add_argument("--default-parent-iri", required=True)
    parser.add_argument("--default-parent-label", required=True)
    parser.add_argument("--write", action="store_true",
                        help="write candidates; without this flag the command is a preview")
    args = parser.parse_args()
    graph = Graph().parse(args.input, format="turtle")
    report = import_graph(graph, ImportConfig(
        project_token=args.project_token, domain=args.domain,
        source_document=args.source_document,
        default_parent_iri=args.default_parent_iri,
        default_parent_label=args.default_parent_label,
    ))
    if args.write:
        write_candidates(report, args.output_dir)
    result = report.summary()
    result["mode"] = "write" if args.write else "preview"
    result["outputDir"] = str(args.output_dir)
    print(json.dumps(result, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
