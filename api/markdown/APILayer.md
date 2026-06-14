public:: true

# APILayer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a740eb528a189c92d77fcead0dfe59e8563df9c6296a8e51b7a74b3823801c35",
  "@type": "Page",
  "vc:slug": "apilayer",
  "title": "APILayer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:linked:integration-layer",
      "vc:label": "Integration Layer"
    },
    {
      "@id": "urn:visionflow:linked:interface-layer",
      "vc:label": "Interface Layer"
    },
    {
      "@id": "urn:visionflow:linked:rest",
      "vc:label": "REST"
    },
    {
      "@id": "urn:visionflow:linked:open-api-specification",
      "vc:label": "OpenAPI Specification"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "APILayer"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:apilayer",
  "@type": "Class",
  "label": "APILayer",
  "definition": "The API Layer is the stratum that exposes a system's capabilities as callable, contractually defined endpoints. It sits above the application logic it fronts and below integration and interface strata that connect consumers. It contains endpoint definitions, request and response schemas, authentication hooks, and versioning.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Infra Software Engineering"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:integration-layer",
        "label": "Integration Layer"
      },
      {
        "@id": "urn:ngm:class:interface-layer",
        "label": "Interface Layer"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:apilayer:d8205bea56fc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a740eb528a189c92d77fcead0dfe59e8563df9c6296a8e51b7a74b3823801c35"
  },
  "vc:resolutions": [
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Integration Layer]]",
      "resolved": "urn:visionflow:linked:integration-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interface Layer]]",
      "resolved": "urn:visionflow:linked:interface-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[REST]]",
      "resolved": "urn:visionflow:linked:rest",
      "kind": "StubLink"
    },
    {
      "raw": "[[OpenAPI Specification]]",
      "resolved": "urn:visionflow:linked:open-api-specification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The API Layer is the stratum that exposes a system's capabilities as callable, contractually defined endpoints. It sits above the application logic it fronts and below integration and interface strata that connect consumers. It contains endpoint definitions, request and response schemas, authentication hooks, and versioning.

- ### Semantic Classification
  - owl-class:: api:APILayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[REST]], [[OpenAPI Specification]]
  - requires:: [[Application Layer]]
  - enables:: [[Integration Layer]], [[Interface Layer]]

- ### Content
  - The API Layer publishes a system's functions as well-defined endpoints that external code can invoke. Typical members include resource and operation definitions, request and response schemas, authentication and rate-limiting hooks, and version negotiation. It is the controlled doorway through which capabilities are offered.
  - It requires the Application Layer for the behaviour it surfaces, and it enables the Integration and Interface Layers, which connect and contract against it. Stable, documented endpoints here let consumers depend on the system without knowing its internals.
  - The layer bridges to REST and the OpenAPI specification, conventions that standardise how endpoints are described and consumed. Backward-compatibility guarantees made here govern how disruptive change is to integrators.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
