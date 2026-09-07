#!/usr/bin/env python3
"""Versioned export generation manifest.

Without it, nothing in the published tree said which corpus revision produced
which artefact, and a half-replaced export was undetectable.
"""

from __future__ import annotations

import json

from pipeline.build import build
from pipeline.manifest import MANIFEST_VERSION, verify_manifest
from pipeline.tests.corpus_fixtures import write_page


def _corpus(tmp_path):
    pages = tmp_path / "pages"
    write_page(pages, "alpha", "Alpha")
    write_page(pages, "beta", "Beta", parents=[("alpha", "Alpha")])
    return pages


def test_manifest_is_written_with_every_export(tmp_path):
    out = tmp_path / "dist"
    build(_corpus(tmp_path), out, strict=True)

    manifest = json.loads((out / "api" / "generation-manifest.json").read_text())

    assert manifest["manifest_version"] == MANIFEST_VERSION
    assert manifest["generation_id"]
    assert manifest["generated_at"].endswith("+00:00")
    assert manifest["strict"] is True
    assert manifest["counts"]["classes"] == 2
    assert manifest["counts"]["input_files"] == 2
    assert manifest["census"]["balanced"] is True
    assert manifest["validation"]["errors"] == 0
    assert manifest["visibility"]["policy"] == "redact-references-to-known-private-entities"
    assert manifest["tool"]["python"]


def test_manifest_records_a_source_revision(tmp_path):
    out = tmp_path / "dist"
    build(_corpus(tmp_path), out, strict=True)
    source = json.loads((out / "api" / "generation-manifest.json").read_text())["source"]

    assert "pages_dir" in source
    # A tmp_path corpus is outside any repository; the field is present and
    # explicitly null rather than silently absent.
    assert "commit" in source and "dirty" in source


def test_manifest_hashes_every_artefact_and_verifies(tmp_path):
    out = tmp_path / "dist"
    build(_corpus(tmp_path), out, strict=True)

    manifest = json.loads((out / "api" / "generation-manifest.json").read_text())
    paths = {a["path"] for a in manifest["artefacts"]}
    assert "data/ontology.ttl" in paths
    assert "data/ontology.json" in paths
    assert "data/ontology-explorer.json" in paths
    assert "api/search-index.json" in paths
    assert "api/pages/" in paths  # per-page files roll up to one digest
    assert all(len(a["sha256"]) == 64 for a in manifest["artefacts"])

    assert verify_manifest(out) == []


def test_manifest_detects_a_tampered_artefact(tmp_path):
    out = tmp_path / "dist"
    build(_corpus(tmp_path), out, strict=True)

    target = out / "data" / "ontology.json"
    doc = json.loads(target.read_text())
    doc["class"][0]["id"] = "https://narrativegoldmine.com/class/substituted"
    target.write_text(json.dumps(doc))

    problems = verify_manifest(out)
    assert any("data/ontology.json" in p and "sha256" in p for p in problems)


def test_manifest_detects_a_changed_page_inside_the_rollup(tmp_path):
    out = tmp_path / "dist"
    build(_corpus(tmp_path), out, strict=True)

    page = out / "api" / "pages" / "alpha.json"
    page.write_text(json.dumps({"id": "tampered"}))

    assert any("api/pages/" in p for p in verify_manifest(out))


def test_manifest_detects_a_missing_artefact(tmp_path):
    out = tmp_path / "dist"
    build(_corpus(tmp_path), out, strict=True)
    (out / "data" / "ontology.ttl").unlink()

    assert any("ontology.ttl" in p and "missing" in p for p in verify_manifest(out))


def test_generation_ids_differ_between_builds(tmp_path):
    pages = _corpus(tmp_path)
    first = build(pages, tmp_path / "a", strict=True).manifest["generation_id"]
    second = build(pages, tmp_path / "b", strict=True).manifest["generation_id"]
    assert first != second
