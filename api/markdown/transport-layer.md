- ### Definition
  - The Transport Layer is the stratum that provides end-to-end delivery of data between endpoints over a network. It sits above the Network Layer that routes packets and below the protocol and integration strata that rely on reliable channels. It contains segmentation, flow and congestion control, and connection management.

- ### Semantic Classification
  - owl-class:: net:TransportLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Transmission Control Protocol]], [[Congestion Control]]
  - requires:: [[Network Layer]]
  - enables:: [[Protocol Layer]], [[Integration Layer]]

- ### Content
  - The Transport Layer turns the best-effort delivery of the network beneath it into channels with defined reliability and ordering between endpoints. Typical members include segmentation and reassembly, acknowledgement and retransmission, flow and congestion control, and connection lifecycle management. It is concerned with end-to-end conversations rather than individual hops.
  - It requires the Network Layer to route packets toward their destination, and it enables the Protocol and Integration Layers that assume an orderly, reliable byte stream or datagram service. The guarantees chosen here, reliable or unreliable, shape what higher layers must handle themselves.
  - The layer bridges to the Transmission Control Protocol and congestion control, mechanisms that share network capacity fairly and recover from loss. Latency and throughput characteristics established here are inherited by every conversation above.

- ### Provenance
  - sources:: [[IETF (Internet Engineering Task Force)]]
  - migration-date:: 2026-05-29T00:00:00Z