- ### Definition
  - A transport layer network protocol built on UDP that provides multiplexed, encrypted, low-latency connections and forms the basis of HTTP/3.

- ### Semantic Classification
  - owl-class:: distributed-systems:QUIC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Protocol]]
  - bridges-to:: [[Network Architecture]]
  - requires:: [[Communication Protocol]]
  - enables:: [[Scalability]]

- ### Content
  - QUIC is a transport protocol that runs over UDP and integrates connection establishment with cryptographic handshaking, reducing round trips compared with the traditional TCP and TLS sequence. It multiplexes independent streams over a single connection so that loss on one stream does not stall the others.
  - Originally developed at Google and later standardised by the IETF, QUIC underpins HTTP/3 and supports connection migration across changing network addresses, improving performance on mobile and lossy networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z