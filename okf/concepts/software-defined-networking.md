---
okf_version: "0.2"
type: Class
title: Software-Defined Networking
resource: urn:ngm:class:software-defined-networking
domain: infrastructure
description: Software-defined networking (SDN) is a network architecture that decouples the control plane, which decides how traffic is routed, from the data plane, which forwards packets, centralising control logic in a programmable software controller. By exposing the network through open interfaces, SDN allows traffic flows and policies to be configured dynamically and programmatically rather than device-by
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-architecture
hasPart:
  - urn:ngm:class:virtual-network
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:cloud-computing
dependsOn:
  - urn:ngm:class:api
implements:
  - urn:ngm:class:network-slicing
bridgesTo:
  - urn:ngm:class:network-slicing
uses:
  - urn:ngm:class:api
supports:
  - urn:ngm:class:infrastructure
partOf:
  - urn:ngm:class:network-architecture
relatedTo:
  - urn:ngm:class:virtual-network
  - urn:ngm:class:infrastructure
---

# Software-Defined Networking

Software-defined networking (SDN) is a network architecture that decouples the control plane, which decides how traffic is routed, from the data plane, which forwards packets, centralising control logic in a programmable software controller. By exposing the network through open interfaces, SDN allows traffic flows and policies to be configured dynamically and programmatically rather than device-by-device. This abstraction enables automation, virtualisation and centralised orchestration of network behaviour.
