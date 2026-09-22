public:: true

# Stateless Protocol
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:stateless-protocol", "@type":"Page", "title":"Stateless Protocol", "vc:slug":"stateless-protocol", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:stateless-protocol",
  "@type":"Class",
  "label":"Stateless Protocol",
  "definition":"A stateless protocol is a communication protocol in which each request from a client to a server is treated independently, carrying all the information needed to be understood without relying on stored context from previous requests. The server retains no session state between requests, which simplifies server design and improves scalability and resilience because any server instance can handle any request. HTTP is the canonical example; where continuity is needed, state is reintroduced at a higher layer through tokens, cookies or explicit session management.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:protocol","label":"Protocol"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:protocol","label":"Protocol"}],
    "implements":[{"@id":"urn:ngm:class:rest","label":"REST"}],
    "uses":[{"@id":"urn:ngm:class:http","label":"HTTP"}],
    "requires":[{"@id":"urn:ngm:class:client-server-architecture","label":"Client-Server Architecture"}],
    "enables":[{"@id":"urn:ngm:class:load-balancer","label":"Load Balancer"},{"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"}],
    "supports":[{"@id":"urn:ngm:class:idempotency","label":"Idempotency"},{"@id":"urn:ngm:class:reliability","label":"Reliability"}],
    "dependsOn":[{"@id":"urn:ngm:class:session-management","label":"Session Management"}],
    "contrastsWith":[{"@id":"urn:ngm:class:session-management","label":"Session Management"}],
    "relatedTo":[{"@id":"urn:ngm:class:http","label":"HTTP"},{"@id":"urn:ngm:class:rest","label":"REST"},{"@id":"urn:ngm:class:idempotency","label":"Idempotency"}],
    "bridgesTo":[{"@id":"urn:ngm:class:load-balancer","label":"Load Balancer"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A [[Stateless Protocol]] treats each request independently, requiring it to carry all context the server needs, holding no [[Session Management]] state between calls.
  - [[HTTP]] is the canonical example and a defining constraint of [[REST]].
  - Statelessness simplifies servers and improves scalability under [[Client-Server Architecture]].
- ### Overview
  - In a stateless design the server forgets each interaction the moment it responds, so requests are self-contained.
  - This means any server instance can serve any request, which is ideal for horizontal scaling behind a load balancer.
  - When applications need continuity, state is layered on top via tokens, cookies or external stores rather than in the protocol itself.
  - The trade-off is larger requests, since context that a stateful protocol would remember must be resent.
- ### Mechanisms
  - Self-contained requests: each message includes authentication, parameters and context needed to process it.
  - No server-side session: the server keeps no per-client memory between requests.
  - Externalised state: when needed, state lives in tokens, client cookies or shared caches and databases.
  - Idempotency support: stateless requests can be safely retried, aiding reliability.
- ### Applications
  - REST APIs and the web, which rest on stateless HTTP.
  - Horizontally scaled services where any node can handle any request.
  - Serverless and ephemeral compute that cannot retain long-lived session state.
  - Caching and CDN architectures that exploit request independence.
- ### Relationships
  - partOf:: [[Protocol]]
  - implements:: [[REST]]
  - uses:: [[HTTP]]
  - requires:: [[Client-Server Architecture]]
  - enables:: [[Load Balancer]]
  - enables:: [[Fault Tolerance]]
  - supports:: [[Idempotency]]
  - supports:: [[Reliability]]
  - dependsOn:: [[Session Management]]
  - contrastsWith:: [[Session Management]]
  - relatedTo:: [[HTTP]]
  - bridgesTo:: [[Load Balancer]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
