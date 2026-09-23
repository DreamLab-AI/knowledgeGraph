---
okf_version: "0.2"
type: Class
title: High Availability
resource: urn:ngm:class:high-availability
domain: infrastructure
description: "High Availability (HA) is an infrastructure design property that specifies and enforces the conditions under which a system continues delivering its intended service despite component failures, maintenance windows, or demand spikes. HA is quantified by availability targets expressed as 'nines' — for example 99.9% permits roughly 8.7 hours of downtime per year, while 99.999% ('five nines') permits "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:failover
  - urn:ngm:class:load-balancing
  - urn:ngm:class:data-replication
  - urn:ngm:class:automatic-failover
requires:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:reliability
  - urn:ngm:class:redundancy
  - urn:ngm:class:health-monitoring
enables:
  - urn:ngm:class:business-continuity
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:service-level-agreement
dependsOn:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:replication
  - urn:ngm:class:replication
contrastsWith:
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:single-point-of-failure
bridgesTo:
  - urn:ngm:class:aiops
  - urn:ngm:class:predictive-maintenance
uses:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:consensus-algorithm
supports:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:cloud-native
  - urn:ngm:class:site-reliability-engineering
relatedTo:
  - urn:ngm:class:chaos-engineering
  - urn:ngm:class:service-mesh
  - urn:ngm:class:circuit-breaker-pattern
  - urn:ngm:class:kubernetes
---

# High Availability

High Availability (HA) is an infrastructure design property that specifies and enforces the conditions under which a system continues delivering its intended service despite component failures, maintenance windows, or demand spikes. HA is quantified by availability targets expressed as 'nines' — for example 99.9% permits roughly 8.7 hours of downtime per year, while 99.999% ('five nines') permits only 5.26 minutes — achieved through redundant components, active-active or active-passive failover, continuous health monitoring, and automated recovery orchestration. It is operationalised through the complementary metrics of Mean Time Between Failures (MTBF) and Mean Time To Recovery (MTTR), with recovery time objectives (RTO) and recovery point objectives (RPO) anchoring HA targets to business continuity requirements. HA is a foundational non-functional requirement in cloud-native platforms, telecommunications networks, financial trading systems, and safety-critical infrastructure where service interruption carries regulatory, commercial, or life-safety consequences.
