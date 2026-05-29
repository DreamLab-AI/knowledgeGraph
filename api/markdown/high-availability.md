- ### Definition
  - High availability (HA) is an infrastructure design property that specifies and implements the conditions under which a system continues to deliver its intended service in the presence of component failures, maintenance windows, or demand spikes. HA is quantified by availability targets expressed in nines (e.g., 99.9% equates to roughly 8.7 hours of permitted downtime per year), achieved through redundant components, active-passive or active-active failover, health monitoring, and automated recovery. It is a core non-functional requirement in cloud-native, telecommunications, and financial systems where service interruption carries regulatory or commercial penalties.

- ### Semantic Classification
  - owl-class:: high-availability:High Availability
  - owl-role:: Concept

- ### Relationships
  - requires [[Fault Tolerance]]
  - requires [[Reliability]]
  - uses [[Distributed Systems]]
  - uses [[Cloud Infrastructure]]
  - relatedTo [[Microservices Architecture]]
  - relatedTo [[Data Replication]]

- ### Content
  High availability architectures eliminate single points of failure at every layer: compute nodes run in clusters with active-active or active-standby configurations; databases use synchronous or asynchronous replication across primary and replica nodes; load balancers operate in pairs with VRRP (Virtual Router Redundancy Protocol) or cloud-provider anycast; and DNS failover routes traffic to secondary regions on primary-region health-check failure.

  Distributed Systems principles—consistent hashing, quorum reads/writes, and leader election via Raft or Paxos—underpin the consensus and coordination that allow services to continue operating correctly during partial failures. Cloud Infrastructure platforms (AWS, Azure, GCP) expose HA primitives as managed services: Multi-AZ RDS for relational databases, Availability Zone-spread autoscaling groups, and global load balancers that route across regions.

  Reliability engineering quantifies HA as a combination of mean time between failures (MTBF) and mean time to recovery (MTTR); reducing MTTR through automated runbooks and chaos engineering practices is as effective as increasing MTBF. Microservices Architecture enables per-service HA budgets: a frontend service may require 99.99% availability whilst a batch analytics service tolerates lower targets, allowing infrastructure cost optimisation. Data Replication strategies—synchronous for zero-RPO requirements, asynchronous for reduced latency with non-zero RPO—are chosen based on recovery point and recovery time objectives specified in business continuity plans.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z