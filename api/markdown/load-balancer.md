- ### Definition
  - A component that distributes incoming network or application traffic across multiple servers to improve throughput, reliability and resource utilisation.

- ### Semantic Classification
  - owl-class:: distributed-systems:LoadBalancer
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Network Architecture]]
  - bridges-to:: [[Microservices]]
  - requires:: [[Network Architecture]]
  - enables:: [[Scalability]], [[High Availability]]

- ### Content
  - A load balancer sits in front of a pool of backend servers and routes client requests according to a scheduling policy such as round robin, least connections or hashing. By spreading load it prevents any single server from becoming a bottleneck and can remove failed instances from rotation.
  - Load balancers operate at the transport layer or the application layer, support health checks and session persistence, and are fundamental to scalable, highly available services and microservice deployments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z