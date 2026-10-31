**How to work against this pack** (engineering agents start here):

The ADR pack for this repo is **its living governing document in `docs/` plus the
ledger records below that amend it**. The living doc is normative — its
*Invariants* section is the compliance surface and its *Change process* section
says how to amend it:

| Domain | Governing document |
|---|---|
| Corpus, pipeline, NGG1 tiers, explorer, licence split | [`../BASELINE-narrativegoldmine.md`](../BASELINE-narrativegoldmine.md) |

Detailed, non-normative references the baseline governs: `docs/architecture/pipeline.md`
(pipeline internals), `docs/architecture/explorer.md` (explorer internals),
`docs/methodology/corpus-generation.md` (how the corpus was generated),
`explorer/FORMAT-NGG1.md` (the frozen binary tier contract).

**Lookup order:** governing doc → its `file:line` citations into code → the ledger
records below. (There is no `docs/archive/`: this consolidation moved nothing, so
history lives in git and in each record's own Context, not a tombstone tree.)
Note two absent-but-cited legacy documents: `ADR-NG-001`
(the explorer overhaul, cited by 30+ files at
`docs/adr/ADR-NG-001-explorer-architecture.md` but never checked in here — its
de-facto reconstruction is `BASELINE-narrativegoldmine.md` + `docs/architecture/explorer.md`)
and the `ADR-LCR-01`/`PRD-LCR-01`/`DDD-LCR-01` corpus-generation trio (summarised
in `docs/methodology/corpus-generation.md`). The Logseq pages `ADR-008` and
`ADR-012` under `ontology/pages/` are **corpus content**, not decision records.

**Making a decision:** copy [`TEMPLATE.md`](TEMPLATE.md) to `ADR-NNNN-slug.md`
(next free number), fill the three-axis status honestly, update the affected
governing document **in the same change**, and regenerate this index
(`bash scripts/adr-ledger.sh write` — it validates every record's
frontmatter against the required fields and enums and exits non-zero on a bad
record, so run it before committing; CI runs `bash scripts/adr-ledger.sh check`,
which also fails on a stale index). The checker is the estate's canonical
`adr-index-gen.js`, fetched from agentbox at a pinned commit and verified by
sha256; it is not vendored here (`docs/adr/.ledger.json` sets the accepted
`repo` values).

_Canonical repository: **DreamLab-AI/knowledgeGraph**. The `repo` column may carry
the historical publishing name `narrativegoldmine` — the name minted into every
class IRI, the CNAME and the site — which maps to the canonical repository above;
ADR-2004 makes those identifiers immutable, so the alias is kept, not rewritten._
