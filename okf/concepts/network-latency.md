---
okf_version: "0.2"
type: Class
title: Network Latency
resource: urn:ngm:class:network-latency
domain: infrastructure
description: Network Latency is the round-trip communication delay between nodes in a network, directly constraining consensus speed, block propagation, transaction throughput, real-time application responsiveness, and distributed system coordination. High latency increases the probability of forks in blockchain systems, degrades user experience in interactive applications, and sets a fundamental lower bound o
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
hasPart:
  - urn:ngm:class:propagation-delay
  - urn:ngm:class:transmission-delay
  - urn:ngm:class:processing-delay
requires:
  - urn:ngm:class:latency-management-protocol
  - urn:ngm:class:network-infrastructure
enables:
  - urn:ngm:class:real-time-communication
dependsOn:
  - urn:ngm:class:network-topology
  - urn:ngm:class:bandwidth
contrastsWith:
  - urn:ngm:class:latency
  - urn:ngm:class:throughput
bridgesTo:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:round-trip-time
supports:
  - urn:ngm:class:block-propagation-time
  - urn:ngm:class:consensus-mechanism
partOf:
  - urn:ngm:class:network-performance-metrics
  - urn:ngm:class:quality-of-service
relatedTo:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:distributed-system
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:sub-millisecond-latency
---

# Network Latency

Network Latency is the round-trip communication delay between nodes in a network, directly constraining consensus speed, block propagation, transaction throughput, real-time application responsiveness, and distributed system coordination. High latency increases the probability of forks in blockchain systems, degrades user experience in interactive applications, and sets a fundamental lower bound on achievable synchronisation intervals in geographically distributed deployments.
