- ### Definition
  - A health check is a periodic probe that determines whether a service instance is functioning correctly and able to handle requests. Health checks distinguish between liveness, whether a process is running and should be restarted if not, and readiness, whether it is prepared to receive traffic. Load balancers, orchestrators, and service meshes use health checks to route around failed instances, trigger restarts, and gate traffic, making them a foundational primitive for high availability and self-healing distributed systems.
  - Core related concepts: [[High Availability]], [[Load Balancer]], [[Heartbeat Mechanism]], [[Monitoring]], [[Service Discovery]].

- ### Overview
  - Health checks are how a distributed system continuously verifies the operational state of its components. They convert the abstract goal of high availability into a concrete control signal: an instance that fails its probes is removed from rotation, restarted, or replaced. Modern orchestration platforms formalise the distinction between liveness and readiness so that transient warm-up states do not trigger needless restarts.

- ### Mechanisms
  - Liveness probes: detect deadlocked or crashed processes so the orchestrator can restart them automatically.
  - Readiness probes: gate traffic until an instance has loaded dependencies and is genuinely able to serve, avoiding errors during start-up.
  - Probe types: lightweight TCP, HTTP endpoint, and command-based checks trade fidelity against overhead and intrusiveness.
  - Aggregation: load balancers and service meshes combine probe results across instances to make routing and failover decisions.

- ### Applications
  - Load balancers removing unhealthy backends from rotation to preserve availability.
  - Container orchestrators such as Kubernetes restarting failed pods and gating traffic on readiness.
  - Service meshes performing outlier detection and circuit breaking based on health signals.
  - Autoscaling systems using health and load signals to add or remove capacity.

- ### Relationships
  - subClassOf:: [[High Availability]]
  - partOf:: [[High Availability]]
  - hasPart:: [[Liveness]]
  - uses:: [[Monitoring]]
  - uses:: [[Heartbeat Mechanism]]
  - enables:: [[Auto Scaling]]
  - enables:: [[Fault Tolerance]]
  - enables:: [[Graceful Degradation]]
  - supports:: [[Load Balancer]]
  - supports:: [[Service Discovery]]
  - supports:: [[Kubernetes]]
  - dependsOn:: [[Observability]]
  - implements:: [[Circuit Breaker]]
  - relatedTo:: [[Uptime]]
  - relatedTo:: [[Service Level Agreement]]
  - relatedTo:: [[Microservices]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15