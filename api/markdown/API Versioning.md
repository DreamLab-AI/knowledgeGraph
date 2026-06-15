public:: true

# API Versioning

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:api-versioning", "@type": "Page", "title": "API Versioning", "vc:slug": "api-versioning", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:api-versioning",
  "@type": "Class",
  "label": "API Versioning",
  "definition": "API versioning is the discipline of evolving a programmatic interface over time while controlling the impact of changes on existing consumers. It defines how new versions are identified, published, and retired, and how backward compatibility is preserved or broken deliberately. Sound versioning lets providers innovate without forcing every client to upgrade in lockstep.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:api-management",
      "label": "API Management"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:api-management",
        "label": "API Management"
      },
      {
        "@id": "urn:ngm:class:api-lifecycle",
        "label": "API Lifecycle"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:semantic-versioning",
        "label": "Semantic Versioning"
      },
      {
        "@id": "urn:ngm:class:backward-compatibility",
        "label": "Backward Compatibility"
      },
      {
        "@id": "urn:ngm:class:deprecation",
        "label": "Deprecation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:backward-compatibility",
        "label": "Backward Compatibility"
      },
      {
        "@id": "urn:ngm:class:api-management",
        "label": "API Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:semantic-versioning",
        "label": "Semantic Versioning"
      },
      {
        "@id": "urn:ngm:class:openapi-specification",
        "label": "OpenAPI Specification"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:api-design",
        "label": "API Design"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:openapi-specification",
        "label": "OpenAPI Specification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:rest",
        "label": "REST"
      },
      {
        "@id": "urn:ngm:class:api-design",
        "label": "API Design"
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
  - API versioning is the discipline of evolving a programmatic interface over time while controlling the impact of changes on existing consumers. It defines how new versions are identified, published, and retired, and how backward compatibility is preserved or broken deliberately. Sound versioning lets providers innovate without forcing every client to upgrade in lockstep.
  - Related concepts: [[API Management]] [[Backward Compatibility]] [[Semantic Versioning]] [[API Design]] [[OpenAPI Specification]]
- ### Overview
  - Versioning strategies trade off clarity, routing complexity, and client burden. Common approaches encode the version in the URI path, in a request header, in a media type (content negotiation), or in a query parameter. Providers distinguish non-breaking changes — additive fields, new optional parameters — which can ship without a new version, from breaking changes that require one. A mature lifecycle pairs versioning with a deprecation policy: communicating sunset dates, supporting old versions for a defined window, and routing requests through an API gateway that can translate or shield clients during transitions.
- ### Key aspects
  - Version identification: URI path, header, media-type, or query-parameter schemes for selecting a version.
  - Compatibility classification: distinguishing additive non-breaking changes from breaking changes.
  - Semantic versioning: major.minor.patch conventions that signal the nature of a change to consumers.
  - Deprecation and sunsetting: announcing, supporting, and eventually retiring superseded versions on a schedule.
  - Contract documentation: machine-readable specifications such as OpenAPI that pin each version's contract.
- ### Applications
  - Evolving public REST and GraphQL APIs without breaking third-party integrations.
  - Coordinating independent deployment of microservices behind stable contracts.
  - Managing platform and partner ecosystems with long client lifecycles.
  - Gateway-mediated migration between major API versions.
- ### Relationships
  - partOf:: [[API Management]]
  - partOf:: [[API Lifecycle]]
  - hasPart:: [[Semantic Versioning]]
  - hasPart:: [[Backward Compatibility]]
  - hasPart:: [[Deprecation]]
  - supports:: [[Backward Compatibility]]
  - supports:: [[API Management]]
  - uses:: [[Semantic Versioning]]
  - uses:: [[OpenAPI Specification]]
  - requires:: [[API Design]]
  - enables:: [[Microservices]]
  - standardizedBy:: [[OpenAPI Specification]]
  - relatedTo:: [[API Gateway]]
  - relatedTo:: [[REST]]
  - relatedTo:: [[API Design]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
