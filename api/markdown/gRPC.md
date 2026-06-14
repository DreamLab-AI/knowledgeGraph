public:: true

# gRPC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:g-rpc",
  "@type": "Page",
  "vc:slug": "g-rpc",
  "title": "gRPC",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:g-rpc",
  "@type": "Class",
  "label": "gRPC",
  "definition": "gRPC (gRPC Remote Procedure Call) is an open-source, high-performance remote procedure call framework developed by Google and released in 2015, built on HTTP/2 transport and Protocol Buffers as the interface definition language and serialisation format. It supports four communication patterns—unary, server-streaming, client-streaming, and bidirectional streaming—enabling efficient, strongly typed, low-latency communication between services in polyglot distributed systems. gRPC generates client and server stubs in over a dozen programming languages from a single .proto service definition, making it the dominant choice for internal microservices communication in cloud-native architectures. Its binary encoding and multiplexed HTTP/2 connections deliver significantly lower overhead than REST/JSON at high throughput.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"},
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:protocol-buffer", "label": "Protocol Buffer"},
      {"@id": "urn:ngm:class:http2", "label": "HTTP/2"},
      {"@id": "urn:ngm:class:tls", "label": "TLS"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:proto-file", "label": "Proto File"},
      {"@id": "urn:ngm:class:stub-generation", "label": "Stub Generation"},
      {"@id": "urn:ngm:class:bidirectional-streaming", "label": "Bidirectional Streaming"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:remote-procedure-call", "label": "Remote Procedure Call"},
      {"@id": "urn:ngm:class:service-interface-definition", "label": "Service Interface Definition"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cloud-native-applications", "label": "Cloud-Native Applications"},
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"},
      {"@id": "urn:ngm:class:envoy-proxy", "label": "Envoy Proxy"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"},
      {"@id": "urn:ngm:class:realtime-communication", "label": "Realtime Communication"},
      {"@id": "urn:ngm:class:service-mesh", "label": "Service Mesh"},
      {"@id": "urn:ngm:class:polyglot-microservices", "label": "Polyglot Microservices"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:load-balancing", "label": "Load Balancing"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"},
      {"@id": "urn:ngm:class:graphql", "label": "GraphQL"},
      {"@id": "urn:ngm:class:websocket", "label": "WebSocket"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:cloud-native-computing-foundation", "label": "Cloud Native Computing Foundation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:mobile-computing", "label": "Mobile Computing"},
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:api-standard", "label": "API Standard"},
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:mutual-tls", "label": "Mutual TLS"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:grpc-framework", "label": "gRPC Framework"},
    {"@id": "urn:ngm:class:google-remote-procedure-call", "label": "Google Remote Procedure Call"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - [[gRPC]] is a high-performance remote procedure call framework using [[Protocol Buffer]] serialisation over HTTP/2, generating polyglot client/server stubs from a single service definition to enable low-latency, strongly typed communication in [[Microservices Architecture]] and [[Distributed System]] deployments.
- ### Relationships
  - [[gRPC]] competes with and complements [[REST API]] in service-to-service communication, offering lower latency and binary efficiency where REST's human-readability is not required. Its native streaming capabilities power [[Realtime Communication]] use cases such as live data feeds and bidirectional chat. In [[Cloud-Native Applications]], gRPC is the standard internal RPC layer, orchestrated by [[Kubernetes]] service meshes that provide load balancing, mutual TLS, and observability. The [[Protocol Buffer]] schema provides a strongly typed contract aligned with [[API Standard]] governance practices in enterprise [[Distributed System]] architectures.
- ### Content
  - gRPC was designed to solve a specific problem that arose at Google's scale: how to provide a consistent, efficient, and language-agnostic mechanism for hundreds of internal services to call each other across a polyglot environment. Before gRPC, teams maintained bespoke RPC implementations or relied on REST with JSON, which imposed serialisation overhead and lacked formal schema enforcement. By requiring all services to define their interface in a .proto file, gRPC makes breaking changes explicit and enables automated generation of type-safe stubs in Go, Java, Python, C++, Rust, and many other languages.

  - HTTP/2 is central to gRPC's performance characteristics. Unlike HTTP/1.1, which requires a new TCP connection per request-response cycle, HTTP/2 multiplexes multiple streams over a single persistent connection, eliminating head-of-line blocking and reducing connection establishment overhead. This makes gRPC particularly efficient for high-frequency service calls, where the cumulative cost of connection establishment in REST/HTTP/1.1 architectures becomes a significant bottleneck. Combined with Protocol Buffers' compact binary encoding—typically three to ten times smaller than equivalent JSON—gRPC reduces both latency and bandwidth consumption.

  - gRPC's four communication modes address different architectural needs. Unary RPCs mirror traditional request-response semantics and replace most REST endpoints in inter-service communication. Server-streaming allows a single client request to receive a continuous stream of responses, useful for subscription feeds and progress notifications. Client-streaming allows a client to send a sequence of messages before the server responds—appropriate for chunked uploads or sensor data ingestion. Bidirectional streaming enables full-duplex communication over a single connection, supporting interactive use cases such as real-time collaborative editing and live telemetry.

  - In the [[Cloud-Native Applications]] ecosystem, gRPC integrates tightly with [[Kubernetes]] through service meshes such as Istio and Linkerd, which intercept gRPC traffic to provide circuit breaking, retries, and distributed tracing without application-level changes. The Envoy proxy, the most widely deployed data plane for service meshes, has native gRPC support and can transcode between gRPC and REST, enabling gradual migration of legacy REST services. gRPC's adoption extends beyond microservices into mobile and IoT contexts, where its efficient encoding reduces battery and bandwidth consumption compared to REST/JSON alternatives.
