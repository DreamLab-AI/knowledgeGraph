- ### Definition
  - Network transport is the layer of communication concerned with end-to-end delivery of data between application endpoints across a network. It builds on the underlying packet-routing service to provide services such as connection establishment, multiplexing, reliable or unreliable delivery, ordering, flow control, and congestion control. Transport protocols determine the guarantees and performance characteristics that distributed applications experience.
  - Related concepts: [[Transport Layer]] [[Internet Protocol]] [[TCP]] [[QUIC]] [[Congestion Control]]

- ### Overview
  - Network transport is where the raw, best-effort packet service of the network becomes a usable channel for applications. By adding multiplexing, reliability, ordering, and rate control on top of routed datagrams, the transport layer hides much of the network's unpredictability and lets distributed systems communicate with predictable semantics.

- ### Mechanisms
  - Connection management establishes, maintains, and tears down end-to-end associations between endpoints.
  - Reliable delivery uses sequence numbers, acknowledgements, and retransmission to recover from packet loss.
  - Flow control prevents a fast sender from overwhelming a slow receiver via windowing.
  - Congestion control adapts the sending rate to the perceived capacity of the network path.

- ### Applications
  - Reliable byte-stream transport for web and database traffic via TCP.
  - Low-latency and multiplexed transport for modern protocols via QUIC.
  - Real-time and message-oriented communication in distributed and robotics middleware.

- ### Relationships
  - implements:: [[Transport Layer]]
  - requires:: [[Internet Protocol]]
  - requires:: [[Network Protocol]]
  - has-part:: [[Flow Control]]
  - has-part:: [[Congestion Control]]
  - uses:: [[TCP]]
  - uses:: [[UDP]]
  - uses:: [[QUIC]]
  - enables:: [[Communication Protocol]]
  - enables:: [[Publish-Subscribe Pattern]]
  - enables:: [[WebSocket]]
  - supports:: [[Remote Procedure Call]]
  - supports:: [[Data Distribution Service]]
  - supports:: [[Message Passing]]
  - depends-on:: [[Packet Switching]]
  - related-to:: [[Networking]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation