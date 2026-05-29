- ### Definition
  - WebSocket is an application-layer protocol (RFC 6455) that establishes a persistent, full-duplex communication channel over a single TCP connection, initiated via an HTTP/1.1 upgrade handshake. Unlike HTTP's request-response model, WebSocket allows both client and server to send data frames independently and at any time after the connection is established, making it the standard mechanism for low-latency bidirectional communication in web applications such as real-time dashboards, collaborative editing, chat systems, and live AI inference streaming. The protocol defines a framing mechanism with opcodes for text, binary, ping/pong keepalives, and connection close.

- ### Semantic Classification
  - owl-class:: web-socket:WebSocket
  - owl-role:: Concept

- ### Relationships
  - enables [[Real-time Processing]]
  - enables [[Event Driven Architecture]]
  - relatedTo [[REST API]]
  - relatedTo [[Network Protocol]]
  - uses [[Latency]]

- ### Content
  - The WebSocket handshake piggybacks on HTTP by sending an Upgrade: websocket header, allowing it to traverse firewalls and proxies that permit HTTP traffic without requiring new ports. Once established, the connection is a raw TCP channel with minimal framing overhead — a WebSocket frame header is as small as 2 bytes for short payloads — giving it significantly lower per-message overhead than polling or server-sent events (SSE) approaches.
  - WebSocket is specified in RFC 6455 (the core protocol) and IETF RFC 7692 (permessage-deflate compression extension). The W3C WebSocket API defines the browser-side JavaScript interface. Widely supported in all major browsers and server frameworks (Node.js ws, Python websockets, Java Netty, Go gorilla/websocket), WebSocket is the de facto standard for push notifications, live sports scores, multiplayer game state synchronisation, and streaming LLM token output from inference servers to browser clients.
  - For applications requiring sub-millisecond precision or binary protocol framing, WebSocket can carry Protocol Buffers or MessagePack payloads to reduce serialisation overhead. At scale, WebSocket connections impose stateful session management on load balancers, typically requiring sticky sessions or a shared pub-sub backend (Redis, Kafka) to fan out messages across multiple server instances. WebSocket over TLS (wss://) is mandated for production deployments to prevent data interception on shared networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z