#!/usr/bin/env python3
"""Orchestrate the full JSON-LD publishing pipeline.

Usage:
    python -m pipeline.build [pages_dir] [output_dir] [--strict]

Stages: census → validate → Turtle → WebVOWL → explorer projection → page API →
search index → graph tiers → generation manifest.

Two properties this entry point is required to hold, both of which it previously
did not:

* **The census accounts for every input file.** A malformed page used to vanish
  between ``parse_corpus`` and ``validate_corpus``, producing zero pages and
  zero errors. Every ``*.md`` now lands in exactly one bucket and the totals
  must add up.
* **Publication is fail-closed in every mode.** Malformed inputs, ambiguous
  public flags and validation errors stop the build before promotion. Local
  authoring tools can call census and validation directly for diagnostics.
* **Every export shares a public projection.** Known private references are
  removed before graph, prose and Markdown emission. A fresh staging tree
  prevents obsolete page files surviving a successful rebuild.
"""

import json
import sys
import time
from pathlib import Path
from typing import Optional

from .census import Census, CensusError, assert_census_clean, format_census, take_census
from .public_projection import PublicationBlocked, inspect_publication_inputs, public_projection, staged_publication, emit_public_markdown, excluded_page_identities
from .jsonld_parser import PageData, parse_page
from .jsonld_to_turtle import build_graph
from .jsonld_to_webvowl import build_webvowl
from .jsonld_to_page_api import build_page_api
from .jsonld_to_search import build_search_index
from .emit_graph_tiers import emit_graph_tiers
from .explorer_compat import build_explorer_projection, check_projection
from .manifest import build_manifest, write_manifest
from .validate import public_report, validate_corpus
from .visibility import VisibilityPolicy


BuildBlocked = PublicationBlocked


class BuildResult:
    """What one build produced, for the caller and for ``main``'s exit status."""

    def __init__(self, report, census: Census, counts: dict,
                 manifest: Optional[dict] = None, blocked: Optional[str] = None):
        self.report = report
        self.census = census
        self.counts = counts
        self.manifest = manifest
        self.blocked = blocked

    @property
    def errors(self):
        return self.report.errors if self.report is not None else []

    @property
    def ok(self) -> bool:
        return not self.blocked and not self.errors and not self.census.rejected


@staged_publication
def build(pages_dir: Path, output_dir: Path, strict: bool = False) -> BuildResult:
    t0 = time.time()
    public_census = inspect_publication_inputs(pages_dir)
    pages_dir = Path(pages_dir)
    output_dir = Path(output_dir)
    api_dir = output_dir / "api"
    api_dir.mkdir(parents=True, exist_ok=True)

    # ------------------------------------------------------------------ #
    # Stage 1: Census (parse + account for every input file)
    # ------------------------------------------------------------------ #
    print(f"[1/8] Census of {pages_dir}...")
    census = take_census(pages_dir)
    (api_dir / "census.json").write_text(json.dumps(public_census, indent=2))
    print("       " + format_census(census).replace("\n", "\n       "))

    pages: list[PageData] = census.pages
    policy = VisibilityPolicy.from_pages(pages)
    with_oc = sum(1 for p in pages if p.ontology_class)
    public = sum(1 for p in pages if p.is_public)
    print(f"       {len(pages)} pages ({with_oc} entities, {public} public); "
          f"visibility: {policy.summary()['private_entities']} private entities")

    try:
        assert_census_clean(census, strict=strict)
    except CensusError as exc:
        # The census file is already on disk; stop before emitting an export
        # built from a corpus we cannot fully account for.
        raise BuildBlocked(f"Input census rejected the corpus:\n{exc}") from exc

    # ------------------------------------------------------------------ #
    # Stage 2: Validate
    # ------------------------------------------------------------------ #
    print("[2/8] Validating...")
    report = validate_corpus(pages, policy=policy)
    s = report.summary()
    print(f"       {s['errors']} errors, {s['warnings']} warnings, {s['info']} info")
    if report.errors:
        print("       ERRORS:")
        for i in report.errors[:10]:
            print(f"         [{i.code}] {i.path}: {i.message}")
        if len(report.errors) > 10:
            print(f"         … and {len(report.errors) - 10} more")

    def _write_validation_report() -> None:
        # Public-safe aggregate counts only. Even a public-page issue may
        # quote a private target, so per-issue messages remain in the local
        # authoring report and never enter this released artefact.
        (api_dir / "validation-report.json").write_text(
            json.dumps(report.summary() | {"issues": []}, indent=2), encoding="utf-8")

    if report.errors:
        _write_validation_report()
        raise BuildBlocked(
            f"{len(report.errors)} validation error(s) at the publication boundary; "
            "no artefact was written. First: "
            f"[{report.errors[0].code}] {report.errors[0].path}: {report.errors[0].message}")

    # ------------------------------------------------------------------ #
    # Stage 3a: Turtle
    # ------------------------------------------------------------------ #
    print("[3/8] Generating Turtle...")
    pages = public_projection(pages + excluded_page_identities(pages_dir, parse_page))
    emit_public_markdown(pages, pages_dir, output_dir)
    g = build_graph(pages, public_only=True, policy=policy)
    ttl_path = output_dir / "data" / "ontology.ttl"
    ttl_path.parent.mkdir(parents=True, exist_ok=True)
    g.serialize(destination=str(ttl_path), format="turtle")
    print(f"       {len(g)} triples → {ttl_path}")

    # ------------------------------------------------------------------ #
    # Stage 3b: WebVOWL + explorer projection
    # ------------------------------------------------------------------ #
    print("[4/8] Generating WebVOWL JSON + explorer projection...")
    vowl = build_webvowl(pages)
    vowl_path = output_dir / "data" / "ontology.json"
    with open(vowl_path, "w") as f:
        json.dump(vowl, f)
    print(f"       {len(vowl['class'])} classes → {vowl_path}")

    explorer = build_explorer_projection(pages, policy=policy, vowl=vowl)
    explorer_problems = check_projection(explorer)
    explorer_path = output_dir / "data" / "ontology-explorer.json"
    explorer_path.write_text(json.dumps(explorer), encoding="utf-8")
    print(f"       {len(explorer['class'])} classes, {len(explorer['property'])} "
          f"properties (consumer shape) → {explorer_path}")
    if explorer_problems:
        print(f"       WARNING: {len(explorer_problems)} consumer-contract problem(s)")
        for p in explorer_problems[:5]:
            print(f"         {p}")
    if strict and explorer_problems:
        raise BuildBlocked(
            f"{len(explorer_problems)} explorer consumer-contract violation(s): "
            f"{explorer_problems[0]}")

    # ------------------------------------------------------------------ #
    # Stage 4: Page API
    # ------------------------------------------------------------------ #
    print("[5/8] Generating Page API...")
    pages_api_dir = api_dir / "pages"
    count = build_page_api(pages, pages_api_dir, policy=policy)
    print(f"       {count} page files → {pages_api_dir}")

    # ------------------------------------------------------------------ #
    # Stage 5: Search Index
    # ------------------------------------------------------------------ #
    print("[6/8] Generating Search Index...")
    idx = build_search_index(pages, policy=policy)
    idx_path = api_dir / "search-index.json"
    with open(idx_path, "w") as f:
        json.dump(idx, f)
    print(f"       {len(idx)} entries → {idx_path}")

    # ------------------------------------------------------------------ #
    # Stage 6: Graph tiers (NGG1)
    # ------------------------------------------------------------------ #
    print("[7/8] Emitting graph tiers (NGG1)...")
    tiers = emit_graph_tiers(pages, output_dir)
    print(f"       {tiers['nodes']} nodes, {tiers['edges']} edges → {tiers['graph_dir']}")

    # Context
    context_dir = api_dir / "schema"
    context_dir.mkdir(parents=True, exist_ok=True)
    context = {
        "@context": {
            "vc": "https://narrativegoldmine.com/ns/v1#",
            "owl": "http://www.w3.org/2002/07/owl#",
            "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "prov": "http://www.w3.org/ns/prov#",
        }
    }
    with open(context_dir / "context.jsonld", "w") as f:
        json.dump(context, f, indent=2)

    _write_validation_report()

    # ------------------------------------------------------------------ #
    # Stage 7: Generation manifest (last — it hashes what is on disk)
    # ------------------------------------------------------------------ #
    print("[8/8] Writing generation manifest...")
    counts = {
        "input_files": census.input_files,
        "parsed_pages": census.parsed,
        "public_pages": public,
        "classes": len(vowl["class"]),
        "explorer_classes": len(explorer["class"]),
        "explorer_properties": len(explorer["property"]),
        "triples": len(g),
        "page_api_files": count,
        "search_entries": len(idx),
        "graph_nodes": tiers["nodes"],
        "graph_edges": tiers["edges"],
    }
    manifest = build_manifest(
        pages_dir=pages_dir,
        output_dir=output_dir,
        counts=counts,
        census=public_census,
        validation=report.summary(),
        visibility=policy.summary(),
        strict=strict,
    )
    manifest_path = write_manifest(manifest, output_dir)
    print(f"       generation {manifest['generation_id']} "
          f"({len(manifest['artefacts'])} artefact entries) → {manifest_path}")

    elapsed = time.time() - t0
    print(f"\nPipeline complete in {elapsed:.1f}s")
    print(f"  Output: {output_dir}")
    for k, v in counts.items():
        print(f"  {k}: {v}")

    return BuildResult(report, census, counts, manifest)


def main():
    argv = [a for a in sys.argv[1:] if not a.startswith("--")]
    strict = "--strict" in sys.argv

    pages_dir = Path(argv[0]) if argv else Path("ontology/pages")
    output_dir = Path(argv[1]) if len(argv) > 1 else Path("www")

    try:
        result = build(pages_dir, output_dir, strict=strict)
    except BuildBlocked as exc:
        print(f"\nBUILD BLOCKED (strict mode): {exc}", file=sys.stderr)
        sys.exit(1)

    if not result.ok:
        print(f"\nBUILD FAILED: {len(result.errors)} validation error(s), "
              f"{len(result.census.rejected)} rejected input file(s). "
              "Artefacts were written for inspection but must not be released.",
              file=sys.stderr)
        sys.exit(1)
    sys.exit(0)


if __name__ == "__main__":
    main()
