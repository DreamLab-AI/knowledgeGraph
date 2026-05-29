- ### Definition
  - Server-Sent Events (SSE) is a W3C-standardised unidirectional server-to-client streaming protocol layered on HTTP/1.1 and HTTP/2, enabling servers to push a continuous stream of text-based events to browser or API clients without the bidirectional overhead of WebSockets. Each event is delimited by the text/event-stream MIME type and carries optional id, event, data, and retry fields, supporting automatic reconnection. SSE is widely adopted in AI inference APIs—including the Anthropic and OpenAI streaming endpoints—and in the Model Context Protocol (MCP) transport layer for streaming tool responses.

- ### Semantic Classification
  - owl-class:: server-sent-events:Server-Sent Events
  - owl-role:: Concept

- ### Relationships
  - enables [[Real-time Processing]]
  - enables [[Model Control Protocols like MCP]]
  - relatedTo [[Event Driven Architecture]]
  - relatedTo [[API Gateway]]
  - uses [[Communication Protocol]]

- ### Content
  Server-Sent Events (SSE) is standardised by the WHATWG Living Standard and referenced by the W3C HTML specification. It establishes a persistent HTTP connection over which the server emits newline-delimited event records in the text/event-stream format. Each record may include a data field (the event payload), an event field (a named event type), an id field (for reconnection cursor tracking), and a retry field (specifying the client's reconnection delay in milliseconds). The EventSource browser API provides a declarative subscription interface for consuming SSE streams, handling reconnection transparently.

  Compared to WebSockets, SSE is simpler to deploy behind standard HTTP reverse proxies, benefits from HTTP/2 multiplexing without requiring an upgrade handshake, and is appropriate for any use case requiring server-push without client-initiated messages. Its primary limitation is the unidirectional flow; applications requiring bidirectional streaming must use WebSockets or gRPC streams instead.

  In the AI inference domain, SSE is the dominant mechanism for streaming token-by-token responses from large language model APIs. The Model Context Protocol (MCP) specifies SSE as one of its two transport options for tool-call request-response pairs, enabling long-running agentic workflows to stream intermediate results without blocking. SSE streams are also used in real-time data dashboards, live log tailing, and collaborative editing event propagation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z