public:: true

# Working Group

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:working-group",
  "@type": "Page",
  "title": "Working Group",
  "vc:slug": "working-group",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:working-group",
  "@type": "Class",
  "label": "Working Group",
  "definition": "A working group is a chartered subgroup of a standards organisation or collaborative body tasked with developing, reviewing and reaching consensus on a specific technical topic or deliverable. It brings together domain experts who draft specifications, resolve issues and progress documents through review and approval stages. Working groups are the principal unit of work through which formal standards and specifications are produced.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      },
      {
        "@id": "urn:ngm:class:technical-committee",
        "label": "Technical Committee"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:technical-committee",
        "label": "Technical Committee"
      },
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
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
  - A working group is a chartered subgroup of a standards organisation or collaborative body tasked with developing, reviewing and reaching consensus on a specific technical topic or deliverable. It brings together domain experts who draft specifications, resolve issues and progress documents through review and approval stages. Working groups are the principal unit of work through which formal standards and specifications are produced.
  - Key related concepts: [[Standards Body]] [[Technical Committee]] [[Consensus]] [[Standards]] [[Collaboration]]
- ### Overview
  - [[Working Group]] is situated within the standards domain and is defined as a subclass of [[Standards Body]].
  - It connects to the wider knowledge graph through 16 typed relations spanning structural, functional and contrastive predicates.
  - As a mature concept, it represents established knowledge with stable terminology and well-understood boundaries.
- ### Key aspects
  - Relationship to [[Standards Body]] situates this concept within its operational and conceptual context.
  - Relationship to [[Technical Committee]] situates this concept within its operational and conceptual context.
  - Relationship to [[Consensus]] situates this concept within its operational and conceptual context.
  - Relationship to [[Standards]] situates this concept within its operational and conceptual context.
  - Relationship to [[Collaboration]] situates this concept within its operational and conceptual context.
- ### Mechanisms
  - The concept is realised through its constituent parts and the standards, methods and dependencies enumerated in its relations.
  - It both requires upstream capabilities and enables downstream capabilities, forming part of a directed chain of dependencies in the graph.
- ### Applications
  - Practical use of [[Working Group]] appears wherever its enabled and supported concepts are deployed.
  - It is referenced by existing classes in the graph, anchoring those edges to a defined, rooted node.
- ### Relationships
  - partOf:: [[Standards Body]]
  - partOf:: [[Technical Committee]]
  - hasPart:: [[Technical Committee]]
  - hasPart:: [[Consensus]]
  - requires:: [[Consensus]]
  - requires:: [[Collaboration]]
  - enables:: [[Standards]]
  - enables:: [[Interoperability]]
  - uses:: [[Collaboration]]
  - supports:: [[IETF]]
  - supports:: [[ISO]]
  - supports:: [[Standards]]
  - standardizedBy:: [[Standards Body]]
  - dependsOn:: [[Governance]]
  - relatedTo:: [[Governance]]
  - relatedTo:: [[Compliance]]
  - subClassOf:: [[Standards Body]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
