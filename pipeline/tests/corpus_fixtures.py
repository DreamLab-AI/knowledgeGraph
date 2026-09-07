#!/usr/bin/env python3
"""Synthetic corpus builders for the boundary tests.

Each helper writes one markdown page in the corpus's real shape — a ``Page``
fence followed by a ``Class`` fence — so the tests exercise the same parser path
the 8,138-page corpus does.
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Optional


def page_block(slug: str, title: str, public, wikilinks: Optional[list[tuple[str, str]]] = None,
               schema_version=2) -> dict:
    block = {
        "@context": "https://narrativegoldmine.com/context/v1.jsonld",
        "@id": f"urn:visionflow:page:{slug}",
        "@type": "Page",
        "vc:slug": slug,
        "title": title,
        "vc:public": public,
        "vc:outboundWikilinks": [
            {"@id": f"urn:visionflow:linked:{s}", "vc:label": lbl}
            for s, lbl in (wikilinks or [])
        ],
        "vc:schemaVersion": schema_version,
    }
    return block


def class_block(slug: str, label: str, parents: Optional[list[tuple[str, str]]] = None,
                domain: str = "governance", definition: str = "",
                relations: Optional[dict] = None) -> dict:
    return {
        "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
        "@id": f"urn:ngm:class:{slug}",
        "@type": "Class",
        "label": label,
        "definition": definition or f"Definition of {label}.",
        "domain": domain,
        "maturity": "established",
        "qualityScore": 0.7,
        "subClassOf": [{"@id": f"urn:ngm:class:{s}", "label": lbl} for s, lbl in (parents or [])],
        "relations": relations or {},
    }


def write_page(pages_dir: Path, slug: str, label: str, public=True,
               parents: Optional[list[tuple[str, str]]] = None,
               wikilinks: Optional[list[tuple[str, str]]] = None,
               domain: str = "governance",
               relations: Optional[dict] = None,
               filename: Optional[str] = None,
               schema_version=2) -> Path:
    """Write one well-formed corpus page and return its path."""
    pages_dir.mkdir(parents=True, exist_ok=True)
    path = pages_dir / (filename or f"{label}.md")
    body = (
        f"public:: {'true' if public is True else str(public).lower()}\n\n"
        f"# {label}\n"
        "```json-ld\n"
        + json.dumps(page_block(slug, label, public, wikilinks, schema_version), indent=2)
        + "\n```\n\n```json-ld\n"
        + json.dumps(class_block(slug, label, parents, domain, relations=relations), indent=2)
        + "\n```\n\nProse body for " + label + ".\n"
    )
    path.write_text(body, encoding="utf-8")
    return path


def write_malformed_page(pages_dir: Path, filename: str = "Broken.md") -> Path:
    """A page whose json-ld fence does not decode — the silent-disappearance case."""
    pages_dir.mkdir(parents=True, exist_ok=True)
    path = pages_dir / filename
    path.write_text(
        "public:: true\n\n# Broken\n"
        "```json-ld\n"
        '{\n  "@type": "Page",\n  "vc:slug": "broken",\n  "vc:public": true,\n'
        '  "title": "Broken",\n'  # trailing comma + unclosed brace
        "```\n\nBody.\n",
        encoding="utf-8")
    return path


def write_prose_only_page(pages_dir: Path, filename: str = "Notes.md") -> Path:
    """A markdown file with no json-ld fence — legitimately not a corpus page."""
    pages_dir.mkdir(parents=True, exist_ok=True)
    path = pages_dir / filename
    path.write_text("# Notes\n\nJust prose, no fences.\n", encoding="utf-8")
    return path


def write_no_page_block(pages_dir: Path, filename: str = "ClassOnly.md") -> Path:
    """A file with a valid Class fence but no Page fence."""
    pages_dir.mkdir(parents=True, exist_ok=True)
    path = pages_dir / filename
    path.write_text(
        "# Class Only\n```json-ld\n"
        + json.dumps(class_block("class-only", "Class Only"), indent=2)
        + "\n```\n", encoding="utf-8")
    return path
