- ### Definition
  - Packet Switching is rooted in Network Communication and relates to [[Network Protocol]], [[TCP/IP]], [[Routing Protocol]]. Packet switching is a method of data transmission in which messages are divided into discrete packets that are routed independently across a shared network and reassembled at the destination.

- ### Overview
  - Packet switching breaks a message into small, independently addressed packets that traverse a shared network rather than reserving a dedicated circuit.
  - Each intermediate node inspects a packet's destination address and forwards it on, so different packets of one message may follow different paths.
  - At the destination, packets are reassembled in order, with protocols handling loss, duplication and reordering.

- ### Mechanisms
  - Messages are segmented into packets, each prefixed with addressing and control headers.
  - Routers forward packets hop by hop using routing tables and forwarding decisions.
  - Store-and-forward buffering lets nodes absorb bursts and select alternative paths.
  - Transport protocols reorder, acknowledge and retransmit packets to provide reliable delivery.

- ### Applications
  - The internet and all IP-based communication.
  - Voice-over-IP and real-time media carried as datagrams.
  - Mobile data networks multiplexing many users over shared spectrum.
  - Data-centre fabrics moving traffic between servers and storage.

- ### Relationships
  - subClassOf:: [[Network Communication]]
  - hasPart:: [[Routing Protocol]]
  - partOf:: [[Network Communication]]
  - uses:: [[TCP/IP]]
  - uses:: [[Network Protocol]]
  - uses:: [[Internet Protocol]]
  - dependsOn:: [[Network Layer]]
  - dependsOn:: [[Bandwidth]]
  - enables:: [[Quality of Service]]
  - supports:: [[Congestion Control]]
  - requires:: [[Routing Protocol]]
  - relatedTo:: [[Latency]]
  - relatedTo:: [[Throughput]]
  - relatedTo:: [[Network Communication]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation