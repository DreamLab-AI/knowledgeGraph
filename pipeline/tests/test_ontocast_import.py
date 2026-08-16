from pathlib import Path

import pytest
from rdflib import Graph, OWL

from pipeline.jsonld_parser import parse_corpus
from pipeline.jsonld_to_turtle import build_graph
from pipeline.ontocast_import import ImportConfig, import_graph, write_candidates
from pipeline.validate import validate_corpus


TTL = """
@prefix ex: <https://example.test/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ex:Turbine a owl:Class ; rdfs:label "Wind Turbine" ;
  rdfs:comment "A machine that converts wind energy into electricity." .
ex:A07 a owl:NamedIndividual, ex:Turbine ; rdfs:label "Turbine A07" ;
  ex:serialNumber "WTG-0007" ; ex:capacityMw "15.0"^^xsd:decimal ;
  ex:partOf ex:FarmOne .
"""


def config():
    return ImportConfig("owf", "asset-engineering", "run:2026-08-16/doc:7",
                        "urn:owf:class/asset", "Asset")


def test_import_stages_class_and_individual_with_lossless_evidence(tmp_path: Path):
    report = import_graph(Graph().parse(data=TTL, format="turtle"), config())
    assert report.summary()["classes"] == 1
    assert report.summary()["individuals"] == 1
    individual = next(c for c in report.candidates if c.entity_type == "Individual")
    assert '"@id": "urn:owf:individual/turbine-a07"' in individual.markdown
    assert '"@id": "urn:owf:class/wind-turbine"' in individual.markdown
    assert '"vc:reviewStatus": "pending"' in individual.markdown
    assert '"value": "WTG-0007"' in individual.markdown
    assert "public:: false" in individual.markdown

    write_candidates(report, tmp_path)
    pages = parse_corpus(tmp_path)
    validation = validate_corpus(pages)
    assert len(pages) == 2
    assert validation.errors == []
    published = build_graph(pages, public_only=False)
    assert any(str(obj) == "https://example.test/A07"
               for obj in published.objects(None, OWL.sameAs))
    assert any(str(subject) == "urn:owf:individual/turbine-a07"
               for subject in published.subjects(OWL.sameAs, None))


def test_write_refuses_to_overwrite(tmp_path: Path):
    report = import_graph(Graph().parse(data=TTL, format="turtle"), config())
    write_candidates(report, tmp_path)
    with pytest.raises(FileExistsError):
        write_candidates(report, tmp_path)


def test_slug_collision_is_reported_not_silently_merged():
    graph = Graph().parse(data=TTL + '''
      <https://other.test/turbine> a <http://www.w3.org/2002/07/owl#Class> ;
        <http://www.w3.org/2000/01/rdf-schema#label> "Wind Turbine" .
    ''', format="turtle")
    report = import_graph(graph, config())
    assert any(item["reason"] == "slug-collision" for item in report.skipped)


def test_untrusted_label_cannot_escape_output_directory(tmp_path: Path):
    graph = Graph().parse(data='''
      @prefix owl: <http://www.w3.org/2002/07/owl#> .
      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
      <https://example.test/escape> a owl:Class ; rdfs:label "../Escape" .
    ''', format="turtle")
    report = import_graph(graph, config())
    write_candidates(report, tmp_path)
    assert list(tmp_path.glob("*.md"))
    assert not (tmp_path.parent / "Escape.md").exists()
