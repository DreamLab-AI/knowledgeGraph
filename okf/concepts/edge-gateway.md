---
okf_version: "0.2"
type: Class
title: Edge Gateway
resource: urn:ngm:class:edge-gateway
domain: infrastructure
description: An edge gateway is a network device or software component deployed at the boundary between a local edge environment and wider network infrastructure—such as the internet or a cloud backend—that performs protocol translation, security enforcement, traffic routing, and local data preprocessing before forwarding selected data to upstream systems. Edge gateways aggregate data from IoT devices, sensors
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:edge-computing-node
enables:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:edge-orchestration
uses:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:network-protocol
  - urn:ngm:class:network-security
  - urn:ngm:class:api-gateway
relatedTo:
  - urn:ngm:class:edge-network
  - urn:ngm:class:edge-computing-architecture
  - urn:ngm:class:cdn
---

# Edge Gateway

An edge gateway is a network device or software component deployed at the boundary between a local edge environment and wider network infrastructure—such as the internet or a cloud backend—that performs protocol translation, security enforcement, traffic routing, and local data preprocessing before forwarding selected data to upstream systems. Edge gateways aggregate data from IoT devices, sensors, and local compute nodes, filter and normalise it, enforce access control policies, and reduce bandwidth consumption by processing and compressing data at the point of collection rather than transmitting raw streams to the cloud. They are essential components of edge computing architectures in industrial IoT, smart cities, autonomous systems, and distributed XR infrastructure.
