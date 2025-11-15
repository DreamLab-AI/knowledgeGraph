# Archived Documentation

**Archive Date:** 2025-11-10
**Reason:** Superseded by modern v2.0 architecture documentation

---

## ⚠️ DEPRECATION NOTICE

All documentation in this directory is **ARCHIVED** and **DEPRECATED**.

These files document legacy implementation phases, intermediate development states, and obsolete architectures that have been replaced by the modern Rust/WASM dual-pipeline system.

---

## Current Documentation

For up-to-date documentation, see:

- **Architecture Overview:** `/docs/ARCHITECTURE.md`
- **Critical Code Map:** `/docs/CRITICAL-CODE-MAP.md`
- **Developer Guide:** `/CLAUDE.md` (repository root)
- **Update Summary:** `/docs/DOCUMENTATION-UPDATE-SUMMARY.md`

---

## Archive Contents

### `legacy-rust-web-publish/`
Implementation reports from the Rust/WASM publisher development phase (2025-11).

**Contents:**
- Development status updates
- Hive mind collaboration reports
- Phase completion reports
- Security fixes documentation
- Error handling implementation notes
- Testing infrastructure reports
- Analysis subdirectories

**Status:** Development completed, now in production
**Replaced By:** `/docs/ARCHITECTURE.md` (Pipeline 2 section)

### `legacy-webvowl/`
Status reports from WebVOWL modern implementation (2025-11).

**Contents:**
- Project completion status
- Test results summaries

**Status:** Development completed, now in production
**Replaced By:** `/docs/ARCHITECTURE.md` (Pipeline 1 section)

### `legacy-consolidation/`
Repository consolidation and migration summaries (2025-11).

**Contents:**
- Consolidation summary reports
- Directory migration documentation

**Status:** Migration completed
**Replaced By:** Current repository structure documented in `/docs/ARCHITECTURE.md`

### `legacy-implementation-docs/`
Intermediate implementation documentation for ontology and publishing features.

**Contents:**
- Ontology fix implementation notes
- WebVOWL investigation reports
- Publishing pipeline research

**Status:** Features implemented and documented
**Replaced By:** `/docs/ARCHITECTURE.md` and `/docs/CRITICAL-CODE-MAP.md`

---

## Why These Were Archived

### Development Phase Documentation
Files like `HIVE-MIND-FINAL-REPORT.md`, `PROJECT-COMPLETE.md`, and `PHASE3-COMPLETE.md` documented the **development process** and intermediate milestones. Now that development is complete and the system is in production, the **architectural documentation** (`ARCHITECTURE.md`) serves as the canonical reference.

### Intermediate Implementation States
Documents like `DEVELOPMENT-STATUS-UPDATE.md` and `error-handling-implementation.md` tracked work-in-progress. These are superseded by the comprehensive code map and architecture docs that describe the **final implementation**.

### Migration/Consolidation Reports
`CONSOLIDATION-SUMMARY.md` documented a one-time repository reorganization. This historical record is preserved but not relevant for ongoing development.

### Redundant Status Reports
Multiple status reports (`STATUS.md`, `TEST-RESULTS-SUMMARY.md`) were consolidated into the comprehensive documentation suite.

---

## When to Reference Archived Docs

Use archived documentation ONLY for:

1. **Historical context:** Understanding why certain design decisions were made
2. **Development archaeology:** Tracing the evolution of the codebase
3. **Legacy troubleshooting:** Debugging issues in old branches/commits
4. **Migration reference:** Understanding what changed during consolidation

**DO NOT** use archived docs for:
- Understanding current architecture
- Implementing new features
- Onboarding new developers
- Deployment procedures
- Performance benchmarking

---

## Retention Policy

These archived documents are preserved for **historical reference** and may be removed after:
- 12 months from archive date (2026-11-10)
- Verification that no active references exist
- Approval from repository maintainers

---

**Last Updated:** 2025-11-10
**Archive Curator:** Repository maintainers
**Questions:** See `/docs/ARCHITECTURE.md` for current documentation
