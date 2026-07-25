public:: true

# Web Api
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:web-api", "@type":"Page", "title":"Web Api", "vc:slug":"web-api", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:web-api",
  "@type":"Class",
  "label":"Web Api",
  "definition":"A web API is an application programming interface exposed over the web using HTTP, allowing programs to request and exchange data with a remote service rather than rendering pages for humans. It defines a contract of endpoints, request and response formats, authentication and error semantics, commonly returning structured data such as JSON. Web APIs are the backbone of integration between applications, mobile clients, microservices and third-party platforms, with REST and GraphQL being two prevailing architectural styles.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:api-design","label":"API Design"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:api-design","label":"API Design"}],
    "hasPart":[{"@id":"urn:ngm:class:http","label":"HTTP"}],
    "uses":[{"@id":"urn:ngm:class:http","label":"HTTP"}],
    "enables":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"},{"@id":"urn:ngm:class:microservices","label":"Microservices"}],
    "requires":[{"@id":"urn:ngm:class:client-server-architecture","label":"Client-Server Architecture"}],
    "supports":[{"@id":"urn:ngm:class:microservices","label":"Microservices"},{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "implements":[{"@id":"urn:ngm:class:rest","label":"REST"}],
    "dependsOn":[{"@id":"urn:ngm:class:web-standards","label":"Web Standards"}],
    "relatedTo":[{"@id":"urn:ngm:class:rest","label":"REST"},{"@id":"urn:ngm:class:client-server-architecture","label":"Client-Server Architecture"},{"@id":"urn:ngm:class:web-standards","label":"Web Standards"}],
    "bridgesTo":[{"@id":"urn:ngm:class:microservices","label":"Microservices"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A [[Web Api]] is an [[API Design]] exposed over [[HTTP]] so that programs, not browsers, can exchange data with a remote service.
  - It defines endpoints, request and response formats, authentication and error semantics, typically returning structured data.
  - It is the backbone of integration between applications, [[Microservices]] and third-party platforms.
- ### Overview
  - Where a website renders HTML for people, a web API returns machine-readable data for other software to consume.
  - A consumer issues HTTP requests to defined endpoints and receives structured responses such as JSON or XML.
  - The API contract specifies resources, methods, parameters, status codes and authentication so clients can integrate reliably.
  - REST and GraphQL are dominant styles, each with different trade-offs in flexibility and caching.
- ### Key aspects
  - Contract: a stable, documented interface decouples client and server evolution.
  - Transport: HTTP provides verbs, status codes and headers as the uniform protocol.
  - Data format: JSON is the common payload, with content negotiation supporting alternatives.
  - Cross-cutting concerns: authentication, rate limiting, versioning and error handling shape robustness.
- ### Applications
  - Mobile and single-page applications fetching data from backend services.
  - Microservice-to-microservice communication within distributed systems.
  - Public platform APIs enabling third-party developers to build integrations.
  - Automation and data pipelines pulling from or pushing to remote services.
- ### Relationships
  - partOf:: [[API Design]]
  - hasPart:: [[HTTP]]
  - uses:: [[HTTP]]
  - enables:: [[Interoperability]]
  - enables:: [[Microservices]]
  - requires:: [[Client-Server Architecture]]
  - supports:: [[Microservices]]
  - implements:: [[REST]]
  - dependsOn:: [[Web Standards]]
  - relatedTo:: [[REST]]
  - bridgesTo:: [[Microservices]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
