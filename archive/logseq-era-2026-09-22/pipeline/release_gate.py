#!/usr/bin/env python3
"""Release gate: identity, schema and publication-visibility contracts.

``EXPECTED_CLASSES`` is a good tripwire and stays exactly as ADR-2003 ratifies
it — a hand-typed, externally-authored count that cannot move with a parse
regression. But a count is one number, and three failures leave it unchanged:

1. **Equal-count identity substitution.** Delete one class, add another. The
   count agrees; the ontology is not the one that was reviewed.
2. **Altered publication visibility.** Flip a page's ``vc:public``. If another
   page flips the other way the count is stable while the published set differs.
3. **Shape drift.** The count says nothing about whether the artefact still
   parses in the consumer that has to render it.

This gate adds a committed, sorted **class-IRI set** alongside the count, a
schema check against the consumer contract, and a leak scan that re-derives the
private identifiers from source and asserts none of them occurs in any public
artefact. It reads what the pipeline *wrote to disk*, never its stdout.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from .census import take_census
from .explorer_compat import check_projection
from .jsonld_parser import parse_corpus
from .visibility import VisibilityPolicy

CONTRACT_VERSION = 1

#: Canonical repository identity. ``narrativegoldmine`` is the historical name
#: this corpus was published under and is retained as an alias, because the
#: class IRIs, the CNAME and 30+ in-tree citations all carry it (ADR-2004 makes
#: those identifiers immutable). See ``docs/adr/ADR-2001``.
CANONICAL_REPOSITORY = "DreamLab-AI/knowledgeGraph"
REPOSITORY_ALIASES = ("narrativegoldmine",)

DEFAULT_CONTRACT_DIR = Path(__file__).parent / "contracts"
IDENTITY_JSON = "class-identity.json"
IDENTITY_TXT = "class-identity.txt"


class GateFailure(Exception):
    """A release-blocking contract violation."""


# --------------------------------------------------------------------------- #
# contract I/O
# --------------------------------------------------------------------------- #
def _digest_iris(iris: list[str]) -> str:
    return hashlib.sha256(("\n".join(iris) + "\n").encode("utf-8")).hexdigest()


def read_contract(contract_dir: Path) -> dict:
    meta = json.loads((contract_dir / IDENTITY_JSON).read_text(encoding="utf-8"))
    text = (contract_dir / IDENTITY_TXT).read_text(encoding="utf-8")
    iris = [line for line in text.splitlines() if line]
    meta["iris"] = iris
    meta["identity_sha256_actual"] = _digest_iris(iris)
    return meta


def write_contract(contract_dir: Path, iris: list[str], public_classes: int,
                   source_commit: Optional[str] = None) -> dict:
    contract_dir.mkdir(parents=True, exist_ok=True)
    iris = sorted(set(iris))
    (contract_dir / IDENTITY_TXT).write_text("\n".join(iris) + "\n", encoding="utf-8")
    meta = {
        "contract_version": CONTRACT_VERSION,
        "repository": CANONICAL_REPOSITORY,
        "repository_aliases": list(REPOSITORY_ALIASES),
        "expected_classes": len(iris),
        "public_classes": public_classes,
        "identity_file": IDENTITY_TXT,
        "identity_sha256": _digest_iris(iris),
        "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "source_commit": source_commit,
        "note": (
            "Sorted set of every class IRI the public build must contain. The count "
            "in .github/workflows/build.yml EXPECTED_CLASSES stays hand-typed and "
            "independent (ADR-2003); this file adds membership on top of it, so an "
            "equal-count substitution is a diff, not a silent pass."),
    }
    (contract_dir / IDENTITY_JSON).write_text(json.dumps(meta, indent=2) + "\n", encoding="utf-8")
    return meta


# --------------------------------------------------------------------------- #
# checks
# --------------------------------------------------------------------------- #
def class_iris_from_artefacts(dist: Path) -> list[str]:
    """Sorted class IRIs from the written WebVOWL artefact.

    Tolerates the plural key so a shape regression is reported by the schema
    check as a shape problem, rather than crashing the count check first.
    """
    vowl = json.loads((dist / "data" / "ontology.json").read_text(encoding="utf-8"))
    entries = vowl.get("class", vowl.get("classes", []))
    return sorted(e["id"] for e in entries if isinstance(e, dict) and "id" in e)


def check_counts(dist: Path, contract: dict, expected_classes: Optional[int]) -> list[str]:
    problems: list[str] = []
    vowl = json.loads((dist / "data" / "ontology.json").read_text(encoding="utf-8"))
    stats = json.loads((dist / "data" / "graph" / "stats.json").read_text(encoding="utf-8"))

    expected = expected_classes if expected_classes is not None else contract["expected_classes"]
    built_classes = vowl.get("class", vowl.get("classes", []))
    for name, value in (("ontology.json class[] length", len(built_classes)),
                        ("stats.json classes", stats["classes"])):
        if value != expected:
            problems.append(f"count: {name} = {value}, expected {expected}")
    if expected != contract["expected_classes"]:
        problems.append(
            f"count: EXPECTED_CLASSES {expected} disagrees with the committed identity "
            f"set size {contract['expected_classes']} — both must move in one commit")
    return problems


def check_identity(dist: Path, contract: dict) -> list[str]:
    problems: list[str] = []
    if contract["identity_sha256_actual"] != contract["identity_sha256"]:
        problems.append(
            f"identity: {IDENTITY_TXT} digest {contract['identity_sha256_actual'][:12]}… "
            f"!= {IDENTITY_JSON} identity_sha256 {contract['identity_sha256'][:12]}…")

    built = set(class_iris_from_artefacts(dist))
    committed = set(contract["iris"])

    missing = sorted(committed - built)
    added = sorted(built - committed)
    if missing or added:
        problems.append(
            f"identity: built class set differs from the committed set "
            f"({len(missing)} missing, {len(added)} added) — "
            f"an equal-count substitution is caught here even when the count matches")
        for iri in missing[:10]:
            problems.append(f"  missing: {iri}")
        for iri in added[:10]:
            problems.append(f"  added  : {iri}")
    return problems


def check_schema(dist: Path) -> list[str]:
    """Assert both published shapes: WebVOWL split, and the merged explorer projection."""
    problems: list[str] = []
    vowl = json.loads((dist / "data" / "ontology.json").read_text(encoding="utf-8"))

    for key in ("header", "class", "classAttribute", "property", "propertyAttribute"):
        if key not in vowl:
            problems.append(f"schema: ontology.json missing top-level '{key}'")
    if "classes" in vowl and "class" not in vowl:
        problems.append(
            "schema: ontology.json uses plural 'classes'; the explorer's FileDropZone "
            "throws unless the singular 'class' array is present")
    for i, entry in enumerate(vowl.get("class", vowl.get("classes", []))[:]):
        if not isinstance(entry.get("id"), str) or not entry["id"]:
            problems.append(f"schema: ontology.json class[{i}] has no string id")
            break

    explorer_path = dist / "data" / "ontology-explorer.json"
    if not explorer_path.exists():
        problems.append(f"schema: no explorer projection at {explorer_path}")
    else:
        doc = json.loads(explorer_path.read_text(encoding="utf-8"))
        problems.extend(f"schema: {p}" for p in check_projection(doc)[:20])
        built = vowl.get("class", vowl.get("classes", []))
        if len(doc.get("class", [])) != len(built):
            problems.append(
                f"schema: explorer projection has {len(doc.get('class', []))} classes, "
                f"ontology.json has {len(built)}")

    return problems


def check_publication_visibility(dist: Path, pages_dir: Optional[Path],
                                 contract: dict) -> list[str]:
    """Assert the published set matches the contract and leaks no private identifier.

    The private identifiers are re-derived from *source*, never read out of the
    published tree — writing them into ``dist`` to check for them would be the
    leak this guards against.
    """
    problems: list[str] = []

    census_path = dist / "api" / "census.json"
    if not census_path.exists():
        problems.append(f"visibility: no census at {census_path}")
        return problems

    census = json.loads(census_path.read_text(encoding="utf-8"))
    if census.get("rejected"):
        problems.append(
            f"visibility: census records {census['rejected']} rejected input file(s); "
            "a release must account for every source page")
    if not census.get("balanced", False):
        problems.append("visibility: census does not balance")
    if census["public_pages"] != contract["public_classes"]:
        problems.append(
            f"visibility: {census['public_pages']} public pages, contract expects "
            f"{contract['public_classes']} — publication visibility changed")

    if pages_dir is None:
        return problems

    pages = parse_corpus(Path(pages_dir))
    policy = VisibilityPolicy.from_pages(pages)
    probe = policy.private_identifier_probe()
    if not probe:
        return problems

    scan_targets = [
        dist / "data" / "ontology.json",
        dist / "data" / "ontology-explorer.json",
        dist / "data" / "ontology.ttl",
        dist / "api" / "search-index.json",
        dist / "data" / "graph" / "bridges.json",
        dist / "data" / "graph" / "overview.json",
    ]
    scan_targets += sorted((dist / "api" / "pages").glob("*.json"))

    needles = [n for n in probe if len(n) >= 4]
    for target in scan_targets:
        if not target.exists():
            continue
        text = target.read_text(encoding="utf-8", errors="replace")
        hits = [n for n in needles if n in text]
        if hits:
            problems.append(
                f"visibility: {target.relative_to(dist)} contains "
                f"{len(hits)} private identifier(s), first: {hits[0]}")
    return problems


# --------------------------------------------------------------------------- #
# driver
# --------------------------------------------------------------------------- #
def run_gate(dist: Path, pages_dir: Optional[Path], contract_dir: Path,
             expected_classes: Optional[int] = None) -> list[str]:
    contract = read_contract(contract_dir)
    problems: list[str] = []
    problems += check_counts(dist, contract, expected_classes)
    problems += check_identity(dist, contract)
    problems += check_schema(dist)
    problems += check_publication_visibility(dist, pages_dir, contract)
    return problems


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("dist", type=Path, help="built output directory")
    ap.add_argument("--pages", type=Path, default=None,
                    help="source pages directory (enables the private-identifier leak scan)")
    ap.add_argument("--contract-dir", type=Path, default=DEFAULT_CONTRACT_DIR)
    ap.add_argument("--expected-classes", type=int, default=None,
                    help="the hand-typed CI count; cross-checked against the identity set")
    ap.add_argument("--regenerate", action="store_true",
                    help="rewrite the committed identity set from this build (deliberate act)")
    args = ap.parse_args()

    if args.regenerate:
        iris = class_iris_from_artefacts(args.dist)
        census = take_census(args.pages) if args.pages else None
        public = census.to_dict()["public_pages"] if census else len(iris)
        meta = write_contract(args.contract_dir, iris, public)
        print(f"Rewrote identity contract: {meta['expected_classes']} class IRIs, "
              f"digest {meta['identity_sha256'][:12]}… → {args.contract_dir}")
        return

    problems = run_gate(args.dist, args.pages, args.contract_dir, args.expected_classes)
    contract = read_contract(args.contract_dir)
    print(f"Release gate — repository {contract['repository']} "
          f"(alias {', '.join(contract.get('repository_aliases', []))})")
    print(f"  identity set : {contract['expected_classes']} class IRIs, "
          f"digest {contract['identity_sha256'][:12]}…")
    if problems:
        print(f"\nRelease gate FAILED ({len(problems)} problem(s)):")
        for p in problems[:60]:
            print(f"  {p}")
        sys.exit(1)
    print("  counts       : OK")
    print("  identity     : OK (exact set match)")
    print("  schema       : OK (consumer-shaped class/property present)")
    print("  visibility   : OK (census balanced, no private identifier in public artefacts)")
    print("Release gate PASSED")


if __name__ == "__main__":
    main()
