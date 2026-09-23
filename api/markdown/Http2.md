
HTTP/2 is a major revision of the Hypertext Transfer Protocol that introduces a binary framing layer, multiplexed streams over a single TCP connection, header compression and server push. It reduces latency and head-of-line blocking at the application layer compared with HTTP/1.1 while preserving the protocol's semantics. It is standardised in RFC 7540 (later RFC 9113) and is widely deployed across the modern web.

- ### Overview
  - HTTP/2 keeps HTTP semantics (methods, status codes, headers) but replaces the textual HTTP/1.1 wire format with a binary framing layer carrying interleaved streams.
  - A single connection multiplexes many concurrent requests and responses, eliminating per-request connection overhead and most application-layer head-of-line blocking.
- ### Key aspects
  - Binary framing: messages decomposed into frames belonging to numbered streams.
  - Header compression (HPACK): reduces redundant header bytes across requests.
  - Server push and stream prioritisation: proactive resource delivery and ordering hints.
- ### Applications
  - High-performance web delivery for content-heavy and API-driven sites.
  - gRPC and other RPC frameworks layering on HTTP/2 multiplexing.
  - CDN and edge platforms minimising round trips for global clients.
- ### Provenance

