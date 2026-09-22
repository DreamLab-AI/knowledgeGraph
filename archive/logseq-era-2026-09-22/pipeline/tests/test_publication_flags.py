#!/usr/bin/env python3
"""Strict publication flags: only boolean true publishes.

The failure this closes: a ``Page`` whose ``vc:public`` was the **string**
``"false"`` passed validation and was emitted into the page API, because the
parser assigned the value through and every consumer tested its truthiness. In
Python a non-empty string is truthy, so ``"false"`` published the page.

The publication flag selects what leaves the authoring workspace, so it is held
to a stricter standard than a display field: an ambiguous value is a validation
*error*, and it publishes nothing.
"""

from __future__ import annotations

import json

import pytest

from pipeline.build import BuildBlocked, build
from pipeline.census import take_census
from pipeline.jsonld_parser import MISSING, parse_page_outcome
from pipeline.tests.corpus_fixtures import write_page
from pipeline.validate import validate_corpus


TRUTHY_NON_BOOLEANS = ["false", "true", "yes", "no", 1, 0, "0", [1], {"a": 1}]


@pytest.mark.parametrize("value", TRUTHY_NON_BOOLEANS)
def test_non_boolean_flag_never_publishes(tmp_path, value):
    pages_dir = tmp_path / f"pages-{abs(hash(str(value)))}"
    write_page(pages_dir, "subject", "Subject", public=value)

    page, rejection = parse_page_outcome(next(pages_dir.glob("*.md")))
    assert rejection is None
    assert page.is_public is False, f"{value!r} must not publish"
    assert page.public_flag_raw == value


@pytest.mark.parametrize("value", TRUTHY_NON_BOOLEANS)
def test_non_boolean_flag_is_a_validation_error(tmp_path, value):
    pages_dir = tmp_path / f"pages-{abs(hash(str(value)))}"
    write_page(pages_dir, "subject", "Subject", public=value)

    report = validate_corpus(take_census(pages_dir).pages)
    codes = {i.code for i in report.errors}
    assert "PUBLIC_FLAG_NOT_BOOLEAN" in codes
    assert report.public_pages == 0


def test_string_false_is_not_published_into_the_page_api(tmp_path):
    """The exact case the estate review reproduced, end to end."""
    pages_dir = tmp_path / "pages"
    write_page(pages_dir, "published", "Published", public=True)
    write_page(pages_dir, "sneaky", "Sneaky", public="false")
    out = tmp_path / "dist"

    with pytest.raises(BuildBlocked):
        build(pages_dir, out, strict=True)

    # Publication permission is safety-critical in every mode. Inspection uses
    # take_census/validate_corpus directly and never writes a public bundle.
    with pytest.raises(BuildBlocked):
        build(pages_dir, out, strict=False)
    assert not out.exists()


def test_boolean_true_still_publishes_and_boolean_false_does_not(tmp_path):
    pages_dir = tmp_path / "pages"
    write_page(pages_dir, "yes-page", "YesPage", public=True)
    write_page(pages_dir, "no-page", "NoPage", public=False)

    report = validate_corpus(take_census(pages_dir).pages)
    assert report.errors == []
    assert report.public_pages == 1
    assert report.summary()["non_public_pages"] == 1


def test_absent_flag_is_an_explicit_error_not_a_silent_default(tmp_path):
    pages_dir = tmp_path / "pages"
    path = write_page(pages_dir, "subject", "Subject", public=True)
    text = path.read_text().replace('"vc:public": true,\n', "")
    path.write_text(text)

    page, _ = parse_page_outcome(path)
    assert page.public_flag_raw is MISSING
    assert page.is_public is False

    report = validate_corpus([page])
    assert {i.code for i in report.errors} == {"MISSING_PUBLIC_FLAG"}


def test_non_integer_schema_version_is_an_error(tmp_path):
    pages_dir = tmp_path / "pages"
    write_page(pages_dir, "subject", "Subject", schema_version="2")

    report = validate_corpus(take_census(pages_dir).pages)
    assert "SCHEMA_VERSION_NOT_INTEGER" in {i.code for i in report.errors}


def test_boolean_flag_is_not_confused_with_integer_one(tmp_path):
    """``True`` is an ``int`` subclass in Python; the check must not be fooled."""
    pages_dir = tmp_path / "pages"
    write_page(pages_dir, "subject", "Subject", public=1)

    page, _ = parse_page_outcome(next(pages_dir.glob("*.md")))
    assert page.is_public is False
    assert isinstance(page.public_flag_raw, int)
    assert not isinstance(page.public_flag_raw, bool)
