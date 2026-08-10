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

- ### Current Landscape (2026)
  - The Khronos Group and OpenXR Working Group ratified the Spatial Entities Extensions (baseline XR_EXT_spatial_entities) in June 2025 as part of OpenXR 1.1, establishing the first open reference standard for spatial computing with spatial anchors, plane and marker tracking, and cross-session persistence across XR runtimes.
  - IEEE 2874-2025, the Spatial Web Protocol, Architecture and Governance standard, was approved in May 2025, defining an interoperable reference model (built on ISO/IEC/IEEE 42010 and the IEEE 7000 series) via the Hyperspace Modelling Language (HSML) and Hyperspace Transaction Protocol (HSTP) to anchor AI agents, robots and IoT to a shared world model.
  - OGC GeoPose 1.0 (OGC 21-056r11) became a normative reference within IEEE 2874-2025, so every HSML entity is spatially bounded by a GeoPose, tightening the coupling between geospatial positioning and spatial-computing reference architectures for digital twins and physical AI.
  - ETSI's Augmented Reality Framework (ARF) advanced a graph-based reference model that separates a real-world "world graph" from the virtual scene graph, presented at the Metaverse Standards Forum's interoperable-anchoring webinar (30 April 2025) alongside open-source Unity editors and world-analysis modules.
  - Khronos and OGC announced the experimental KHR_gaussian_splatting and KHR_gaussian_splatting_compression_spz glTF extensions at SIGGRAPH 2025 (August), with collaborators including Niantic Spatial, Cesium and Esri, giving 3D-capture and spatial-AI pipelines an interoperable web-native asset path.
  - The Metaverse Standards Forum, now coordinating a coalition of roughly 2,600 members across Khronos, W3C and OGC, is driving the Open Metaverse Browser Initiative (OMBI) reference model around a Scene Object Model, the proposed SMAP service protocol and glTF (an ISO/IEC standard) as the portable asset baseline.
  - Open challenges as of 2026 remain the lack of a single shared coordinate/semantic reference across ecosystem-specific anchors, moving experimental extensions (Gaussian Splats, cross-platform ML inferencing) from community-input phase to ratified specs with conformance suites, and reconciling parallel reference stacks (OpenXR/glTF vs IEEE Spatial Web vs 3GPP edge spatial-computing work in TR 26.819).

- ### References
  - 1. DEVELOP3D (2025). Spatial Entities Extensions released by Khronos and OpenXR. https://develop3d.com/vr-ar-mr/spatial-entities-extensions-released-by-khronos-and-openxr/
  - 2. GeoRoundtable / OGC (2025). IEEE 2874-2025 Spatial Web, GeoPose and the open geospatial ecosystem (GeoPose Summit 2025). https://georoundtable.xyz/spatial-web-to-the-open-geospatial-consortium
  - 3. Metaverse Standards Forum (2025). Towards Interoperable Anchoring for XR (ETSI ARF webinar). https://metaverse-standards.org/uncategorized/towards-interoperable-anchoring-for-xr/
  - 4. Let's Data Science (2026). Khronos Presents Open Standards Roadmap at SIGGRAPH Asia 2025. https://letsdatascience.com/news/khronos-presents-open-standards-roadmap-at-siggraph-asia-202-ebff0720
  - 5. Open Metaverse Browser Initiative / Metaverse Standards Forum (2026). Open Standards for the Metaverse. https://omb.wiki/standards

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
