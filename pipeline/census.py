#!/usr/bin/env python3
"""Account for every input file: parsed, rejected-with-reason, or excluded.

The parser used to express every failure as a bare ``None`` and
``parse_corpus`` dropped those files on the floor. A directory holding one
markdown file with a malformed ``json-ld`` fence therefore produced zero pages
*and* a validation report with zero errors: the validator cannot report a page
it never received. On the real corpus the same mechanism is what makes an
8,435-file / 8,434-page difference unexplainable after the fact.

The census closes that hole. Every ``*.md`` under the pages directory lands in
exactly one bucket, with a code, and the totals are required to add up. Under
strict mode a single ``rejected`` file fails the build before any artefact is
written.
"""

from __future__ import annotations

import json
import sys
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional

from .jsonld_parser import PageData, PageRejection, parse_page_outcome

#: Census schema version. Bump when the file's shape changes.
CENSUS_VERSION = 1


class CensusError(RuntimeError):
    """Raised by :func:`assert_census_clean` when a strict build must stop."""


@dataclass
class Census:
    """A complete input-to-output account for one parse of one directory."""

    pages_dir: Path
    input_files: int = 0
    pages: list[PageData] = field(default_factory=list)
    rejections: list[PageRejection] = field(default_factory=list)

    # ------------------------------------------------------------------ #
    @property
    def parsed(self) -> int:
        return len(self.pages)

    @property
    def rejected(self) -> list[PageRejection]:
        return [r for r in self.rejections if r.status == "rejected"]

    @property
    def excluded(self) -> list[PageRejection]:
        return [r for r in self.rejections if r.status == "excluded"]

    @property
    def balanced(self) -> bool:
        """Every input file is in exactly one bucket."""
        return self.input_files == self.parsed + len(self.rejected) + len(self.excluded)

    def to_dict(self) -> dict:
        return {
            "census_version": CENSUS_VERSION,
            "pages_dir": str(self.pages_dir),
            "input_files": self.input_files,
            "parsed": self.parsed,
            "rejected": len(self.rejected),
            "excluded": len(self.excluded),
            "balanced": self.balanced,
            "public_pages": sum(1 for p in self.pages if p.is_public),
            "non_public_pages": sum(1 for p in self.pages if not p.is_public),
            "pages_with_entity": sum(1 for p in self.pages if p.ontology_class),
            "by_code": dict(Counter(r.code for r in self.rejections)),
            "entries": [r.to_dict(self.pages_dir) for r in
                        sorted(self.rejections, key=lambda r: (r.status, r.code, str(r.path)))],
        }

    def write(self, path: Path) -> Path:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(self.to_dict(), indent=2) + "\n", encoding="utf-8")
        return path


def take_census(pages_dir: Path) -> Census:
    """Parse *pages_dir*, recording an outcome for every ``*.md`` file."""
    census = Census(pages_dir=pages_dir)
    for md_file in sorted(pages_dir.rglob("*.md")):
        if any(part.startswith(".") for part in md_file.relative_to(pages_dir).parts):
            continue
        census.input_files += 1
        page, rejection = parse_page_outcome(md_file)
        if page is not None:
            census.pages.append(page)
        else:
            assert rejection is not None, "parse_page_outcome returned neither page nor reason"
            census.rejections.append(rejection)
    return census


def assert_census_clean(census: Census, strict: bool = True) -> None:
    """Raise :class:`CensusError` when a strict build must not proceed.

    Two conditions stop a strict build: any file rejected with a reason (a
    malformed or unreadable corpus page), and an unbalanced census (a counting
    bug in this module — the account must always add up).
    """
    if not census.balanced:
        raise CensusError(
            f"Census does not balance: {census.input_files} input files != "
            f"{census.parsed} parsed + {len(census.rejected)} rejected + "
            f"{len(census.excluded)} excluded")

    if strict and census.rejected:
        lines = "\n".join(
            f"    [{r.code}] {r.path.name}: {r.message}" for r in census.rejected[:20])
        more = "" if len(census.rejected) <= 20 else f"\n    … and {len(census.rejected) - 20} more"
        raise CensusError(
            f"{len(census.rejected)} input file(s) rejected under strict mode:\n{lines}{more}")


def format_census(census: Census) -> str:
    d = census.to_dict()
    out = [
        f"Census of {census.pages_dir}: {d['input_files']} input files",
        f"  parsed   : {d['parsed']} ({d['public_pages']} public, {d['non_public_pages']} non-public)",
        f"  rejected : {d['rejected']}",
        f"  excluded : {d['excluded']}",
        f"  balanced : {d['balanced']}",
    ]
    if d["by_code"]:
        out.append("  by code  : " + ", ".join(f"{k}={v}" for k, v in sorted(d["by_code"].items())))
    for r in census.rejected[:20]:
        out.append(f"    REJECTED [{r.code}] {r.path.name}: {r.message}")
    return "\n".join(out)


def main() -> None:
    pages_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("ontology/pages")
    strict = "--strict" in sys.argv
    out: Optional[Path] = None
    if "--out" in sys.argv:
        out = Path(sys.argv[sys.argv.index("--out") + 1])

    census = take_census(pages_dir)
    print(format_census(census))
    if out:
        print(f"  census   → {census.write(out)}")

    try:
        assert_census_clean(census, strict=strict)
    except CensusError as exc:
        print(f"\nCensus FAILED:\n{exc}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
