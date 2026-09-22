#!/usr/bin/env python3
"""Identity-set tripwire alongside the count.

ADR-2003 ratifies ``EXPECTED_CLASSES`` as a hand-typed, independently-authored
count, and that property is preserved here. What a count cannot see:

* an **equal-count identity substitution** — delete one class, add another;
* an **altered publication visibility** — flip which pages publish;
* **shape drift** — the artefact no longer parses in the consumer.

These tests inject each of those into a built corpus and assert the release path
rejects it.
"""

from __future__ import annotations

import json

import pytest

from pipeline.build import BuildBlocked, build
from pipeline.release_gate import (
    CANONICAL_REPOSITORY,
    class_iris_from_artefacts,
    read_contract,
    run_gate,
    write_contract,
)
from pipeline.tests.corpus_fixtures import write_malformed_page, write_page


def _corpus(tmp_path, extra: int = 0):
    pages = tmp_path / "pages"
    write_page(pages, "alpha", "Alpha")
    write_page(pages, "beta", "Beta", parents=[("alpha", "Alpha")])
    write_page(pages, "gamma", "Gamma", parents=[("alpha", "Alpha")])
    for i in range(extra):
        write_page(pages, f"extra-{i}", f"Extra{i}")
    return pages


def _built(tmp_path, pages=None):
    pages = pages or _corpus(tmp_path)
    out = tmp_path / "dist"
    build(pages, out, strict=True)
    contract_dir = tmp_path / "contracts"
    write_contract(contract_dir, class_iris_from_artefacts(out), public_classes=3)
    return pages, out, contract_dir


# --------------------------------------------------------------------------- #
def test_a_clean_build_passes_every_contract(tmp_path):
    pages, out, contract_dir = _built(tmp_path)
    assert run_gate(out, pages, contract_dir, expected_classes=3) == []


def test_contract_names_the_canonical_repository_identity(tmp_path):
    _, _, contract_dir = _built(tmp_path)
    contract = read_contract(contract_dir)
    assert contract["repository"] == CANONICAL_REPOSITORY
    assert "narrativegoldmine" in contract["repository_aliases"]


# --------------------------------------------------------------------------- #
# 1. equal-count identity substitution
# --------------------------------------------------------------------------- #
def test_equal_count_substitution_passes_the_count_but_fails_the_identity_set(tmp_path):
    """The headline case: one class swapped for another, count unchanged."""
    pages, out, contract_dir = _built(tmp_path)

    # Substitute gamma for delta in the source and rebuild: same class count.
    (pages / "Gamma.md").unlink()
    write_page(pages, "delta", "Delta", parents=[("alpha", "Alpha")])
    build(pages, out, strict=True)

    vowl = json.loads((out / "data" / "ontology.json").read_text())
    stats = json.loads((out / "data" / "graph" / "stats.json").read_text())
    assert len(vowl["class"]) == 3 and stats["classes"] == 3, "the count is unchanged"

    problems = run_gate(out, pages, contract_dir, expected_classes=3)
    assert not any(p.startswith("count:") for p in problems), \
        "the count gate cannot see this — that is the point"
    identity = [p for p in problems if p.startswith("identity:")]
    assert identity, "the identity set must catch the substitution"
    assert any("missing: https://narrativegoldmine.com/class/gamma" in p for p in problems)
    assert any("added  : https://narrativegoldmine.com/class/delta" in p for p in problems)


def test_artefact_level_substitution_is_caught_without_a_rebuild(tmp_path):
    """Tampering with the written artefact, not the source."""
    pages, out, contract_dir = _built(tmp_path)
    target = out / "data" / "ontology.json"
    doc = json.loads(target.read_text())
    doc["class"][0]["id"] = "https://narrativegoldmine.com/class/impostor"
    target.write_text(json.dumps(doc))

    problems = run_gate(out, pages, contract_dir, expected_classes=3)
    assert any("impostor" in p for p in problems)


# --------------------------------------------------------------------------- #
# 2. malformed input
# --------------------------------------------------------------------------- #
def test_malformed_input_is_rejected_by_the_release_path(tmp_path):
    pages, out, contract_dir = _built(tmp_path)
    write_malformed_page(pages)

    # The strict build — the one CI runs — refuses outright.
    with pytest.raises(BuildBlocked):
        build(pages, out, strict=True)

    # Non-strict entry points now enforce the same input safety boundary.
    before = (out / "data" / "ontology.ttl").read_bytes()
    with pytest.raises(BuildBlocked):
        build(pages, out, strict=False)
    assert (out / "data" / "ontology.ttl").read_bytes() == before


def test_a_dropped_class_fence_moves_both_count_and_identity(tmp_path):
    pages, out, contract_dir = _built(tmp_path)
    (pages / "Gamma.md").unlink()
    build(pages, out, strict=True)

    problems = run_gate(out, pages, contract_dir, expected_classes=3)
    assert any(p.startswith("count:") for p in problems)
    assert any("missing: https://narrativegoldmine.com/class/gamma" in p for p in problems)


# --------------------------------------------------------------------------- #
# 3. publication visibility
# --------------------------------------------------------------------------- #
def test_altered_publication_visibility_is_caught(tmp_path):
    pages, out, contract_dir = _built(tmp_path)

    # Unpublish one page and publish a replacement: class count drops by none
    # only if a page is added, so here we assert the visibility check directly.
    text = (pages / "Gamma.md").read_text().replace('"vc:public": true', '"vc:public": false').replace("public:: true", "public:: false")
    (pages / "Gamma.md").write_text(text)
    write_page(pages, "delta", "Delta", parents=[("alpha", "Alpha")])
    build(pages, out, strict=True)

    problems = run_gate(out, pages, contract_dir, expected_classes=3)
    assert any("publication visibility changed" in p or p.startswith("identity:")
               for p in problems)


def test_a_private_identifier_in_a_public_artefact_fails_the_gate(tmp_path):
    pages, out, contract_dir = _built(tmp_path)
    write_page(pages, "secret-class", "SecretClass", public=False)
    build(pages, out, strict=True)
    # Re-cut the contract so only the visibility check can fail.
    write_contract(contract_dir, class_iris_from_artefacts(out), public_classes=3)

    assert run_gate(out, pages, contract_dir, expected_classes=3) == []

    # Now inject the private identifier into a published artefact.
    idx = out / "api" / "search-index.json"
    doc = json.loads(idx.read_text())
    doc[0]["is_subclass_of"] = ["secret-class"]
    idx.write_text(json.dumps(doc))

    problems = run_gate(out, pages, contract_dir, expected_classes=3)
    assert any("private identifier" in p for p in problems)


# --------------------------------------------------------------------------- #
# 4. schema / consumer shape
# --------------------------------------------------------------------------- #
def test_plural_classes_key_fails_the_schema_check(tmp_path):
    """The consumer's FileDropZone throws unless the singular key is present."""
    pages, out, contract_dir = _built(tmp_path)
    target = out / "data" / "ontology.json"
    doc = json.loads(target.read_text())
    doc["classes"] = doc.pop("class")
    target.write_text(json.dumps(doc))

    problems = run_gate(out, pages, contract_dir, expected_classes=3)
    assert any("singular 'class'" in p for p in problems)


def test_missing_explorer_projection_fails_the_schema_check(tmp_path):
    pages, out, contract_dir = _built(tmp_path)
    (out / "data" / "ontology-explorer.json").unlink()

    problems = run_gate(out, pages, contract_dir, expected_classes=3)
    assert any("no explorer projection" in p for p in problems)


def test_count_and_identity_set_must_move_together(tmp_path):
    """A CI pin that disagrees with the committed set is itself a failure."""
    pages, out, contract_dir = _built(tmp_path)
    problems = run_gate(out, pages, contract_dir, expected_classes=4)
    assert any("both must move in one commit" in p for p in problems)


def test_identity_file_digest_mismatch_is_detected(tmp_path):
    pages, out, contract_dir = _built(tmp_path)
    meta_path = contract_dir / "class-identity.json"
    meta = json.loads(meta_path.read_text())
    meta["identity_sha256"] = "0" * 64
    meta_path.write_text(json.dumps(meta))

    assert any("identity_sha256" in p for p in run_gate(out, pages, contract_dir, 3))
