public:: true

# HTTP Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:http-protocol",
  "@type": "Page",
  "vc:slug": "http-protocol",
  "title": "HTTP Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:http-protocol",
  "@type": "Class",
  "label": "HTTP Protocol",
  "definition": "The Hypertext Transfer Protocol (HTTP) is a stateless, application-layer request-response protocol that forms the foundation of data communication on the World Wide Web, defining the format and semantics of messages exchanged between clients (browsers, API consumers) and servers (web servers, API gateways) over TCP/IP connections. Each HTTP transaction consists of a request message specifying a method (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS), a target URI, headers conveying metadata, and an optional body, followed by a response message containing a status code, headers, and an optional body. HTTP has evolved through versions 1.0, 1.1, 2, and 3, with each version improving multiplexing, compression, and connection management.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"},
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:web-socket-protocol", "label": "WebSocket Protocol"},
      {"@id": "urn:ngm:class:content-delivery-network-cdn", "label": "Content Delivery Network (CDN)"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:tls", "label": "TLS"},
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:graph-ql", "label": "GraphQL"},
      {"@id": "urn:ngm:class:open-api-specification", "label": "OpenAPI Specification"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[HTTP Protocol]] is the foundational application-layer [[Network Protocol]] of the World Wide Web, defining a stateless request-response message exchange pattern between clients and servers over [[TLS]]-secured TCP connections, enabling [[REST API]] communication, [[API Gateway]] routing, and the entire infrastructure of modern web services including [[Content Delivery Network (CDN)]] distribution and [[WebSocket Protocol]] upgrades.

- ### Relationships
  - [[HTTP Protocol]] is a specialisation of [[Network Protocol]] and is the primary protocol enabling [[REST API]] architectures and [[API Gateway]] routing in modern service-oriented systems. [[TLS]] (Transport Layer Security) provides the encryption layer for HTTPS, making confidential and authenticated HTTP communication the default for production deployments. [[WebSocket Protocol]] upgrades HTTP connections to persistent, bidirectional channels for real-time applications. [[GraphQL]] APIs use HTTP as their transport but with a single POST endpoint rather than the resource-oriented multi-endpoint model of REST. [[OpenAPI Specification]] provides machine-readable documentation of HTTP API contracts. [[Content Delivery Network (CDN)]] infrastructure caches HTTP responses at edge points of presence to reduce origin server load and latency.

- ### Content
  - HTTP was invented by Tim Berners-Lee at CERN and first documented in 1991 as part of the original World Wide Web proposal. HTTP/0.9 was a trivial protocol supporting only a GET method and returning HTML. HTTP/1.0, formalised in RFC 1945 (1996), introduced headers, status codes, and multiple content types. HTTP/1.1, standardised in RFC 2068 (1997) and updated in RFC 2616 (1999) then RFC 7230-7235 (2014), introduced persistent connections (keep-alive), chunked transfer encoding, virtual hosting through the Host header, and a comprehensive cache control model. HTTP/1.1 remained dominant for over a decade, but its head-of-line blocking behaviour — where a slow response blocks all subsequent responses on the same TCP connection — became a significant performance bottleneck as web pages grew to include dozens of resources.

  - HTTP/2, standardised in RFC 7540 (2015), introduced binary framing, multiplexing (multiple concurrent streams over a single connection), header compression (HPACK), and server push. Binary framing eliminates the ambiguity and verbosity of text-based HTTP/1.1 parsing and enables efficient multiplexing without head-of-line blocking at the HTTP layer. Header compression significantly reduces the overhead of repeated headers (particularly Cookie and User-Agent) across requests. HTTP/2 was adopted rapidly: by 2020, over 90% of browsers and the majority of major websites supported it. HTTP/3, standardised in RFC 9114 (2022), replaces TCP with QUIC as the transport protocol, eliminating TCP-level head-of-line blocking (since QUIC delivers each stream independently over UDP), reducing connection establishment latency through 0-RTT handshakes, and improving performance on lossy networks typical of mobile connections.

  - The HTTP semantics — methods, status codes, headers, and content negotiation — underpin the REST (Representational State Transfer) architectural style formulated by Roy Fielding in his 2000 doctoral dissertation. REST maps CRUD operations to HTTP methods (GET for read, POST for create, PUT/PATCH for update, DELETE for delete), using URI paths to identify resources and status codes (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error) to convey operation outcomes. The design of HTTP as a stateless protocol — where each request carries all information needed to process it without relying on server-side session state — was a deliberate architectural choice enabling horizontal scaling of web servers, since any server instance can handle any request.

  - In 2024-2025, HTTP continues to evolve in response to emerging requirements. The HTTP working group at the IETF has standardised extensions for structured headers, early hints (103 status code for preloading), priority signals, and secondary certificate authentication. The Model Context Protocol (MCP) used by AI agent systems employs HTTP as its transport, as do most LLM API endpoints. HTTP/3 adoption has reached approximately 30% of web traffic as of 2024. The protocol's stateless design creates challenges for stateful AI applications requiring persistent context, addressed through techniques such as session tokens in headers, WebSocket upgrades for streaming, and server-sent events (SSE) for unidirectional push from servers — the latter being the primary transport for streaming LLM token generation.

