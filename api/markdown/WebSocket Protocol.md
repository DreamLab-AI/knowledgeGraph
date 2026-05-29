public:: true

# WebSocket Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:web-socket-protocol",
  "@type": "Page",
  "vc:slug": "web-socket-protocol",
  "title": "WebSocket Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-socket-protocol",
  "@type": "Class",
  "label": "WebSocket Protocol",
  "definition": "The WebSocket Protocol is a standardised full-duplex communication protocol defined in RFC 6455 (2011) that provides a persistent, low-latency bidirectional channel between a client and a server over a single TCP connection. It was designed to overcome the limitations of HTTP polling and long-polling by upgrading an initial HTTP handshake to a persistent framed message channel, enabling servers to push data to clients without client-initiated requests. WebSocket frames have minimal overhead — a 2-byte header for small messages — making it suitable for high-frequency data streams such as financial tickers, collaborative editing, gaming, and real-time AI agent communications. It is supported natively in all major browsers and server-side runtimes, and forms the transport layer for many real-time application protocols including STOMP, MQTT-over-WebSocket, and the OpenAI Realtime API.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:web-socket", "label": "WebSocket"},
      {"@id": "urn:ngm:class:realtime-communication", "label": "Realtime Communication"},
      {"@id": "urn:ngm:class:server-sent-events", "label": "Server-Sent Events"},
      {"@id": "urn:ngm:class:event-driven-architecture", "label": "Event Driven Architecture"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:realtime-collaboration", "label": "Realtime Collaboration"},
      {"@id": "urn:ngm:class:agent-event-stream", "label": "Agent Event Stream"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:networking-infrastructure", "label": "Networking Infrastructure"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:g-rpc", "label": "gRPC"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:asynchronous-communication", "label": "Asynchronous Communication"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The WebSocket Protocol (RFC 6455) provides a full-duplex, persistent TCP channel initiated via HTTP upgrade handshake, enabling low-overhead bidirectional [[Realtime Communication]] between clients and servers that powers [[Agent Event Stream]] delivery, collaborative editors, financial feeds, and live AI applications.

- ### Relationships
  - WebSocket and [[Server-Sent Events]] address overlapping use cases but with different trade-offs: WebSocket enables bidirectional framing (client and server both send), while SSE is unidirectional (server-to-client only) and simpler to implement over HTTP/2. [[Event Driven Architecture]] systems use WebSocket as the transport for event distribution to browser clients, since WebSocket's low latency makes it suitable for user-facing real-time interfaces. [[Realtime Collaboration]] applications — shared whiteboards, collaborative code editors, live cursor sharing — depend on WebSocket's low-latency bidirectional channel for sub-100ms synchronisation. [[Agent Event Stream]] delivery in AI systems increasingly uses WebSocket to stream token-by-token model outputs and intermediate reasoning steps to clients in real time. [[gRPC]] offers an alternative for server-to-server streaming with stronger typing and HTTP/2 multiplexing, but WebSocket remains dominant for browser-accessible real-time communication.

- ### Content
  - WebSocket was created to solve the "HTTP polling problem" that plagued early web applications requiring real-time updates. Before WebSocket, developers used polling (repeated short HTTP requests), long-polling (holding a request open until the server has data), and Comet frameworks — all of which imposed significant overhead from repeated HTTP headers and TCP connection establishment. WebSocket's upgrade handshake repurposes an existing HTTP/1.1 connection and replaces the HTTP framing with WebSocket's minimal frame format for the lifetime of the connection.

  - The RFC 6455 handshake is an HTTP GET request with the `Upgrade: websocket` header, a randomly generated `Sec-WebSocket-Key`, and a list of requested subprotocols. The server responds with HTTP 101 Switching Protocols and a `Sec-WebSocket-Accept` value that proves the server received and processed the key, preventing cross-protocol attacks. After the handshake, both parties communicate using WebSocket data frames with 2-byte (for payloads up to 125 bytes) or extended headers. Text frames carry UTF-8 and binary frames carry arbitrary bytes.

  - Security considerations for WebSocket deployments include the same-origin policy (browsers enforce WebSocket origin checks at the server level via the `Origin` header, not the browser), masking (client-to-server frames must be masked with a random key to prevent cache-poisoning attacks on transparent HTTP proxies), and TLS (WSS over TLS is required for production deployments to prevent eavesdropping and man-in-the-middle attacks). WebSocket connections are also subject to denial-of-service risks from connection exhaustion, requiring server-side connection limits and rate limiting.

  - The WebSocket Protocol is the transport for the OpenAI Realtime API, which streams audio input and output alongside function calls and text deltas over a persistent WebSocket connection. This use case illustrates the protocol's fitness for agentic AI scenarios where the client needs to receive a continuous stream of partial model outputs while simultaneously sending audio data. The bidirectional nature allows the client to interrupt generation mid-stream, enabling voice-interface applications that behave naturally under user interruptions.

  - HTTP/2 and HTTP/3 have partially addressed the limitations that motivated WebSocket through their own streaming and server push mechanisms, but WebSocket remains the dominant choice for browser-based real-time communication due to its simplicity, ubiquitous browser support, and the large ecosystem of libraries and proxies built around it. WebSocket support in HTTP/2 is defined in RFC 8441 (bootstrapping WebSocket from HTTP/2), allowing multiplexed WebSocket streams over a single TLS connection — a significant efficiency improvement for applications that open many simultaneous WebSocket channels.
