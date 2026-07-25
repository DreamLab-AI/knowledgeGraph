# Phase 0-1: Contracts and Discovery

From a business problem and a data lake to a seeded upper structure, with the
rules that govern authoring already written and running before page one.

This is the first working document of the playbook. It covers two phases the
reference corpus ran in the wrong order and paid for. Phase 0 writes the
contracts: the authoring spec, the validator, the slug and alias rules, the
namespace decision, the count gates and the publication target. Phase 1
discovers the domain: competency questions, a lake audit, a preview of the real
instances, a domain cut and the Domain pages that anchor it. Phase 0 comes first
on purpose. The reference build wrote its validator after a corpus already
existed and then spent a large fraction of roughly 37M tokens repairing what a
few lines of upfront contract would have prevented: 519 invalid domain values,
thousands of dangling parent references, a fallback rule invented to guess
parents that were never required at authoring time, and repeated alias cleanup
passes. Structure enforced when a page is written costs a prompt line.
Retrofitted, it costs repair waves.

Worked exemplar throughout: an offshore wind farm operator running operations
and maintenance against a data lake of SCADA telemetry, CMMS work orders,
met-ocean series, energy-market prices, contracts, incident reports and
environmental surveys. It bridges naturally between subjects and is deliberately
not one of the reference corpus's six domains, so the method carries the weight
rather than the example. One point to hold from the start: in a data-lake build
the first entities you touch are not concepts, they are turbines, vessels and
work orders. Individuals in the lake, not classes in your head. Phase 1 is built
around that.

---

## 1. Phase 0: contracts before content

A business build has no expert's notebook to copy. The reference corpus did: an
upper structure lived in one person's head, was written down, and seeded the
taxonomy. That shortcut is why the corpus is TBox only to this day, 7,874
classes and 0 individuals, and why its contracts arrived late. You have a lake
and a problem instead, and the rules that keep 40 parallel authors mergeable
have to exist before the first of them starts.

Six artefacts must exist, and must run, before page one is authored. Each has a
one-day version: the smallest thing that is real and enforced, not the polished
final form. Build that this week and grow it as the corpus grows.

- **Authoring spec.** One document fixing the on-page format, slug law, closed
  domain enum, parent requirement, closed relation vocabulary, grounding block
  and per-tier density expectation. It is what makes parallel authoring possible:
  the reference build drove 40 authors from an `AUTHORING_SPEC.md`, and that
  contract is why their output merged instead of colliding. Worked version:
  [`templates/authoring-spec.md`](templates/authoring-spec.md), format in
  [`02-schema.md`](02-schema.md). One-day version: a page of MUST-rules and one
  hand-written example page that validates.
- **Validator with a severity design.** A script classifying every finding as
  `error`, `warning` or `info`, wired so multi-parent bridging is `info` and
  never `warning`. Severity is a claim about intent: a `warning` asks a human to
  act, so a deliberate design choice must never trip one. The reference validator
  treated the taxonomy as a tree and reported 958 deliberate bridges as warnings,
  so a clean corpus read as a thousand repairs from finished. Detail in
  [`04-quality.md`](04-quality.md) §2. One-day version: a parser that checks slug,
  domain enum and parent-exists on every page and prints counts by severity.
- **Slug law and alias policy.** One deterministic slug per concept, the title
  derived from it, acronyms cased by a fixed list; the alias policy says which
  alternate labels are legal and how they resolve, so two authors naming a thing
  from two sides converge rather than fork. The reference project ran alias
  cleanup scripts after the fact for want of these. One-day version: the regex
  `^[a-z0-9]+(-[a-z0-9]+)*$`, an acronym list (`SCADA`, `CMMS`, `CfD`, `OEM`,
  `HSS`, `G99`), and a rule that filename stem, slug field and id tail must agree.
- **Namespace decision.** The parameterised IRI scheme, fixed once. The reference
  corpus baked one project's host into every id and cannot lift a class into
  another project without rewriting it. The playbook profile parameterises on a
  project token: `urn:<project>:class/<slug>`, `urn:<project>:individual/<slug>`,
  `urn:<project>:page/<slug>`. Decide the token (`owf` in the templates, for
  offshore wind farm) and the pattern now, because it is unpickable later. Recorded in
  [`templates/authoring-spec.md`](templates/authoring-spec.md) §3.
- **CI count-gate skeleton.** A gate asserting expected equals actual on the
  artefacts the build writes, not on the absence of errors. Under-publication
  emits no error signal: a run that ships half the corpus looks like a full run,
  only smaller. The reference project learned this three times, from a grep that
  dropped 653 pages to a stale checkout that republished deleted pages to a
  double-writer that left 7,900 orphan files, and a count gate caught defects it
  was never designed for. Skeleton in
  [`templates/gate-config.md`](templates/gate-config.md), implementation in
  [`../ci-cd/build-and-gates.md`](../ci-cd/build-and-gates.md). One-day version:
  assert `stats.json.pages == N` for a hand-counted N, fail on inequality.
- **Publication target.** Where the corpus publishes, behind those gates, from
  week one and on every push. The reference project published late and large, and
  its worst defects accumulated invisibly until a count gate asserted reality.
  Stand up the gated pipeline before the corpus is worth showing, so the
  machinery is proven on ten pages rather than debugged on ten thousand. See
  [`05-publication.md`](05-publication.md).

One rule cuts across all six: no author writes a quality number. The reference
authoring spec hard-coded a quality field of 0.72 into its template; the number
meant nothing and propagated corpus-wide regardless. A quality signal, if wanted,
is computed from the graph, from relation density, grounding coverage, review
status or inbound centrality, never asserted by the author.

---

## 2. Phase 1: frame the problem as competency questions

An ontology earns its keep by answering questions a flat schema cannot, because
the answer crosses systems that were never designed to join. Write those
questions first: they are the acceptance test for the whole build, and if the
finished graph cannot answer them the domains were cut wrong or the grounding is
missing. A competency question is concrete, names an answer shape, and crosses at
least two source systems. "What is a turbine?" is not one. "Which turbines had a
gearbox high-speed-shaft temperature excursion in the 30 days before a work order
raised a gearbox replacement?" is one: it joins SCADA to the CMMS and returns a
ranked list of assets.

Ten real questions for the wind exemplar, each annotated with the lake sources
it forces together:

1. Which turbines showed a drive-train temperature excursion in the 30 days
   before a CMMS work order raised a major-component replacement? *(SCADA x
   CMMS)*
2. For each jack-up campaign last year, how many access days were lost to
   met-ocean conditions exceeding the significant-wave-height limit for the
   vessel? *(marine-ops x met-ocean)*
3. What revenue was foregone to curtailment, split between grid-constraint and
   negative-price causes, per CfD-contracted asset? *(energy-markets x finance x
   contracts)*
4. Which components failed inside their warranty term, and what is the
   outstanding warranty-claim value against each OEM? *(asset-engineering x
   commercial x contracts)*
5. Rank turbines by unplanned downtime hours this quarter, with each downtime
   interval attributed to a fault category. *(SCADA x CMMS)*
6. Given the 14-day met-ocean forecast, which planned tasks have a weather
   window, and which crew and vessel are free to take it? *(met-ocean x
   marine-ops x CMMS)*
7. For a proposed cable repair, which party bears cost under the insurance
   policy versus the O&M contract, and what is the marine-spread day-rate
   exposure? *(asset-engineering x marine-ops x finance)*
8. What is site availability this month computed to the IEC 61400-26 definition,
   and how does it sit against the availability-warranty threshold in the O&M
   contract? *(SCADA x contracts)*
9. Which environmental-consent conditions, such as a seasonal marine-mammal
   restriction, limit the window for a piling or heavy-lift operation?
   *(env-consenting x marine-ops)*
10. Across the portfolio, which failure modes drive the most lost production in
    MWh, to rank the reliability programme? *(SCADA x CMMS x reliability data to
    ISO 14224)*

Every one crosses a boundary. That is the signal you build on: question 6 is the
Weather Window bridge, question 3 the Curtailment bridge, question 7 the Cable
Failure bridge. The questions locate the bridges before you have written a class.
Aim for eight to ten, fewer and you have not probed the lake, many more and you
are specifying reports. Keep the list; it becomes
[`templates/competency-questions.md`](templates/competency-questions.md), one
SPARQL sketch each, and it returns in the exit checklist (§8).

---

## 3. Audit the lake

The reference corpus grew demand-driven: a page was authored only for a concept
that at least two existing pages already referenced, the refs>=2 rule
([`../methodology/corpus-generation.md`](../methodology/corpus-generation.md)
§5). A business build applies the same discipline one layer earlier, against the
lake rather than a wiki. A concept exists because the lake carries it, in more
than one place, with someone accountable for it. Three activities find that
evidence.

### 3.1 Schema harvest

Pull the schema of every source system and write it into one inventory. Not the
data, the schema: entities, key fields, join keys, owner, refresh cadence,
approximate row count. For the wind lake:

| Source | System of record | Grain | Join keys | Owner | Cadence |
|---|---|---|---|---|---|
| SCADA historian | OSIsoft PI or equivalent | signal x turbine x timestamp | turbine id, signal tag | Performance engineering | 1-10 s |
| CMMS | Maximo / SAP PM | work order, asset, failure code | asset id, WO id | Maintenance planning | event |
| Met-ocean | buoy / LIDAR / forecast feed | variable x location x timestamp | location id, timestamp | Marine coordination | 10 min-1 h |
| Market | settlement + price feed | price x settlement period | settlement period, BMU id | Commercial / trading | 30 min |
| Contracts | document store + metadata | contract, party, clause | contract id, counterparty | Commercial / legal | event |
| Incidents | HSE reporting tool | incident, person, asset | incident id, person id, asset id | HSE | event |
| Env surveys | survey repository | survey, species, constraint | site id, survey id | Consents / environment | seasonal |

Two columns do the heavy work. **Join keys** are where bridges form: `asset id`
appears in the CMMS, incidents and contracts, so anything keyed on it is a
candidate bridge between those subjects. **Owner** is where the domain cut comes
from (§5): a source with no accountable owner is one you cannot ground against,
so find the owner before you model the data.

### 3.2 Glossary mining

The documents carry vocabulary the schemas do not: O&M manuals, contracts,
incident narratives, survey reports. Extract candidate terms, rank by frequency,
and flag every term appearing in two or more independent sources. "Significant
wave height" in both a vessel charter and a met-ocean feed is a cross-source
term; "curtailment" in both a grid code and a settlement report is another. A
term in one source only is a local field; a term across sources is a concept the
ontology should own, and probably a bridge. This is the refs>=2 rule sourced from
prose, and the threshold is two independent sources, not two mentions in one
document that merely repeats its own jargon. Two efforts on the reference corpus
converged on it independently
([`../methodology/corpus-generation.md`](../methodology/corpus-generation.md)
§5).

### 3.3 Entity profiling

For each candidate entity ask three questions and record the answers.

- **Does it repeat?** Count instances. `Turbine` has a fixed roster of, say, 80
  physical machines; `Gearbox Failure Mode` is a type with a handful of members
  that recur across machines. A high-cardinality set of concrete things is ABox;
  a small set of types is TBox. This is the call that decides whether a candidate
  becomes a Class or an Individual (§4).
- **Does it join?** Does it carry, or get referenced by, a key another source
  uses? Entities that join are the raw material of bridges.
- **Does it have an owner?** The accountable human or team. An entity nobody owns
  is either out of scope or a governance gap you have just found.

Record the grounding as you go. Every observation here is evidence, and the v3
profile makes it machine-readable through a grounding block on every entity:
`sources` with a `dataset` and a `locator`, a `method` of `extracted`,
`inferred` or `authored`, and a `confidence` from 0 to 1. Capture the `dataset`
and `locator` for each candidate now, while the source is open; retrofitting
after authoring means opening every source again. The block is defined in
[`02-schema.md`](02-schema.md) and shown on a real page in
[`templates/example-individual.md`](templates/example-individual.md).

---

## 4. ABox preview: pull the instances first

Here the business build parts company with the reference method, on purpose. The
reference corpus was seeded from expert notes, is TBox only, and its hardest
quality problems were disputes about where a concept belonged, arguments a
handful of real instances would have settled. The lake's rows are individuals.
Use them.

Before cutting a single domain, pull 50 to 100 real instances from the lake and
lay them out: actual turbines with serial numbers, vessels with their charters, a
sample of real work orders, a week of settlement periods, a handful of contracts
and consent conditions. Not invented examples. Rows. Then let what they are
inform the cut, in four steps.

1. **Extract.** Pull the instances with a grounding block each, pointing at the
   row or document they came from.
2. **Cluster.** Group them by what they plainly are. Work orders cluster by
   failure code, signals by measured quantity, contracts by counterparty and
   clause type.
3. **Propose a class per cluster.** A cluster of gearbox work orders proposes a
   `Gearbox Failure` class. The cluster names the class, not the reverse.
4. **Name and approve, then promote.** The accountable owner for that part of the
   lake confirms the name and its place. Only then does the class enter the
   taxonomy, with the instances typed against it.

The upper structure is still seeded from priors, `owl:Thing` and the domain
roots, because a lake gives you the middle and bottom of a taxonomy but not
always its top. The difference is that the middle is now proposed by clusters of
real things rather than asserted from memory, so a placement dispute is settled
by pointing at the instances that forced it. A class with no instances behind it
and no competency question demanding it is one you defer.

---

## 5. Cut the domains

Domains are a publishing convenience, a backbone the explorer lays out and a
reader starts from
([`../methodology/the-hybrid-approach.md`](../methodology/the-hybrid-approach.md)
§8), not a claim that the subject partitions cleanly. Pick a cut that is legible
without pretending the boundaries are walls: five to eight, the reference corpus
runs six. Fewer than five is too coarse for a foothold; more than eight and the
owners overlap, failing the first test below.

Criteria for a good cut, each falsifiable:

- **One accountable owner per domain.** Name a human or team, taken from the
  owner column of the schema harvest (§3.1). If two teams both claim a domain, or
  nobody does, the cut is wrong at that seam. A domain that does not trace to an
  owned system of record cannot be grounded and should not be a domain.
- **Every domain maps to a system of record.** Grounding needs a source. A domain
  with no lake behind it is an aspiration and belongs in a backlog, not the seed.
  The ABox preview (§4) is the test: if you cannot pull real instances for a
  proposed domain, it is not a domain yet.
- **Domains join through shared entities, not clean partitions.** Run the join
  keys from §3.1. If a candidate shares no entity with any other, it is a silo
  you can defer. The interesting domains share `asset id`, `settlement period`,
  `contract id`.

For the wind exemplar the harvest, the owners and the instance clusters produce
six candidates:

`asset-engineering` · `marine-operations` · `energy-markets` ·
`environment-consenting` · `commercial-finance` · `hse-workforce`

Each maps to a system of record and an owning team from §3.1, each has real
instances behind it from §4, and each shares a join key with another, which is
what the bridges are built on.

---

## 6. Write the Domain pages: scope and boundary

A Domain page is the first taxonomy page you author, and it carries two
statements that matter more than its prose: a **scope** statement of what the
domain covers, and a **boundary** statement of what it excludes and where the
excluded thing lives instead. The reference seed did exactly this. Its Machine
Learning domain page reads "the boundary of the domain excludes purely symbolic
reasoning systems, which are classified under the Knowledge Representation
Domain" ([`../../../logseq/.gapscan/specs/domains_ai.json`](../../../logseq/.gapscan/specs/domains_ai.json)).
The pattern "excludes X, classified under Y" is what let 40 parallel authors
place a concept consistently: the boundary tells an author where a near-miss
belongs, so two authors reaching the same edge land on the same answer.

The six wind Domain pages, each with a real boundary sentence:

- **Asset engineering.** *Scope:* the physical turbine, foundation, array cabling
  and offshore substation plant, their design, condition and failure modes.
  *Boundary:* excludes the vessels and crews that service the plant, under Marine
  Operations, and the market value of the energy produced, under Energy Markets.
- **Marine operations.** *Scope:* vessels, crew transfers, jack-up campaigns, port
  logistics, and the met-ocean limits that gate them. *Boundary:* excludes the
  engineering condition of the asset being accessed, under Asset Engineering, and
  the day-rate exposure of the charter, under Commercial and Finance, which this
  domain references but does not own.
- **Energy markets.** *Scope:* wholesale prices, settlement periods, curtailment,
  imbalance, and the CfD strike-versus-reference mechanism. *Boundary:* excludes
  the physical cause of a curtailment, under Asset Engineering or grid constraint,
  and the accounting of the resulting revenue, under Commercial and Finance.
- **Environment and consenting.** *Scope:* environmental surveys,
  protected-species and seasonal restrictions, consent conditions and their
  monitoring obligations. *Boundary:* excludes the marine operations those
  conditions constrain, under Marine Operations, and the safety of the workforce
  carrying them out, under HSE and Workforce.
- **Commercial and finance.** *Scope:* contracts, warranties, insurance policies,
  day-rates, revenue and cost. *Boundary:* excludes the physical events that
  trigger a claim, under Asset Engineering and Marine Operations, and the market
  prices that set revenue, under Energy Markets, both consumed here as inputs.
- **HSE and workforce.** *Scope:* technicians, competencies, permits-to-work,
  incidents and safety cases. *Boundary:* excludes the environmental permits
  governing an operation, under Environment and Consenting, and the engineering
  task content of the work, under Asset Engineering.

Every exclusion names a destination, and every destination is another domain in
the cut. That is the bridge map written in advance: where two domains both claim
an entity, that entity is a bridge.

### Bridges are first-class, and they are data

A class may have more than one parent, and here the multiplicity is the point,
not a defect. The wind exemplar's signature bridges fall straight out of the
boundary statements above:

- **Weather Window** parents into Marine Operations, Asset Engineering and Energy
  Markets: a marine-access concept, a maintenance-scheduling concept and a
  production-timing concept at once. Competency question 6.
- **Curtailment** parents into Energy Markets and Commercial and Finance.
  Question 3.
- **Cable Failure** parents into Asset Engineering, Commercial and Finance
  (insurance) and Marine Operations (the repair spread). Question 7.
- **Jack-up Campaign** parents into Marine Operations and Asset Engineering.
- **Warranty Claim** parents into Commercial and Finance and Asset Engineering.
  Question 4.

Declare these as multi-parent classes from the first authoring pass, and set the
validator to treat multiple parents as `info`, per the severity design fixed in
Phase 0. Publish full membership as data beside any compact format that holds one
home per class. The reference pipeline learned this twice: its tree-shaped
validator reported 958 deliberate bridges as warnings, and its single-slot binary
tier format flattened the lattice because one 16-bit slot cannot hold two
memberships. The fix in both cases is to carry full membership as JSON alongside
the compact form ([`../ci-cd/build-and-gates.md`](../ci-cd/build-and-gates.md),
[`../architecture/pipeline.md`](../architecture/pipeline.md)). Worked bridge page:
[`templates/example-bridge.md`](templates/example-bridge.md).

---

## 7. One axis, day one

Use a single classification axis, the subject Domain, with bridging legal on it.
Add a second orthogonal axis only when a competency question cannot be answered
without one, and not before.

The reference corpus seeded two axes at once, a subject Domain and an
architectural Layer, both hanging off `owl:Thing`, with strata such as Policy,
Governance and Application
([`../../../logseq/.gapscan/specs/layers.json`](../../../logseq/.gapscan/specs/layers.json)).
The Layer axis cost authoring effort on every page and did not survive to the
published figures, which report six domains and 34 categories and no layer
dimension: nobody consumed it, so it was carried and then dropped. Meanwhile the
bridging the corpus did not plan for fought the tooling for months, because what
it needed was cheap multi-membership on one axis, not a second axis.
Spend the budget there. One clean axis with bridging beats two where the second
is forced, and the door to a real second axis stays open for the day a competency
question demands it.

---

## 8. Phase exit checklist

*This section is written to be included in agent context verbatim. It is the
contract that gates the transition from Phase 0-1 to Phase 2. An agent MUST NOT
report Phase 0-1 complete until every item below is satisfied and checkable.*

- **INV-1 Contracts exist and run.** The authoring spec, validator, slug law and
  alias policy, namespace decision, CI count-gate skeleton and publication target
  MUST all exist as files and MUST run against at least one hand-authored page
  before any bulk authoring begins.
- **INV-2 Competency questions.** There MUST be eight to ten, each naming the
  sources it joins, and at least three MUST cross a domain boundary.
- **INV-3 Schema inventory.** Every source system MUST be recorded with its
  entities, join keys, named owner, cadence and approximate row count.
- **INV-4 Glossary.** Candidate terms MUST be ranked and each flagged by count of
  independent sources; cross-source terms MUST be marked as bridge candidates.
- **INV-5 ABox preview.** Between 50 and 100 real instances MUST have been pulled
  from the lake and clustered, and each cluster MUST have a proposed class
  approved by the accountable owner before the domain cut is fixed.
- **INV-6 Entity profile.** Each candidate MUST record repeats yes or no, joins
  yes or no, an owner, and a Class-or-Individual call.
- **INV-7 Domain cut.** There MUST be five to eight domains, each with exactly one
  accountable owner, a system of record, real instances from INV-5, and a shared
  join key with another domain.
- **INV-8 Domain pages.** There MUST be one page per domain, each carrying a scope
  statement and a boundary statement that names its exclusions and where each
  lands instead.
- **INV-9 One axis.** The build MUST use a single classification axis unless a
  named competency question requires a second; a second axis's necessity MUST be
  recorded against that question.
- **INV-10 Bridge list.** Every class that legitimately parents into two or more
  domains MUST be listed, MUST trace to a competency question, and MUST be
  classified `info` by the validator.
- **INV-11 Grounding captured.** For every candidate the `dataset` and `locator`
  MUST be recorded while the source is open, and no author-asserted quality
  number MUST appear on any page.
- **INV-12 Seed roots authored.** `owl:Thing` and the domain roots MUST exist as
  pages so the parent whitelist has real anchors from the first authoring pass.

Two operating rules apply before leaving this phase. Calibrate on a sample first:
author three or four Domain pages and one bridge by hand, run the validator, and
confirm the contracts hold before parallel authors are turned loose. And verify
agent self-reports independently: on the reference build those reports were wrong
three times in one day
([`../methodology/corpus-generation.md`](../methodology/corpus-generation.md)
§9), so gate on expected-equals-actual counts, not the absence of errors. Both
carry into Phase 2, where these contracts become the agreement the generation
swarm runs against.

---

*Next: Phase 2 takes this seed and the authoring spec and drives parallel
authors to populate the taxonomy, demand-driven under the refs>=2 rule. See
[`03-generation.md`](03-generation.md). The on-page format those authors follow
is [`02-schema.md`](02-schema.md).*
