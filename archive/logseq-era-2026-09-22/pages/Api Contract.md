public:: true

# Api Contract
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:api-contract", "@type":"Page", "title":"Api Contract", "vc:slug":"api-contract", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:api-contract",
  "@type":"Class",
  "label":"Api Contract",
  "definition":"An API contract is the agreed, machine-readable specification of how a service may be called and what it will return, covering endpoints, request and response schemas, data types, status codes and error semantics. It functions as a formal agreement between the provider and consumers of an interface, allowing each side to develop and test independently against a shared definition. Expressed in formats such as OpenAPI or GraphQL schemas, the contract enables tooling for validation, mocking, code generation and compatibility checking across versions.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-schema","label":"Data Schema"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:schema","label":"Schema"},
      {"@id":"urn:ngm:class:api-versioning","label":"API Versioning"}
    ],
    "partOf":[{"@id":"urn:ngm:class:api-design","label":"API Design"}],
    "requires":[
      {"@id":"urn:ngm:class:data-schema","label":"Data Schema"},
      {"@id":"urn:ngm:class:schema","label":"Schema"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:openapi","label":"OpenAPI"},
      {"@id":"urn:ngm:class:rest-api","label":"REST API"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:interoperability","label":"Interoperability"},
      {"@id":"urn:ngm:class:backward-compatibility","label":"Backward Compatibility"},
      {"@id":"urn:ngm:class:data-validation","label":"Data Validation"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:microservices","label":"Microservices"},
      {"@id":"urn:ngm:class:api-gateway","label":"API Gateway"}
    ],
    "uses":[{"@id":"urn:ngm:class:semantic-versioning","label":"Semantic Versioning"}],
    "standardizedBy":[{"@id":"urn:ngm:class:openapi","label":"OpenAPI"}],
    "relatedTo":[
      {"@id":"urn:ngm:class:graph-ql","label":"GraphQL"},
      {"@id":"urn:ngm:class:api","label":"API"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- An API contract is the formal, machine-readable agreement between a service and its callers, defining endpoints, [[Schema]] for requests and responses, status codes and errors. It is a specialised [[Data Schema]] central to [[API Design]] and to enabling independent development on either side of an interface.
- ### Overview
- By fixing the shape of every interaction, the contract lets providers and consumers work in parallel: consumers code against the agreed definition while the provider implements it, and both validate against the same source of truth. Contracts expressed in [[OpenAPI]] or [[GraphQL]] schemas unlock automated tooling for mocking, validation and client generation.
- A disciplined contract is the basis of safe evolution: additive changes preserve [[Backward Compatibility]], while breaking changes are signalled through [[API Versioning]] and [[Semantic Versioning]].
- ### Key aspects
- Endpoint, method, request and response definitions with explicit data types.
- Error and status-code semantics that callers can rely on.
- Versioning and compatibility rules governing change.
- Machine-readable formats enabling generation, mocking and validation.
- Contract testing that verifies provider and consumer stay in agreement.
- ### Applications
- Coordinating [[Microservices]] that integrate through stable interfaces.
- Generating client SDKs and server stubs from a single definition.
- Enforcing [[Data Validation]] at the boundary via the agreed schema.
- Routing and policy enforcement at an [[API Gateway]].
- ### Relationships
- hasPart:: [[Schema]]
- hasPart:: [[API Versioning]]
- partOf:: [[API Design]]
- requires:: [[Data Schema]]
- requires:: [[Schema]]
- implements:: [[OpenAPI]]
- implements:: [[REST API]]
- enables:: [[Interoperability]]
- enables:: [[Backward Compatibility]]
- enables:: [[Data Validation]]
- supports:: [[Microservices]]
- supports:: [[API Gateway]]
- uses:: [[Semantic Versioning]]
- standardizedBy:: [[OpenAPI]]
- relatedTo:: [[GraphQL]]
- relatedTo:: [[API]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
