public:: true

# Reverse Proxy
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:reverse-proxy", "@type":"Page", "title":"Reverse Proxy", "vc:slug":"reverse-proxy", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:reverse-proxy",
  "@type":"Class",
  "label":"Reverse Proxy",
  "definition":"A reverse proxy is a server that sits in front of one or more backend servers and forwards client requests to them, presenting a single entry point to the outside world. It terminates client connections, can offload TLS, cache responses, compress payloads and apply access controls before relaying traffic. By decoupling clients from backends it improves security, scalability and operational flexibility.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:network-architecture","label":"Network Architecture"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:ssl-termination","label":"SSL Termination"},
      {"@id":"urn:ngm:class:caching","label":"Caching"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:network-architecture","label":"Network Architecture"},
      {"@id":"urn:ngm:class:cloud-infrastructure","label":"Cloud Infrastructure"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:http","label":"HTTP"},
      {"@id":"urn:ngm:class:tcp-ip","label":"TCP/IP"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:high-availability","label":"High Availability"},
      {"@id":"urn:ngm:class:rate-limiting","label":"Rate Limiting"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:http","label":"HTTP"},
      {"@id":"urn:ngm:class:dns","label":"DNS"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:ssl-termination","label":"SSL Termination"},
      {"@id":"urn:ngm:class:caching","label":"Caching"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:microservices","label":"Microservices"},
      {"@id":"urn:ngm:class:web-application-firewall","label":"Web Application Firewall"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:api-gateway","label":"API Gateway"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:load-balancer","label":"Load Balancer"},
      {"@id":"urn:ngm:class:content-delivery-network","label":"Content Delivery Network"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:load-balancer","label":"Load Balancer"},
      {"@id":"urn:ngm:class:api-gateway","label":"API Gateway"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A reverse proxy fronts one or more backend servers within a [[Network Architecture]], forwarding client [[HTTP]] requests and returning responses while hiding backend topology.
  - It commonly performs [[SSL Termination]], [[Caching]] and access control, complementing a [[Load Balancer]].

- ### Overview
  - Unlike a forward proxy, which acts on behalf of clients, a reverse proxy acts on behalf of servers, accepting external connections and distributing them to internal services.
  - It provides a single, stable entry point so that backend services can be added, removed or relocated without affecting clients.
  - Popular implementations include general-purpose web servers configured in proxy mode and dedicated edge proxies.

- ### Key aspects
  - TLS offloading via [[SSL Termination]], decrypting once at the edge so backends serve plaintext internally.
  - Response [[Caching]] and compression to reduce backend load and latency.
  - Request routing by host or path, header rewriting and connection pooling.
  - Security functions such as [[Rate Limiting]] and integration with a [[Web Application Firewall]].

- ### Applications
  - Exposing internal [[Microservices]] behind a unified hostname.
  - Edge termination and caching in front of a [[Content Delivery Network]] origin.
  - Blue-green and canary release routing during deployments.
  - Centralised TLS, authentication and logging for web estates.

- ### Relationships
  - subClassOf:: [[Network Architecture]]
  - hasPart:: [[SSL Termination]]
  - hasPart:: [[Caching]]
  - partOf:: [[Cloud Infrastructure]]
  - requires:: [[HTTP]]
  - requires:: [[TCP/IP]]
  - enables:: [[High Availability]]
  - enables:: [[Rate Limiting]]
  - dependsOn:: [[DNS]]
  - uses:: [[SSL Termination]]
  - supports:: [[Microservices]]
  - supports:: [[Web Application Firewall]]
  - contrastsWith:: [[API Gateway]]
  - bridgesTo:: [[Load Balancer]]
  - relatedTo:: [[Load Balancer]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
