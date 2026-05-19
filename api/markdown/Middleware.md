public:: true

# Middleware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e04ede167a0b5e50ff9ad496a7e3fef9d21953fe32dc6f7e4ae54e21325677c8",
  "@type": "Page",
  "vc:slug": "middleware",
  "title": "Middleware",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-communication",
      "vc:label": "Distributed Communication"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:ewg-msf-taxonomy",
      "vc:label": "EWG/MSF Taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-30170",
      "vc:label": "ISO/IEC 30170"
    },
    {
      "@id": "urn:visionflow:linked:message-queue",
      "vc:label": "Message Queue"
    },
    {
      "@id": "urn:visionflow:linked:resource-abstraction",
      "vc:label": "Resource Abstraction"
    },
    {
      "@id": "urn:visionflow:linked:service-discovery",
      "vc:label": "Service Discovery"
    },
    {
      "@id": "urn:visionflow:linked:service-integration",
      "vc:label": "Service Integration"
    },
    {
      "@id": "urn:visionflow:linked:service-registry",
      "vc:label": "Service Registry"
    },
    {
      "@id": "urn:visionflow:owl:class:api-gateway",
      "vc:label": "API Gateway"
    },
    {
      "@id": "urn:visionflow:owl:class:communication-protocol",
      "vc:label": "Communication Protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:computation-and-intelligence-domain",
      "vc:label": "ComputationAndIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-infrastructure",
      "vc:label": "Compute Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "ComputeLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:data-format",
      "vc:label": "Data Format"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "DataLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:distributed-system",
      "vc:label": "Distributed System"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure-domain",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:owl:class:network-infrastructure",
      "vc:label": "Network Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:operating-system",
      "vc:label": "Operating System"
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
      "vc:value": "20117"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Middleware"
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
  "@id": "urn:ngm:class:middleware",
  "@type": "Class",
  "label": "Middleware",
  "definition": "Software layer that mediates between applications and underlying services or infrastructure to enable communication, resource access, and interoperability.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    },
    {
      "@id": "urn:ngm:class:digital-infrastructure",
      "label": "Digital Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:message-queue",
        "label": "Message Queue"
      },
      {
        "@id": "urn:ngm:class:service-registry",
        "label": "Service Registry"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      },
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-communication",
        "label": "Distributed Communication"
      },
      {
        "@id": "urn:ngm:class:resource-abstraction",
        "label": "Resource Abstraction"
      },
      {
        "@id": "urn:ngm:class:service-integration",
        "label": "Service Integration"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-system",
        "label": "Distributed System"
      },
      {
        "@id": "urn:ngm:class:software-architecture",
        "label": "Software Architecture"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:middleware:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e04ede167a0b5e50ff9ad496a7e3fef9d21953fe32dc6f7e4ae54e21325677c8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Communication]]",
      "resolved": "urn:visionflow:linked:distributed-communication",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-gr-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[EWG/MSF Taxonomy]]",
      "resolved": "urn:visionflow:linked:ewg-msf-taxonomy",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 30170]]",
      "resolved": "urn:visionflow:linked:iso-iec-30170",
      "kind": "StubLink"
    },
    {
      "raw": "[[Message Queue]]",
      "resolved": "urn:visionflow:linked:message-queue",
      "kind": "StubLink"
    },
    {
      "raw": "[[Resource Abstraction]]",
      "resolved": "urn:visionflow:linked:resource-abstraction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Service Discovery]]",
      "resolved": "urn:visionflow:linked:service-discovery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Service Integration]]",
      "resolved": "urn:visionflow:linked:service-integration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Service Registry]]",
      "resolved": "urn:visionflow:linked:service-registry",
      "kind": "StubLink"
    },
    {
      "raw": "[[API Gateway]]",
      "resolved": "urn:visionflow:owl:class:api-gateway",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocol]]",
      "resolved": "urn:visionflow:owl:class:communication-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputationAndIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:computation-and-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compute Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:compute-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputeLayer]]",
      "resolved": "urn:visionflow:owl:class:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Format]]",
      "resolved": "urn:visionflow:owl:class:data-format",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DataLayer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed System]]",
      "resolved": "urn:visionflow:owl:class:distributed-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:owl:class:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:network-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Operating System]]",
      "resolved": "urn:visionflow:owl:class:operating-system",
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
  - Software layer that mediates between applications and underlying services or infrastructure to enable communication, resource access, and interoperability.
- ### Semantic Classification
  - owl-class:: spatial-computing:Middleware
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[ComputeLayer]], [[DataLayer]]
- ### Relationships
  - has-part:: [[Message Queue]], [[Service Registry]], [[Communication Protocol]], [[API Gateway]]
  - is-part-of:: [[Distributed System]], [[Software Architecture]]
  - requires:: [[Operating System]], [[Network Infrastructure]], [[Compute Infrastructure]]
  - enables:: [[Service Integration]], [[Interoperability]], [[Distributed Communication]], [[Resource Abstraction]]
  - depends-on:: [[Communication Protocol]], [[Data Format]], [[Service Discovery]]
- ### Content
  Middleware — content pending enrichment.
- ### Provenance
  - sources:: [[EWG/MSF Taxonomy]], [[ISO/IEC 30170]], [[ETSI GR ARF 010]]
  - migration-date:: 2026-04-26T00:00:00Z
