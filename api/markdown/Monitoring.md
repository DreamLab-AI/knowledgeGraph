public:: true

# Monitoring
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a8eed0f61451181d2bd084bb839cf0eb14c1f4c552330b7acfa62bfad0e148d4",
  "@type": "Page",
  "vc:slug": "monitoring",
  "title": "Monitoring",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:reliability-engineering",
      "vc:label": "Reliability Engineering"
    },
    {
      "@id": "urn:visionflow:linked:real-time-computing",
      "vc:label": "Real-Time Computing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Monitoring"
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
  "@id": "urn:ngm:class:monitoring",
  "@type": "Class",
  "label": "Monitoring",
  "definition": "Monitoring is the systematic, continuous observation of computing systems, services, and infrastructure through the collection, aggregation, and analysis of metrics, logs, traces, and events to assess health, detect anomalies, and trigger remediation. It forms the primary feedback loop for operational awareness, enabling engineering teams to distinguish between normal variance and actionable degradation in real time. Monitoring encompasses both active probing (synthetic checks, health endpoints) and passive signal collection (agent-based telemetry, sidecar proxies), unified through time-series storage and alerting pipelines. As systems grow in complexity — particularly across distributed, containerised, and cloud-native environments — monitoring has evolved into a multi-signal discipline often grouped under the broader term Observability.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reliability-engineering",
      "label": "Reliability Engineering"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:metrics-collection",
        "label": "Metrics Collection"
      },
      {
        "@id": "urn:ngm:class:log-management",
        "label": "Log Management"
      },
      {
        "@id": "urn:ngm:class:distributed-tracing",
        "label": "Distributed Tracing"
      },
      {
        "@id": "urn:ngm:class:alerting",
        "label": "Alerting"
      },
      {
        "@id": "urn:ngm:class:dashboarding",
        "label": "Dashboarding"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:time-series-database",
        "label": "Time-Series Database"
      },
      {
        "@id": "urn:ngm:class:instrumentation",
        "label": "Instrumentation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reliability-engineering",
        "label": "Reliability Engineering"
      },
      {
        "@id": "urn:ngm:class:incident-management",
        "label": "Incident Management"
      },
      {
        "@id": "urn:ngm:class:capacity-planning",
        "label": "Capacity Planning"
      },
      {
        "@id": "urn:ngm:class:auto-scaling",
        "label": "Auto-Scaling"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:service-level-objective",
        "label": "Service Level Objective"
      },
      {
        "@id": "urn:ngm:class:real-time-computing",
        "label": "Real-Time Computing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:opentelemetry",
        "label": "OpenTelemetry"
      },
      {
        "@id": "urn:ngm:class:prometheus",
        "label": "Prometheus"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      },
      {
        "@id": "urn:ngm:class:site-reliability-engineering",
        "label": "Site Reliability Engineering"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:opentelemetry",
        "label": "OpenTelemetry"
      },
      {
        "@id": "urn:ngm:class:cloud-native-computing-foundation",
        "label": "Cloud Native Computing Foundation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:aiops",
        "label": "AIOps"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      },
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:chaos-engineering",
        "label": "Chaos Engineering"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:system-monitoring",
      "label": "System Monitoring"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:monitoring:14a2326b6bb5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a8eed0f61451181d2bd084bb839cf0eb14c1f4c552330b7acfa62bfad0e148d4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Reliability Engineering]]",
      "resolved": "urn:visionflow:linked:reliability-engineering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Computing]]",
      "resolved": "urn:visionflow:linked:real-time-computing",
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
  - Monitoring is the systematic, continuous observation of computing systems, services, and infrastructure through the collection, aggregation, and analysis of [[Metrics Collection]], [[Log Management]], [[Distributed Tracing]], and events to assess health, detect anomalies, and trigger remediation. It forms the primary feedback loop for operational awareness in [[Reliability Engineering]], enabling engineering teams to distinguish normal variance from actionable degradation in [[Real-Time Computing]] environments. As systems grow in complexity — particularly across [[Kubernetes]], [[Service Mesh]], and cloud-native architectures — monitoring has evolved into a multi-signal discipline now grouped under the broader umbrella of [[Observability]].

- ### Overview
  - Monitoring predates the modern cloud era; it originated with SNMP-based network polling and batch log review in the 1980s and 1990s. Today it spans infrastructure, application, and user-experience layers simultaneously.
  - The core purpose is to close the feedback loop between system behaviour and human or automated response. Without monitoring, teams operate blind: degradations go undetected until users report failures, and postmortems lack the forensic signal needed to identify root causes.
  - Modern monitoring addresses three fundamental questions:
    - Is the system available? (up/down, health endpoints)
    - Is it performing within acceptable bounds? (latency, throughput, error rate)
    - What is the trend? (resource utilisation over time for [[Capacity Planning]])
  - The distinction between monitoring and [[Observability]] is significant: monitoring tells you whether a known failure mode is occurring; observability allows you to reason about *unknown* failure modes from first principles using rich telemetry.

- ### Key Components
  - **[[Metrics Collection]]** — Numeric time-series data sampled at a fixed interval (CPU utilisation, request rate, error count). Pull-based systems (e.g. [[Prometheus]]) scrape endpoints; push-based agents forward to aggregators.
  - **[[Log Management]]** — Structured or semi-structured event records emitted by applications and system daemons. Centralised log aggregation (e.g. via the ELK/Elastic stack or Loki) enables search and correlation across services.
  - **[[Distributed Tracing]]** — Causal chains of spans propagated across service boundaries via trace context headers (W3C TraceContext, B3). Enables latency attribution in [[Microservices Architecture]].
  - **[[Alerting]]** — Rule-based or anomaly-driven notifications triggered when a metric crosses a threshold or a pattern deviates from baseline. Alert fatigue management (deduplication, suppression, [[Incident Management]] routing) is critical.
  - **[[Dashboarding]]** — Human-readable visualisation of aggregated signals. Grafana is the de facto open-source standard; commercial equivalents include Datadog, Dynatrace, and New Relic.
  - **[[Instrumentation]]** — The act of embedding telemetry hooks into application code or infrastructure. Can be manual (library calls) or automatic (bytecode agent injection, eBPF-based kernel probes).
  - **[[Health Checks]]** — Lightweight synthetic probes (HTTP GET, TCP connect, DNS query) verifying reachability and basic correctness of services at scheduled intervals.
  - **[[Synthetic Monitoring]]** — Scripted user-journey simulations run from external vantage points, validating end-to-end experience without reliance on real traffic.

- ### Mechanisms
  - **Signal collection pipelines** — Agents or sidecars (e.g. Prometheus Node Exporter, [[OpenTelemetry]] Collector, Fluent Bit) scrape, buffer, and forward signals to central aggregators or cloud backends.
  - **[[Time-Series Database]]** — Optimised storage for timestamped numeric sequences. Examples: Prometheus TSDB, VictoriaMetrics, InfluxDB, Thanos for long-retention Prometheus federation.
  - **Threshold alerting** — Alerts fire when a metric value exceeds a static upper or lower bound (e.g. CPU > 85% for 5 minutes). Simple but prone to false positives during load spikes.
  - **[[Anomaly Detection]]** — Statistical or ML-based approaches (seasonal decomposition, z-score, isolation forests) that learn baseline behaviour and alert on deviations. Feeds into [[AIOps]] platforms.
  - **RED and USE methods** — Standard mental models: RED (Rate, Errors, Duration) for request-driven services; USE (Utilisation, Saturation, Errors) for resources. Pioneered by Brendan Gregg and Google SRE.
  - **[[Service Level Objective]]** burn-rate alerting** — SLO-based alerts fire when error budget consumption exceeds a rate that would exhaust the budget before the window closes, avoiding noise while catching real risk.
  - **Cardinality management** — High-cardinality label combinations (e.g. per-request trace IDs in metrics) can overwhelm TSDB storage. Engineering for appropriate label granularity is a core operational skill.

- ### Applications
  - **[[Site Reliability Engineering]] operations** — SRE teams use monitoring as the primary tool for SLO tracking, on-call alerting, and postmortem root-cause analysis.
  - **[[DevOps]] continuous delivery pipelines** — Deployment smoke tests, canary analysis, and automated rollback decisions rely on real-time monitoring of error rates and latency post-deploy.
  - **[[Cloud Computing]] infrastructure management** — Public cloud providers (AWS CloudWatch, GCP Cloud Monitoring, Azure Monitor) offer native monitoring for managed services, integrated with billing and autoscaling.
  - **[[Kubernetes]] cluster operations** — kube-state-metrics, cAdvisor, and the Prometheus Operator are the standard stack for container-level and control-plane monitoring.
  - **Security monitoring** — Metric and log analysis for intrusion detection, lateral movement, and anomalous access patterns feeds [[Security Information and Event Management]] (SIEM) systems.
  - **[[Chaos Engineering]]** — Fault injection experiments require monitoring baselines before the experiment and real-time signal collection during it to validate system resilience hypotheses.
  - **[[Auto-Scaling]]** — Horizontal and vertical pod autoscalers in Kubernetes read monitoring metrics (CPU, custom HPA metrics) to dynamically adjust compute allocation.
  - **[[Capacity Planning]]** — Trend analysis over monitoring data informs infrastructure procurement, quota requests, and cost optimisation decisions.
  - **Edge and IoT** — Lightweight agents (Telegraf, Vector) collect telemetry from resource-constrained edge nodes, enabling centralised visibility across heterogeneous fleets.
  - **AI/ML model serving** — Monitoring model inference latency, throughput, and prediction-distribution drift (data drift monitoring) is increasingly critical as ML systems enter production.

- ### Relationships
  - partOf:: [[Observability]]
  - subClassOf:: [[Reliability Engineering]]
  - hasPart:: [[Metrics Collection]]
  - hasPart:: [[Log Management]]
  - hasPart:: [[Distributed Tracing]]
  - hasPart:: [[Alerting]]
  - hasPart:: [[Dashboarding]]
  - requires:: [[Time-Series Database]]
  - requires:: [[Instrumentation]]
  - enables:: [[Incident Management]]
  - enables:: [[Capacity Planning]]
  - enables:: [[Auto-Scaling]]
  - dependsOn:: [[Service Level Objective]]
  - dependsOn:: [[Real-Time Computing]]
  - uses:: [[OpenTelemetry]]
  - uses:: [[Prometheus]]
  - supports:: [[DevOps]]
  - supports:: [[Site Reliability Engineering]]
  - standardizedBy:: [[OpenTelemetry]]
  - standardizedBy:: [[Cloud Native Computing Foundation]]
  - contrastsWith:: [[Observability]]
  - bridgesTo:: [[Anomaly Detection]]
  - bridgesTo:: [[AIOps]]
  - relatedTo:: [[Service Mesh]]
  - relatedTo:: [[Kubernetes]]
  - relatedTo:: [[Chaos Engineering]]

- ### Standards & Context
  - **[[OpenTelemetry]]** (CNCF) — The merged successor to OpenCensus and OpenTracing. Provides a vendor-neutral SDK and wire protocol (OTLP) for traces, metrics, and logs. Now the industry-standard instrumentation API.
  - **Prometheus exposition format** — Text-based metric scrape format that has become a de facto standard; supported by hundreds of exporters and ingested natively by most commercial monitoring platforms.
  - **[[Cloud Native Computing Foundation]]** hosts Prometheus, [[OpenTelemetry]], Thanos, Cortex, Loki, Tempo, and other monitoring ecosystem projects under open governance.
  - **W3C TraceContext** — Standard HTTP header format (`traceparent`, `tracestate`) for propagating trace context across service boundaries, enabling vendor-interoperable [[Distributed Tracing]].
  - **SNMP (RFC 1157 / RFC 3411–3418)** — Foundational network management protocol still in widespread use for network device monitoring, though largely superseded by streaming telemetry (gNMI/gRPC) in modern network environments.
  - **Google SRE Book** — Published 2016; introduced the SLO/SLI/error-budget framework that reshaped how organisations design [[Alerting]] and [[Service Level Objective]] strategies around monitoring data.
  - **CNCF Observability TAG** — Technical advisory group coordinating observability-related project landscape and best practices across the CNCF portfolio.

- ### Provenance
  - sources:: OpenTelemetry specification (opentelemetry.io); Google SRE Book (Beyer et al., 2016); Prometheus documentation (prometheus.io); CNCF landscape (landscape.cncf.io); Brendan Gregg "Systems Performance" (2021)
  - updated:: 2026-06-13
