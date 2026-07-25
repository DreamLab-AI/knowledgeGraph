public:: true

# API Design
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:api-design",
  "@type": "Page",
  "title": "API Design",
  "vc:slug": "api-design",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:api-design",
  "@type": "Class",
  "label": "API Design",
  "definition": "API design is the discipline of specifying the contract, structure, and behaviour of an application programming interface so that it is consistent, intuitive, evolvable, and reliable for the developers who consume it. It covers resource and operation modelling, naming and conventions, request and response schemas, error semantics, authentication, versioning, and documentation, balancing usability against the constraints of the underlying system. Good API design treats the interface as a long-lived product whose contract must remain stable and backward-compatible while still allowing the implementation behind it to evolve.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-architecture",
      "label": "Software Architecture"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:interface-design",
        "label": "Interface Design"
      },
      {
        "@id": "urn:ngm:class:api-versioning",
        "label": "API Versioning"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:graph-ql",
        "label": "GraphQL"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:openapi",
        "label": "OpenAPI"
      },
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:backward-compatibility",
        "label": "Backward Compatibility"
      },
      {
        "@id": "urn:ngm:class:api-security",
        "label": "API Security"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:software-architecture",
        "label": "Software Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:rate-limiting",
        "label": "Rate Limiting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:interface-design",
        "label": "Interface Design"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:graph-ql",
        "label": "GraphQL"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:api-architecture",
      "label": "API Architecture"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - API design is the discipline of specifying the contract, structure, and behaviour of an application programming interface so it is consistent, intuitive, and evolvable for consumers. It spans resource modelling, [[Interface Design]], schemas, error semantics, [[API Security]], and [[API Versioning]], often expressed through specifications such as [[OpenAPI]] over [[HTTP]]. As a branch of [[Software Architecture]], it treats the interface as a long-lived product whose contract must stay backward-compatible while the implementation evolves.

- ### Overview
  - API design has become a first-class concern as systems decomposed into services and as public APIs turned into products and revenue channels.
  - Two architectural styles dominate: resource-oriented [[REST API]] design over HTTP, and query-oriented [[GraphQL]], each suiting different consumer needs.
  - A design-first workflow — specifying the contract before implementation, typically in [[OpenAPI]] — improves consistency, enables mocking, and decouples producer and consumer teams.
  - The defining constraint is contract stability: once consumers depend on an API, breaking changes are costly, making [[Backward Compatibility]] and [[API Versioning]] central design concerns.

- ### Key aspects
  - #### Contract and schema
    - Clear request and response schemas, status codes, and error formats define the interface precisely and machine-readably.
  - #### Consistency and conventions
    - Uniform naming, pagination, filtering, and error conventions reduce the cognitive load on consuming developers.
  - #### Evolvability
    - [[API Versioning]] and [[Backward Compatibility]] strategies allow the interface to grow without breaking existing clients.
  - #### Security
    - Authentication, authorisation, input validation, and [[Rate Limiting]] are designed into the contract rather than bolted on.

- ### Mechanisms
  - #### Design-first specification
    - Authoring an [[OpenAPI]] or schema definition before coding establishes the contract and drives code generation, mocks, and documentation.
  - #### Style selection
    - Choosing between [[REST API]], [[GraphQL]], or RPC styles based on consumer access patterns and coupling tolerance.
  - #### Gateway enforcement
    - An [[API Gateway]] enforces cross-cutting concerns — authentication, [[Rate Limiting]], routing, and observability — consistently across services.

- ### Applications
  - **Microservice interfaces** — well-designed APIs define the boundaries that make [[Microservices]] independently deployable.
  - **Public developer platforms** — product APIs prioritise developer experience, stable contracts, and thorough documentation.
  - **Partner integrations** — stable, versioned contracts support long-lived B2B [[Interoperability]].
  - **Internal platform APIs** — consistent internal interfaces accelerate team-to-team integration behind an [[API Gateway]].
  - **Mobile and frontend backends** — query-oriented designs like [[GraphQL]] minimise round trips for rich clients.

- ### Relationships
  - hasPart:: [[Interface Design]]
  - hasPart:: [[API Versioning]]
  - implements:: [[REST API]]
  - implements:: [[GraphQL]]
  - uses:: [[OpenAPI]]
  - uses:: [[HTTP]]
  - requires:: [[Backward Compatibility]]
  - requires:: [[API Security]]
  - enables:: [[Microservices]]
  - enables:: [[Interoperability]]
  - dependsOn:: [[Software Architecture]]
  - supports:: [[API Gateway]]
  - supports:: [[Rate Limiting]]
  - bridgesTo:: [[API Gateway]]
  - bridgesTo:: [[Microservices]]
  - relatedTo:: [[REST API]]
  - relatedTo:: [[Interface Design]]
  - contrastsWith:: [[GraphQL]]

- ### Provenance
  - sources:: Roy Fielding's dissertation on REST architectural style; OpenAPI Specification; Google API Design Guide; GraphQL specification
  - updated:: 2026-06-15
