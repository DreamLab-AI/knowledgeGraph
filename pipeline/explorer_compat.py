#!/usr/bin/env python3
"""Emit an ontology projection the WasmVOWL explorer can actually consume.

Why this file exists
--------------------
``pipeline.jsonld_to_webvowl`` emits the classic WebVOWL *split* shape: the
``class[]`` and ``property[]`` arrays carry only ``{id, type}`` and every other
field lives in a parallel ``classAttribute[]`` / ``propertyAttribute[]`` array
keyed by the same id. The explorer that consumes this data does not merge those
arrays. Reading the consumer settles two questions the estate review left open.

**class or classes?**  ``class`` — singular — in both consumer paths:

* ``WasmVOWL/rust-wasm/src/ontology/parser.rs`` ``StandardParser::parse_classes``
  reads ``json.get("class").or_else(|| json.get("classes"))``: singular first,
  plural only as a fallback.
* ``WasmVOWL/modern/src/components/UI/FileDropZone.tsx`` throws
  ``"Invalid ontology format: missing class array"`` unless ``data.class`` is an
  array; ``modern/src/stores/useGraphStore.ts`` iterates ``data.class``.

**What must each entry carry?**  The Rust parser is the binding constraint
because it is the only path that *hard fails*:

* every ``property[]`` entry must carry ``domain`` and ``range`` as JSON
  **strings** — ``parse_property`` raises ``Missing domain for property: <id>``
  otherwise. The split shape puts them in ``propertyAttribute[]``, so feeding
  ``ontology.json`` straight to ``StandardParser::parse`` fails on the first
  property.
* every ``class[]`` entry must carry ``id`` as a string; ``label`` is read with
  ``.as_str()`` and falls back to the id when absent or non-string.

This module emits a **merged** projection carrying those fields inline. It does
not repeat the ``classAttribute`` / ``propertyAttribute`` arrays: neither
consumer reads them from this document — ``FileDropZone`` passes them through
untouched and ``useGraphStore`` iterates only ``class`` and ``property`` — and
duplicating them costs roughly 40 MB on the full corpus. The classic split shape
remains available in ``ontology.json`` beside it.

One divergence cannot be resolved from the producer side; see
:data:`EXPLORER_DIVERGENCES`. It requires a change in the consumer, which this
repository does not own.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Optional

from .jsonld_parser import PageData, parse_corpus
from .jsonld_to_webvowl import build_webvowl
from .visibility import VisibilityPolicy, build_policy

#: Schema version of the emitted explorer projection.
EXPLORER_SCHEMA_VERSION = 1

#: Keys every ``class[]`` entry carries in the merged projection.
CLASS_REQUIRED_KEYS = ("id", "iri", "type", "label")

#: Keys every ``property[]`` entry carries in the merged projection.
PROPERTY_REQUIRED_KEYS = ("id", "iri", "type", "label", "domain", "range")

#: Consumer expectations the producer cannot satisfy simultaneously.
#:
#: Each entry names the consumer file, what it expects, and why the merged
#: projection cannot also satisfy it. These are asserted by
#: ``pipeline/tests/test_explorer_compat.py`` so the list cannot rot silently:
#: resolving one means changing WasmVOWL, not this file.
EXPLORER_DIVERGENCES = [
    {
        "id": "TS_LABEL_LANGUAGE_MAP",
        "consumer": "WasmVOWL/modern/src/stores/useGraphStore.ts",
        "expects": "class[].label as an object with .en or .default",
        "producer_emits": "class[].label as a plain string",
        "conflict": (
            "rust-wasm StandardParser::parse_class_node reads label with .as_str() "
            "and silently falls back to the id for an object. A JSON value cannot be "
            "both a string and an object; the string form is chosen because the Rust "
            "path is the one bound into the release."),
        "consumer_impact": "TypeScript node labels fall back to the class id",
        "resolution_owner": "WasmVOWL",
    },
    {
        "id": "TS_DOMAIN_RANGE_ARRAY",
        "consumer": "WasmVOWL/modern/src/stores/useGraphStore.ts",
        "expects": "property[].domain and .range as arrays (indexed with [0])",
        "producer_emits": "property[].domain and .range as strings",
        "conflict": (
            "rust-wasm StandardParser::parse_property raises "
            "'Missing domain for property' unless domain and range are JSON strings. "
            "An array is a hard parse failure there, a string is a soft mis-read here."),
        "consumer_impact": "TypeScript edge source/target read the first character of the IRI",
        "resolution_owner": "WasmVOWL",
    },
]


def build_explorer_projection(
    pages: list[PageData],
    policy: Optional[VisibilityPolicy] = None,
    vowl: Optional[dict] = None,
) -> dict:
    """Build the merged, consumer-shaped ontology projection.

    *vowl* may be supplied to reuse an already-built WebVOWL document; otherwise
    one is built from *pages*. The visibility policy is applied by
    :func:`~pipeline.jsonld_to_webvowl.build_webvowl`, which only ever emits
    edges between declared public classes, so this projection inherits it.
    """
    policy = build_policy(pages, policy)
    vowl = vowl if vowl is not None else build_webvowl(pages)

    class_attr_by_id = {c["id"]: c for c in vowl.get("classAttribute", [])}
    prop_attr_by_id = {p["id"]: p for p in vowl.get("propertyAttribute", [])}

    def _label_text(attr: dict, fallback: str) -> str:
        label = attr.get("label")
        if isinstance(label, dict):
            return label.get("en") or label.get("default") or fallback
        if isinstance(label, str) and label:
            return label
        return fallback

    classes = []
    for entry in vowl.get("class", []):
        cid = entry["id"]
        attr = class_attr_by_id.get(cid, {})
        merged = {
            "id": cid,
            "iri": attr.get("iri", cid),
            "type": entry.get("type", "owl:Class"),
            "label": _label_text(attr, cid),
            "baseIri": attr.get("baseIri", ""),
            "domain": attr.get("domain", ""),
            "entityType": attr.get("entityType", "Class"),
            "backgroundColor": attr.get("backgroundColor", ""),
            "comment": (attr.get("comment") or {}).get("en", ""),
        }
        classes.append(merged)

    properties = []
    for entry in vowl.get("property", []):
        pid = entry["id"]
        attr = prop_attr_by_id.get(pid, {})
        domain = attr.get("domain", "")
        rnge = attr.get("range", "")
        if not domain or not rnge:
            # A property with no resolvable endpoints is a hard parse error in
            # the consumer. Dropping it here is the projection's job; the
            # WebVOWL document keeps the original entry.
            continue
        properties.append({
            "id": pid,
            "iri": attr.get("iri", pid),
            "type": entry.get("type", "owl:ObjectProperty"),
            "label": _label_text(attr, entry.get("type", pid).split(":")[-1]),
            "domain": domain,
            "range": rnge,
        })

    header = dict(vowl.get("header", {}))
    header["explorerSchemaVersion"] = EXPLORER_SCHEMA_VERSION

    return {
        "header": header,
        # Singular key: required by FileDropZone, preferred by StandardParser.
        "class": classes,
        "property": properties,
        "divergences": EXPLORER_DIVERGENCES,
    }


def check_projection(doc: dict) -> list[str]:
    """Return consumer-contract violations in *doc*; empty means compatible."""
    problems: list[str] = []

    if "class" not in doc:
        problems.append("missing top-level 'class' array (FileDropZone throws on this)")
    elif not isinstance(doc["class"], list):
        problems.append("'class' is not an array")

    if "property" not in doc or not isinstance(doc.get("property"), list):
        problems.append("missing top-level 'property' array (StandardParser requires it)")

    for i, entry in enumerate(doc.get("class", [])[:]):
        for key in CLASS_REQUIRED_KEYS:
            if key not in entry:
                problems.append(f"class[{i}] ({entry.get('id', '?')}) missing '{key}'")
        if not isinstance(entry.get("id"), str) or not entry.get("id"):
            problems.append(f"class[{i}] 'id' must be a non-empty string")
        if not isinstance(entry.get("label"), str):
            problems.append(f"class[{i}] ({entry.get('id', '?')}) 'label' must be a string")

    for i, entry in enumerate(doc.get("property", [])[:]):
        for key in PROPERTY_REQUIRED_KEYS:
            if key not in entry:
                problems.append(f"property[{i}] ({entry.get('id', '?')}) missing '{key}'")
        for key in ("domain", "range"):
            if not isinstance(entry.get(key), str) or not entry.get(key):
                problems.append(
                    f"property[{i}] ({entry.get('id', '?')}) '{key}' must be a non-empty "
                    "string (StandardParser::parse_property hard-fails otherwise)")

    return problems


def emit_explorer_projection(pages: list[PageData], output_dir: Path,
                             policy: Optional[VisibilityPolicy] = None,
                             vowl: Optional[dict] = None) -> Path:
    doc = build_explorer_projection(pages, policy=policy, vowl=vowl)
    out = output_dir / "data" / "ontology-explorer.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(doc), encoding="utf-8")
    return out


def main() -> None:
    pages_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("ontology/pages")
    output_dir = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("dist")

    pages = parse_corpus(pages_dir)
    doc = build_explorer_projection(pages)
    problems = check_projection(doc)
    out = emit_explorer_projection(pages, output_dir, vowl=None)
    print(f"Explorer projection: {len(doc['class'])} classes, "
          f"{len(doc['property'])} properties → {out}")
    if problems:
        print("Consumer contract violations:")
        for p in problems[:20]:
            print(f"  {p}")
        sys.exit(1)
    print("Consumer contract OK (class/property merged shape)")


if __name__ == "__main__":
    main()
