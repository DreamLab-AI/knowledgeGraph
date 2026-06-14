public:: true

# websocket
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:db34f9f4a1cd8c5e2658edee541b489a75e5e53c719498267ee3dfc629d6293f",
  "@type": "Page",
  "vc:slug": "web-socket",
  "title": "websocket",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-socket",
  "@type": "Class",
  "label": "WebSocket",
  "definition": "WebSocket is an application-layer communication protocol defined in RFC 6455 that establishes a persistent, full-duplex channel over a single TCP connection, initiated via an HTTP/1.1 upgrade handshake. Unlike the request-response model of HTTP, WebSocket permits the server and client to send data frames independently at any time after connection establishment, enabling low-latency bidirectional communication. The protocol specifies a lightweight framing mechanism with opcodes for text, binary, ping/pong keepalives, and graceful connection close, and is extended by RFC 7692 for per-message DEFLATE compression. It is the de facto standard transport for real-time web applications including collaborative editing, live dashboards, chat systems, and streaming LLM token output.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-protocol",
      "label": "Network Protocol"
    }
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:full-duplex-communication", "label": "Full-Duplex Communication"},
      {"@id": "urn:ngm:class:rfc-6455", "label": "RFC 6455"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:transmission-control-protocol", "label": "Transmission Control Protocol"},
      {"@id": "urn:ngm:class:hypertext-transfer-protocol", "label": "Hypertext Transfer Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-processing", "label": "Real-time Processing"},
      {"@id": "urn:ngm:class:event-driven-architecture", "label": "Event Driven Architecture"},
      {"@id": "urn:ngm:class:server-sent-push", "label": "Server-Sent Push"},
      {"@id": "urn:ngm:class:collaborative-editing", "label": "Collaborative Editing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:transport-layer-security", "label": "Transport Layer Security"},
      {"@id": "urn:ngm:class:protocol-buffers", "label": "Protocol Buffers"},
      {"@id": "urn:ngm:class:message-framing", "label": "Message Framing"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"},
      {"@id": "urn:ngm:class:server-sent-events", "label": "Server-Sent Events"},
      {"@id": "urn:ngm:class:long-polling", "label": "Long Polling"},
      {"@id": "urn:ngm:class:webrtc", "label": "WebRTC"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:load-balancer", "label": "Load Balancer"},
      {"@id": "urn:ngm:class:publish-subscribe-pattern", "label": "Publish-Subscribe Pattern"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:message-queue", "label": "Message Queue"},
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:internet-engineering-task-force", "label": "Internet Engineering Task Force"},
      {"@id": "urn:ngm:class:world-wide-web-consortium", "label": "World Wide Web Consortium"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:ai-inference-serving", "label": "AI Inference Serving"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:latency", "label": "Latency"},
      {"@id": "urn:ngm:class:grpc", "label": "gRPC"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ws-protocol", "label": "WS Protocol"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - WebSocket (RFC 6455) is an application-layer [[Network Protocol]] that establishes a persistent, full-duplex communication channel over a single [[Transmission Control Protocol]] connection, initiated through an [[Hypertext Transfer Protocol]] upgrade handshake. Once the handshake completes, the connection transitions from HTTP semantics to the WebSocket framing model, allowing both client and server to send data independently without the overhead of request-response cycling. This architecture makes WebSocket the standard transport for any web application requiring low-latency bidirectional data flow, including [[Real-time Processing]], [[Collaborative Editing]], and streaming output from [[Large Language Model]] inference systems.

- ### Overview
  - WebSocket solves a fundamental limitation of [[Hypertext Transfer Protocol]]: HTTP is inherently half-duplex and stateless, requiring the client to initiate every interaction. For applications such as live dashboards, financial tickers, multiplayer games, and chat platforms, HTTP polling wastes bandwidth and introduces unnecessary latency.
  - WebSocket addresses this by:
    - Reusing an existing HTTP/1.1 connection and upgrading it via the `Upgrade: websocket` header — no new ports are required, easing firewall and proxy traversal.
    - Maintaining a long-lived, stateful TCP session between client and server, eliminating per-request connection setup costs.
    - Providing a minimal framing layer with a header as small as 2 bytes for short payloads, compared to hundreds of bytes for HTTP headers.
  - The protocol is defined in **RFC 6455** (IETF, 2011) for the core framing and handshake, and **RFC 7692** for the `permessage-deflate` compression extension. The browser-side JavaScript interface is standardised by the [[World Wide Web Consortium]] WebSocket API.
  - Maturity: WebSocket is a **mature** technology with universal browser support and first-class server library support across every major language and framework.

- ### Key Mechanisms
  - #### Handshake
    - The client sends an HTTP GET request with `Connection: Upgrade` and `Upgrade: websocket` headers, plus a base64-encoded 16-byte random nonce (`Sec-WebSocket-Key`).
    - The server responds with HTTP 101 Switching Protocols, returning a `Sec-WebSocket-Accept` header derived from the nonce via a SHA-1 hash. This mutual verification prevents cross-protocol attacks.
    - After the 101 response, both parties communicate exclusively using WebSocket frames; the HTTP framing is discarded.
  - #### Frame Format
    - Each WebSocket frame has: a 1-bit FIN flag, 3 reserved bits (for extensions), a 4-bit opcode, a 1-bit MASK flag, and a 7-bit (+ optional extended) payload length field.
    - **Opcodes**: `0x0` continuation, `0x1` text (UTF-8), `0x2` binary, `0x8` close, `0x9` ping, `0xA` pong.
    - Client-to-server frames are always masked with a 32-bit masking key to prevent cache-poisoning attacks on shared proxies.
  - #### Subprotocols and Extensions
    - The `Sec-WebSocket-Protocol` header negotiates an application-level subprotocol (e.g. [[STOMP]], [[MQTT over WebSocket]], GraphQL subscriptions) on top of the base framing.
    - Extensions (e.g. `permessage-deflate` from RFC 7692) are negotiated via `Sec-WebSocket-Extensions`, enabling per-message [[Data Compression]] to reduce bandwidth at the cost of CPU.
  - #### Keep-alive and Closure
    - Ping frames (opcode `0x9`) and pong responses (`0xA`) maintain connection liveness through [[Network Address Translation]] devices and load balancers that time out idle [[Transmission Control Protocol]] connections.
    - Graceful closure uses a two-step close handshake: either peer sends a close frame with a 2-byte status code; the other side echoes a close frame; both then terminate the TCP connection.

- ### Applications and Use Cases
  - #### Real-time Collaboration
    - [[Collaborative Editing]] tools (Google Docs-style) broadcast operational transforms or CRDT patches over WebSocket, allowing multiple users to see each other's cursors and edits with sub-100ms latency.
    - Whiteboard, kanban, and design tools (Figma, Miro) synchronise shared canvas state the same way.
  - #### Live Data Feeds
    - Financial platforms stream order book updates, trade executions, and price ticks via WebSocket — replacing polling that would be too slow and too expensive at market open.
    - Sports platforms deliver live scores, in-play statistics, and bet-acceptance windows.
    - IoT sensor telemetry from edge devices to monitoring dashboards commonly flows over [[MQTT over WebSocket]] or raw binary WebSocket frames.
  - #### AI and LLM Streaming
    - LLM inference servers (OpenAI, Anthropic, Ollama) stream token output to browser clients over WebSocket (or [[Server-Sent Events]]), enabling the progressive "typing" effect in chat UIs. WebSocket is preferred when the client also needs to send interrupts or control messages back to the server mid-stream.
    - Real-time speech-to-text services (Whisper API, Deepgram) stream transcript fragments back to clients over WebSocket connections opened during audio capture.
    - [[AI Inference Serving]] orchestration systems use WebSocket for bidirectional signalling between the inference gateway and downstream services.
  - #### Multiplayer Gaming and XR
    - Browser-based and WebXR games use WebSocket for authoritative server state synchronisation, player position updates, and chat.
    - Spatial computing applications coordinate multi-user shared scenes via WebSocket-backed pub-sub, with [[WebRTC]] handling the actual peer media streams.
  - #### Developer Tooling
    - Browser DevTools protocols (Chrome DevTools Protocol, DAP) are WebSocket-based, allowing IDEs and test harnesses to drive and inspect browser or runtime state programmatically.
    - Hot-module replacement in webpack/Vite development servers uses WebSocket to push updates to the browser without a page reload.

- ### Relationships
  - implements:: [[Full-Duplex Communication]]
  - implements:: [[RFC 6455]]
  - requires:: [[Transmission Control Protocol]]
  - requires:: [[Hypertext Transfer Protocol]]
  - enables:: [[Real-time Processing]]
  - enables:: [[Event Driven Architecture]]
  - enables:: [[Collaborative Editing]]
  - uses:: [[Transport Layer Security]]
  - uses:: [[Protocol Buffers]]
  - uses:: [[Message Framing]]
  - contrastsWith:: [[REST API]]
  - contrastsWith:: [[Server-Sent Events]]
  - contrastsWith:: [[Long Polling]]
  - contrastsWith:: [[WebRTC]]
  - dependsOn:: [[Load Balancer]]
  - dependsOn:: [[Publish-Subscribe Pattern]]
  - supports:: [[Message Queue]]
  - supports:: [[API Gateway]]
  - standardizedBy:: [[Internet Engineering Task Force]]
  - standardizedBy:: [[World Wide Web Consortium]]
  - bridges-to:: [[Large Language Model]]
  - bridges-to:: [[AI Inference Serving]]
  - relatedTo:: [[Latency]]
  - relatedTo:: [[gRPC]]

- ### Deployment and Operational Considerations
  - #### Scalability and State
    - WebSocket connections are long-lived and stateful, which challenges horizontal scaling. [[Load Balancer]] configurations must use sticky sessions (IP hash or cookie affinity) to ensure a client's frames always reach the same server process.
    - Alternatively, servers can be made stateless by routing all WebSocket messages through a shared [[Publish-Subscribe Pattern]] backend such as [[Redis]] Pub/Sub or [[Apache Kafka]], allowing any server instance to serve any client.
  - #### Security
    - Production deployments must use `wss://` (WebSocket Secure, i.e. WebSocket over [[Transport Layer Security]]) to prevent eavesdropping on shared networks.
    - Authentication tokens (JWT, session cookies) are typically passed during the HTTP upgrade handshake — either as a query parameter or via the `Authorization` header — since WebSocket frames do not carry HTTP headers after the upgrade.
    - Origin validation in the server's handshake handler prevents Cross-Site WebSocket Hijacking (CSWH) by rejecting connections from untrusted origins.
  - #### Proxy and Firewall Traversal
    - Because the initial handshake is HTTP, WebSocket connections traverse most corporate firewalls and reverse proxies that allow HTTP/HTTPS on ports 80/443.
    - Some transparent proxies buffer HTTP responses, breaking the upgrade. The `wss://` path mitigates this as proxies cannot inspect TLS-encrypted traffic and must pass it through.
  - #### Resource Management
    - Each open WebSocket connection consumes a file descriptor and memory on the server. High-concurrency servers (Node.js, Erlang, Go) are architecturally suited for managing tens of thousands of concurrent connections using event-loop or lightweight-process models.
    - Heartbeat intervals and server-side idle-connection timeouts are essential to reclaim resources from dropped clients that did not send a close frame.

- ### Standards and Specifications
  - **RFC 6455** (IETF, December 2011) — The WebSocket Protocol: defines the upgrade handshake, frame format, masking, opcodes, and close handshake.
  - **RFC 7692** (IETF, December 2015) — WebSocket Per-Message Compression: defines the `permessage-deflate` extension.
  - **W3C WebSocket API** — The browser-side JavaScript interface (`new WebSocket(url, protocols)`, `.send()`, `.onmessage`, `.onclose`).
  - **RFC 8441** (IETF, September 2018) — Bootstrapping WebSocket with HTTP/2: allows WebSocket streams to be multiplexed over an HTTP/2 connection using extended CONNECT, removing the dependency on HTTP/1.1.
  - Standardised by the [[Internet Engineering Task Force]] (protocol) and [[World Wide Web Consortium]] (browser API).

- ### Comparison with Related Protocols
  - **[[Server-Sent Events]] (SSE)**: server-to-client only, simpler (HTTP chunked transfer), lower server overhead; unsuitable when the client must send messages after initial request.
  - **[[Long Polling]]**: simulates push by holding an HTTP request open; high overhead, higher latency, does not scale to thousands of concurrent connections.
  - **[[gRPC]] streaming**: bidirectional over HTTP/2, strongly typed via Protocol Buffers, better for service-to-service; browser support requires the gRPC-Web proxy layer.
  - **[[WebRTC]]**: peer-to-peer media transport (audio, video, data channels); better for latency-critical media; more complex signalling setup; WebSocket commonly used for the signalling channel that bootstraps WebRTC.
  - **[[MQTT]] over WebSocket**: publish-subscribe messaging for IoT; MQTT is the application protocol; WebSocket provides the browser-compatible transport.

- ### Provenance
  - sources:: RFC 6455 (IETF 2011); RFC 7692 (IETF 2015); RFC 8441 (IETF 2018); W3C WebSocket API specification; MDN Web Docs WebSocket reference
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
