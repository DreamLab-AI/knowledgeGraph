# Worked example: one month at Gannet Point Offshore

Everything below is a story about a company that does not exist. Gannet Point
Offshore Ltd is invented; its Dogger A wind farm, its turbines, its work orders
and its people are all fictional, chosen so a reader from the wind industry can
recognise every step without any real site's data being exposed. The method is
real, the tooling is real, and every figure quoted from the reference corpus is
checked against this repository. Every offshore-wind number is a design proposal
Gannet Point would replace with its own.

This is the most readable chapter in the playbook by intent. If the earlier
chapters gave you the contract, this one shows a person following it through the
first month, from an empty repository to a small published graph that answers the
questions her business asks. Where a formal detail matters, it is explained in
plain English first and the formalism shown second. The three pages walked
through below are shown in the exact copy-paste form the templates ship, so what
you read here and what you would author are the same bytes. Deep references are
linked, not repeated.

---

## Who owns the problem

Rhona Kerr is operations director at Gannet Point Offshore. She runs the Dogger A
wind farm: eighty turbines, a fleet of chartered vessels, a maintenance backlog,
and a settlement account that the wholesale market moves every half hour. She
did not ask for an ontology. She asked for a way to stop losing money in three
places at once, and the ontology is what the answer turned out to need.

Her problem is that a single maintenance decision is a joint bet across three
systems that do not share identifiers:

- **Downtime.** A turbine that has stopped earns nothing, and a fault left alone
  can worsen into a component exchange that costs an order of magnitude more.
- **Vessel cost.** The crew transfer vessel, the service operation vessel or the
  jack-up that reaches the turbine is chartered by the day and can only sail
  inside a weather window.
- **Market exposure.** The revenue the lost generation would have earned, net of
  the Contracts for Difference top-up, changes hour by hour and can turn
  negative.

Fix turbine A07 now, with an expensive jack-up in a marginal weather window, or
wait for a cheaper window and carry the revenue at risk plus the chance the fault
deepens. Rhona makes that call weekly, from three screens that name the same
turbine three different ways. She wants to ask the question once.

## Seven questions she needs answered

Before anyone modelled anything, Rhona wrote down the questions she wants a
straight answer to. This is the discovery step from
[01-discovery.md](01-discovery.md) done in her own words, and it is the
acceptance test for the whole build: if the finished graph cannot answer these,
it is the wrong graph. Her list, lightly edited:

1. Which turbines have a gearbox fault predicted within thirty days, and is there
   a weather window to reach them before it fails?
2. If A07 stays offline until the next jack-up campaign, what does that cost in
   lost revenue?
3. In which forecast hours does a negative reference price make it cheaper to
   curtail than to generate under the CfD?
4. Which access days next fortnight clear both the vessel's wave-height limit and
   the crew competency rules?
5. For this export-cable failure, does warranty or insurance carry the repair,
   and who is liable?
6. Which consent conditions restrict piling or vessel movement during the seabird
   breeding season?
7. What is site availability this month, and how much of the shortfall breaches
   the availability warranty?

Seven questions fixed the scope; three more filled the corners. Notice that
almost every one names entities from more than one source system. Question 1
crosses maintenance and marine operations; question 3 crosses markets and
finance. Those crossings are not incidental. They are the bridges the graph must
carry as data, and they are why a folder of disconnected spreadsheets never
answered any of them. The full set, each with a SPARQL sketch of the query that
would answer it, lives in
[templates/competency-questions.md](templates/competency-questions.md).

## Afternoon the contracts were written

The single most consequential decision Gannet Point made came on day one, before
a single content page existed. Sam Odele, the data lead, spent an afternoon
writing contracts instead of writing pages.

This is deliberate, and it is the first reflow decision of the playbook: contracts
before content. The reference corpus did it the other way. It generated first and
built its validator afterwards, and then spent a large fraction of tens of
millions of tokens on repair: cleaning 519 invalid domain values, inferring
parents that were never authored, chasing thousands of dangling references,
unpicking aliases. Structure enforced when a page is first written costs a line
in a prompt. Retrofitted, it costs repair waves. Sam wrote the following before
lunch was over.

**The namespace.** Gannet Point owns its own IRI space from line one. The project
token is `owf`, for offshore wind farm, so every class is `urn:owf:class/<slug>`,
every individual `urn:owf:individual/<slug>`, every page `urn:owf:page/<slug>`.
No hard-coded prefix borrowed from somewhere else, no migration later. The
parameterised namespace is the first thing the schema profile in
[02-schema.md](02-schema.md) pins down.

**The slug law.** One rule, stated once: lower-case, hyphen-separated, derived
from the label, unique. `Weather Window` becomes `weather-window` and can become
nothing else. The reference corpus learned the hard way that a slug computed two
different ways by two different scripts is a dangling reference waiting to happen.

**The authoring spec.** The contract that lets forty parallel authors, human or
agent, produce output that merges without conflict. It fixes the exact file
format, the slug law, the closed list of six domain values, the requirement that
every class name a parent, and the requirement that anything drawn from the lake
carry a grounding block. It is [templates/authoring-spec.md](templates/authoring-spec.md),
and it is the reason the reference corpus's forty authors merged cleanly rather
than diverging into forty dialects.

**The validator.** A local check that reads the JSON in each page and refuses
anything that breaks the spec, running on Sam's laptop that same afternoon and in
CI by the end of the week. It parses; it never greps. A whitespace-sensitive text
match once dropped 653 public pages from the reference corpus without a single
error, so the rule at Gannet Point is absolute: every consumer parses the
structured block, no consumer pattern-matches the text. The pipeline that does
this is [../architecture/pipeline.md](../architecture/pipeline.md).

**The count gates.** The CI check that will not publish unless the number of
pages it built equals the number it expected. Under-publication gives no error on
its own: a build that silently drops half the corpus looks exactly like a
successful small build. The reference corpus paid for that twice, and its count
gate went on to catch two further defects it was never designed for. The gate set
is [templates/gate-config.md](templates/gate-config.md).

By the time Sam closed the laptop, the repository could not yet say anything, but
it could already refuse to say anything wrong. Content could now be written by
anyone, in parallel, and the contracts would keep it mergeable.

## Morning the data arrived

Most ontology projects start from an expert's notes and stay abstract. Gannet
Point started from the lake, and this is the second reflow decision: ABox first.
The rows in the data lake are individuals. The first entities Gannet Point
extracted were not concepts at all. They were eighty specific turbines and a
month of work orders, each pulled straight from the source systems with a
grounding block that records exactly where it came from.

The reference corpus never did this. It was seeded from expert notes, it is
concept-only to this day with zero individuals, and its hardest quality disputes
were arguments about where a concept belonged that a handful of grounded examples
would have settled in minutes. Gannet Point settled them by looking at the data
first.

Here is one of those turbines, shown in the exact form the templates ship, ready
to copy. Read the prose bullets at the bottom first: they say in a sentence what
the JSON says formally. Turbine A07 is one physical machine at position A07 in the
array. It is a thing in the lake, not an idea, so it is an **Individual**, and its
grounding block names the two datasets and the exact locators the values came
from, so any fact on the page can be traced back to the row that asserts it.

````markdown
public:: true

# Turbine A07

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:page/turbine-a07",
  "@type": "Page",
  "vc:slug": "turbine-a07",
  "title": "Turbine A07",
  "vc:public": true,
  "vc:schemaVersion": 3,
  "vc:outboundWikilinks": [
    { "@id": "urn:owf:linked/geared-turbine", "vc:label": "Geared Turbine" },
    { "@id": "urn:owf:linked/gearbox-a07", "vc:label": "Gearbox A07" }
  ]
}
```

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:individual/turbine-a07",
  "@type": "Individual",
  "label": "Turbine A07",
  "definition": "Position A07 in the example array: an 8 MW geared wind turbine generator on a monopile foundation, string 3, commissioned 2021. This is an ABox individual, a real machine in the operator's data lake, and the subject that SCADA telemetry, CMMS work orders and warranty records attach to.",
  "domain": "asset-engineering",
  "instanceOf": [
    { "@id": "urn:owf:class/geared-turbine", "label": "Geared Turbine" }
  ],
  "relations": {
    "partOf": [
      { "@id": "urn:owf:individual/array-string-3", "label": "Array String 3" }
    ],
    "hasPart": [
      { "@id": "urn:owf:individual/gearbox-a07", "label": "Gearbox A07" }
    ],
    "standardizedBy": [
      { "@id": "urn:owf:class/iec-61400-1", "label": "IEC 61400-1" }
    ]
  },
  "sameAs": [
    { "@id": "urn:owf:asset-registry/WTG-000047", "label": "Asset registry WTG-000047" }
  ],
  "grounding": {
    "sources": [
      {
        "dataset": "scada.turbine_10min",
        "locator": "wtg_id=A07",
        "query": "SELECT gearbox_oil_temp, gen_rpm, active_power FROM scada.turbine_10min WHERE wtg_id = 'A07'",
        "retrievedAt": "2026-07-24T06:00:00Z"
      },
      {
        "dataset": "cmms.work_orders",
        "locator": "asset_no=OWF-A07",
        "query": "SELECT * FROM cmms.work_orders WHERE asset_no = 'OWF-A07'",
        "retrievedAt": "2026-07-24T06:00:00Z"
      }
    ],
    "method": "extracted",
    "confidence": 0.98
  },
  "provenance": {
    "attributedTo": "did:nostr:owf-ingest",
    "generatedAt": "2026-07-24T06:05:00Z",
    "inferenceRule": "LakeExtraction"
  }
}
```

- ### Definition
  - Turbine A07 is one physical machine, an instance of [[Geared Turbine]]. It carries no `subClassOf`: individuals sit in the ABox and relate to the TBox through `instanceOf`, not subsumption.
- ### Content
  - Every fact here is traceable. `grounding.method` is `extracted`, and the two sources name the datasets and the exact locators the values came from (`wtg_id=A07` in SCADA, `asset_no=OWF-A07` in the CMMS). An extracted individual with an empty `sources` array is the defect the grounding gate rejects.
  - `sameAs` is genuine identity: the asset-registry IRI and this individual denote the one machine, so `owl:sameAs` is correct. It carries no `quality` field. The reference corpus this playbook draws from has zero individuals; the ABox is the v3 addition, and it is what binds the concept graph to the operator's lake.
````

The `method: extracted` and the populated `sources` array are the whole point.
They are a machine-readable statement that this turbine is evidenced by real
rows, not authored by hand. A consumer can filter on that field without reading a
README, which is exactly the traceability the reference corpus lacks with its
zero individuals. Note what is absent: no author-typed quality number. That comes
later, and computed, not asserted.

What eighty of these told Sam and Rhona together was the shape of the domain cut.
The turbines clustered by the subsystem their work orders kept naming: a large
group whose faults sat in the drivetrain and gearbox, another around blades and
pitch, another around the export and array cables. The vessels and access records
clustered separately again. Nobody had to argue about whether Curtailment was an
engineering concept or a market one, because the market rows and the maintenance
rows arrived in different clusters and pointed at different domains. The domain
cut was proposed by the data and confirmed by the expert, not decreed in advance.

That is the discipline the reference build lacked, and it is why Gannet Point's
six domains were not a guess. They fell out of the lake:

- **asset-engineering**: the generating plant and how it behaves and fails.
- **marine-operations**: getting people and equipment to and from the plant.
- **energy-markets**: the price signals and dispatch the site responds to.
- **environment-consenting**: the licence to operate and its conditions.
- **commercial-finance**: money, contracts and risk transfer.
- **hse-workforce**: the people and their safety.

Seeding the concept layer still happens. Once the clusters were clear, Sam wrote
the upper structure as a contract of its own: the single `owl:Thing` root, the
six domain pages each with a scope sentence and a boundary sentence saying what it
excludes and where the excluded thing lives instead, and thirty categories
beneath them. That seed is [templates/taxonomy-seed.json](templates/taxonomy-seed.json),
thirty-seven nodes in the order a generation mesh reads them. The difference from
the reference corpus is that this upper structure was informed by what the ABox
clusters showed, not derived purely from an expert's prior.

### Naming the first concept

A cluster is not yet a class. It becomes one when the expert names it and the
contract accepts it. The gearbox cluster was the obvious first: dozens of work
orders, the single highest-cost failure mode in the fleet, a subsystem every
condition-monitoring feed watches. Rhona named it, Sam wrote it, and the
authoring spec accepted it as a **Class** in asset-engineering, sitting under the
Turbine Systems category. Unlike the turbine, a class is authored from domain
knowledge, so its grounding records that the concept maps to a real
equipment-taxonomy code rather than claiming the definition itself was pulled from
a field.

````markdown
public:: true

# Gearbox

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:page/gearbox",
  "@type": "Page",
  "vc:slug": "gearbox",
  "title": "Gearbox",
  "vc:public": true,
  "vc:schemaVersion": 3,
  "vc:outboundWikilinks": [
    { "@id": "urn:owf:linked/turbine-systems", "vc:label": "Turbine Systems" },
    { "@id": "urn:owf:linked/condition-monitoring", "vc:label": "Condition Monitoring" },
    { "@id": "urn:owf:linked/iso-14224", "vc:label": "ISO 14224" }
  ]
}
```

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:class/gearbox",
  "@type": "Class",
  "label": "Gearbox",
  "definition": "A speed-increasing mechanical transmission between a wind turbine's low-speed rotor shaft and its higher-speed generator, typically a multi-stage planetary and helical arrangement. It is a defining subsystem of a geared drivetrain and one of the highest-cost failure modes in offshore fleets, which is why its bearings, gears and lubrication are the focus of dedicated condition monitoring.",
  "domain": "asset-engineering",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:owf:class/turbine-systems", "label": "Turbine Systems" }
  ],
  "relations": {
    "relatedTo": [
      { "@id": "urn:owf:class/condition-monitoring", "label": "Condition Monitoring" }
    ],
    "contrastsWith": [
      { "@id": "urn:owf:class/direct-drive-generator", "label": "Direct-Drive Generator" }
    ],
    "standardizedBy": [
      { "@id": "urn:owf:class/iso-14224", "label": "ISO 14224" }
    ]
  },
  "grounding": {
    "sources": [
      {
        "dataset": "cmms.equipment_taxonomy",
        "locator": "equipment_class=gearbox",
        "field": "equipment_class",
        "retrievedAt": "2026-07-20T00:00:00Z"
      }
    ],
    "method": "extracted",
    "confidence": 0.9
  },
  "provenance": {
    "attributedTo": "did:nostr:owf-authoring",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "SeedAuthoring"
  }
}
```

- ### Definition
  - A gearbox increases rotational speed from a turbine's rotor shaft to the range a generator needs. It is a defining subsystem of a geared drivetrain, so a machine that has one contrasts with a [[Direct-Drive Generator]] design that removes it.
- ### Content
  - The failure taxonomy for a gearbox (gear scuffing, bearing spalling, lubrication loss) is classified against a maintainable-item taxonomy such as [[ISO 14224]]. Vibration and oil-debris signals feed remaining-useful-life estimates through [[Condition Monitoring]], scheduling a major-component exchange before a functional failure.
  - This page is an authored concept, a standard-tier Class. Its `grounding.method` is `authored`: the single source records that the concept maps to a real CMMS equipment-taxonomy code, not that the definition text was extracted from the lake. It carries no `quality` field; quality is derived downstream from relation density and grounding, never asserted by the author.
````

Two things in that page are Gannet Point policy, not decoration. The gearbox
aligns to ISO 14224, the reliability-data taxonomy the industry already uses,
rather than inventing a private term for a concept the world has already
standardised. And no author is allowed to type a quality number that steers a
decision. The reference corpus hardcoded a quality of 0.72 into its template, the
number meant nothing, and it was propagated across the whole corpus regardless.
The v3 profile removes the field from authored input entirely: the validator
rejects it, and the signals the team trusts are computed after the fact from
relation density, grounding coverage, review status and inbound centrality.
Quality is measured, never asserted.

## Week the first bridge appeared

In week two the growth waves began, and with them came the moment that convinces
people the design is working. An author went to write a page for Weather Window,
a concept every marine planner uses daily, and found it would not sit in one
domain.

A weather window is a marine-operations idea: a stretch of sea state a vessel can
work in, an operational constraint on access. It is also an asset-engineering
idea: the maintenance opportunity that window opens. Both are true at once, so the
concept has two parents in two different domains. And taking a turbine offline to
work on it during that window has a dispatch cost, which is an energy-markets
concern the page reaches through a `bridgesTo` link to Curtailment rather than a
third parent. The window matters precisely because those views coincide.

The instinct of most tooling is to force a choice: pick one parent, file it,
move on. Gannet Point made the opposite choice on day one, and this is the third
reflow decision: one axis plus bridging, from the first build. A concept may sit
under more than one parent, that multi-membership is legal and expected, it is
recorded at informational severity, and it is published as data. Here is Weather
Window as it was authored, with two parents on purpose.

````markdown
public:: true

# Weather Window

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:page/weather-window",
  "@type": "Page",
  "vc:slug": "weather-window",
  "title": "Weather Window",
  "vc:public": true,
  "vc:schemaVersion": 3,
  "vc:outboundWikilinks": [
    { "@id": "urn:owf:linked/met-ocean-forecast", "vc:label": "Met-Ocean Forecast" },
    { "@id": "urn:owf:linked/jack-up-campaign", "vc:label": "Jack-up Campaign" },
    { "@id": "urn:owf:linked/curtailment", "vc:label": "Curtailment" }
  ]
}
```

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:class/weather-window",
  "@type": "Class",
  "label": "Weather Window",
  "definition": "A bounded period during which forecast met-ocean conditions (significant wave height, wind speed, visibility) stay inside the operating limits required to carry out an offshore task safely, such as turbine access, a heavy lift, or subsea cable work. The same interval is at once an operational constraint on marine access and an opportunity to execute a maintenance intervention, and it closes when any governing limit is forecast to be exceeded.",
  "domain": "marine-operations",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:owf:class/operational-constraint", "label": "Operational Constraint" },
    { "@id": "urn:owf:class/maintenance-opportunity", "label": "Maintenance Opportunity" }
  ],
  "relations": {
    "dependsOn": [
      { "@id": "urn:owf:class/met-ocean-forecast", "label": "Met-Ocean Forecast" }
    ],
    "enables": [
      { "@id": "urn:owf:class/jack-up-campaign", "label": "Jack-up Campaign" }
    ],
    "bridgesTo": [
      { "@id": "urn:owf:class/curtailment", "label": "Curtailment" }
    ]
  },
  "closeMatch": [
    { "@id": "http://www.w3.org/2006/time#Interval", "label": "time:Interval" }
  ],
  "grounding": {
    "sources": [
      {
        "dataset": "standards-library",
        "locator": "bvg-om-guide#weather-window",
        "field": "definition",
        "retrievedAt": "2026-07-25T00:00:00Z"
      }
    ],
    "method": "authored",
    "confidence": 0.9
  },
  "provenance": {
    "attributedTo": "did:nostr:owf-authoring",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "BridgeAuthoring"
  }
}
```

- ### Definition
  - A weather window is the interval where sea state and wind stay under the vessel and task limits long enough to complete an intervention safely.
- ### Content
  - This is a first-class bridge. It carries two `subClassOf` parents on purpose: a reader looking under marine access ([[Operational Constraint]]) and a reader looking under maintenance planning ([[Maintenance Opportunity]]) both expect to find it, and both assertions are true. The two parents sit in different domains, so this is a cross-domain bridge; the validator reports it as `MULTI_PARENT` at info severity, never as a warning, and the pipeline publishes the crossing into `bridges.json`.
  - `grounding.method` is `authored`: the concept is domain knowledge, corroborated by a standards-library definition, not a value extracted from the lake. A specific weather-window occurrence computed from a wave series is a separate Individual, grounded `inferred`. The page carries no `quality` field.
- ### Relationships
  - is-subclass-of:: [[Operational Constraint]]
  - is-subclass-of:: [[Maintenance Opportunity]]
  - depends-on:: [[Met-Ocean Forecast]]
  - enables:: [[Jack-up Campaign]]
  - bridges-to:: [[Curtailment]]
````

Rhona's first reaction was that the graph had a bug: the same page listed under
two domains looked like a filing error. It is the opposite. Weather Window
answers her first competency question, the one about reaching a predicted gearbox
fault before it fails, precisely because it links the access limit and the
maintenance task in one object and reaches the market cost through Curtailment.
Flatten it to a single parent and half its meaning goes with the parents you
dropped, and the question stops being answerable.

The reference corpus learned this at cost. Its validator reported 958 deliberate
bridges as warnings, so a clean and correct corpus published itself as riddled
with defects, and someone nearly "fixed" the data by deleting the crossings. The
rule Gannet Point took from that: severity is a claim about intent. A deliberate
multi-parent bridge is information, not a warning; when data breaks a rule on
purpose, you change the rule's severity, you do not edit the data. The reasoning
is in [../reference/jsonld-schema.md](../reference/jsonld-schema.md).

There is a publication trap in the same place. The reference corpus at one point
carried its category membership in a compact binary tier format with a single
sixteen-bit slot per class. One slot cannot hold two memberships, so every
bridge was silently flattened to one category on the way out. Gannet Point
publishes the full membership as JSON alongside any compact format that cannot
carry it, so the lattice survives the trip to the consumer. The pipeline detail
is in [../architecture/pipeline.md](../architecture/pipeline.md).

By the end of week two Gannet Point had the five bridges that recur through its
whole map, each answering a competency question: Weather Window, Curtailment,
Cable Failure, Jack-up Campaign and Warranty Claim. The pages beneath them grew
demand-driven under a rule the reference build and a second independent effort
both converged on: create a concept page only when two or more existing pages
already reference it, the refs>=2 rule. The corpus pulls its own growth and stops
when the frontier of dangling references dries. The rule is in
[03-generation.md](03-generation.md).

## Day five: the first tiny publication

While week two ran, something small and important had already happened on day
five of week one. Gannet Point published. Not the whole graph, not a polished
release, just the thirty-seven seed pages built into a site behind the count
gates, tiny and gated and green.

This is the eighth reflow decision, and it reverses the reference build's habit.
The reference corpus published late and large, and its worst publication defects
accumulated invisibly until a count gate finally asserted reality: two writers
into one markdown mirror left 7,900 orphan files; an incremental deploy over a
stale checkout kept republishing pages that had been deleted; a build once
dropped 653 pages and nobody noticed. Every one of those is the kind of defect
that hides in a big first release and shows up immediately in a small continuous
one.

Publishing on day five forced four habits into place while the graph was small
enough to inspect by eye:

- **Build clean.** The site is built from an empty output directory every time,
  never incrementally on top of a previous build, so a deleted page stays
  deleted.
- **One writer per artefact.** Exactly one process writes the markdown mirror,
  one writes the OWL, one writes the graph tiers. Two writers into one file is
  how the orphan pile happened.
- **Count gates green.** The publish step refuses unless the classes it built
  and the public pages it emitted both equal the numbers it expected, computed by
  parsing the JSON, never by grepping text.
- **Reproducible from a clean clone.** Anyone can clone the repository and rebuild
  to the same counts, which is the check in [../guides/reproduce.md](../guides/reproduce.md).

From day five onward Gannet Point published continuously, a slightly larger graph
every few days, each behind the same gates. The publication contract is
[05-publication.md](05-publication.md).

## Grounding the claims, and who checks what

Week three brought the extraction waves in earnest: hundreds of individuals
pulled from the lake, each with a grounding block, at `method: extracted`. Two
disciplines governed them, and both come from reflow decisions about where to
spend the scarce resource, which is human attention.

The first is calibration before bulk. Before any large extraction run, Gannet
Point pulled a sample of twenty to forty individuals and checked, by hand,
against the real lake, that the locators the agents reported resolved to
the rows they claimed. On the reference build, agent self-reports were wrong three
separate times in a single day, so a self-reported locator is never trusted until
it has been independently resolved. Calibrate on the sample, then run the batch.

The second is risk-weighted review, the seventh reflow decision. Concept pages
are cheap to accept and cheap to fix, so they are agent-verified and
human-sampled. Grounding claims about the business are expensive to get wrong: a
turbine bound to the wrong asset row corrupts every answer downstream. So every
extraction wave carries a human audit of a random sample, sized by the confidence
the agents reported, and it is an adversarial audit. The reviewer tries to break
each grounded claim rather than nod it through, because adversarial checking finds
what friendly review approves. Uniform review depth would have spent Rhona's
attention evenly across cheap concepts and expensive facts; risk-weighting spends
it where a mistake costs.

## How the work was paced

Two more reflow decisions, the fifth and sixth, kept the month from running away.

Density was specified up front, not enriched afterwards. The authoring contract
states, when a page is first written, how many relations and how much body a page
of each tier should carry: a stub, a standard page, a hub. The reference corpus
generated thin and then ran a 959-page enrichment pass costing roughly 37 million
subagent tokens to densify the hubs it could have specified at the start. Gannet
Point wrote its hubs to the target the first time.

And every wave was budget-gated. Before a wave launched it declared a token
budget and an expected yield, a rough count of pages it should produce. If the
acceptance rate fell below the threshold partway through, the wave stopped and the
team re-seeded rather than grinding tokens against a frontier that had gone dry.
The reference build discovered its cost after the fact, described only as "many
many tokens". Gannet Point managed it in advance. The economics are in
[03-generation.md](03-generation.md) and [05-publication.md](05-publication.md).

## First four weeks, as a runbook

Not a Gantt chart. Each week has one exit criterion that is a measured count,
because a count gate is the only thing that tells you the truth about what you
published.

| Week | What happens | Exit criterion |
|---|---|---|
| 1 — Contracts and seed | Write the namespace, slug law, authoring spec, validator and count gates before any content. Extract the first eighty turbines and work orders as grounded Individuals. Let the clusters propose the domain cut; the expert confirms it. Author the root, six domain pages and thirty categories. Publish the seed on day five. | 37 seed pages build with 0 errors and 0 warnings; the competency questions are written and agreed; first tiny publication is live behind green count gates. |
| 2 — Growth waves | Author the five signature bridges and the concepts two or more pages already demand, under the refs>=2 rule. Validator runs in CI on every push, gating on 0 errors. Rank the dangling frontier to pick each next batch. | 150 to 250 Class pages, 0 validator errors, every competency question traceable to at least one class that would answer it. |
| 3 — Grounding waves | Bring the ABox online at scale. Extract Individuals from the lake with resolvable locators. Calibrate on a sample of 20 to 40 before any bulk run. Audit a confidence-sized random sample adversarially. | 100 or more grounded individuals, every locator resolvable, synthetic-versus-evidenced machine-readable via `grounding.method`, count gate asserting expected equals actual. |
| 4 — Enrichment and steady publication | Rank thin hubs by inbound centrality times sparse-relation count and enrich them in budgeted batches under one reviewer, holding the validator at 0 errors on every commit. Keep publishing clean, single-writer, count-gated. | First substantial published graph; count gate green on class count and public-page count; a clean-clone rebuild reaches the same counts. |

The quality loop underneath every week is the same one the reference build
proved: measure the corpus, generate the pages it demands, repair what the gates
reject, re-measure, and stop when several rounds in a row find nothing left to
do. It is described in [04-quality.md](04-quality.md).

## Where Gannet Point stood at the end of month one

Ranges, not targets, anchored to the reference economics so the expectations are
honest. Your numbers move with corpus size and model mix.

| Measure | Month-one range | Reference anchor |
|---|---|---|
| Class pages (TBox) | 300 to 600 | 7,874 classes at full maturity |
| Individual pages (ABox) | 100 to 400 | reference has 0; this is net-new work |
| Categories | 30 seeded | 34 across 6 domains |
| Bridging classes | 40 to 120 | 1,401 multi-parent, 454 cross-category, 153 cross-domain |
| Validator state | 0 errors, 0 warnings, info equals bridge count | 0 / 0 / 1,401 info on the shipped corpus |
| Build time | seconds, not minutes | full corpus builds in about 18 s |
| Enrichment token cost | 6M to 12M subagent tokens for the first hub wave | about 37M tokens enriched 959 hub pages |

Two economics carry into any estimate. Enrichment dominates cost: the reference
hub wave ran to roughly 37 million subagent tokens across batches of forty Sonnet
specialists under an Opus reviewer, and the validator held at 0 errors across all
of it. Growth is self-limiting: the refs>=2 rule stops pulling new pages the moment
the dangling frontier dries, which two independent efforts confirmed by landing on
the same threshold without coordinating.

A month-one graph of four hundred to a thousand pages, grounded where it touches
the lake and honestly marked where it does not, that answers every question Rhona
Kerr wrote down on day one, is what this walk scaffolds towards. The reference
corpus is the existence proof that the method reaches full scale: 7,874 classes,
258,200 triples, 98,776 resolvable edges, built in about eighteen seconds, mostly
generated by agents under human direction by design. Gannet Point does not need to
reach that scale in a month. It needs to answer seven questions it could not
answer before, grounded in its own lake, and by the end of month one it can.

---

*Cross-references within the playbook: front door and schema summary
[README.md](README.md); discovery and the seed contract [01-discovery.md](01-discovery.md);
the v3 page contract [02-schema.md](02-schema.md); generation and demand-driven
growth [03-generation.md](03-generation.md); quality and grounding
[04-quality.md](04-quality.md); publication [05-publication.md](05-publication.md).
Copy-paste artefacts: [templates/authoring-spec.md](templates/authoring-spec.md),
[templates/taxonomy-seed.json](templates/taxonomy-seed.json),
[templates/competency-questions.md](templates/competency-questions.md),
[templates/gate-config.md](templates/gate-config.md), and the three pages walked
through above at [templates/example-class.md](templates/example-class.md),
[templates/example-individual.md](templates/example-individual.md),
[templates/example-bridge.md](templates/example-bridge.md). Deep detail in the
repository: [../reference/jsonld-schema.md](../reference/jsonld-schema.md),
[../methodology/the-hybrid-approach.md](../methodology/the-hybrid-approach.md),
[../architecture/pipeline.md](../architecture/pipeline.md),
[../ci-cd/build-and-gates.md](../ci-cd/build-and-gates.md),
[../methodology/corpus-generation.md](../methodology/corpus-generation.md),
[../guides/reproduce.md](../guides/reproduce.md).*
