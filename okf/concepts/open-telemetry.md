---
okf_version: "0.2"
type: Class
title: OpenTelemetry
resource: urn:ngm:class:open-telemetry
domain: infrastructure
description: OpenTelemetry (OTel) is a vendor-neutral open-source observability framework and CNCF project that provides unified APIs, SDKs, agents, and wire protocols for collecting distributed traces, metrics, and logs from software systems. It merges the OpenTracing and OpenCensus projects into a single standardised instrumentation layer, enabling consistent telemetry data collection regardless of the backe
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:monitoring-system
requires:
  - urn:ngm:class:distributed-tracing
enables:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:cloud-native-applications
  - urn:ngm:class:observability
  - urn:ngm:class:root-cause-analysis
dependsOn:
  - urn:ngm:class:g-rpc
  - urn:ngm:class:protobuf
bridgesTo:
  - urn:ngm:class:observability
  - urn:ngm:class:ai-monitoring
uses:
  - urn:ngm:class:api-standard
  - urn:ngm:class:distributed-system
supports:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:prometheus
standardizedBy:
  - urn:ngm:class:cncf
partOf:
  - urn:ngm:class:cncf
relatedTo:
  - urn:ngm:class:real-time-monitoring
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:monitoring-dashboard
---

# OpenTelemetry

OpenTelemetry (OTel) is a vendor-neutral open-source observability framework and CNCF project that provides unified APIs, SDKs, agents, and wire protocols for collecting distributed traces, metrics, and logs from software systems. It merges the OpenTracing and OpenCensus projects into a single standardised instrumentation layer, enabling consistent telemetry data collection regardless of the backend analysis platform. OpenTelemetry's OpenTelemetry Protocol (OTLP) has become the de-facto standard for telemetry data transport in cloud-native environments.
