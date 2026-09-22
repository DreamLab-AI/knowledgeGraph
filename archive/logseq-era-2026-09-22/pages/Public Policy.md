public:: true

# Public Policy

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:public-policy",
  "@type": "Page",
  "title": "Public Policy",
  "vc:slug": "public-policy",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:public-policy",
  "@type": "Class",
  "label": "Public Policy",
  "definition": "Public policy is the set of decisions, principles, and courses of action that governments and public institutions adopt to address societal problems and pursue collective goals. It encompasses the formulation, adoption, implementation, and evaluation of measures spanning law, regulation, spending, and service delivery, informed by evidence and shaped by competing interests and values. In digital contexts it determines how states govern technology, data, infrastructure, and rights.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance-framework",
      "label": "Governance Framework"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:stakeholder-engagement",
        "label": "Stakeholder Engagement"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Regulation"
      },
      {
        "@id": "urn:ngm:class:policy",
        "label": "Policy"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:policy",
        "label": "Policy"
      },
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Regulation"
      },
      {
        "@id": "urn:ngm:class:digital-governance",
        "label": "Digital Governance"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-governance",
        "label": "Digital Governance"
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
  - [[Public Policy]] sits within a [[Governance Framework]].
  - It enacts [[Regulation]] and [[Policy]].
  - It depends on [[Stakeholder Engagement]].
  - It connects to [[Digital Governance]].
- ### Overview
  - Public policy is how institutions choose to act on collective problems.
  - It moves through agenda-setting, formulation, adoption, and evaluation.
  - Evidence, values, and interests all shape policy choices.
  - Implementation and feedback close the policy cycle.
- ### Key aspects
  - Problem definition and agenda-setting.
  - Instrument choice across law, spending, and regulation.
  - Stakeholder consultation and engagement.
  - Implementation through institutions and services.
  - Evaluation and evidence feeding revision.
- ### Applications
  - Regulation of digital platforms and data.
  - Public investment in infrastructure and services.
  - Frameworks for rights and equitable access.
  - Evidence-based governance of emerging technology.
- ### Relationships
  - partOf:: [[Governance Framework]]
  - partOf:: [[Governance]]
  - requires:: [[Stakeholder Engagement]]
  - requires:: [[Decision Making]]
  - implements:: [[Regulation]]
  - implements:: [[Policy]]
  - uses:: [[Decision Making]]
  - enables:: [[Accountability]]
  - supports:: [[Accountability]]
  - supports:: [[Transparency]]
  - relatedTo:: [[Policy]]
  - relatedTo:: [[Regulation]]
  - relatedTo:: [[Digital Governance]]
  - relatedTo:: [[Governance]]
  - bridgesTo:: [[Digital Governance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
