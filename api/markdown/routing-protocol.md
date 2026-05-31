- ### Definition
  - A protocol that determines how packets are forwarded between nodes in a network by computing and distributing routing information among routers.

- ### Semantic Classification
  - owl-class:: distributed-systems:RoutingProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Protocol]]
  - bridges-to:: [[Network Topology]]
  - requires:: [[Communication Protocol]], [[Network Architecture]]
  - enables:: [[Interoperability]]

- ### Content
  - A routing protocol governs how routers exchange reachability information and select paths through a network, enabling packets to travel from source to destination across multiple hops. Protocols differ in whether they use distance-vector, link-state or path-vector approaches.
  - Interior protocols operate within an administrative domain to find efficient internal paths, while exterior protocols coordinate routing between domains across the wider internet. Convergence speed, scalability and policy control are key design concerns.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z