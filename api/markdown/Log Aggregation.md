Log aggregation is the practice of collecting log events from many distributed sources into a centralised, searchable store so they can be parsed, indexed, correlated, and analysed as a unified stream. It is a foundational component of observability and monitoring pipelines, enabling operators to debug incidents, detect anomalies, and satisfy audit requirements across services that would otherwise emit logs in isolation.

- [[Log Aggregation]] collects log events from many sources into a centralised, searchable store. It builds on [[Logging]] and [[Indexing]], uses [[Full-Text Search]], and is part of [[Observability]] and [[Monitoring]].

### Overview

- In distributed systems, individual services emit logs locally where they are hard to correlate. Log aggregation ships these events to a central pipeline so that a single query can span the whole estate, which is essential for debugging cross-service incidents.
- A typical pipeline comprises collection agents, a transport or buffer layer, parsing and enrichment, and an indexed store with a query and visualisation front end.

### Mechanisms

- Agents tail files or receive structured events and forward them with metadata such as host, service, and severity.
- Parsing normalises heterogeneous formats into structured fields for reliable querying.
- Indexing builds inverted indexes so that [[Full-Text Search]] and field filters return quickly over large volumes.
- Retention and tiering balance query speed against storage cost.

### Applications

- Incident debugging across [[Microservices]] by correlating request traces.
- Security monitoring feeding a [[SIEM]] and supporting [[Audit Logging]].
- Operational dashboards combining logs with [[Metrics Collection]].

### Provenance

