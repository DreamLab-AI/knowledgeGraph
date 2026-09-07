#!/usr/bin/env python3
"""Versioned export generation manifest.

Nothing in the published tree used to say *which* corpus revision produced
*which* artefact. A reader holding ``ontology.ttl`` could not tell whether it
came from the same build as the ``ontology.json`` beside it, and a consumer that
loaded both could not detect a half-replaced export. The manifest closes that:
one immutable record per build, naming the source revision, the generation id,
every artefact's size and SHA-256, and the counts the release gate asserts.

The manifest is written last, after every artefact exists, and it hashes the
bytes actually on disk rather than the objects in memory.
"""

from __future__ import annotations

import hashlib
import json
import platform
import subprocess
import sys
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable, Optional

#: Manifest schema version. Bump on any shape change.
MANIFEST_VERSION = 1

MANIFEST_FILENAME = "generation-manifest.json"

#: Files excluded from the artefact inventory: the manifest cannot hash itself.
_SELF = {MANIFEST_FILENAME}


def sha256_file(path: Path, chunk: int = 1 << 20) -> str:
    h = hashlib.sha256()
    with path.open("rb") as fh:
        while True:
            block = fh.read(chunk)
            if not block:
                break
            h.update(block)
    return h.hexdigest()


def sha256_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def _git(args: list[str], cwd: Path) -> Optional[str]:
    try:
        out = subprocess.run(
            ["git", *args], cwd=str(cwd), capture_output=True, text=True, timeout=30)
    except (OSError, subprocess.SubprocessError):
        return None
    if out.returncode != 0:
        return None
    return out.stdout.strip() or None


def source_revision(pages_dir: Path) -> dict:
    """Identify the source tree the corpus was read from.

    ``dirty`` matters: an artefact built from an edited working tree is not
    reproducible from the named revision, and the manifest must say so rather
    than implying a clean build.
    """
    root = pages_dir.resolve()
    root = root if root.is_dir() else root.parent
    commit = _git(["rev-parse", "HEAD"], root)
    info = {
        "pages_dir": str(pages_dir),
        "commit": commit,
        "branch": _git(["rev-parse", "--abbrev-ref", "HEAD"], root),
        "remote": _git(["config", "--get", "remote.origin.url"], root),
    }
    if commit:
        status = _git(["status", "--porcelain"], root)
        info["dirty"] = bool(status)
        info["describe"] = _git(["describe", "--always", "--dirty"], root)
    else:
        info["dirty"] = None
    return info


def inventory(output_dir: Path, include: Optional[Iterable[Path]] = None) -> list[dict]:
    """Hash every artefact under *output_dir* (or just the *include* list).

    Per-page API files number in the thousands; hashing all of them individually
    would make the manifest larger than several of the artefacts it describes.
    Directories that hold one file per page are therefore summarised as a single
    entry with a file count and a digest over the sorted per-file digests, which
    still changes if any page changes.
    """
    output_dir = Path(output_dir)
    entries: list[dict] = []

    if include is not None:
        paths = [Path(p) for p in include]
    else:
        paths = sorted(p for p in output_dir.rglob("*") if p.is_file())

    bulk_dirs = {output_dir / "api" / "pages", output_dir / "api" / "markdown"}
    bulk: dict[Path, list[tuple[str, str]]] = {d: [] for d in bulk_dirs}

    for path in paths:
        if path.name in _SELF:
            continue
        parent = path.parent
        if parent in bulk:
            bulk[parent].append((path.name, sha256_file(path)))
            continue
        entries.append({
            "path": str(path.relative_to(output_dir)),
            "bytes": path.stat().st_size,
            "sha256": sha256_file(path),
        })

    for directory, files in bulk.items():
        if not files:
            continue
        files.sort()
        rollup = sha256_text("\n".join(f"{n} {d}" for n, d in files))
        entries.append({
            "path": str(directory.relative_to(output_dir)) + "/",
            "kind": "directory-rollup",
            "files": len(files),
            "bytes": sum((directory / n).stat().st_size for n, _ in files),
            "sha256": rollup,
        })

    entries.sort(key=lambda e: e["path"])
    return entries


def build_manifest(
    pages_dir: Path,
    output_dir: Path,
    counts: dict,
    census: Optional[dict] = None,
    validation: Optional[dict] = None,
    visibility: Optional[dict] = None,
    strict: bool = False,
    generation_id: Optional[str] = None,
) -> dict:
    return {
        "manifest_version": MANIFEST_VERSION,
        "generation_id": generation_id or str(uuid.uuid4()),
        "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "strict": strict,
        "source": source_revision(pages_dir),
        "counts": counts,
        "census": census or {},
        "validation": validation or {},
        "visibility": visibility or {},
        "tool": {
            "pipeline": "pipeline.build",
            "python": platform.python_version(),
            "platform": platform.platform(),
        },
        "artefacts": inventory(output_dir),
    }


def write_manifest(manifest: dict, output_dir: Path) -> Path:
    out = Path(output_dir) / "api" / MANIFEST_FILENAME
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    return out


def verify_manifest(output_dir: Path) -> list[str]:
    """Re-hash the tree and report every artefact that drifted from the manifest."""
    output_dir = Path(output_dir)
    manifest_path = output_dir / "api" / MANIFEST_FILENAME
    if not manifest_path.exists():
        return [f"no manifest at {manifest_path}"]

    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    problems: list[str] = []
    recorded = {e["path"]: e for e in manifest.get("artefacts", [])}
    current = {e["path"]: e for e in inventory(output_dir)}

    for path, entry in recorded.items():
        now = current.get(path)
        if now is None:
            problems.append(f"{path}: recorded in manifest but missing from the tree")
        elif now["sha256"] != entry["sha256"]:
            problems.append(
                f"{path}: sha256 {now['sha256'][:12]}… != manifest {entry['sha256'][:12]}…")

    for path in current:
        if path not in recorded:
            problems.append(f"{path}: present in the tree but absent from the manifest")

    return problems


def main() -> None:
    output_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("dist")
    problems = verify_manifest(output_dir)
    if problems:
        print(f"Manifest verification FAILED for {output_dir}:")
        for p in problems[:40]:
            print(f"  {p}")
        sys.exit(1)
    manifest = json.loads((output_dir / "api" / MANIFEST_FILENAME).read_text())
    print(f"Manifest OK: generation {manifest['generation_id']} "
          f"from {(manifest['source'].get('commit') or 'unknown')[:12]} "
          f"({len(manifest['artefacts'])} artefact entries)")


if __name__ == "__main__":
    main()
