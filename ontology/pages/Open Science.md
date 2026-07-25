public:: true

# Open Science
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:open-science", "@type":"Page", "title":"Open Science", "vc:slug":"open-science", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:open-science",
  "@type":"Class",
  "label":"Open Science",
  "definition":"Open science is a movement and set of practices aimed at making scientific research, data and dissemination accessible, transparent and reproducible for all members of society. It encompasses open access to publications, open data, open-source tools and open methodologies, lowering barriers to participation and verification of research. By promoting sharing throughout the research lifecycle, open science seeks to accelerate discovery, improve reproducibility and broaden public trust in science.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:governance","label":"Governance"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:scientific-method","label":"Scientific Method"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:reproducibility","label":"Reproducibility"},
      {"@id":"urn:ngm:class:transparency","label":"Transparency"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:open-access","label":"Open Access"},
      {"@id":"urn:ngm:class:peer-review","label":"Peer Review"},
      {"@id":"urn:ngm:class:knowledge-sharing","label":"Knowledge Sharing"},
      {"@id":"urn:ngm:class:collaboration","label":"Collaboration"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:open-data","label":"Open Data"},
      {"@id":"urn:ngm:class:open-source-software","label":"Open-Source Software"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:data-sharing","label":"Data Sharing"},
      {"@id":"urn:ngm:class:metadata","label":"Metadata"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:open-source","label":"Open Source"},
      {"@id":"urn:ngm:class:digital-commons","label":"Digital Commons"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:open-data","label":"Open Data"},
      {"@id":"urn:ngm:class:reproducibility","label":"Reproducibility"},
      {"@id":"urn:ngm:class:transparency","label":"Transparency"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Open science is a set of practices and a [[Governance]] approach that make research and its outputs accessible, transparent and reproducible. It draws on [[Open Access]], [[Open Data]] and [[Open-Source Software]] across the research lifecycle to strengthen [[Reproducibility]].

- ### Overview
  - Open science reframes research as a shared endeavour: publications, data, code, protocols and even peer review are made openly available so that others can scrutinise, reuse and build upon them.
  - The motivation is partly epistemic, because openness improves reproducibility and error correction, and partly social, because publicly funded knowledge should be a public good accessible beyond paywalls and institutional walls.
  - In practice it spans many overlapping movements, including open access, open data, open methodology, open educational resources and citizen participation, unified by the goal of transparency throughout the scientific process.

- ### Key aspects
  - Open access removes paywalls so that research literature is freely readable.
  - Open data and open code make the evidence and analyses behind findings inspectable and reusable.
  - Transparent methods, preregistration and open peer review expose how conclusions were reached.
  - Adherence to findable, accessible, interoperable and reusable data practices supports long-term reuse.

- ### Applications
  - Open-access publishing and preprint sharing across disciplines.
  - Public data repositories enabling reanalysis and meta-research.
  - Open-source scientific software and reproducible computational pipelines.
  - Collaborative, transparent research consortia and citizen-science projects.

- ### Relationships
  - subClassOf:: [[Governance]]
  - partOf:: [[Scientific Method]]
  - enables:: [[Reproducibility]]
  - enables:: [[Transparency]]
  - supports:: [[Open Access]]
  - supports:: [[Peer Review]]
  - supports:: [[Knowledge Sharing]]
  - supports:: [[Collaboration]]
  - uses:: [[Open Data]]
  - uses:: [[Open-Source Software]]
  - requires:: [[Data Sharing]]
  - requires:: [[Metadata]]
  - bridgesTo:: [[Open Source]]
  - bridgesTo:: [[Digital Commons]]
  - relatedTo:: [[Open Data]]
  - relatedTo:: [[Reproducibility]]
  - relatedTo:: [[Transparency]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
