public:: true

# Reference Architecture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fa2811a86652e94aa758f8d1cf9409f7613def1625f8f5bb73a26b146b26d486",
  "@type": "Page",
  "vc:slug": "reference-architecture",
  "title": "Reference Architecture",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:scalable-systems",
      "vc:label": "Scalable Systems"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:software-architecture",
      "vc:label": "Software Architecture"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10019"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Reference Architecture"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reference-architecture",
  "@type": "Class",
  "label": "Reference Architecture",
  "definition": "A standardized architectural template that provides proven structural frameworks and design patterns for building scalable, resilient enterprise applications, establishing shared vocabulary and best practices across development teams.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:architectural-pattern",
        "label": "Architectural Pattern"
      },
      {
        "@id": "urn:ngm:class:design-pattern",
        "label": "Design Pattern"
      },
      {
        "@id": "urn:ngm:class:architectural-layer",
        "label": "Architectural Layer"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:enterprise-architecture",
        "label": "Enterprise Architecture"
      },
      {
        "@id": "urn:ngm:class:software-architecture",
        "label": "Software Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:architecture-decision-record",
        "label": "Architecture Decision Record"
      },
      {
        "@id": "urn:ngm:class:technical-standard",
        "label": "Technical Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalable-systems",
        "label": "Scalable Systems"
      },
      {
        "@id": "urn:ngm:class:system-interoperability",
        "label": "System Interoperability"
      },
      {
        "@id": "urn:ngm:class:best-practice",
        "label": "Best Practice"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:domain-model",
        "label": "Domain Model"
      },
      {
        "@id": "urn:ngm:class:api-design",
        "label": "API Design"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:microservices-architecture",
        "label": "Microservices Architecture"
      },
      {
        "@id": "urn:ngm:class:event-driven-architecture",
        "label": "Event-Driven Architecture"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:digital-transformation",
        "label": "Digital Transformation"
      },
      {
        "@id": "urn:ngm:class:system-integration",
        "label": "System Integration"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:togaf",
        "label": "TOGAF"
      },
      {
        "@id": "urn:ngm:class:iso-iec-42010",
        "label": "ISO/IEC 42010"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bespoke-architecture",
        "label": "Bespoke Architecture"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:domain-driven-design",
        "label": "Domain-Driven Design"
      },
      {
        "@id": "urn:ngm:class:well-architected-framework",
        "label": "Well-Architected Framework"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:architectural-blueprint",
      "label": "Architectural Blueprint"
    },
    {
      "@id": "urn:ngm:class:architecture-template",
      "label": "Architecture Template"
    }
  ],
  "quality": 0.68,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:reference-architecture:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fa2811a86652e94aa758f8d1cf9409f7613def1625f8f5bb73a26b146b26d486"
  },
  "vc:resolutions": [
    {
      "raw": "[[Scalable Systems]]",
      "resolved": "urn:visionflow:linked:scalable-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Architecture]]",
      "resolved": "urn:visionflow:owl:class:software-architecture",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A standardized architectural template that provides proven structural frameworks and design patterns for building scalable, resilient enterprise applications, establishing shared vocabulary and best practices across development teams.

- ### Semantic Classification
  - owl-class:: spatial-computing:ReferenceArchitecture
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Software Architecture]]
  - enables:: [[Scalable Systems]]

- ### Content

  - #### Common Patterns
		- Layered (n-tier) architecture
		- Microservices architecture
		- Event-driven architecture
		- Serverless architecture
		- Domain-driven design
  - #### Frameworks
		- TOGAF for enterprise architecture
		- Azure Well-Architected Framework
		- Martin Fowler enterprise patterns (2003)
		- Netflix microservices as reference model
		- AWS reference architectures

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
