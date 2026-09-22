public:: true

# Procurement

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:procurement",
  "@type": "Page",
  "title": "Procurement",
  "vc:slug": "procurement",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:procurement",
  "@type": "Class",
  "label": "Procurement",
  "definition": "Procurement is the organised process by which organisations acquire goods, services and works from external suppliers, encompassing needs identification, sourcing, tendering, evaluation, contracting and ongoing supplier management. It seeks to obtain the right inputs at the right quality, cost and time while managing risk and ensuring compliance with policy and regulation. Procurement is a key lever for cost control, value creation and resilience across the supply chain.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supply-chain",
      "label": "Supply Chain"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:logistics",
        "label": "Logistics"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      },
      {
        "@id": "urn:ngm:class:digital-economy",
        "label": "Digital Economy"
      },
      {
        "@id": "urn:ngm:class:enterprise-architecture",
        "label": "Enterprise Architecture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:logistics",
        "label": "Logistics"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:auditability",
        "label": "Auditability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:traceability",
        "label": "Traceability"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
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
  - Procurement is the organised process by which organisations acquire goods, services and works from external suppliers, encompassing needs identification, sourcing, tendering, evaluation, contracting and ongoing supplier management. It seeks to obtain the right inputs at the right quality, cost and time while managing risk and ensuring compliance with policy and regulation. Procurement is a key lever for cost control, value creation and resilience across the supply chain.
  - Key related concepts: [[Supply Chain]] [[Logistics]] [[Governance]] [[Compliance]] [[Risk Management]]
- ### Overview
  - [[Procurement]] is situated within the infrastructure domain and is defined as a subclass of [[Supply Chain]].
  - It connects to the wider knowledge graph through 17 typed relations spanning structural, functional and contrastive predicates.
  - As a mature concept, it represents established knowledge with stable terminology and well-understood boundaries.
- ### Key aspects
  - Relationship to [[Supply Chain]] situates this concept within its operational and conceptual context.
  - Relationship to [[Logistics]] situates this concept within its operational and conceptual context.
  - Relationship to [[Governance]] situates this concept within its operational and conceptual context.
  - Relationship to [[Compliance]] situates this concept within its operational and conceptual context.
  - Relationship to [[Risk Management]] situates this concept within its operational and conceptual context.
- ### Mechanisms
  - The concept is realised through its constituent parts and the standards, methods and dependencies enumerated in its relations.
  - It both requires upstream capabilities and enables downstream capabilities, forming part of a directed chain of dependencies in the graph.
- ### Applications
  - Practical use of [[Procurement]] appears wherever its enabled and supported concepts are deployed.
  - It is referenced by existing classes in the graph, anchoring those edges to a defined, rooted node.
- ### Relationships
  - partOf:: [[Supply Chain]]
  - hasPart:: [[Logistics]]
  - hasPart:: [[Compliance]]
  - hasPart:: [[Risk Management]]
  - requires:: [[Governance]]
  - requires:: [[Compliance]]
  - supports:: [[Supply Chain]]
  - supports:: [[Digital Economy]]
  - supports:: [[Enterprise Architecture]]
  - enables:: [[Logistics]]
  - enables:: [[Risk Management]]
  - dependsOn:: [[Governance]]
  - uses:: [[Standards]]
  - uses:: [[Auditability]]
  - relatedTo:: [[Infrastructure]]
  - relatedTo:: [[Traceability]]
  - relatedTo:: [[Compliance]]
  - subClassOf:: [[Supply Chain]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
