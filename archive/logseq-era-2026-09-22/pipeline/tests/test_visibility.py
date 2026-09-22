#!/usr/bin/env python3
"""Inference visibility: private ancestors never reach a public derived export.

The failure this closes: a public child, a private parent and a private
grandparent. The private *pages* were correctly absent from the page API — and
the private grandparent's identifier still surfaced in the page API, the search
index and the inferred Turtle, because every exporter copied the public child's
references verbatim. Filtering whole pages is not sufficient; derived metadata
crosses the boundary on its own.

These tests assert the boundary at **every** output format, not just the page
file count.
"""

from __future__ import annotations

import json

from pipeline.build import build
from pipeline.census import take_census
from pipeline.jsonld_to_page_api import build_page_api
from pipeline.jsonld_to_search import build_search_index
from pipeline.jsonld_to_turtle import build_graph
from pipeline.jsonld_to_webvowl import build_webvowl
from pipeline.tests.corpus_fixtures import write_page
from pipeline.visibility import VisibilityPolicy


PRIVATE_MARKERS = (
    "private-parent", "Private Parent",
    "private-grandparent", "Private Grandparent",
    "private-sibling", "Private Sibling",
)


def _ancestry_corpus(tmp_path):
    """public-child ⊂ {private-parent, public-uncle}; private-parent ⊂ private-grandparent."""
    pages = tmp_path / "pages"
    write_page(pages, "private-grandparent", "Private Grandparent", public=False)
    write_page(pages, "private-parent", "Private Parent", public=False,
               parents=[("private-grandparent", "Private Grandparent")])
    write_page(pages, "private-sibling", "Private Sibling", public=False,
               wikilinks=[("public-child", "Public Child")])
    write_page(pages, "public-uncle", "Public Uncle", public=True)
    write_page(
        pages, "public-child", "Public Child", public=True,
        # A bridging class: two parents, one private. Exercises bridges.json.
        parents=[("private-parent", "Private Parent"), ("public-uncle", "Public Uncle")],
        wikilinks=[("private-parent", "Private Parent"), ("public-uncle", "Public Uncle")],
        relations={
            "requires": [{"@id": "urn:ngm:class:private-parent", "label": "Private Parent"}],
            "relatedTo": [{"@id": "urn:ngm:class:private-grandparent",
                           "label": "Private Grandparent"}],
            "hasPart": [{"@id": "urn:ngm:class:public-uncle", "label": "Public Uncle"}],
        })
    return pages


def _assert_clean(text: str, where: str):
    for marker in PRIVATE_MARKERS:
        assert marker not in text, f"{where} leaks private identifier {marker!r}"


# --------------------------------------------------------------------------- #
# policy unit behaviour
# --------------------------------------------------------------------------- #
def test_policy_classifies_private_and_public_entities(tmp_path):
    pages = take_census(_ancestry_corpus(tmp_path)).pages
    policy = VisibilityPolicy.from_pages(pages)

    assert policy.is_private_iri("urn:ngm:class:private-parent")
    assert policy.is_private_iri("urn:ngm:class:private-grandparent")
    assert policy.is_private_iri("https://narrativegoldmine.com/class/private-parent")
    assert policy.is_private_iri("urn:visionflow:linked:private-parent")
    assert not policy.is_private_iri("urn:ngm:class:public-uncle")
    # A reference resolving to nothing is dangling, not private: the corpus uses
    # those deliberately for SKOS stubs, and redacting them would rewrite the
    # published semantics of every page for no privacy benefit.
    assert not policy.is_private_iri("urn:ngm:class:never-authored")


def test_policy_does_not_redact_a_slug_a_public_entity_also_claims(tmp_path):
    """An ambiguous name must never redact published content."""
    pages_dir = tmp_path / "pages"
    write_page(pages_dir, "shared", "SharedPublic", public=True, filename="SharedPublic.md")
    write_page(pages_dir, "shared", "SharedPrivate", public=False, filename="SharedPrivate.md")
    policy = VisibilityPolicy.from_pages(take_census(pages_dir).pages)

    assert not policy.is_private_slug("shared")
    assert not policy.is_private_iri("urn:ngm:class:shared")


# --------------------------------------------------------------------------- #
# per-format boundary
# --------------------------------------------------------------------------- #
def test_turtle_export_excludes_private_ancestry(tmp_path):
    pages = take_census(_ancestry_corpus(tmp_path)).pages
    ttl = build_graph(pages, public_only=True).serialize(format="turtle")

    _assert_clean(ttl, "ontology.ttl")
    # The surviving public parent is still there — redaction is targeted.
    assert "public-uncle" in ttl


def test_turtle_full_export_keeps_everything_when_not_public_only(tmp_path):
    """``public_only=False`` is the private/full build and must not be redacted."""
    pages = take_census(_ancestry_corpus(tmp_path)).pages
    ttl = build_graph(pages, public_only=False).serialize(format="turtle")
    assert "private-parent" in ttl and "private-grandparent" in ttl


def test_webvowl_export_excludes_private_ancestry(tmp_path):
    pages = take_census(_ancestry_corpus(tmp_path)).pages
    _assert_clean(json.dumps(build_webvowl(pages)), "ontology.json")


def test_page_api_excludes_private_ancestry(tmp_path):
    pages = take_census(_ancestry_corpus(tmp_path)).pages
    out = tmp_path / "api" / "pages"
    count = build_page_api(pages, out)

    assert count == 2  # public-child and public-uncle only
    assert not (out / "private-parent.json").exists()

    child = json.loads((out / "public-child.json").read_text())
    _assert_clean(json.dumps(child), "api/pages/public-child.json")

    # The private parent is gone from subClassOf; the public one remains.
    assert [p["id"] for p in child["subClassOf"]] == ["urn:ngm:class:public-uncle"]
    assert child["relationships"]["requires"] == []
    assert child["relationships"]["relatedTo"] == []
    assert [w["slug"] for w in child["wikilinks"]] == ["public-uncle"]
    # A private page linking in must not disclose its slug as a backlink.
    assert child["backlinks"] == []


def test_search_index_excludes_private_ancestry(tmp_path):
    pages = take_census(_ancestry_corpus(tmp_path)).pages
    index = build_search_index(pages)

    assert {e["id"] for e in index} == {"public-child", "public-uncle"}
    _assert_clean(json.dumps(index), "search-index.json")
    child = next(e for e in index if e["id"] == "public-child")
    assert child["is_subclass_of"] == ["Public Uncle"]


def test_every_built_artefact_is_free_of_private_identifiers(tmp_path):
    """The whole release surface, from one strict build."""
    pages_dir = _ancestry_corpus(tmp_path)
    out = tmp_path / "dist"
    result = build(pages_dir, out, strict=True)
    assert result.ok

    checked = 0
    for path in sorted(out.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix in {".json", ".ttl", ".md", ".jsonld"}:
            _assert_clean(path.read_text(encoding="utf-8", errors="replace"),
                          str(path.relative_to(out)))
            checked += 1
    assert checked >= 8, "expected the full artefact surface to be scanned"

    # Including the binary graph tiers, whose string table holds labels.
    for binary in (out / "data" / "graph").glob("*.bin"):
        raw = binary.read_bytes()
        for marker in PRIVATE_MARKERS:
            assert marker.encode() not in raw, f"{binary.name} leaks {marker!r}"


def test_bridges_json_does_not_republish_a_private_parent_label(tmp_path):
    """bridges.json enumerates multi-parent classes by parent *label*."""
    pages_dir = _ancestry_corpus(tmp_path)
    out = tmp_path / "dist"
    build(pages_dir, out, strict=True)

    bridges_path = out / "data" / "graph" / "bridges.json"
    if bridges_path.exists():
        _assert_clean(bridges_path.read_text(), "bridges.json")


def test_private_page_content_never_reaches_the_markdown_mirror(tmp_path):
    pages_dir = _ancestry_corpus(tmp_path)
    out = tmp_path / "dist"
    build(pages_dir, out, strict=True)

    mirrored = {p.stem for p in (out / "api" / "markdown").glob("*.md")}
    assert mirrored == {"public-child", "public-uncle", "Public Child", "Public Uncle"}
    # Slug aliases remain compatible; new title-form mirrors share the policy.
    for path in (out / "api" / "markdown").glob("*.md"):
        assert "private-parent" not in path.read_text()
