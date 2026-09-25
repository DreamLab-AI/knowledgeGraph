Instrumentation is the practice of adding code, agents, or probes to software and systems so that they emit measurable signals — metrics, logs, traces, and events — about their internal behaviour and performance. It is the foundational producer of telemetry that downstream observability and monitoring tooling consumes. Without instrumentation a system is opaque; with it, operators gain insight into how the system actually runs in production.

### Overview

- Instrumentation can be manual, where developers explicitly emit spans, counters, and log statements, or automatic, where agents and libraries inject measurement into a runtime without source changes. Modern practice increasingly relies on open standards such as OpenTelemetry to produce vendor-neutral telemetry that any backend can ingest. The instrumented signals — request latency, error counts, resource saturation, and causal traces — become the raw material for monitoring dashboards, alerting rules, and root-cause investigations.

### Mechanisms

- Manual instrumentation: developer-authored spans, counters, gauges, and structured log statements at meaningful points in the code.
- Automatic instrumentation: byte-code injection or runtime hooks that capture telemetry without modifying source.
- Context propagation: passing trace and correlation identifiers across service boundaries to stitch distributed traces.
- Sampling: capturing a representative subset of high-volume signals to control overhead and cost.
- Standardisation: emitting telemetry in open formats so it is portable across observability backends.

### Applications

- Application performance monitoring of latency and error rates.
- Distributed tracing across microservice request paths.
- Business and product analytics derived from structured events.
- Profiling and capacity planning based on resource-usage signals.

### Provenance

