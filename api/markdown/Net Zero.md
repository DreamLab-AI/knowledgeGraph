public:: true

# Net Zero
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:net-zero", "@type":"Page", "title":"Net Zero", "vc:slug":"net-zero", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:net-zero",
  "@type":"Class",
  "label":"Net Zero",
  "definition":"Net zero is the state in which the greenhouse gases added to the atmosphere by human activity are balanced by an equivalent amount removed, so that net emissions over a given scope and timeframe are zero. Achieving it combines deep decarbonisation across energy, industry, transport, and land use with carbon removal to neutralise residual emissions that cannot yet be eliminated. Net zero is the central organising target of contemporary climate policy, codified in commitments such as the Paris Agreement, and is operationalised by governments and organisations through science-based pathways and reporting.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:sustainability","label":"Sustainability"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:sustainability","label":"Sustainability"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:decarbonisation","label":"Decarbonisation"},
      {"@id":"urn:ngm:class:carbon-offset","label":"Carbon Offset"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:climate-change","label":"Climate Change"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:circular-economy","label":"Circular Economy"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:paris-agreement","label":"Paris Agreement"},
      {"@id":"urn:ngm:class:esg","label":"ESG"}
    ],
    "standardizedBy":[
      {"@id":"urn:ngm:class:sustainability-reporting","label":"Sustainability Reporting"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:climate-change","label":"Climate Change"},
      {"@id":"urn:ngm:class:decarbonisation","label":"Decarbonisation"},
      {"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"},
      {"@id":"urn:ngm:class:carbon-offset","label":"Carbon Offset"},
      {"@id":"urn:ngm:class:circular-economy","label":"Circular Economy"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Net zero is the balance point where human-caused greenhouse gas emissions are matched by equivalent removals.
	- It is a target within [[Sustainability]] and the core objective of climate governance.
	- It is reached by combining [[Decarbonisation]] with [[Carbon Offset]] for residual emissions.
	- It responds directly to the drivers of [[Climate Change]].
- ### Overview
	- Net zero reframes climate ambition around a measurable balance rather than absolute zero emissions.
	- It demands deep cuts across power, industry, buildings, transport, and land use first, with removals reserved for hard-to-abate residuals.
	- Targets are typically set against a baseline year and a target year, with interim milestones along a science-based pathway.
	- Credibility hinges on transparent accounting, robust offsets, and verifiable reporting.
- ### Key aspects
	- Scope boundaries (direct, energy, and value-chain emissions) determine what is counted.
	- Mitigation hierarchy prioritises avoidance and reduction before compensation.
	- Carbon removal spans nature-based sinks and engineered capture.
	- Governance frameworks and disclosure standards underpin accountability.
- ### Applications
	- National and sub-national climate commitments aligned with the [[Paris Agreement]].
	- Corporate net-zero strategies integrated into [[ESG]] and [[Sustainability Reporting]].
	- Sectoral roadmaps for energy, heavy industry, and mobility.
	- Investment screening and transition finance toward low-carbon assets.
- ### Relationships
	- subClassOf:: [[Sustainability]]
	- partOf:: [[Sustainability]]
	- requires:: [[Decarbonisation]]
	- requires:: [[Carbon Offset]]
	- dependsOn:: [[Climate Change]]
	- enables:: [[Circular Economy]]
	- uses:: [[Renewable Energy]]
	- supports:: [[Paris Agreement]]
	- supports:: [[ESG]]
	- standardizedBy:: [[Sustainability Reporting]]
	- relatedTo:: [[Climate Change]]
	- relatedTo:: [[Decarbonisation]]
	- relatedTo:: [[Renewable Energy]]
	- relatedTo:: [[Carbon Offset]]
	- relatedTo:: [[Circular Economy]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
