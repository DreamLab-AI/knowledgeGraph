Metrics collection is the practice of instrumenting software and infrastructure to gather quantitative measurements of system behaviour, such as request rates, latencies, error counts and resource utilisation, and forwarding them to a store for analysis. Collected metrics are typically aggregated as time series and queried to drive dashboards, alerting and capacity planning. It is a foundational pillar of observability alongside logging and tracing, enabling teams to detect, diagnose and prevent operational problems.

- Metrics collection instruments software and infrastructure to gather quantitative measurements, request rates, latencies, error counts and resource use, and forwards them to a [[Time-Series Database]] for analysis. It is a pillar of [[Observability]] alongside [[Logging]] and [[Distributed Tracing]].

### Overview

- Metrics are cheap, numeric summaries of system state sampled at regular intervals, making them ideal for spotting trends, regressions and anomalies over time.
- Collected as time series, they power dashboards and an [[Alerting]] layer that notifies operators when thresholds or service objectives are breached.
- Modern stacks pair an [[Instrumentation]] library in the application with a scraping or push agent that ships data into a store such as [[Prometheus]], closing the loop with [[Performance Monitoring]].

### Key aspects

- Counters, gauges, histograms and summaries as core metric types.
- Labelled dimensions enabling slicing by service, region or version.
- Pull versus push collection models and their trade-offs.
- Aggregation, downsampling and retention to control storage cost.
- Cardinality management to keep [[Time-Series Database]] systems performant.

### Applications

- Driving real-time dashboards and an [[Alerting]] pipeline.
- Tracking and enforcing a [[Service Level Objective]] and error budgets.
- Capacity planning and autoscaling based on resource [[Telemetry]].
- Feeding [[Performance Monitoring]] and incident diagnosis workflows.

### Provenance

