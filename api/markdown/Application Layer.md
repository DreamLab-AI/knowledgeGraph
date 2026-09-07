```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d61270ae0df68228db44232eba8c24bf0d582b919594ddb4db6d3a10b752943f",
  "@type": "Page",
  "vc:slug": "application-layer",
  "title": "Application Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:application-api",
      "vc:label": "Application API"
    },
    {
      "@id": "urn:visionflow:linked:business-logic-layer",
      "vc:label": "Business Logic Layer"
    },
    {
      "@id": "urn:visionflow:linked:business-services",
      "vc:label": "Business Services"
    },
    {
      "@id": "urn:visionflow:linked:content-delivery",
      "vc:label": "Content Delivery"
    },
    {
      "@id": "urn:visionflow:linked:domain-specific-applications",
      "vc:label": "Domain-Specific Applications"
    },
    {
      "@id": "urn:visionflow:linked:identity-services",
      "vc:label": "Identity Services"
    },
    {
      "@id": "urn:visionflow:linked:msf-taxonomy-2025",
      "vc:label": "MSF Taxonomy 2025"
    },
    {
      "@id": "urn:visionflow:linked:platform-services",
      "vc:label": "Platform Services"
    },
    {
      "@id": "urn:visionflow:linked:service-interface",
      "vc:label": "Service Interface"
    },
    {
      "@id": "urn:visionflow:linked:user-experience",
      "vc:label": "User Experience"
    },
    {
      "@id": "urn:visionflow:linked:user-interface-framework",
      "vc:label": "User Interface Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "Compute Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:cross-platform-interoperability",
      "vc:label": "Cross-Platform Interoperability"
    },
    {
      "@id": "urn:visionflow:owl:class:data-storage-layer",
      "vc:label": "Data Storage Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-architecture-stack",
      "vc:label": "Metaverse Architecture Stack"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-stack",
      "vc:label": "Metaverse Stack"
    },
    {
      "@id": "urn:visionflow:owl:class:network-infrastructure",
      "vc:label": "Network Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20160"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Application Layer"
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
  "@id": "urn:ngm:class:application-layer",
  "@type": "Class",
  "label": "Application Layer",
  "definition": "Software layer providing domain-specific application interfaces and services for metaverse experiences including education, commerce, healthcare, and entertainment applications.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:application-api",
        "label": "Application API"
      },
      {
        "@id": "urn:ngm:class:business-logic-layer",
        "label": "Business Logic Layer"
      },
      {
        "@id": "urn:ngm:class:service-interface",
        "label": "Service Interface"
      },
      {
        "@id": "urn:ngm:class:user-interface-framework",
        "label": "User Interface Framework"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compute-layer",
        "label": "Compute Layer"
      },
      {
        "@id": "urn:ngm:class:data-storage-layer",
        "label": "Data Storage Layer"
      },
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:business-services",
        "label": "Business Services"
      },
      {
        "@id": "urn:ngm:class:domain-specific-applications",
        "label": "Domain-Specific Applications"
      },
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      },
      {
        "@id": "urn:ngm:class:cross-platform-interoperability",
        "label": "Cross-Platform Interoperability"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:metaverse-architecture-stack",
        "label": "Metaverse Architecture Stack"
      },
      {
        "@id": "urn:ngm:class:metaverse-stack",
        "label": "Metaverse Stack"
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
  - Software layer providing domain-specific application interfaces and services for metaverse experiences including education, commerce, healthcare, and entertainment applications.

- ### Semantic Classification
  - owl-class:: spatial-computing:ApplicationLayer
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]]

- ### Relationships
  - has-part:: [[Application API]], [[Service Interface]], [[User Interface Framework]], [[Business Logic Layer]]
  - is-part-of:: [[Metaverse Stack]], [[Metaverse Architecture Stack]]
  - requires:: [[Compute Layer]], [[Data Storage Layer]], [[Network Infrastructure]]
  - enables:: [[Domain-Specific Applications]], [[User Experience]], [[Business Services]], [[Cross-Platform Interoperability]]
  - depends-on:: [[Platform Services]], [[Identity Services]], [[Content Delivery]]
  - bridges-to:: [[Telecollaboration]] (tc)

- ### Content
  Application Layer — content pending enrichment.

- ### Provenance
  - sources:: [[MSF Taxonomy 2025]]
  - migration-date:: 2026-04-26T00:00:00Z
