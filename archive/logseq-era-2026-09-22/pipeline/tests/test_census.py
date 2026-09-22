#!/usr/bin/env python3
"""Input census: every source file is accounted for, malformed input blocks a strict build.

The failure this closes: a directory holding one markdown file with a malformed
fence produced zero parsed pages *and* a validation report with zero errors.
``parse_page`` skipped the decode failure, ``parse_corpus`` dropped the ``None``,
and the validator cannot report a page it never received.
"""

from __future__ import annotations

import json

import pytest

from pipeline.build import BuildBlocked, build
from pipeline.census import CensusError, assert_census_clean, take_census
from pipeline.jsonld_parser import parse_corpus, parse_page_outcome
from pipeline.tests.corpus_fixtures import (
    write_malformed_page,
    write_no_page_block,
    write_page,
    write_prose_only_page,
)


def test_malformed_page_is_rejected_with_a_reason(tmp_path):
    pages = tmp_path / "pages"
    write_page(pages, "good", "Good")
    broken = write_malformed_page(pages)

    census = take_census(pages)

    assert census.input_files == 2
    assert census.parsed == 1
    assert len(census.rejected) == 1
    rejection = census.rejected[0]
    assert rejection.path == broken
    assert rejection.code == "MALFORMED_JSONLD"
    assert "failed to decode" in rejection.message
    assert census.balanced


def test_census_balances_across_all_three_buckets(tmp_path):
    pages = tmp_path / "pages"
    write_page(pages, "good", "Good")
    write_page(pages, "second", "Second")
    write_malformed_page(pages)
    write_prose_only_page(pages)
    write_no_page_block(pages)

    census = take_census(pages)

    assert census.input_files == 5
    assert census.parsed == 2
    assert {r.code for r in census.rejected} == {"MALFORMED_JSONLD", "NO_PAGE_BLOCK"}
    assert [r.code for r in census.excluded] == ["NO_JSONLD_FENCE"]
    assert census.balanced
    # The bucket totals must reconstruct the input count exactly.
    assert census.parsed + len(census.rejected) + len(census.excluded) == census.input_files


def test_prose_only_file_is_excluded_not_rejected(tmp_path):
    """A file that never claimed to be a corpus page must not fail a build."""
    pages = tmp_path / "pages"
    write_page(pages, "good", "Good")
    write_prose_only_page(pages)

    census = take_census(pages)
    assert census.rejected == []
    assert census.excluded[0].status == "excluded"
    assert_census_clean(census, strict=True)  # does not raise


def test_strict_census_raises_on_a_rejected_file(tmp_path):
    pages = tmp_path / "pages"
    write_page(pages, "good", "Good")
    write_malformed_page(pages)

    census = take_census(pages)
    with pytest.raises(CensusError) as exc:
        assert_census_clean(census, strict=True)
    assert "MALFORMED_JSONLD" in str(exc.value)
    # Non-strict mode tolerates it, so a developer can still inspect the damage.
    assert_census_clean(census, strict=False)


def test_strict_build_refuses_to_publish_a_corpus_with_malformed_input(tmp_path):
    pages = tmp_path / "pages"
    write_page(pages, "good", "Good")
    write_malformed_page(pages)
    out = tmp_path / "dist"

    with pytest.raises(BuildBlocked) as exc:
        build(pages, out, strict=True)
    assert "census" in str(exc.value).lower()

    # Invalid authoring diagnostics must never enter a public destination.
    assert not out.exists()
    assert "invalid_input" in str(exc.value)


def test_census_file_records_every_rejection_entry(tmp_path):
    pages = tmp_path / "pages"
    write_page(pages, "good", "Good")
    write_malformed_page(pages)
    write_prose_only_page(pages)

    census = take_census(pages)
    written = census.write(tmp_path / "census.json")
    data = json.loads(written.read_text())

    assert data["census_version"] == 1
    assert data["input_files"] == 3
    assert data["balanced"] is True
    assert len(data["entries"]) == 2
    assert {e["status"] for e in data["entries"]} == {"rejected", "excluded"}
    # Paths are recorded relative to the pages directory.
    assert all("/" not in e["path"] for e in data["entries"])


def test_parse_outcome_returns_exactly_one_of_page_or_reason(tmp_path):
    pages = tmp_path / "pages"
    good = write_page(pages, "good", "Good")
    broken = write_malformed_page(pages)

    page, rejection = parse_page_outcome(good)
    assert page is not None and rejection is None

    page, rejection = parse_page_outcome(broken)
    assert page is None and rejection is not None


def test_parse_corpus_can_collect_rejections_without_changing_its_result(tmp_path):
    """The legacy signature still returns a plain page list."""
    pages = tmp_path / "pages"
    write_page(pages, "good", "Good")
    write_malformed_page(pages)

    assert len(parse_corpus(pages)) == 1
    collected = []
    assert len(parse_corpus(pages, rejections=collected)) == 1
    assert [r.code for r in collected] == ["MALFORMED_JSONLD"]
