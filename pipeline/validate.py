#!/usr/bin/env python3
"""Validate JSON-LD corpus for standards compliance.

Checks:
- JSON-LD block shape conformance (required fields)
- IRI uniqueness across corpus
- No self-referential subClassOf
- Slug/IRI consistency
- Domain field validity
- Multi-entry subClassOf arrays (should be single parent)

Can optionally fix self-references by removing them.
"""

import json
import re
import sys
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from pathlib import Path
from .jsonld_parser import PageData, parse_corpus


VALID_DOMAINS = {
    # six top-level domain roots
    "artificial-intelligence", "spatial-computing", "blockchain",
    "infrastructure", "distributed-collaboration", "robotics",
    # authoring-spec domain vocabulary (short forms used across the corpus)
    "ai", "supply-chain", "metaverse", "data", "governance", "security",
    "standards", "finance", "distributed-systems", "machine-learning",
}


def slugify(s: str) -> str:
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')


@dataclass
class ValidationIssue:
    path: str
    severity: str  # error, warning, info
    code: str
    message: str


@dataclass
class ValidationReport:
    total_pages: int = 0
    pages_with_ontology: int = 0
    public_pages: int = 0
    issues: list[ValidationIssue] = field(default_factory=list)

    @property
    def errors(self):
        return [i for i in self.issues if i.severity == "error"]

    @property
    def warnings(self):
        return [i for i in self.issues if i.severity == "warning"]

    @property
    def infos(self):
        return [i for i in self.issues if i.severity == "info"]

    def summary(self) -> dict:
        by_code = Counter(i.code for i in self.issues)
        return {
            "total_pages": self.total_pages,
            "pages_with_ontology": self.pages_with_ontology,
            "public_pages": self.public_pages,
            "total_issues": len(self.issues),
            "errors": len(self.errors),
            "warnings": len(self.warnings),
            "info": len(self.infos),
            "by_code": dict(by_code),
        }


def validate_corpus(pages: list[PageData]) -> ValidationReport:
    report = ValidationReport(total_pages=len(pages))
    iri_owners: dict[str, list[str]] = defaultdict(list)

    for page in pages:
        fname = page.path.name
        report.public_pages += 1 if page.is_public else 0

        if not page.page_iri:
            report.issues.append(ValidationIssue(
                fname, "error", "MISSING_PAGE_IRI", "Page block has no @id"))

        if not page.slug:
            report.issues.append(ValidationIssue(
                fname, "error", "MISSING_SLUG", "Page block has no vc:slug"))

        if page.schema_version < 1:
            report.issues.append(ValidationIssue(
                fname, "warning", "MISSING_SCHEMA_VERSION", "Page block has no vc:schemaVersion"))

        oc = page.ontology_class
        if oc is None:
            continue

        report.pages_with_ontology += 1

        if not oc.iri:
            report.issues.append(ValidationIssue(
                fname, "error", "MISSING_CLASS_IRI", "OntologyClass has no @id"))
            continue

        iri_owners[oc.iri].append(fname)

        if not oc.label:
            report.issues.append(ValidationIssue(
                fname, "error", "MISSING_LABEL", "OntologyClass has no label"))

        if not oc.domain:
            report.issues.append(ValidationIssue(
                fname, "warning", "MISSING_DOMAIN", "OntologyClass has no vc:sourceDomain"))
        elif oc.domain not in VALID_DOMAINS:
            report.issues.append(ValidationIssue(
                fname, "warning", "INVALID_DOMAIN",
                f"Domain '{oc.domain}' not in valid set"))

        for parent in oc.sub_class_of:
            if parent.iri == oc.iri:
                report.issues.append(ValidationIssue(
                    fname, "error", "SELF_REFERENCE",
                    f"Self-referential subClassOf: {oc.iri}"))

            if parent.iri and "owl:class:" in parent.iri:
                p_slug = parent.iri.split(":")[-1]
                l_slug = slugify(parent.label)
                if parent.label and p_slug != l_slug:
                    if not parent.iri.startswith("urn:visionflow:linked:"):
                        report.issues.append(ValidationIssue(
                            fname, "warning", "SLUG_MISMATCH",
                            f"Parent IRI slug '{p_slug}' != label slug '{l_slug}'"))

        if len(oc.sub_class_of) > 1:
            # Informational, NOT a warning. Multiple inheritance is legal in
            # OWL 2 EL and in this corpus it is deliberate: classes are bridged
            # across domains and categories by design. 957 classes carry more
            # than one parent; 313 of them reach more than one taxonomy
            # category and 97 span more than one domain. Reporting that as a
            # defect misrepresented the dataset — the count was published as
            # "961 validation warnings" when 958 of them were the design.
            #
            # It stays surfaced rather than deleted because it is the only
            # place the bridging is enumerated, and the NGG1 node record holds
            # a single u16 category (FORMAT-NGG1 §3), so the graph tiers keep
            # only the nearest category. This is where the discarded bridges
            # are still visible.
            report.issues.append(ValidationIssue(
                fname, "info", "MULTI_PARENT",
                f"Bridging class, {len(oc.sub_class_of)} parents: "
                f"{', '.join(p.label for p in oc.sub_class_of)}"))

    for iri, owners in iri_owners.items():
        if len(owners) > 1:
            report.issues.append(ValidationIssue(
                owners[0], "error", "DUPLICATE_IRI",
                f"IRI {iri} claimed by {len(owners)} files: {', '.join(owners[:5])}"))

    return report


def fix_self_references(pages_dir: Path, dry_run: bool = True) -> list[str]:
    """Find and optionally fix self-referential subClassOf in page files."""
    JSONLD_RE = re.compile(r'```json-ld\s*\n(.*?)```', re.DOTALL)
    fixed = []

    for md_file in sorted(pages_dir.glob("*.md")):
        text = md_file.read_text(encoding="utf-8", errors="replace")
        blocks = JSONLD_RE.findall(text)

        for raw in blocks:
            try:
                block = json.loads(raw)
            except json.JSONDecodeError:
                continue

            if block.get("@type") != "OntologyClass":
                continue

            own_iri = block.get("@id", "")
            parents = block.get("subClassOf", [])
            if not isinstance(parents, list):
                continue

            new_parents = [p for p in parents if p.get("@id") != own_iri]
            if len(new_parents) < len(parents):
                if not new_parents:
                    domain = block.get("vc:sourceDomain", "")
                    domain_slug = slugify(domain) if domain else "concept"
                    new_parents = [{
                        "@id": f"urn:visionflow:owl:class:{domain_slug}",
                        "vc:label": domain_slug,
                    }]

                if not dry_run:
                    block["subClassOf"] = new_parents
                    new_raw = json.dumps(block, indent=2)
                    text = text.replace(raw, new_raw)
                    md_file.write_text(text, encoding="utf-8")

                fixed.append(md_file.name)

    return fixed


def main():
    pages_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("mainKnowledgeGraph/pages")
    fix = "--fix" in sys.argv
    output_json = "--json" in sys.argv

    pages = parse_corpus(pages_dir)
    report = validate_corpus(pages)

    if fix:
        self_refs = fix_self_references(pages_dir, dry_run=False)
        if self_refs:
            print(f"Fixed {len(self_refs)} self-references: {', '.join(self_refs)}")

    if output_json:
        result = report.summary()
        result["issues"] = [
            {"path": i.path, "severity": i.severity, "code": i.code, "message": i.message}
            for i in report.issues
        ]
        json.dump(result, sys.stdout, indent=2)
    else:
        s = report.summary()
        print(f"Validation: {s['total_pages']} pages, {s['pages_with_ontology']} with ontology, {s['public_pages']} public")
        print(f"Issues: {s['errors']} errors, {s['warnings']} warnings, {s['info']} info")
        if report.errors:
            print("\nErrors:")
            for i in report.errors[:30]:
                print(f"  [{i.code}] {i.path}: {i.message}")
        if report.warnings:
            print(f"\nWarnings ({len(report.warnings)} total, showing first 20):")
            for i in report.warnings[:20]:
                print(f"  [{i.code}] {i.path}: {i.message}")

    sys.exit(1 if report.errors else 0)


if __name__ == "__main__":
    main()
