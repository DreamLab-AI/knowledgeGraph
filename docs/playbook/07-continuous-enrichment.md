# Phase 6: Continuous enrichment — a living corpus fed from streams

Phases 0–5 end with a published corpus. This document is about the day after:
how a curated graph keeps absorbing new knowledge from a continuous source —
a news feed, a podcast, a mailing list, an operational log — without the two
failure modes that kill living corpora. Ingest directly into curated pages and
the corpus rots from the top: every hot topic accretes an undifferentiated news
digest. Refuse stream input entirely and the corpus fossilises: within a year
its most-read pages describe a previous world.

The method here is the three-tier evidence pipeline run against the reference
corpus's sibling working graph in August 2026. Every number below is from that
operating record (48-episode backlog, single weekly source, one afternoon of
live runs), and the code it describes ships as a working skill
(`podcast-knowledge-ingest`: `ingest.py`, `promote.py`, `submit-proposals.mjs`
in the agentbox repository).

---

## 1. The three tiers

```
stream ──extract──► EVIDENCE LEDGER ──promote──► GOVERNED PROPOSALS ──human──► curated graph
                      (append-only)      │
                                         └──reject──► WORKING GRAPH news pages
```

**Tier 1 — the evidence ledger.** Extraction lands assertions on dedicated
`*-evidence___<episode>.md` ledger pages, never on curated pages. Each
assertion is one bullet with a fixed property set: claim text, tier (1 =
primary-sourced, quantified; 3 = attributed commentary), self-assessed
confidence, source attribution, claim date, an evidence quote, and a content
fingerprint (`sha256(source + normalised claim)` truncated). Topic linkage is
by `[[wikilink]]` to existing pages only — the matcher never mints a curated
page. Unmatched assertions still land (for audit) but are excluded from
promotion by construction.

The record: 48 episodes produced 1,755 → ~2,400 assertions across 188 ledger
pages, mean confidence 0.84, 50% tier 1, zero curated pages modified. The
extraction contract that achieves this is a quality gate in the prompt: claims
must carry a named study, a quantity, a dated event or an attributed quote;
speculation and hedged prediction are excluded at source.

**Tier 2 — the promotion gate.** A topic becomes a *candidate* when its ledger
evidence reaches critical mass across independent occasions (defaults: ≥5
assertions from ≥2 episodes). Each candidate is drafted into a single splice
edit against its curated page (byte-exact anchor, validated fail-closed — a
draft that paraphrases its anchor is refused, so an LLM cannot corrupt a page
it was asked to extend), then judged by two independent instruments:

- a **blind before/after judge** on two rubrics — prose quality and
  informativeness — with the version order seeded-randomised per topic so the
  judge cannot learn which slot is "after";
- a **deterministic answer-completeness matcher** — does the drafted section
  actually carry the evidence it claims to promote?

Survival is conjunctive. No single number stands in for "safe to promote".

**Tier 3 — the fork.** Survivors become scored dossiers with provenance down to
assertion fingerprints, submitted to the graph's existing governed proposal
queue (consistency gate → human approval → PR). Rejects are not discarded:
their drafted prose plus attributed evidence land as `type:: news` pages in the
**working graph** — a separate, unpublished Logseq graph the operator reads as
a briefing. Nothing at any stage is silently dropped; every candidate
terminates in exactly one of {proposal queue, news page, retry-eligible defer}.

## 2. What the gate actually measures

The August run processed ~130 candidates: 44 survivors (34%), 84 rejects, 4
defers. The survival pattern is the finding:

| Candidate profile | Outcome | Why |
|---|---|---|
| Flagship topics, mature curated pages (148, 132, 79 assertions) | 0% survive | The blind judge scores news digests appended to rich pages at −1 to −2 on *both* rubrics: the page already says more than the stream does. |
| Focused topics, young/thin pages (5–30 assertions) | heavy survival | Evidence density is high relative to existing coverage; the judge scores +2/+2. |
| Three topics split the rubrics (prose up, informativeness down, or inverse) | rejected | The conjunctive gate exists for exactly these; a single-score judge would have promoted all three. |

Hold that first row. A pipeline that "succeeded" on the flagship pages would be
vandalising them; the negative scores are the system's taste, and they are the
reason direct-to-curated ingest fails. Marginal value of stream evidence is
inversely proportional to page maturity, and only a judged gate can see that.

## 3. Laws, paid for in this run's incidents

- **Cap the dossier, not the evidence.** Drafting 148 assertions into one
  splice produced completeness 0.02–0.28 and judge −2 (unintegrable by
  construction). Cap the material handed to the draft (12 strongest by
  confidence then recency) but key idempotency on the topic's *full*
  fingerprint set — cap both and large topics freeze forever; cap only the
  draft and they stay re-evaluable as evidence accrues.
- **Instrument failures defer; only measured failures reject.** A judge outage,
  a truncated verdict, an unreachable model, a missing target page — all
  produce a `deferred` dossier excluded from the idempotency comparison, so the
  topic retries every run until the instruments return. A transient outage must
  never permanently bury a candidate. (Terminal rejects, by contrast, bank
  their fingerprint set and stay quiet until new evidence lands.)
- **Give judge calls token headroom.** 1024 max_tokens truncated a rubric's
  JSON mid-object on large pages; ≥1536 is the floor for judge/reasoning calls.
  Expect the judge to occasionally wrap its verdict in an array; unwrap exactly
  that shape and fail closed on everything else.
- **Never guess an addressing match.** The proposal adapter resolves a target
  page to a class IRI and demands an exact slug match; a fuzzy hit must never
  receive someone else's amendment. Unresolvable targets are reported, not
  approximated.
- **The stream schedule is two-stage.** Extraction and promotion run as
  separate cron stages (here: weekly, two hours apart), because promotion is
  idempotent and re-runnable while extraction is append-only; coupling them
  means an extraction failure silently skips a promotion week.

## 4. Decision surfacing

Promotion produces decisions for a human: approve this proposal, read this
briefing. Keep the mesh's separation — *watch here, judge there*. The pipeline
surfaces (counts of staged proposals, new news pages, defers) belong on the
operator's read-only panels and digests; the *signature* belongs to the
existing governed approval surface, the one place a decision is signed. Do not
build a second approval mechanism for stream promotion: route survivors into
whatever governed queue the corpus already has (Phase 5's publication gates
established one), and let rejects reach the operator as reading material, not
as decisions.

## 5. Run it

```bash
# Stage 1 — extraction (append-only, weekly):
./run-ingest.sh podcasts.yaml

# Stage 2 — promotion (idempotent, weekly, after stage 1):
python3 promote.py --pages-dir <curated pages> \
  --proposals-dir promotions/proposals \
  --working-graph-dir <working graph pages> --limit 15

# Stage 3 — governed submission (idempotent, exact-match addressing):
node submit-proposals.mjs            # --dry-run first
```

First runs capped (5 episodes, 10 backlog) until the first ledger pages are
reviewed; uncap only after verifying zero curated-page modifications and clean
idempotent re-runs. The cap comment in the config should say why it is there
and what reviewing it means — the operator who lifts it will not be the agent
who set it.
