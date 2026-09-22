public:: true

# Climate Governance
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:climate-governance", "@type":"Page", "title":"Climate Governance", "vc:slug":"climate-governance", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:climate-governance",
  "@type":"Class",
  "label":"Climate Governance",
  "definition":"Climate governance is the system of institutions, policies, agreements and accountability mechanisms through which societies steer collective action on climate change. It spans international treaties, national legislation, sub-national and corporate commitments, and the monitoring, reporting and verification arrangements that hold actors to their pledges. By coordinating mitigation and adaptation across scales, climate governance translates scientific assessment into binding and voluntary obligations. It draws on instruments such as carbon pricing, emissions targets and disclosure regimes to align economic activity with environmental limits.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:governance","label":"Governance"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:paris-agreement","label":"Paris Agreement"},
      {"@id":"urn:ngm:class:esg-reporting","label":"ESG Reporting System"},
      {"@id":"urn:ngm:class:sustainability-reporting","label":"Sustainability Reporting"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:climate-policy","label":"Climate Policy"},
      {"@id":"urn:ngm:class:net-zero","label":"Net Zero"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:decarbonisation","label":"Decarbonisation Strategy"},
      {"@id":"urn:ngm:class:carbon-footprint","label":"Carbon Footprint"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:net-zero","label":"Net Zero"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:greenhouse-gas-protocol","label":"Greenhouse Gas Protocol"},
      {"@id":"urn:ngm:class:life-cycle-assessment","label":"Life Cycle Assessment"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:scope-3-emissions","label":"Scope 3 Emissions"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:governance","label":"Governance"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:circular-economy","label":"Circular Economy"},
      {"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"},
      {"@id":"urn:ngm:class:climate-policy","label":"Climate Policy"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:decarbonisation","label":"Decarbonisation Strategy"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Climate Governance]] is the system of institutions, agreements and accountability mechanisms through which societies coordinate action on climate change.
- It encompasses the [[Paris Agreement]], national [[Climate Policy]], and the disclosure regimes embodied in [[ESG Reporting System]] and [[Sustainability Reporting]].
- By aligning economic activity with environmental limits it supports [[Decarbonisation Strategy]] and the pursuit of [[Net Zero]].
- ### Overview
- Climate governance operates across nested scales: international treaties set shared goals, national governments legislate, and sub-national and corporate actors translate commitments into operations.
- Monitoring, reporting and verification arrangements provide the transparency needed to hold parties accountable to their pledges.
- Voluntary disclosure frameworks and mandatory regulation increasingly converge, embedding climate risk into financial and corporate decision-making.
- The architecture combines binding obligations with flexible market and incentive instruments to mobilise mitigation and adaptation.
- ### Key aspects
- International coordination through frameworks such as the Paris Agreement and successive conferences of the parties.
- Carbon pricing and market mechanisms that internalise the cost of emissions.
- Emissions accounting standards including the Greenhouse Gas Protocol and scope-based inventories.
- Corporate disclosure and ESG reporting that subject firms to investor and regulatory scrutiny.
- ### Applications
- Setting and tracking national and corporate net-zero targets and transition plans.
- Structuring carbon markets, taxes and subsidies to drive decarbonisation.
- Mandating climate-related financial disclosure to inform capital allocation.
- Coordinating adaptation policy across jurisdictions exposed to climate risk.
- ### Relationships
- hasPart:: [[Paris Agreement]]
- hasPart:: [[ESG Reporting System]]
- hasPart:: [[Sustainability Reporting]]
- implements:: [[Climate Policy]]
- implements:: [[Net Zero]]
- supports:: [[Decarbonisation Strategy]]
- supports:: [[Carbon Footprint]]
- uses:: [[Greenhouse Gas Protocol]]
- uses:: [[Life Cycle Assessment]]
- requires:: [[Scope 3 Emissions]]
- partOf:: [[Governance]]
- relatedTo:: [[Circular Economy]]
- relatedTo:: [[Renewable Energy]]
- bridgesTo:: [[Decarbonisation Strategy]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
