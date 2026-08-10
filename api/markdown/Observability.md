public:: true

# Observability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3a60356b2e94489cea7a9f92d1e957242281093b03635cb92da8443814ff6e80",
  "@type": "Page",
  "vc:slug": "observability",
  "title": "Observability",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:performance",
      "vc:label": "performance"
    },
    {
      "@id": "urn:visionflow:linked:site-reliability-engineering",
      "vc:label": "Site Reliability Engineering"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:reliability-engineering",
      "vc:label": "Reliability Engineering"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Observability"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:observability",
  "@type": "Class",
  "label": "Observability",
  "definition": "Observability is the capability of a system that allows engineers to infer its internal state and behaviour solely from externally observable outputs — primarily logs, metrics, and distributed traces. Derived from control-systems theory, it answers whether the complete internal state can be reconstructed from a sequence of outputs. In modern software engineering, observability enables debugging, performance tuning, incident response, and proactive reliability assurance across complex distributed architectures where direct inspection is impractical.",
  "vc:plainGloss": "Being able to tell what a running system is doing from the outside, using the signals it gives off (logs, measurements, and traces) without having to stop it and look inside. It is what lets you spot and diagnose problems in a live service.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reliability-engineering",
      "label": "Reliability Engineering"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:audit-logging",
        "label": "Logging"
      },
      {
        "@id": "urn:ngm:class:distributed-tracing",
        "label": "Distributed Tracing"
      },
      {
        "@id": "urn:ngm:class:alerting",
        "label": "Alerting"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:telemetry",
        "label": "Telemetry"
      },
      {
        "@id": "urn:ngm:class:instrumentation",
        "label": "Instrumentation"
      },
      {
        "@id": "urn:ngm:class:data-collection",
        "label": "Data Collection"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:site-reliability-engineering",
        "label": "Site Reliability Engineering"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      },
      {
        "@id": "urn:ngm:class:capacity-planning",
        "label": "Capacity Planning"
      },
      {
        "@id": "urn:ngm:class:chaos-engineering",
        "label": "Chaos Engineering"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:open-telemetry",
        "label": "OpenTelemetry"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:time-series-database",
        "label": "Time-Series Database"
      },
      {
        "@id": "urn:ngm:class:log-aggregation",
        "label": "Log Aggregation"
      },
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      },
      {
        "@id": "urn:ngm:class:continuous-delivery",
        "label": "Continuous Delivery"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:open-telemetry",
        "label": "OpenTelemetry"
      },
      {
        "@id": "urn:ngm:class:cloud-native-computing-foundation",
        "label": "Cloud Native Computing Foundation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      },
      {
        "@id": "urn:ngm:class:debugging",
        "label": "Debugging"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:machine-learning-operations",
        "label": "Machine Learning Operations"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:performance",
        "label": "performance"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:service-level-objective",
        "label": "Service Level Objective"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:system-observability",
      "label": "System Observability"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:observability:58ee00072efb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3a60356b2e94489cea7a9f92d1e957242281093b03635cb92da8443814ff6e80"
  },
  "vc:resolutions": [
    {
      "raw": "[[performance]]",
      "resolved": "urn:visionflow:linked:performance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Site Reliability Engineering]]",
      "resolved": "urn:visionflow:linked:site-reliability-engineering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reliability Engineering]]",
      "resolved": "urn:visionflow:linked:reliability-engineering",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Observability is the capability of a system that allows engineers to infer its complete internal state solely from external outputs — principally [[Logging]], [[Metrics]], and [[Distributed Tracing]]. Rooted in control-systems theory (Kalman, 1960), it asks whether internal states are fully reconstructable from a sequence of observations. Applied to software, observability governs how well [[Distributed Systems]] can be understood, diagnosed, and improved without halting them, underpinning the discipline of [[Site Reliability Engineering]] and modern [[DevOps]] practice.

- ### In Plain Terms
  - Being able to tell what a running system is doing from the outside, using the signals it gives off (logs, measurements, and traces) without having to stop it and look inside. It is what lets you spot and diagnose problems in a live service.

- ### Overview
  - Observability emerged as a first-class engineering concern with the rise of [[Microservices]] and cloud-native [[Distributed Systems]], where thousands of networked components interact in ways that are impossible to replicate in isolation.
  - Traditional [[Monitoring]] — checking whether a known metric crosses a threshold — proved insufficient for diagnosing novel failure modes; observability extends this by allowing engineers to ask arbitrary questions about system behaviour.
  - The core insight is that well-instrumented systems should allow any question about past state to be answered from collected data, not merely the questions anticipated at build time.
  - This property dramatically reduces mean time to detection (MTTD) and mean time to resolution (MTTR) during incidents, making it a central concern for organisations operating at scale.

- ### Key Components
  - **[[Logging]]**
    - Structured, timestamped records of discrete events produced by application components.
    - Modern log formats (JSON, key-value pairs) allow machine parsing, correlation, and search at scale via platforms such as [[Log Aggregation]] pipelines (Elasticsearch, Loki, Splunk).
    - Log levels (DEBUG, INFO, WARN, ERROR, FATAL) allow filtering noise; correlation IDs link logs across service boundaries.
  - **[[Metrics]]**
    - Numeric measurements aggregated over time: counters, gauges, histograms, and summaries.
    - Stored in a [[Time-Series Database]] (Prometheus, InfluxDB, Thanos) and visualised via dashboards (Grafana).
    - Metrics are highly compressible, making them efficient for long-term retention and [[Alerting]] rules.
    - The RED method (Rate, Errors, Duration) and USE method (Utilisation, Saturation, Errors) provide systematic metric frameworks for services and resources respectively.
  - **[[Distributed Tracing]]**
    - A trace follows a single request as it propagates across multiple services, recording latency and errors at each hop (span).
    - Enables identification of performance bottlenecks and failure points invisible to single-service metrics.
    - Implementations: Jaeger, Zipkin, Tempo; propagation standards: W3C TraceContext, B3.
  - **[[Alerting]]**
    - Rule-based or anomaly-driven notifications triggered when signal thresholds or learned baselines are breached.
    - Effective alerting is grounded in [[Service Level Objective]] (SLO) violations rather than raw metric thresholds, reducing alert fatigue.
  - **[[Instrumentation]]**
    - Code-level or infrastructure-level decoration that emits the telemetry signals above.
    - Auto-instrumentation (agents, eBPF) and manual instrumentation via SDKs; [[OpenTelemetry]] provides a unified API/SDK.
  - **[[Telemetry]]**
    - The broader category of all data collected from a running system: logs, metrics, traces, events, and profiles.
    - [[OpenTelemetry]] (OTEL) is the CNCF-hosted standard that unifies telemetry collection across languages and backends.

- ### Mechanisms
  - **Correlation** — Linking signals across pillars (log entries, spans, metric spikes) via shared trace IDs, request IDs, or timestamps allows root-cause identification across [[Microservices]].
  - **Cardinality** — High-cardinality labels (user IDs, request paths) enable fine-grained analysis but increase storage costs; observability platforms must balance cardinality against resource constraints.
  - **Sampling** — Head-based and tail-based sampling strategies reduce trace volume while preserving coverage of errors and slow requests.
  - **Context Propagation** — Trace context headers (W3C TraceContext, B3) are injected into inter-service calls to link spans across network boundaries, including through [[Service Mesh]] sidecars.
  - **SLO-Driven Alerting** — Alerts tied to [[Service Level Objective]] burn rates express reliability in user-facing terms, improving incident prioritisation.
  - **AIOps Integration** — [[Anomaly Detection]] and ML-driven correlations applied to telemetry streams allow proactive detection of degradation before thresholds are breached, bridging to [[Machine Learning Operations]].

- ### Applications and Use Cases
  - **Incident Response** — During an outage, engineers query traces to isolate the failing service, examine correlated logs for error context, and check metrics for resource saturation. Reduced MTTD and MTTR are primary operational KPIs.
  - **[[Performance]] Tuning** — Latency histograms and distributed traces reveal hotspots in request paths; profiling data identifies CPU/memory bottlenecks at code level.
  - **[[Capacity Planning]]** — Long-term metric trends inform infrastructure scaling decisions, preventing saturation before it causes user-visible failures.
  - **[[Chaos Engineering]]** — Fault injection experiments are validated against observability data; without adequate telemetry, the blast radius of chaos experiments cannot be measured.
  - **[[Continuous Delivery]] Safety** — Canary deployments and feature flags are evaluated by comparing observability signals (error rates, latency) between old and new versions.
  - **Security and Compliance** — Audit logs and anomalous access patterns detected via log analysis support security monitoring, bridging observability to [[Fault Tolerance]] and compliance requirements.
  - **[[Machine Learning Operations]]** — Model serving infrastructure requires the same pillars (prediction latency metrics, feature pipeline traces, error logs) as any distributed service; ML-specific metrics (drift, accuracy) extend the pattern.

- ### Relationships
  - partOf:: [[Reliability Engineering]]
  - hasPart:: [[Logging]]
  - hasPart:: [[Metrics]]
  - hasPart:: [[Distributed Tracing]]
  - hasPart:: [[Alerting]]
  - requires:: [[Telemetry]]
  - requires:: [[Instrumentation]]
  - requires:: [[Data Collection]]
  - enables:: [[Site Reliability Engineering]]
  - enables:: [[Incident Response]]
  - enables:: [[Capacity Planning]]
  - enables:: [[Chaos Engineering]]
  - dependsOn:: [[Distributed Systems]]
  - dependsOn:: [[Microservices]]
  - implements:: [[OpenTelemetry]]
  - uses:: [[Time-Series Database]]
  - uses:: [[Log Aggregation]]
  - uses:: [[Service Mesh]]
  - supports:: [[DevOps]]
  - supports:: [[Continuous Delivery]]
  - standardizedBy:: [[OpenTelemetry]]
  - standardizedBy:: [[Cloud Native Computing Foundation]]
  - contrastsWith:: [[Monitoring]]
  - contrastsWith:: [[Debugging]]
  - bridges-to:: [[Anomaly Detection]]
  - bridges-to:: [[Machine Learning Operations]]
  - relatedTo:: [[Performance]]
  - relatedTo:: [[Fault Tolerance]]
  - relatedTo:: [[Service Level Objective]]

- ### Standards and Context
  - **[[OpenTelemetry]] (OTEL)** — The primary unification standard, hosted by the [[Cloud Native Computing Foundation]] (CNCF). Defines APIs, SDKs, and the OTEL Collector for languages including Go, Java, Python, JavaScript, and .NET. Merges OpenCensus and OpenTracing lineages.
  - **W3C TraceContext** (Recommendation) — Standardises the `traceparent` and `tracestate` HTTP headers for distributed trace propagation, ensuring interoperability across vendor implementations.
  - **OpenMetrics** — An extension of the Prometheus exposition format, standardising metric exposition for scraping by a wider range of collectors.
  - **CNCF Landscape** — Observability is a formal category in the CNCF Cloud Native Landscape, which catalogues tools across logging, monitoring, tracing, and chaos engineering.
  - **SRE Book (Google)** — Google's Site Reliability Engineering book formalised the four golden signals (Latency, Traffic, Errors, Saturation) as a practical observability framework, now widely adopted across the industry.
  - **eBPF** — Extended Berkeley Packet Filter enables kernel-level auto-instrumentation without code changes, allowing observability agents to collect system-call, network, and file-I/O telemetry with minimal overhead.

- ### Current Landscape (2026)
  - On 21 May 2026 the CNCF announced OpenTelemetry's graduation at the Observability Summit in Minneapolis, cementing OTel as the de facto vendor-neutral telemetry standard; the project reported over 12,000 contributors from 2,800+ companies, with the JavaScript and Python API packages each surpassing 1.3 billion downloads in the preceding year.
  - Profiling has emerged as the fourth observability signal alongside logs, metrics and traces: the OTLP Profiles data model (added in OTLP 1.30.0) entered public Alpha on 26 March 2026, built on a pprof-compatible, deduplicated format with trace_id/span_id correlation and a reference eBPF profiler donated by Elastic.
  - Zero-code eBPF instrumentation consolidated under OpenTelemetry eBPF Instrumentation (OBI), the Grafana Beyla donation approved in May 2025, which shipped its first alpha on 3 November 2025 with Splunk, Coralogix and Odigos collaborating; it captures RED metrics, service graphs and traces for HTTP/2, gRPC, SQL, Redis, Kafka and more out-of-process with no code changes.
  - Semantic conventions v1 were locked between 2025 and 2026 for HTTP, databases (db.system.name, db.query.text), messaging, RPC and system metrics, stabilising dashboard and alert queries; Prometheus 3.0 (14 November 2024) added native OTLP ingestion and UTF-8 metric names, and Grafana 13.0 (April 2026) shipped Dynamic Dashboards and Git Sync for observability-as-code.
  - LLM observability has moved from optional tooling to core infrastructure, sized at roughly 2.69 billion US dollars in 2026 (heading to 9.26 billion by 2030 at a 36.2% CAGR); the market splits into AI-native platforms (Langfuse, now part of ClickHouse, LangSmith, Braintrust, Arize), eval libraries (Phoenix, DeepEval, RAGAS), AI gateways (Helicone, Portkey, LiteLLM) and APM extensions (Datadog, New Relic, Dynatrace), unified by the OpenTelemetry GenAI gen_ai.* semantic conventions.
  - Adoption figures diverge by survey but all point up: the CNCF 2025 Annual Survey (published January 2026) put OTel at roughly 49-78% production use, while Elastic's Dimensional Research report recorded 85% of organisations using generative AI for observability, and cloud providers (AWS CloudWatch, GKE Autopilot, Azure AKS) added native OTLP or eBPF ingestion through early 2026.
  - Open challenges as of 2026 centre on cost-aware telemetry discipline as data volumes grow, the still-alpha maturity of continuous profiling and OBI, privacy-preserving observability for regulated workloads, and guardrails plus human-in-the-loop controls for agentic-AI-driven autonomous remediation.

- ### References
  - 1. Cloud Native Computing Foundation (2026). CNCF Announces OpenTelemetry's Graduation, Solidifying Status as the De Facto Observability Standard. https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
  - 2. OpenTelemetry Profiling SIG (2026). OpenTelemetry Profiles Enters Public Alpha. https://opentelemetry.io/blog/2026/profiles-alpha/
  - 3. OpenTelemetry Project (2025). OpenTelemetry eBPF Instrumentation Marks the First Release. https://opentelemetry.io/blog/2025/obi-announcing-first-release/
  - 4. Stimac, G. (2026). Monitoring and Observability Stack 2026: What Changed. https://goranstimac.com/blog/monitoring-observability-stack-2026-what-changed/
  - 5. MarkTechPost (2026). Top LLM Observability and Evaluation Platforms in 2026: Langfuse, LangSmith, Braintrust, Arize, and More Compared. https://www.marktechpost.com/2026/08/09/top-llm-observability-and-evaluation-platforms-in-2026-langfuse-langsmith-braintrust-arize-and-more-compared/
  - 6. Elastic / Dimensional Research (2026). The Landscape of Observability in 2026. https://www.elastic.co/blog/2026-observability-trends-generative-ai-opentelemetry

- ### Provenance
  - sources:: OpenTelemetry specification (opentelemetry.io); CNCF Cloud Native Landscape; Google SRE Book; W3C TraceContext Recommendation; Honeycomb.io observability documentation
  - updated:: 2026-06-13
