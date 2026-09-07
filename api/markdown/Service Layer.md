```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e0c64adbd82301edf4e7a3991f2d57053e636cb2fcdf7ec7152bb54f27b045b6",
  "@type": "Page",
  "vc:slug": "service-layer",
  "title": "Service Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:analytics-service",
      "vc:label": "Analytics Service"
    },
    {
      "@id": "urn:visionflow:linked:api-integration",
      "vc:label": "API Integration"
    },
    {
      "@id": "urn:visionflow:linked:api-management",
      "vc:label": "API Management"
    },
    {
      "@id": "urn:visionflow:linked:asset-service",
      "vc:label": "Asset Service"
    },
    {
      "@id": "urn:visionflow:linked:data-models",
      "vc:label": "Data Models"
    },
    {
      "@id": "urn:visionflow:linked:database-systems",
      "vc:label": "Database Systems"
    },
    {
      "@id": "urn:visionflow:linked:ewg-msf-taxonomy",
      "vc:label": "EWG/MSF Taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:identity-service",
      "vc:label": "Identity Service"
    },
    {
      "@id": "urn:visionflow:linked:message-queue",
      "vc:label": "Message Queue"
    },
    {
      "@id": "urn:visionflow:linked:physics-service",
      "vc:label": "Physics Service"
    },
    {
      "@id": "urn:visionflow:linked:service-composition",
      "vc:label": "Service Composition"
    },
    {
      "@id": "urn:visionflow:linked:service-discovery",
      "vc:label": "Service Discovery"
    },
    {
      "@id": "urn:visionflow:linked:service-orchestration",
      "vc:label": "Service Orchestration"
    },
    {
      "@id": "urn:visionflow:owl:class:api-gateway",
      "vc:label": "API Gateway"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "Data Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:microservices-architecture",
      "vc:label": "Microservices Architecture"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "Middleware Layer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20173"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Service Layer"
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
  "@id": "urn:ngm:class:service-layer",
  "@type": "Class",
  "label": "Service Layer",
  "definition": "Collection of reusable services exposed via APIs for identity, assets, physics, and analytics that enable application functionality and interoperability in virtual environments.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:analytics-service",
        "label": "Analytics Service"
      },
      {
        "@id": "urn:ngm:class:asset-service",
        "label": "Asset Service"
      },
      {
        "@id": "urn:ngm:class:identity-service",
        "label": "Identity Service"
      },
      {
        "@id": "urn:ngm:class:physics-service",
        "label": "Physics Service"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:api-management",
        "label": "API Management"
      },
      {
        "@id": "urn:ngm:class:data-models",
        "label": "Data Models"
      },
      {
        "@id": "urn:ngm:class:service-orchestration",
        "label": "Service Orchestration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:api-integration",
        "label": "API Integration"
      },
      {
        "@id": "urn:ngm:class:service-composition",
        "label": "Service Composition"
      },
      {
        "@id": "urn:ngm:class:service-discovery",
        "label": "Service Discovery"
      },
      {
        "@id": "urn:ngm:class:microservices-architecture",
        "label": "Microservices Architecture"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-layer",
        "label": "Data Layer"
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

- ### Definition
  - Collection of reusable services exposed via APIs for identity, assets, physics, and analytics that enable application functionality and interoperability in virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:ServiceLayer
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]]
  - implemented-in-layer:: [[Data Layer]]

- ### Relationships
  - has-part:: [[Identity Service]], [[Asset Service]], [[Physics Service]], [[Analytics Service]], [[API Gateway]]
  - is-part-of:: [[Data Layer]]
  - requires:: [[Service Orchestration]], [[API Management]], [[Data Models]]
  - enables:: [[Service Composition]], [[API Integration]], [[Microservices Architecture]], [[Service Discovery]]
  - depends-on:: [[Middleware Layer]], [[Database Systems]], [[Message Queue]]

- ### Content
  Service Layer — content pending enrichment.

- ### Provenance
  - sources:: [[EWG/MSF Taxonomy]]
  - migration-date:: 2026-04-26T00:00:00Z
