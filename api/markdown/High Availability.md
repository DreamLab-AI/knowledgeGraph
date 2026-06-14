public:: true

# high availability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:df176c97a3231fe6690ec5afa627c2e386bc69aed57dd20db04833dde8aa8502",
  "@type": "Page",
  "vc:slug": "high-availability",
  "title": "high availability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:high-availability",
  "@type": "Class",
  "label": "High Availability",
  "definition": "High Availability (HA) is an infrastructure design property that specifies and enforces the conditions under which a system continues delivering its intended service despite component failures, maintenance windows, or demand spikes. HA is quantified by availability targets expressed as 'nines' — for example 99.9% permits roughly 8.7 hours of downtime per year, while 99.999% ('five nines') permits only 5.26 minutes — achieved through redundant components, active-active or active-passive failover, continuous health monitoring, and automated recovery orchestration. It is operationalised through the complementary metrics of Mean Time Between Failures (MTBF) and Mean Time To Recovery (MTTR), with recovery time objectives (RTO) and recovery point objectives (RPO) anchoring HA targets to business continuity requirements. HA is a foundational non-functional requirement in cloud-native platforms, telecommunications networks, financial trading systems, and safety-critical infrastructure where service interruption carries regulatory, commercial, or life-safety consequences.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:reliability", "label": "Reliability"},
      {"@id": "urn:ngm:class:redundancy", "label": "Redundancy"},
      {"@id": "urn:ngm:class:health-monitoring", "label": "Health Monitoring"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:failover", "label": "Failover"},
      {"@id": "urn:ngm:class:load-balancing", "label": "Load Balancing"},
      {"@id": "urn:ngm:class:data-replication", "label": "Data Replication"},
      {"@id": "urn:ngm:class:automatic-failover", "label": "Automatic Failover"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:consensus-algorithms", "label": "Consensus Algorithms"},
      {"@id": "urn:ngm:class:container-orchestration", "label": "Container Orchestration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:business-continuity", "label": "Business Continuity"},
      {"@id": "urn:ngm:class:disaster-recovery", "label": "Disaster Recovery"},
      {"@id": "urn:ngm:class:service-level-agreement", "label": "Service Level Agreement"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"},
      {"@id": "urn:ngm:class:storage-replication", "label": "Storage Replication"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:cloud-native", "label": "Cloud Native"},
      {"@id": "urn:ngm:class:site-reliability-engineering", "label": "Site Reliability Engineering"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:eventual-consistency", "label": "Eventual Consistency"},
      {"@id": "urn:ngm:class:single-point-of-failure", "label": "Single Point of Failure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:chaos-engineering", "label": "Chaos Engineering"},
      {"@id": "urn:ngm:class:service-mesh", "label": "Service Mesh"},
      {"@id": "urn:ngm:class:circuit-breaker-pattern", "label": "Circuit Breaker Pattern"},
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:aiops", "label": "AIOps"},
      {"@id": "urn:ngm:class:predictive-maintenance", "label": "Predictive Maintenance"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ha", "label": "HA"},
    {"@id": "urn:ngm:class:continuous-availability", "label": "Continuous Availability"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - High Availability (HA) is an infrastructure design property ensuring that a system continuously delivers its intended service despite hardware failures, software faults, network partitions, or scheduled maintenance. Achieved through [[Redundancy]], [[Failover]], [[Load Balancing]], and [[Data Replication]], HA is quantified by availability percentages — the famous 'nines' — that translate directly into permitted annual downtime budgets. It is inseparable from [[Reliability]] and [[Fault Tolerance]], and its operational realisation depends on disciplines such as [[Site Reliability Engineering]] and [[Chaos Engineering]] to validate and sustain the promised uptime.

- ### Overview
  - High Availability systems are designed to remain operational when individual components fail, by eliminating single points of failure at every architectural layer. The foundational insight is that hardware and software components fail probabilistically, so systems composed of replicated, independently-failing components can be designed to a target composite availability far exceeding any single component.
  - Availability is expressed as a ratio: uptime / (uptime + downtime). The 'nines' convention compresses this ratio into a shorthand (99.9% = three nines, 99.999% = five nines) that maps directly to permitted annual downtime: three nines ≈ 8.76 hours/year; four nines ≈ 52.6 minutes/year; five nines ≈ 5.26 minutes/year.
  - HA architectures are evaluated using two complementary failure metrics:
    - **MTBF** (Mean Time Between Failures) — how frequently failures occur; raising this requires more reliable components or more redundancy.
    - **MTTR** (Mean Time To Recovery) — how quickly the system restores service after a failure; reducing this requires automation, pre-provisioned spare capacity, and runbook-driven or self-healing recovery.
  - Total unavailability = failure rate × MTTR, so HA engineering attacks both dimensions simultaneously.

- ### Key Mechanisms
  - **Redundancy**
    - N+1 redundancy: one spare unit covers any single failure.
    - N+M redundancy: M spare units cover M concurrent failures (used in storage arrays, power systems).
    - Geographic redundancy: workloads distributed across [[Availability Zones]] or regions to survive datacenter-level events.
  - **Failover Patterns**
    - [[Active-Active Failover]]: all nodes serve live traffic simultaneously; failure of any node redistributes load to survivors with no cold-start latency. Requires strong consistency or careful [[Eventual Consistency]] trade-offs.
    - [[Active-Passive Failover]]: one node is primary and serves traffic; standby nodes are warm or cold and promoted on primary failure. Simpler consistency model but standby capacity sits idle.
    - Automated failover triggered by [[Health Monitoring]] probes (TCP/HTTP/gRPC) eliminates human-in-the-loop delay.
  - **Load Balancing**
    - [[Load Balancing]] spreads requests across a pool of replicas, masking individual node failures. L4 (TCP/UDP) and L7 (HTTP) load balancers differ in session affinity and health-check granularity.
    - Virtual IP with VRRP (Virtual Router Redundancy Protocol) provides HA for the load balancer itself.
    - Cloud provider Global Load Balancers perform anycast routing, directing users to the nearest healthy region.
  - **Data Replication**
    - Synchronous [[Data Replication]]: writes are acknowledged only after all replicas confirm durability. Zero RPO (Recovery Point Objective); higher write latency.
    - Asynchronous replication: writes acknowledged at primary; replicas lag slightly. Lower latency; non-zero RPO.
    - Semi-synchronous replication: at least one replica must confirm, balancing latency and durability.
  - **Consensus & Leader Election**
    - [[Consensus Algorithms]] such as Raft and Paxos coordinate leader election in replicated state machines, ensuring exactly one primary at a time and preventing split-brain scenarios.
    - Distributed coordination services (ZooKeeper, etcd, Consul) provide HA-aware primitives (distributed locks, service registry, key-value stores) used by dependent systems.
  - **Circuit Breaker Pattern**
    - [[Circuit Breaker Pattern]] prevents cascading failures by detecting when a downstream service is unhealthy and routing around it or returning cached/default responses, preventing overload from compounding.
  - **Health Monitoring & Observability**
    - [[Health Monitoring]] subsystems perform continuous liveness and readiness probes; metrics feed into alerting and automated remediation.
    - [[Observability]] stacks (metrics, logs, distributed traces) provide the signal needed to detect, diagnose, and remediate failures quickly.

- ### Applications and Use Cases
  - **Cloud Platforms**
    - [[Cloud Infrastructure]] providers (AWS, Azure, GCP) expose HA primitives as managed services: Multi-AZ relational databases (RDS Multi-AZ, Cloud SQL HA), autoscaling groups spanning Availability Zones, and multi-region global load balancers.
    - [[Kubernetes]] implements HA through ReplicaSets (multiple pod copies), PodDisruptionBudgets (minimum healthy replicas during node maintenance), and control plane replication (HA etcd clusters with 3+ nodes).
  - **Telecommunications**
    - Carrier-grade HA (CGHA) requires 99.999% ("five nines") or higher, with sub-50 ms failover mandated for voice and signalling. Implemented via redundant network elements, IP Fast Reroute, and BFD (Bidirectional Forwarding Detection).
  - **Financial Systems**
    - Stock exchange matching engines and payment processing systems require HA combined with strict ordering and exactly-once semantics. Active-active deployments with synchronous replication across datacenters are common. Regulatory requirements (MiFID II, SOX) mandate documented RTO/RPO targets.
  - **Databases**
    - Clustered RDBMS solutions (PostgreSQL with Patroni, MySQL InnoDB Cluster, Oracle RAC) provide HA with automatic failover and synchronous replication.
    - Distributed NoSQL databases ([[Apache Cassandra]], MongoDB, CockroachDB) are architected with HA as a first-class property, distributing data across nodes and replicating to configurable consistency levels.
  - **Microservices & Service Mesh**
    - [[Microservices Architecture]] decomposes monolithic systems into independently-deployable, independently-scalable services, each with its own HA budget. [[Service Mesh]] (Istio, Linkerd) provides mTLS, automatic retries, timeouts, and circuit breaking at the infrastructure level, implementing HA policies transparently.
  - **Content Delivery**
    - [[Content Delivery Network]] (CDN) systems achieve HA by caching content at globally distributed edge nodes; even if an origin server fails, cached responses remain available.
  - **AIOps and Predictive Maintenance**
    - [[AIOps]] platforms analyse telemetry with machine learning to predict imminent failures before they occur, enabling pre-emptive failover or remediation. This bridges HA into the AI domain through [[Predictive Maintenance]] of infrastructure components.

- ### Relationships
  - requires:: [[Fault Tolerance]]
  - requires:: [[Reliability]]
  - requires:: [[Redundancy]]
  - requires:: [[Health Monitoring]]
  - hasPart:: [[Failover]]
  - hasPart:: [[Load Balancing]]
  - hasPart:: [[Data Replication]]
  - hasPart:: [[Automatic Failover]]
  - uses:: [[Distributed Systems]]
  - uses:: [[Cloud Infrastructure]]
  - uses:: [[Consensus Algorithms]]
  - uses:: [[Container Orchestration]]
  - enables:: [[Business Continuity]]
  - enables:: [[Disaster Recovery]]
  - enables:: [[Service Level Agreement]]
  - dependsOn:: [[Network Infrastructure]]
  - dependsOn:: [[Storage Replication]]
  - supports:: [[Microservices Architecture]]
  - supports:: [[Cloud Native]]
  - supports:: [[Site Reliability Engineering]]
  - contrastsWith:: [[Eventual Consistency]]
  - contrastsWith:: [[Single Point of Failure]]
  - relatedTo:: [[Chaos Engineering]]
  - relatedTo:: [[Service Mesh]]
  - relatedTo:: [[Circuit Breaker Pattern]]
  - relatedTo:: [[Kubernetes]]
  - bridges-to:: [[AIOps]]
  - bridges-to:: [[Predictive Maintenance]]

- ### Standards and Context
  - **Availability Zone (AZ)** — cloud provider construct providing physical isolation (separate power, cooling, networking) within a region; HA deployments span at least two AZs.
  - **ISO/IEC 25010** — Systems and software quality model; HA falls under the Reliability characteristic, subdivided into Maturity, Availability, Fault Tolerance, and Recoverability.
  - **ITIL Availability Management** — ITIL v4 practice defining Availability, Reliability, Maintainability, and Serviceability (ARMS) as the four levers of service availability.
  - **SLA / SLO / SLI** — [[Service Level Agreement]] (contract), Service Level Objective (target), Service Level Indicator (measurement). HA commitments are formalised as SLOs and enforced via SLAs with penalty clauses for breach.
  - **NIST SP 800-34** — Contingency Planning Guide for Federal Information Systems; defines RTO and RPO in a government context and mandates HA planning for critical systems.
  - **Carrier-Grade HA** — Telcordia (Bellcore) GR-512-CORE and ETSI standards define carrier-grade availability requirements for telecom equipment, typically 99.999% or higher.
  - **CAP Theorem** — [[CAP Theorem]] (Consistency, Availability, Partition Tolerance) proves that distributed systems can guarantee at most two of three properties during a network partition. HA systems often choose Availability + Partition Tolerance (AP) and accept eventual consistency, or Consistency + Partition Tolerance (CP) and risk brief unavailability during partition healing.
  - **PACELC Model** — extends CAP to consider the latency-consistency trade-off even when partitions are absent, providing a more complete framework for HA database selection.

- ### Provenance
  - sources:: ISO/IEC 25010; ITIL v4; NIST SP 800-34; Telcordia GR-512-CORE; AWS Well-Architected Framework Reliability Pillar; Google SRE Book (Beyer et al., O'Reilly, 2016)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
