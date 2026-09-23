
The Transport Layer is the stratum that provides end-to-end delivery of data between endpoints over a network. It sits above the Network Layer that routes packets and below the protocol and integration strata that rely on reliable channels. It contains segmentation, flow and congestion control, and connection management.

- ### Semantic Classification

- ### Content
  - The Transport Layer turns the best-effort delivery of the network beneath it into channels with defined reliability and ordering between endpoints. Typical members include segmentation and reassembly, acknowledgement and retransmission, flow and congestion control, and connection lifecycle management. It is concerned with end-to-end conversations rather than individual hops.
  - It requires the Network Layer to route packets toward their destination, and it enables the Protocol and Integration Layers that assume an orderly, reliable byte stream or datagram service. The guarantees chosen here, reliable or unreliable, shape what higher layers must handle themselves.
  - The layer bridges to the Transmission Control Protocol and congestion control, mechanisms that share network capacity fairly and recover from loss. Latency and throughput characteristics established here are inherited by every conversation above.

- ### Current Landscape (2026)
  - QUIC (RFC 9000, standardised May 2021) has moved from experiment to default transport for HTTP/3 (RFC 9114): as of late 2025 Cloudflare measured roughly 35% of edge traffic on HTTP/3, with W3Techs reporting ~39% of sites supporting it, though real page-load telemetry sits nearer 21% depending on methodology.
  - Server and client support is now commodity: nginx has shipped HTTP/3 since 1.25.0, Caddy enables it by default since 2.6, and Safari 16+ turned HTTP/3 on for all users in September 2024, completing native support across Chrome, Edge, Firefox and Safari.
  - Multipath QUIC advanced through the IETF QUIC working group (draft-ietf-quic-multipath-15, July 2025), redefining connection IDs and packet-number spaces per path so a single connection can use several 4-tuples (e.g. Wi-Fi plus cellular) simultaneously rather than merely migrating between them.
  - Post-quantum key exchange has reached the transport handshake: following NIST's FIPS 203 (ML-KEM) in August 2024, hybrid schemes such as X-Wing (X25519 + ML-KEM-768) are being deployed in TLS 1.3 and QUIC, pushing ClientHello sizes past 1.2 KB and requiring multiple QUIC Initial datagrams; Cloudflare's October 2025 review notes PQ certificates remain unlikely to be broadly trusted before 2027.
  - MASQUE (HTTP/3 tunnelling via Extended CONNECT) is driving a shift in the VPN and proxy market, with pilots multiplexing WireGuard and IP-over-UDP inside QUIC to improve mobile resilience and resist deep-packet inspection, at the cost of double congestion control in tunnelled mode.
  - L4S (Low Latency, Low Loss, Scalable throughput; RFC 9330 architecture, 2023) continues to see operator and standards attention as the mechanism for sub-millisecond queuing delay, complementing QUIC's user-space congestion control.
  - The frontier challenge as of 2026 is throughput and cost, not latency: a peer-reviewed 2024 ACM study found QUIC delivering up to ~45% less throughput than HTTP/2 on gigabit links due to user-space processing overhead, so adoption on fast fixed networks has plateaued even as QUIC dominates lossy mobile paths.

- ### References
  - 1. Mattias Geniar (2026). QUIC and HTTP/3 in 2026: from Google experiment to IETF standard. https://ma.ttias.be/quic-http3-in-2026/
  - 2. Linou (2026). HTTP/3 Is at 35% Adoption: You Can't Call QUIC a Future Technology Anymore. https://dev.to/linou518/http3-is-at-35-adoption-you-cant-call-quic-a-future-technology-anymore-2ghm
  - 3. Liu, Ma, De Coninck, Bonaventure, Huitema & Kühlewind / IETF QUIC WG (2025). Multipath Extension for QUIC (draft-ietf-quic-multipath-15). https://datatracker.ietf.org/doc/draft-ietf-quic-multipath/15/
  - 4. Cloudflare (2025). State of the post-quantum Internet in 2025. https://blog.cloudflare.com/pq-2025/
  - 5. Briscoe, De Schepper, Bagnulo & White / IETF (2023). RFC 9330 — Low Latency, Low Loss, and Scalable Throughput (L4S) Internet Service: Architecture. https://datatracker.ietf.org/doc/rfc9330/
  - 6. arXiv (2025). Demystifying QUIC from the Specifications. https://arxiv.org/html/2511.08375v1

- ### Provenance

