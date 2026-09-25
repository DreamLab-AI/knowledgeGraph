Health monitoring is the continuous observation of a system's components, services, and dependencies to determine whether they are operating correctly and are able to serve requests. It uses signals such as heartbeats, readiness and liveness probes, resource metrics, and synthetic checks to produce a real-time view of system health. Health monitoring underpins high availability by enabling automated detection of failures and triggering recovery, failover, or load redistribution.

- Health monitoring is the [[Observability]] discipline of continuously checking whether system components are functioning.
- It is a constituent of broader [[Monitoring]] and feeds [[Alerting]] and [[Incident Response]].
- It is essential to [[High Availability]] and [[Fault Tolerance]].
- It consumes [[Telemetry]] and [[Metrics]] to assess service state.

### Overview

- Health monitoring distinguishes a component that is merely running from one that is genuinely able to serve traffic.
- Liveness checks detect crashed or hung processes, while readiness checks gate whether traffic should be routed to an instance.
- Aggregated health signals drive automated remediation such as restarts, failover, and removal of unhealthy nodes from rotation.
- It is a foundational input to reliability engineering and capacity planning.

### Mechanisms

- Heartbeats and periodic probes reporting component status.
- Liveness, readiness, and startup checks in orchestrated environments.
- Synthetic transactions exercising end-to-end paths.
- Threshold and anomaly evaluation over resource metrics.

### Applications

- Load balancers excluding unhealthy backends from rotation.
- Container orchestrators restarting or rescheduling failing pods.
- Automated failover in clustered databases and services.
- Operational dashboards and on-call alerting for incident response.

### Provenance

