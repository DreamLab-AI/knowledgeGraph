public:: true

# OpenTelemetry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-telemetry",
  "@type": "Page",
  "vc:slug": "open-telemetry",
  "title": "OpenTelemetry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-telemetry",
  "@type": "Class",
  "label": "OpenTelemetry",
  "definition": "OpenTelemetry (OTel) is a vendor-neutral open-source observability framework and CNCF project that provides unified APIs, SDKs, agents, and wire protocols for collecting distributed traces, metrics, and logs from software systems. It merges the OpenTracing and OpenCensus projects into a single standardised instrumentation layer, enabling consistent telemetry data collection regardless of the backend analysis platform. OpenTelemetry's OpenTelemetry Protocol (OTLP) has become the de-facto standard for telemetry data transport in cloud-native environments.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:monitoring-system", "label": "Monitoring System"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:otlp", "label": "OpenTelemetry Protocol (OTLP)"},
      {"@id": "urn:ngm:class:otel-collector", "label": "OTel Collector"},
      {"@id": "urn:ngm:class:otel-sdk", "label": "OTel SDK"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:cloud-native-computing-foundation", "label": "Cloud Native Computing Foundation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:context-propagation", "label": "Context Propagation"},
      {"@id": "urn:ngm:class:distributed-tracing", "label": "Distributed Tracing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:cloud-native-applications", "label": "Cloud-Native Applications"},
      {"@id": "urn:ngm:class:observability", "label": "Observability"},
      {"@id": "urn:ngm:class:root-cause-analysis", "label": "Root-Cause Analysis"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:grpc", "label": "gRPC"},
      {"@id": "urn:ngm:class:protobuf", "label": "Protocol Buffers"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:opentracing", "label": "OpenTracing"},
      {"@id": "urn:ngm:class:opencensus", "label": "OpenCensus"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:api-standard", "label": "API Standard"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"},
      {"@id": "urn:ngm:class:semantic-conventions", "label": "Semantic Conventions"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"},
      {"@id": "urn:ngm:class:prometheus", "label": "Prometheus"},
      {"@id": "urn:ngm:class:jaeger", "label": "Jaeger"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:real-time-monitoring", "label": "Real-Time Monitoring"},
      {"@id": "urn:ngm:class:performance-metrics", "label": "Performance Metrics"},
      {"@id": "urn:ngm:class:monitoring-dashboard", "label": "Monitoring Dashboard"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:llm-observability", "label": "LLM Observability"},
      {"@id": "urn:ngm:class:ai-system-monitoring", "label": "AI System Monitoring"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:cloud-native-computing-foundation", "label": "Cloud Native Computing Foundation"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:otel", "label": "OTel"}
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
  - [[OpenTelemetry]] is a [[Monitoring System]] framework standardised under the CNCF that unifies the collection of traces, metrics, and logs across [[Distributed System]] deployments through language-agnostic [[API Standard]] and wire protocols, eliminating vendor lock-in in observability pipelines.

- ### Relationships
  - OpenTelemetry directly enables observability for [[Microservices Architecture]] and [[Cloud-Native Applications]] by providing a consistent instrumentation API that feeds [[Monitoring Dashboard]] and [[Performance Metrics]] platforms. It relies on [[Distributed System]] concepts (context propagation, baggage) and integrates natively with [[Kubernetes]] orchestration. The framework facilitates [[Real-Time Monitoring]] by streaming telemetry to backends such as Prometheus, Jaeger, or Datadog.

- ### Content
  - The precursor projects OpenTracing (distributed tracing API, 2016) and OpenCensus (Google's tracing and metrics library, 2017) both addressed observability fragmentation but remained separate and incompatible. In 2019 they merged under the Cloud Native Computing Foundation to form OpenTelemetry, with the explicit goal of providing a single, stable, vendor-agnostic instrumentation standard. The 1.0 tracing specification was released in 2021, followed by stable metrics in 2022 and logging in 2023.

  - OpenTelemetry's architecture separates concerns into three layers: the API (language-specific interfaces applications call), the SDK (default implementation with configurable processors and exporters), and the Collector (a standalone agent/gateway that receives, processes, and exports telemetry). The Collector's pipeline model enables tail-based sampling, attribute enrichment, and fan-out to multiple backends without changing application code. OTLP (OpenTelemetry Protocol) over gRPC or HTTP/protobuf is the canonical transport, supported natively by most modern observability vendors.

  - Adoption is driven by the observability tax of complex microservice architectures: distributed traces link spans across service boundaries, enabling root-cause analysis of latency and errors without access to individual service logs. Metrics pipelines replace per-service monitoring agent proliferation. The framework is instrumented into major runtimes (Node.js, Python, Java, Go, .NET) and cloud platforms, with automatic instrumentation agents requiring zero code changes for common frameworks like Express, Spring, and Django.

  - By 2024-2025, OpenTelemetry is effectively the industry standard instrumentation layer for cloud-native software, with AWS, Google Cloud, and Azure all offering native OTLP ingestion. The AI/ML observability use case has emerged as a growth area: OTel instrumentation for LLM inference pipelines captures token latency, cost, and quality signals. The GenAI semantic conventions working group is standardising how model calls, embeddings, and agent traces are represented, bridging software observability into AI system monitoring.

