---
okf_version: "0.2"
type: Class
title: Networking Infrastructure
resource: urn:ngm:class:networking-infrastructure
domain: infrastructure
description: Networking infrastructure comprises the integrated ensemble of physical hardware, logical protocols, and software-defined systems—including routers, switches, fibre optic links, wireless access points, content delivery networks (CDNs), edge nodes, load balancers, and DNS services—that collectively enable communication between computing systems across local, metropolitan, and wide-area scales. It f
maturity: mature
quality: 0
is-a:
  - urn:ngm:class:infra-network-and-comms
hasPart:
  - urn:ngm:class:cdn
  - urn:ngm:class:edge-computing
  - urn:ngm:class:software-defined-networking
  - urn:ngm:class:network-function-virtualization
  - urn:ngm:class:load-balancer
  - urn:ngm:class:domain-name-system
  - urn:ngm:class:network-function-virtualization
requires:
  - urn:ngm:class:network-security
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:traffic-engineering
enables:
  - urn:ngm:class:realtime-communication
  - urn:ngm:class:metaverse-infrastructure
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:federated-learning
dependsOn:
  - urn:ngm:class:latency
  - urn:ngm:class:bandwidth-adaptation
  - urn:ngm:class:network-protocol
  - urn:ngm:class:optical-fibre
contrastsWith:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:storage-infrastructure
bridgesTo:
  - urn:ngm:class:decentralised-network
  - urn:ngm:class:inference-infrastructure
  - urn:ngm:class:ai-inference-infrastructure
supports:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:autonomous-system
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:ieee-802-x
  - urn:ngm:class:3-gpp
  - urn:ngm:class:ieee-802-x
relatedTo:
  - urn:ngm:class:5-g-network
  - urn:ngm:class:network-topology
  - urn:ngm:class:5-g-network
---

# Networking Infrastructure

Networking infrastructure comprises the integrated ensemble of physical hardware, logical protocols, and software-defined systems—including routers, switches, fibre optic links, wireless access points, content delivery networks (CDNs), edge nodes, load balancers, and DNS services—that collectively enable communication between computing systems across local, metropolitan, and wide-area scales. It forms the foundational substrate upon which distributed applications, cloud services, and real-time collaborative platforms depend, governing end-to-end latency, throughput, reliability, and security. Modern networking infrastructure increasingly incorporates software-defined networking (SDN), network function virtualisation (NFV), and programmable data planes that decouple control logic from physical forwarding hardware. For latency-sensitive domains such as spatial computing, extended reality, and distributed AI inference, infrastructure design must additionally satisfy stringent quality-of-service guarantees through traffic engineering, edge offloading, and geographically distributed state synchronisation.
