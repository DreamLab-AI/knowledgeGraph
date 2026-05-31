- ### Definition
  - WebSockets is a protocol providing full-duplex communication channels over a single TCP connection between a client and a server. It is widely used for real-time web applications.

- ### Semantic Classification
  - owl-class:: general:WebSockets
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Protocol]]
  - bridges-to:: [[Web Technology]]
  - requires:: [[HTTP]]
  - enables:: [[Network Communication]]

- ### Content
  - WebSockets establishes a persistent connection through an initial HTTP handshake, after which both client and server can send messages at any time without repeated request and response cycles. This reduces latency compared with polling approaches.
  - The protocol is used for chat applications, live dashboards, collaborative editing, and other cases where the server needs to push updates to the client. It is supported natively by web browsers and by libraries across many programming languages.

- ### Provenance
  - sources:: [[https://datatracker.ietf.org/doc/html/rfc6455]], [[https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API]]
  - migration-date:: 2026-05-29T00:00:00Z