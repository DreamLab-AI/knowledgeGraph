schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#PlatformMiddleware
legacy_uri:: urn:visionclaw:concept:spatial-computing:platform-middleware
public:: true

# Platform Middleware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d1eeeb7371fac1de76f2202d41238bcb5e08c2719a309a1ec1fb851d5985d426",
  "@type": "Page",
  "vc:slug": "platform-middleware",
  "title": "Platform Middleware",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:software-infrastructure",
      "vc:label": "Software Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:system-interoperability",
      "vc:label": "System Interoperability"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-05dd8279b688"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#PlatformMiddleware"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10008"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Platform Middleware"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:platform-middleware"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:platform-middleware"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d1eeeb7371fac1de76f2202d41238bcb5e08c2719a309a1ec1fb851d5985d426@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:platform-middleware",
  "@type": "OntologyClass",
  "label": "Platform Middleware",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:software-infrastructure",
      "vc:label": "Software Infrastructure"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:d1eeeb7371fac1de76f2202d41238bcb5e08c2719a309a1ec1fb851d5985d426"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d1eeeb7371fac1de76f2202d41238bcb5e08c2719a309a1ec1fb851d5985d426@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A software layer that connects operating systems, applications, and services by providing common capabilities such as API management, message routing, authentication, and data integration to enable seamless communication between diverse systems.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:owl:class:system-interoperability",
      "vc:label": "System Interoperability"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:platform-middleware:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d1eeeb7371fac1de76f2202d41238bcb5e08c2719a309a1ec1fb851d5985d426"
  },
  "vc:resolutions": [
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:software-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[System Interoperability]]",
      "resolved": "urn:visionflow:owl:class:system-interoperability",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d1eeeb7371fac1de76f2202d41238bcb5e08c2719a309a1ec1fb851d5985d426@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A software layer that connects operating systems, applications, and services by providing common capabilities such as API management, message routing, authentication, and data integration to enable seamless communication between diverse systems.

- ### Semantic Classification
  - owl-class:: spatial-computing:PlatformMiddleware
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Software Infrastructure]]
  - enables:: [[System Interoperability]]

- ### Content

  - #### Types
		- Message-Oriented Middleware (MOM) for async messaging
		- Enterprise Service Bus (ESB) for service integration
		- API gateways for interface management
		- Integration Platform as a Service (iPaaS) for cloud
		- Data integration middleware for ETL processes
  - #### Leading Platforms
		- IBM WebSphere for enterprise integration
		- Microsoft Azure Logic Apps for cloud workflows
		- MuleSoft Anypoint for API-led connectivity
		- Boomi for hybrid integration
		- Market projected at $28.7B in 2024

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
