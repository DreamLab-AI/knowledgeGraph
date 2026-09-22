public:: true

# Open Government

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:open-government",
  "@type": "Page",
  "title": "Open Government",
  "vc:slug": "open-government",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-government",
  "@type": "Class",
  "label": "Open Government",
  "definition": "Open government is a governance approach grounded in transparency, citizen participation, and accountability, holding that public institutions should make their information and decision-making accessible and engage the public in shaping them. It is operationalised through open data, freedom-of-information mechanisms, participatory processes, and the use of digital technology to expose how government works. The aim is to build public trust, improve services, and enable scrutiny of the use of public resources.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-governance",
      "label": "Digital Governance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-governance",
        "label": "Digital Governance"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:stakeholder-engagement",
        "label": "Stakeholder Engagement"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      },
      {
        "@id": "urn:ngm:class:data-sharing",
        "label": "Data Sharing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-democracy",
        "label": "Digital Democracy"
      },
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:digital-governance",
        "label": "Digital Governance"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-democracy",
        "label": "Digital Democracy"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Open Government]] is part of [[Digital Governance]].
  - It rests on [[Transparency]] and [[Open Data]].
  - It strengthens [[Accountability]].
  - It advances [[Digital Democracy]].
- ### Overview
  - Open government treats public information and decisions as accessible by default.
  - Transparency, participation, and accountability are its core pillars.
  - Open data and freedom of information are key instruments.
  - Digital tools widen access and enable public scrutiny.
- ### Key aspects
  - Proactive publication of government information.
  - Open data for reuse and oversight.
  - Participatory and consultative decision-making.
  - Freedom-of-information rights and processes.
  - Accountability for the use of public resources.
- ### Applications
  - National open-data portals and dashboards.
  - Participatory budgeting and consultation platforms.
  - Transparency in procurement and spending.
  - Civic technology enabling public engagement.
- ### Relationships
  - partOf:: [[Digital Governance]]
  - partOf:: [[Governance]]
  - enables:: [[Accountability]]
  - enables:: [[Transparency]]
  - supports:: [[Transparency]]
  - supports:: [[Stakeholder Engagement]]
  - uses:: [[Open Data]]
  - uses:: [[Data Sharing]]
  - requires:: [[Transparency]]
  - requires:: [[Open Data]]
  - relatedTo:: [[Digital Democracy]]
  - relatedTo:: [[Open Source]]
  - relatedTo:: [[Digital Governance]]
  - relatedTo:: [[Accountability]]
  - bridgesTo:: [[Digital Democracy]]
  - dependsOn:: [[Open Data]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
