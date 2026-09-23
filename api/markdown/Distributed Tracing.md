
Distributed tracing is an observability technique that follows a single request as it propagates across the many services of a distributed system, recording the timing and causal relationships of each operation. Each unit of work is captured as a span, and spans linked by a shared trace identifier form a trace that reconstructs the request's end-to-end path. It is essential for diagnosing latency, dependencies and failures in microservice architectures where no single component holds the full picture.

- Distributed tracing follows one request across the many services of a distributed system, capturing the timing and causal order of each operation as spans. It is a pillar of [[Observability]] alongside [[Monitoring]], indispensable for diagnosing [[Latency]] and failures in [[Microservices]] architectures.
- ### In Plain Terms
- A way to follow a single request as it hops through all the separate services behind an app, timing each step along the way. When something is slow or breaks, it shows you exactly where in the chain the problem happened rather than leaving you to guess.
- ### Overview
- In a request that fans out across dozens of services, conventional per-service logs cannot reconstruct the whole journey. Distributed tracing solves this by propagating a shared context with every call.
- Each operation records a span: a named, timed interval annotated with attributes and linked to its parent. Spans sharing a trace identifier assemble into a tree that shows the full call graph.
- Traces reveal where time is spent, which dependency failed, and how services relate, turning an opaque distributed call into a navigable timeline.
- Open standards such as the OpenTelemetry framework provide vendor-neutral instrumentation, while backends store, index and visualise the resulting traces.
- ### Mechanisms
- Context propagation carries trace and span identifiers across process and network boundaries through headers or message metadata.
- Instrumentation libraries automatically or manually create spans around inbound requests, outbound calls and significant internal operations.
- Sampling controls data volume by retaining a representative or interesting subset of traces, using head-based or tail-based strategies.
- Trace analysis aggregates spans to surface critical paths, service dependencies and latency outliers.
- ### Applications
- Root-cause analysis of latency regressions and errors across [[Microservices Architecture]].
- Dependency mapping and impact analysis when a downstream service degrades.
- Performance profiling that feeds [[Performance Optimization]] efforts.
- Correlating traces with metrics and logs to give full [[Observability]] of [[Distributed Systems]].
- ### Key aspects
- Trace completeness depends on consistent instrumentation across all services in the path.
- Sampling balances fidelity against storage and overhead costs.
- Integration with a [[Service Mesh]] can provide tracing for traffic without per-application code changes.
- ### Provenance

