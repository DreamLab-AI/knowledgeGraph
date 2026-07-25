#!/usr/bin/env python3
"""Compute backlink index from parsed corpus."""

from collections import defaultdict
import re
from .jsonld_parser import PageData


def slugify(s: str) -> str:
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')


def build_backlink_index(pages: list[PageData]) -> dict[str, list[str]]:
    """Map target slug → list of source slugs that link to it."""
    slug_set = {p.slug for p in pages}
    backlinks: dict[str, list[str]] = defaultdict(list)

    for page in pages:
        for wl in page.wikilinks:
            target_slug = wl.iri.split(":")[-1] if ":" in wl.iri else slugify(wl.label)
            if target_slug in slug_set and target_slug != page.slug:
                backlinks[target_slug].append(page.slug)

    return dict(backlinks)
