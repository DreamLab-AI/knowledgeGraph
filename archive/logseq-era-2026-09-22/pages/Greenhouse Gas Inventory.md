public:: true

# Greenhouse Gas Inventory

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:greenhouse-gas-inventory", "@type":"Page", "title":"Greenhouse Gas Inventory", "vc:slug":"greenhouse-gas-inventory", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:greenhouse-gas-inventory",
  "@type":"Class",
  "label":"Greenhouse Gas Inventory",
  "definition":"A greenhouse gas inventory is a systematic, periodic accounting of the greenhouse gas emissions and removals attributable to an organisation, activity or jurisdiction over a defined period, expressed in carbon-dioxide-equivalent units. It categorises emissions by source and by scope, applies emission factors to activity data, and forms the quantitative basis for target-setting, reporting and reduction strategies. Inventories underpin compliance, disclosure and progress toward net-zero commitments.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"}],
  "relations":{
    "requires":[
      {"@id":"urn:ngm:class:data","label":"Data"},
      {"@id":"urn:ngm:class:ghg-protocol","label":"GHG Protocol"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:carbon-neutrality","label":"Carbon Neutrality"},
      {"@id":"urn:ngm:class:net-zero","label":"Net Zero"},
      {"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:carbon-footprint","label":"Carbon Footprint"},
      {"@id":"urn:ngm:class:life-cycle-assessment","label":"Life Cycle Assessment"}
    ],
    "standardizedBy":[
      {"@id":"urn:ngm:class:ghg-protocol","label":"GHG Protocol"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:sustainability","label":"Sustainability"},
      {"@id":"urn:ngm:class:esg","label":"ESG"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:scope-3-emissions","label":"Scope 3 Emissions"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:carbon-offset","label":"Carbon Offset"},
      {"@id":"urn:ngm:class:carbon-footprint","label":"Carbon Footprint"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A greenhouse gas inventory is a structured accounting of emissions and removals, expressed in carbon-dioxide equivalents, that forms the foundation of [[Carbon Accounting]].
- It applies the [[GHG Protocol]] to organise emissions by scope and source, enabling [[Carbon Neutrality]] and [[Net Zero]] strategies.
- ### Overview
- An inventory establishes the emissions baseline against which targets are set and progress is measured.
- Activity data — fuel use, electricity, travel, materials — is multiplied by emission factors to estimate emissions.
- Emissions are partitioned into Scope 1 (direct), Scope 2 (purchased energy) and Scope 3 (value-chain) categories.
- ### Key aspects
- Organisational and operational boundaries defining what is counted.
- Activity data collection across direct operations and the value chain.
- Emission factors converting activity into carbon-dioxide-equivalent emissions.
- Scope classification distinguishing direct, energy and indirect sources.
- Verification and assurance to give the figures credibility.
- ### Mechanisms
- Consolidation approaches assign emissions by control or equity share.
- [[Life Cycle Assessment]] informs value-chain and product-level estimates.
- Recalculation policies maintain comparability when boundaries change.
- The [[GHG Protocol]] supplies the methodological backbone for consistency.
- ### Applications
- Corporate sustainability and [[ESG]] disclosure.
- Regulatory and mandatory emissions reporting.
- Setting and tracking science-based reduction targets.
- Quantifying residual emissions for offsetting and neutrality claims.
- ### Relationships
- subClassOf:: [[Carbon Accounting]]
- requires:: [[Data]]
- requires:: [[GHG Protocol]]
- enables:: [[Carbon Neutrality]]
- enables:: [[Net Zero]]
- enables:: [[Regulatory Compliance]]
- uses:: [[Carbon Footprint]]
- uses:: [[Life Cycle Assessment]]
- standardizedBy:: [[GHG Protocol]]
- supports:: [[Sustainability]]
- supports:: [[ESG]]
- hasPart:: [[Scope 3 Emissions]]
- relatedTo:: [[Carbon Offset]]
- partOf:: [[Carbon Accounting]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
