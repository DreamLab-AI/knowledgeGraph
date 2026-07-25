public:: true

# RESTful API
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:restful-api", "@type":"Page", "title":"RESTful API", "vc:slug":"restful-api", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:restful-api",
  "@type":"Class",
  "label":"RESTful API",
  "definition":"A RESTful API is a web application programming interface that follows the Representational State Transfer architectural style, exposing resources identified by URIs and manipulated through a uniform set of HTTP methods. It is stateless, treats responses as representations of resource state, and uses standard status codes and media types so clients and servers can evolve independently. RESTful design favours predictable, cacheable, hypermedia-driven interactions over the web.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:web-api","label":"Web API"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:http","label":"HTTP"},
      {"@id":"urn:ngm:class:hateoas","label":"HATEOAS"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:web-api","label":"Web API"},
      {"@id":"urn:ngm:class:api-design","label":"API Design"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:http","label":"HTTP"},
      {"@id":"urn:ngm:class:stateless-protocol","label":"Stateless Protocol"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:web-services","label":"Web Services"},
      {"@id":"urn:ngm:class:api-management","label":"API Management"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:rest-api","label":"REST API"},
      {"@id":"urn:ngm:class:idempotency","label":"Idempotency"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:http","label":"HTTP"},
      {"@id":"urn:ngm:class:caching","label":"Caching"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:api-design","label":"API Design"},
      {"@id":"urn:ngm:class:microservices","label":"Microservices"}
    ],
    "standardizedBy":[
      {"@id":"urn:ngm:class:openapi","label":"OpenAPI"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:graph-ql","label":"GraphQL"},
      {"@id":"urn:ngm:class:soap","label":"SOAP"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:api-gateway","label":"API Gateway"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:rest-api","label":"REST API"},
      {"@id":"urn:ngm:class:hateoas","label":"HATEOAS"}
    ]
  },
  "sameAs":[
    {"@id":"urn:ngm:class:rest-api","label":"REST API"}
  ],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A RESTful API is a [[Web API]] that applies the REST style, exposing URI-addressed resources manipulated through uniform [[HTTP]] methods.
  - It is a [[Stateless Protocol]] interaction using representations, status codes and media types, often described with [[OpenAPI]].

- ### Overview
  - REST treats everything as a resource with a stable identifier; clients act on resources by transferring representations of their state.
  - Statelessness means each request carries all context it needs, improving scalability and enabling [[Caching]].
  - A uniform interface and self-descriptive messages let clients and servers evolve independently, with hypermedia ([[HATEOAS]]) guiding navigation.

- ### Key aspects
  - Resource modelling and consistent URI design under [[API Design]].
  - HTTP verbs mapped to create, read, update and delete semantics.
  - Appropriate status codes, content negotiation and [[Idempotency]] guarantees.
  - Cacheability and layered architecture for scalability.

- ### Applications
  - Public and internal web services exposing data and operations.
  - Inter-service communication across [[Microservices]].
  - Backends for web and mobile clients, fronted by an [[API Gateway]].
  - Integration platforms managed via [[API Management]].

- ### Relationships
  - subClassOf:: [[Web API]]
  - hasPart:: [[HTTP]]
  - hasPart:: [[HATEOAS]]
  - partOf:: [[API Design]]
  - requires:: [[Stateless Protocol]]
  - enables:: [[Web Services]]
  - enables:: [[API Management]]
  - implements:: [[REST API]]
  - implements:: [[Idempotency]]
  - uses:: [[Caching]]
  - supports:: [[Microservices]]
  - standardizedBy:: [[OpenAPI]]
  - contrastsWith:: [[GraphQL]]
  - contrastsWith:: [[SOAP]]
  - bridgesTo:: [[API Gateway]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
