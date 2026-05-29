public:: true

# Net Zero Targets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:net-zero-targets",
  "@type": "Page",
  "vc:slug": "net-zero-targets",
  "title": "Net Zero Targets",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:net-zero-targets",
  "@type": "Class",
  "label": "Net Zero Targets",
  "definition": "Net Zero Targets are formal commitments made by governments, corporations, or other entities to reduce greenhouse gas emissions to the point where residual emissions are balanced by equivalent carbon removals, achieving a net-zero contribution to atmospheric greenhouse gas concentrations by a specified date. These targets typically distinguish between near-term absolute reduction milestones and longer-term residual offset strategies, and are aligned with the IPCC's pathways to limiting global warming to 1.5 °C.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:climate-commitments", "label": "Climate Commitments"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:paris-agreement", "label": "Paris Agreement"},
      {"@id": "urn:ngm:class:voluntary-carbon-market", "label": "Voluntary Carbon Market"},
      {"@id": "urn:ngm:class:climate-policy", "label": "Climate Policy"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:carbon-offsetting", "label": "Carbon Offsetting"},
      {"@id": "urn:ngm:class:net-zero-target-setting", "label": "Net Zero Target Setting"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:climate-change-mitigation", "label": "Climate Change Mitigation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Net Zero Targets]] are time-bound pledges to achieve balance between anthropogenic greenhouse gas emissions and removals, typically by 2050 for corporate actors and nation-states, aligned with the [[Paris Agreement]]'s temperature goals and operationalised through [[Net Zero Target Setting]] frameworks.

- ### Relationships
  - Net Zero Targets are a subset of [[Climate Commitments]] that depend on [[Carbon Offsetting]] from the [[Voluntary Carbon Market]] for residual emissions and are shaped by [[Climate Policy]] frameworks; they collectively drive [[Climate Change Mitigation]] investment and are anchored in the science of the [[Paris Agreement]].

- ### Content
  - The concept of net zero entered mainstream policy vocabulary following the IPCC Special Report on Global Warming of 1.5 °C (SR1.5) in 2018, which concluded that reaching net-zero CO₂ emissions by around 2050 globally is a necessary condition for the 1.5 °C pathway. Sweden was among the first nations to enshrine net zero in law in 2017, followed by the UK (2019), the EU, and over 140 countries in subsequent years. Corporate net-zero pledges proliferated after 2020, with the Science Based Targets initiative (SBTi) becoming the dominant third-party validation framework.
  - Net zero is achieved through a two-track strategy: first, deep decarbonisation of value chains via electrification, fuel switching, and energy efficiency; second, addressing residual emissions through high-quality carbon removals, including nature-based solutions and engineered approaches such as direct air capture. Rigorous target-setting requires scope 3 (value chain) emissions accounting, transparent interim milestones, and independent third-party verification. The SBTi's Corporate Net-Zero Standard mandates at least 90% absolute reduction before reliance on offsets.
  - Net zero targets are significant because they restructure capital allocation globally: banks and asset managers are increasingly aligning lending and investment portfolios with 1.5 °C-compatible trajectories through initiatives like the Glasgow Financial Alliance for Net Zero (GFANZ). Corporate targets accelerate procurement of renewable energy, green hydrogen, and low-carbon materials, and are increasingly scrutinised under mandatory climate disclosure regimes such as the ISSB's IFRS S2 standard and the SEC's climate disclosure rule. Targets that lack near-term interim milestones or rely heavily on offsets attract accusations of greenwashing.
  - In 2024–2025, net zero governance is undergoing stress testing. The SBTi's internal debate over the role of voluntary carbon markets in corporate targets made headlines in 2024, reflecting broader tensions between ambition and practicality. Several large corporations have quietly weakened or withdrawn targets in response to economic pressures and political backlash, particularly in the United States. Simultaneously, the EU's Green Claims Directive and UK FCA guidance are imposing greater legal accountability on net-zero marketing claims, while advances in high-durability removal credits (biochar, enhanced rock weathering) are expanding the supply of credible offsets.
