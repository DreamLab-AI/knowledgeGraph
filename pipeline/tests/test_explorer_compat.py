#!/usr/bin/env python3
"""Explorer-schema compatibility against the WasmVOWL consumer's expected shape.

The consumer contract was read from the WasmVOWL sources, not assumed:

* ``rust-wasm/src/ontology/parser.rs`` — ``StandardParser::parse_classes`` reads
  ``json.get("class").or_else(|| json.get("classes"))``; ``parse_properties``
  does the same for ``property``/``properties``; ``parse_property`` **requires**
  ``domain`` and ``range`` as JSON strings and raises
  ``Missing domain for property: <id>`` otherwise.
* ``modern/src/components/UI/FileDropZone.tsx`` — throws
  ``Invalid ontology format: missing class array`` unless ``data.class`` is an
  array.
* ``modern/src/stores/useGraphStore.ts`` — iterates ``data.class`` and
  ``data.property``.

So the answer to *class or classes* is **class**, singular, in every path. The
fixture below pins that shape; a producer change that breaks it fails here.
"""

from __future__ import annotations

import json
from pathlib import Path

import pytest

from pipeline.build import build
from pipeline.census import take_census
from pipeline.explorer_compat import (
    CLASS_REQUIRED_KEYS,
    EXPLORER_DIVERGENCES,
    PROPERTY_REQUIRED_KEYS,
    build_explorer_projection,
    check_projection,
)
from pipeline.jsonld_to_webvowl import build_webvowl
from pipeline.tests.corpus_fixtures import write_page

FIXTURE = Path(__file__).parent / "fixtures" / "explorer-consumer-shape.json"


def _corpus(tmp_path):
    pages = tmp_path / "pages"
    write_page(pages, "alpha", "Alpha", domain="blockchain")
    write_page(pages, "beta", "Beta", domain="blockchain", parents=[("alpha", "Alpha")],
               relations={"requires": [{"@id": "urn:ngm:class:alpha", "label": "Alpha"}]})
    return take_census(pages).pages


# --------------------------------------------------------------------------- #
# the recorded consumer contract
# --------------------------------------------------------------------------- #
def test_projection_matches_the_committed_consumer_fixture(tmp_path):
    doc = build_explorer_projection(_corpus(tmp_path))
    expected = json.loads(FIXTURE.read_text())

    assert doc["class"] == expected["class"]
    assert doc["property"] == expected["property"]
    assert doc["header"]["explorerSchemaVersion"] == expected["header"]["explorerSchemaVersion"]


def test_top_level_key_is_singular_class_not_classes(tmp_path):
    doc = build_explorer_projection(_corpus(tmp_path))
    assert "class" in doc, "FileDropZone throws without the singular key"
    assert "classes" not in doc
    assert "property" in doc and "properties" not in doc


def test_every_class_entry_carries_the_keys_the_consumer_reads(tmp_path):
    doc = build_explorer_projection(_corpus(tmp_path))
    assert doc["class"], "fixture corpus must produce classes"
    for entry in doc["class"]:
        for key in CLASS_REQUIRED_KEYS:
            assert key in entry, f"class entry missing {key}"
        assert isinstance(entry["id"], str) and entry["id"]
        # StandardParser::parse_class_node reads label with .as_str().
        assert isinstance(entry["label"], str) and entry["label"]


def test_every_property_entry_carries_string_domain_and_range(tmp_path):
    """The hard-failure case: the split WebVOWL shape crashes StandardParser."""
    doc = build_explorer_projection(_corpus(tmp_path))
    assert doc["property"], "fixture corpus must produce properties"
    for entry in doc["property"]:
        for key in PROPERTY_REQUIRED_KEYS:
            assert key in entry
        assert isinstance(entry["domain"], str) and entry["domain"]
        assert isinstance(entry["range"], str) and entry["range"]


def test_the_raw_webvowl_document_would_fail_the_consumer(tmp_path):
    """Why the projection exists at all — the regression this guards."""
    vowl = build_webvowl(_corpus(tmp_path))
    assert vowl["property"], "corpus must produce properties"
    # The split shape keeps domain/range in propertyAttribute, so every
    # property[] entry lacks them: StandardParser::parse_property raises.
    assert all("domain" not in p for p in vowl["property"])
    problems = check_projection(vowl)
    assert any("domain" in p for p in problems)


def test_check_projection_accepts_the_projection_and_rejects_the_split_shape(tmp_path):
    pages = _corpus(tmp_path)
    assert check_projection(build_explorer_projection(pages)) == []
    assert check_projection(build_webvowl(pages)) != []


def test_projection_labels_survive_instead_of_falling_back_to_the_id(tmp_path):
    doc = build_explorer_projection(_corpus(tmp_path))
    labels = {e["label"] for e in doc["class"]}
    assert labels == {"Alpha", "Beta"}


def test_projection_does_not_duplicate_the_split_attribute_arrays(tmp_path):
    """Neither consumer reads them from this document; they cost ~40 MB.

    ``FileDropZone`` forwards ``classAttribute``/``propertyAttribute`` untouched
    and ``useGraphStore`` iterates only ``class`` and ``property``. The classic
    split shape stays available in ``ontology.json`` beside this file.
    """
    doc = build_explorer_projection(_corpus(tmp_path))
    assert "classAttribute" not in doc
    assert "propertyAttribute" not in doc


# --------------------------------------------------------------------------- #
# the divergence that cannot be resolved from the producer side
# --------------------------------------------------------------------------- #
def test_known_divergences_are_recorded_with_an_owner(tmp_path):
    assert EXPLORER_DIVERGENCES, "an empty list would mean the conflict was resolved"
    ids = {d["id"] for d in EXPLORER_DIVERGENCES}
    assert ids == {"TS_LABEL_LANGUAGE_MAP", "TS_DOMAIN_RANGE_ARRAY"}
    for d in EXPLORER_DIVERGENCES:
        assert d["resolution_owner"] == "WasmVOWL"
        assert d["consumer"].startswith("WasmVOWL/")
        assert d["expects"] and d["conflict"] and d["consumer_impact"]


def test_divergences_are_published_with_the_projection(tmp_path):
    doc = build_explorer_projection(_corpus(tmp_path))
    assert doc["divergences"] == EXPLORER_DIVERGENCES


def test_a_json_value_cannot_satisfy_both_consumers_simultaneously(tmp_path):
    """Records *why* the divergence stands, so nobody 'fixes' it by guessing.

    The Rust parser needs ``domain`` to be a string; the TypeScript store indexes
    it with ``[0]``. Indexing a string yields its first character, so a single
    JSON value cannot serve both — the resolution belongs in the consumer.
    """
    doc = build_explorer_projection(_corpus(tmp_path))
    domain = doc["property"][0]["domain"]
    assert isinstance(domain, str)
    assert domain[0] == "h", "TypeScript's prop.domain[0] would read one character"
    assert domain.startswith("https://narrativegoldmine.com/class/")


# --------------------------------------------------------------------------- #
# end to end
# --------------------------------------------------------------------------- #
def test_build_emits_the_projection_beside_the_webvowl_document(tmp_path):
    pages_dir = tmp_path / "pages"
    write_page(pages_dir, "alpha", "Alpha")
    write_page(pages_dir, "beta", "Beta", parents=[("alpha", "Alpha")])
    out = tmp_path / "dist"
    build(pages_dir, out, strict=True)

    doc = json.loads((out / "data" / "ontology-explorer.json").read_text())
    assert check_projection(doc) == []
    assert len(doc["class"]) == 2
