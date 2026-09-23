---
okf_version: "0.2"
type: Class
title: Network Slicing
resource: urn:ngm:class:network-slicing
domain: infrastructure
description: Network slicing is a virtualisation architecture that partitions a single physical network infrastructure into multiple isolated, logically independent virtual networks — called slices — each configured to provide the specific performance characteristics, security posture, and service topology required by a distinct application or tenant. Defined within 3GPP Release 15 and later releases for 5G ne
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:network-function-virtualization
hasPart:
  - urn:ngm:class:radio-access-network
requires:
  - urn:ngm:class:software-defined-networking
  - urn:ngm:class:network-function-virtualization
enables:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:guaranteed-bandwidth
  - urn:ngm:class:edge-computing
  - urn:ngm:class:private-5g-network
  - urn:ngm:class:multi-tenancy
dependsOn:
  - urn:ngm:class:5g-core-network
  - urn:ngm:class:service-level-agreement
contrastsWith:
  - urn:ngm:class:best-effort-networking
bridgesTo:
  - urn:ngm:class:multi-access-edge-computing
supports:
  - urn:ngm:class:edge-computing-architecture
  - urn:ngm:class:vehicle-to-everything
  - urn:ngm:class:industrial-io-t
standardizedBy:
  - urn:ngm:class:3-gpp
  - urn:ngm:class:etsi-nfv
relatedTo:
  - urn:ngm:class:6-g-network-slice
  - urn:ngm:class:latency
---

# Network Slicing

Network slicing is a virtualisation architecture that partitions a single physical network infrastructure into multiple isolated, logically independent virtual networks — called slices — each configured to provide the specific performance characteristics, security posture, and service topology required by a distinct application or tenant. Defined within 3GPP Release 15 and later releases for 5G networks, each slice is instantiated through software-defined networking and network function virtualisation, enabling differentiated service-level guarantees — such as ultra-low latency for industrial automation or high-throughput for video streaming — without dedicated physical hardware. Slices span radio access, transport, and core network domains and can be dynamically provisioned, scaled, and torn down.
