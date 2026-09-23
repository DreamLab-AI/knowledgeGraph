
Prometheus is an open-source monitoring and alerting system that collects time-series metrics by periodically scraping HTTP endpoints exposed by instrumented targets. It stores samples in a local time-series database, queries them with the PromQL language, and evaluates alerting rules whose firing alerts are dispatched through a separate Alertmanager. A graduated Cloud Native Computing Foundation project, it is a de-facto standard for monitoring containerised and cloud-native systems.

- [[Prometheus]] is an open-source [[Monitoring]] and alerting system that scrapes time-series [[Telemetry]] metrics from instrumented targets.
- It stores samples locally, queries them with PromQL, and feeds [[Observability]] and [[Incident Response]] workflows.
- A graduated [[Cloud Native Computing Foundation]] ([[CNCF]]) project, it integrates tightly with [[Kubernetes]] via [[Service Discovery]].
- ### Overview
- Prometheus follows a pull-based model: a central server periodically scrapes metrics endpoints exposed by applications, exporters, and the runtime itself.
- Collected samples are labelled multidimensional time series stored in an embedded database optimised for high-cardinality metric data.
- Operators query the data with PromQL for dashboards and define alerting rules whose firing alerts are routed and deduplicated by the companion Alertmanager.
- ### Key aspects
- Pull-based scraping: the server fetches metrics from target HTTP endpoints on a fixed interval.
- Time-series database: a local store optimised for labelled metric samples over time.
- PromQL: a functional query language for aggregating and analysing metrics.
- Service discovery: dynamic target discovery integrates with Kubernetes and cloud platforms.
- Alerting: rule evaluation produces alerts dispatched through Alertmanager to on-call channels.
- ### Applications
- Monitoring the health and performance of microservices and cloud-native workloads.
- Defining service-level indicators and alerting on objective breaches.
- Supplying metric data to dashboards and visualisation layers.
- Driving incident response and capacity planning in production systems.
- ### Provenance

