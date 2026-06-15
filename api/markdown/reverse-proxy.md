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