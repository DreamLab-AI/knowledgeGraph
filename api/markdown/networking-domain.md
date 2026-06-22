- ### Definition
  - The Networking Domain classifies concepts concerned with the transport of data between computing endpoints across links and networks. It covers protocols, addressing, routing, and the layered models that organise communication. As a top-level subject classification, it scopes the movement of data rather than the applications that consume it or the security controls applied to it.

- ### Semantic Classification
  - owl-class:: net:NetworkingDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Interoperability Domain]], [[Information Security Domain]], [[Infrastructure Domain]]
  - has-part:: [[Transport Protocol]], [[Routing Protocol]], [[Peer-to-Peer Network]], [[Addressing Scheme]], [[Network Topology]]
  - requires:: [[Physical Link]], [[Addressing Scheme]]
  - enables:: [[Data Transport]], [[Distributed Communication]], [[Service Reachability]]

- ### Content
  - The Networking Domain organises the mechanisms that carry data between machines. Layered models separate concerns so that transport protocols provide reliable or best-effort delivery, routing protocols select paths across networks, and addressing schemes give endpoints identities. Peer-to-peer overlays, used heavily by distributed ledgers, build logical networks on top of this transport.
  - Networks are characterised by latency, throughput, and reliability, and protocol design trades these properties against one another. Topology determines resilience: a well-connected mesh tolerates link failure better than a hub-and-spoke arrangement. These properties shape what higher layers, including consensus and payment systems, can assume about message delivery.
  - As a top-level domain, networking underpins infrastructure, interoperability, and security. It bridges to the Interoperability Domain, which connects distinct networks, and to the Information Security Domain, which protects traffic. Keeping data transport in its own classification lets the ontology describe communication independently of the services and protections layered above it.

- ### Provenance
  - sources:: [[ISO/IEC 7498-1]]
  - migration-date:: 2026-05-29T00:00:00Z