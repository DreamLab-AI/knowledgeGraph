public:: true

# server-sent events
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bafbceee7dedb3238c4f42be9d91d438cb0dda6f2b156b661b5e0dcb6a3b28cb",
  "@type": "Page",
  "vc:slug": "server-sent-events",
  "title": "server-sent events",
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
  "@id": "urn:ngm:class:server-sent-events",
  "@type": "Class",
  "label": "Server-Sent Events",
  "definition": "Server-Sent Events (SSE) is a W3C and WHATWG-standardised unidirectional server-to-client push protocol layered atop HTTP/1.1 and HTTP/2, enabling servers to emit a continuous stream of newline-delimited text events to browser or API clients over a single persistent connection. Each event record may carry optional 'id', 'event', 'data', and 'retry' fields; clients reconnect automatically using the last-received event id as a cursor. SSE is consumed via the browser's EventSource API and is the dominant transport for streaming large-language-model inference outputs in APIs such as OpenAI and Anthropic, as well as in the Model Context Protocol (MCP) transport layer.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-data-streaming",
        "label": "Real-Time Data Streaming"
      },
      {
        "@id": "urn:ngm:class:server-push",
        "label": "Server Push"
      },
      {
        "@id": "urn:ngm:class:mentions-and-notifications",
        "label": "Live Notifications"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:event-driven-architecture",
        "label": "Event Driven Architecture"
      },
      {
        "@id": "urn:ngm:class:publish-subscribe-pattern",
        "label": "Publish-Subscribe Pattern"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:http2",
        "label": "HTTP/2"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-context-protocol",
        "label": "Model Context Protocol"
      },
      {
        "@id": "urn:ngm:class:llm-inference-api",
        "label": "LLM Inference API"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:websocket",
        "label": "WebSocket"
      },
      {
        "@id": "urn:ngm:class:long-polling",
        "label": "Long Polling"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:whatwg",
        "label": "WHATWG"
      },
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:reverse-proxy",
        "label": "Reverse Proxy"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:agentic-ai",
        "label": "Agentic AI"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:eventsource",
      "label": "EventSource"
    },
    {
      "@id": "urn:ngm:class:sse-protocol",
      "label": "SSE Protocol"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Server-Sent Events (SSE) is a [[W3C]] and [[WHATWG]] standardised unidirectional [[Streaming Protocol]] that allows a server to push a continuous stream of text-based events to a client over a single, persistent [[HTTP]] connection. Formalised in the [[WHATWG Living Standard]] for [[HTML]], SSE uses the `text/event-stream` [[MIME Type]] and the browser's [[EventSource API]] to provide transparent automatic reconnection and event-cursor tracking via the `Last-Event-ID` header. It is the dominant transport mechanism for streaming token-by-token responses from [[LLM Inference API]] services and forms one of the two official transports in the [[Model Context Protocol]] specification.

- ### Overview
  - SSE solves a fundamental web architecture problem: how to deliver a continuous, ordered sequence of server-generated events to a client without requiring the client to poll repeatedly or establish a bidirectional channel.
  - The protocol is intentionally simple — a persistent GET request with `Accept: text/event-stream` causes the server to hold the connection open and write newline-delimited event records as data becomes available.
  - SSE benefits from running natively over standard [[HTTP]] and [[HTTP/2]], meaning it traverses [[Reverse Proxy]] infrastructure, [[Load Balancer]] clusters, and [[API Gateway]] layers without requiring protocol-upgrade negotiation (unlike [[WebSocket]]).
  - Under [[HTTP/2]], SSE streams can be multiplexed over a single TCP connection alongside other requests, eliminating head-of-line blocking that affected HTTP/1.1 SSE deployments.
  - The protocol is widely supported in all modern browsers and server-side runtimes (Node.js, Python's asyncio ecosystem, Rust's async frameworks, Go's `net/http`), making it a pragmatic default for server-push scenarios.

- ### Key Mechanisms
  - **Event Record Format** — Each event consists of one or more field lines (`data:`, `event:`, `id:`, `retry:`) followed by a blank line as delimiter. Fields are plain UTF-8 text.
    - `data:` carries the event payload; multi-line payloads use multiple `data:` lines which are concatenated with newline.
    - `event:` names a custom event type; the [[EventSource API]] dispatches this as a typed DOM event.
    - `id:` sets the reconnection cursor; the browser stores the last seen id and sends it in `Last-Event-ID` on reconnect.
    - `retry:` specifies the client reconnect delay in milliseconds, overriding the browser's default back-off.
  - **Persistent Connection** — The server responds with `Content-Type: text/event-stream` and `Transfer-Encoding: chunked` (HTTP/1.1) or an open HTTP/2 stream, holding the connection alive for the duration of the stream.
  - **Automatic Reconnection** — The [[EventSource API]] automatically reconnects on connection loss, replaying from the last received `id`. This makes SSE resilient to transient network interruptions without application-level retry logic.
  - **CORS Handling** — SSE connections respect standard CORS policies; cross-origin SSE endpoints require appropriate `Access-Control-Allow-Origin` headers.
  - **Compression** — Responses can be gzip or Brotli compressed, provided the proxy chain supports streaming decompression, reducing bandwidth for verbose JSON payloads.

- ### Applications and Use Cases
  - **LLM Token Streaming** — The primary contemporary use: [[Large Language Model]] inference APIs (Anthropic Claude, OpenAI GPT, Mistral, Cohere) stream generated tokens incrementally via SSE, allowing the client to display partial responses and reduce perceived latency dramatically.
  - **Model Context Protocol (MCP)** — The [[Model Context Protocol]] specification defines SSE as its HTTP-based transport for bidirectional JSON-RPC-over-SSE, where the server pushes tool call results and the client sends requests over a companion POST endpoint.
  - **Real-Time Dashboards** — Financial [[Real-Time Data Streaming]] platforms, monitoring dashboards (Grafana Live), and operational consoles use SSE to push metric updates without polling overhead.
  - **Live Notifications** — Social platforms and collaboration tools (GitHub Actions log streaming, GitLab CI live output) use SSE for status updates and activity feeds.
  - **Collaborative Editing** — SSE delivers operational transformation or CRDT deltas in [[Collaborative Editing]] systems where only the server needs to fan-out updates.
  - **Log Tailing** — DevOps tooling streams container or application logs to browser UIs via SSE, replacing WebSocket for read-only log views.
  - **Progressive Data Loading** — APIs streaming large dataset results (search suggestions, RAG retrieval results) return partial responses as SSE events, enabling progressive UI rendering.
  - **IoT Sensor Feeds** — Lightweight [[Internet of Things]] sensor aggregators push readings to browser dashboards using SSE without the connection management overhead of [[WebSocket]] or [[MQTT]].

- ### Relationships
  - requires:: [[HTTP]]
  - requires:: [[Persistent Connection]]
  - enables:: [[Real-Time Data Streaming]]
  - enables:: [[Server Push]]
  - enables:: [[Token Streaming]]
  - enables:: [[Live Notifications]]
  - implements:: [[Event-Driven Architecture]]
  - implements:: [[Publish-Subscribe Pattern]]
  - uses:: [[EventSource API]]
  - uses:: [[HTTP/2]]
  - supports:: [[Model Context Protocol]]
  - supports:: [[LLM Inference API]]
  - supports:: [[Real-Time Dashboard]]
  - contrastsWith:: [[WebSocket]]
  - contrastsWith:: [[gRPC Streaming]]
  - contrastsWith:: [[Long Polling]]
  - standardizedBy:: [[WHATWG]]
  - standardizedBy:: [[W3C]]
  - relatedTo:: [[API Gateway]]
  - relatedTo:: [[Reverse Proxy]]
  - relatedTo:: [[Chunked Transfer Encoding]]
  - bridges-to:: [[Agentic AI]]
  - bridges-to:: [[Retrieval-Augmented Generation]]

- ### Comparison with Sibling Protocols
  - **SSE vs [[WebSocket]]** — WebSocket is bidirectional and uses a binary-capable upgrade handshake; SSE is unidirectional text-only but simpler to deploy, debug, and proxy. For server-only push, SSE is the lower-complexity choice.
  - **SSE vs [[Long Polling]]** — Long polling re-establishes an HTTP connection for each event; SSE maintains a single persistent connection with lower per-event overhead and native reconnect semantics.
  - **SSE vs [[gRPC Streaming]]** — gRPC server-streaming offers binary efficiency and schema-enforced contracts but requires HTTP/2 end-to-end and gRPC-specific tooling. SSE requires only standard HTTP and is trivially debuggable with `curl`.
  - **SSE vs [[WebRTC Data Channels]]** — WebRTC is peer-to-peer and NAT-traversal capable; SSE is strictly client-server. SSE is appropriate wherever a central server origin controls the stream.
  - **SSE vs [[MQTT]]** — MQTT is a lightweight publish-subscribe protocol for IoT constrained devices; SSE is HTTP-native and browser-first, unsuited to severely resource-constrained environments.

- ### Constraints and Limitations
  - **Unidirectional only** — SSE cannot carry client-to-server messages in-band; applications needing bidirectional messaging must pair SSE with a separate POST endpoint (as MCP does) or switch to [[WebSocket]].
  - **Browser connection limit** — HTTP/1.1 browsers cap concurrent connections per origin, historically limiting SSE to six simultaneous connections. [[HTTP/2]] resolves this via multiplexing.
  - **Text-only payload** — SSE encodes all data as UTF-8 text; binary payloads require Base64 encoding overhead unless the application layer wraps them in JSON.
  - **No built-in back-pressure** — Servers can emit events faster than clients can consume them; application-level flow control must be implemented explicitly.
  - **Proxy buffering** — Poorly configured reverse proxies (nginx default `proxy_buffering on`) can buffer SSE streams, preventing timely delivery. Correct configuration requires `X-Accel-Buffering: no` or equivalent.

- ### Standards and Context
  - The SSE specification is maintained by the [[WHATWG]] as part of the HTML Living Standard (section on "Server-sent events"), originally proposed by Ian Hickson.
  - The [[W3C]] HTML5 specification historically cross-referenced the SSE protocol, establishing it as a first-class web platform feature alongside [[WebSocket]] and [[XMLHttpRequest]].
  - SSE is defined under the MIME type `text/event-stream` registered with [[IANA]].
  - The [[Model Context Protocol]] (published by Anthropic, 2024) formally adopts SSE as its HTTP transport, accelerating SSE adoption in the AI infrastructure ecosystem.
  - [[CORS]] (Cross-Origin Resource Sharing) policies apply to EventSource connections, governed by the [[Fetch Standard]].
  - HTTP/2 multiplexing behaviour for SSE is defined by [[RFC 9113]] (HTTP/2) and [[RFC 7540]] (original HTTP/2), with no protocol-level changes required to SSE itself.

- ### Provenance
  - sources:: WHATWG HTML Living Standard §9.2 (Server-sent events); Model Context Protocol specification (Anthropic, 2024); MDN Web Docs EventSource API reference; RFC 9113 HTTP/2
  - updated:: 2026-06-13
