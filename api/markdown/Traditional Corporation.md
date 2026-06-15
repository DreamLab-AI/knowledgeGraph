public:: true

# Traditional Corporation

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:traditional-corporation", "@type": "Page", "title": "Traditional Corporation", "vc:slug": "traditional-corporation", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:traditional-corporation",
  "@type": "Class",
  "label": "Traditional Corporation",
  "definition": "A traditional corporation is a centralised legal entity owned by shareholders and directed by a board, granting limited liability and a hierarchical management structure under company law. Decision-making authority and capital are concentrated, with accountability mediated through fiduciary duties and regulatory oversight. It is the conventional organisational form against which decentralised autonomous organisations are contrasted.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      },
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:fiduciary-duty",
        "label": "Fiduciary Duty"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:rule-of-law",
        "label": "Rule Of Law"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:fiduciary-duty",
        "label": "Fiduciary Duty"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:fiduciary-duty",
        "label": "Fiduciary Duty"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A centralised legal entity governed by a board and owned by shareholders.
  - A conventional [[Governance]] form contrasted with the [[DAO]] model.
  - Bound by fiduciary duty and statutory regulation.
- ### Overview
  - Concentrates authority in management hierarchies and a board of directors.
  - Grants limited liability and tradable equity to owners.
  - Differs from on-chain organisations in custody, transparency and execution.
- ### Key aspects
  - Shareholder ownership and board direction define control.
  - Limited liability separates personal and corporate risk.
  - Fiduciary duties bind directors to act in owners' interests.
  - Regulatory oversight enforces accountability and reporting.
- ### Applications
  - Conventional commerce and capital formation.
  - Reference model for comparing decentralised governance.
  - Hybrid structures wrapping DAOs in legal entities.
- ### Relationships
  - subClassOf:: [[Governance]]
  - partOf:: [[Governance]]
  - contrastsWith:: [[DAO]]
  - contrastsWith:: [[Decentralized Governance]]
  - requires:: [[Fiduciary Duty]]
  - uses:: [[Treasury Management]]
  - supports:: [[Accountability]]
  - bridgesTo:: [[Rule Of Law]]
  - dependsOn:: [[Fiduciary Duty]]
  - relatedTo:: [[Governance]]
  - relatedTo:: [[Accountability]]
  - relatedTo:: [[Fiduciary Duty]]
  - relatedTo:: [[Treasury Management]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
