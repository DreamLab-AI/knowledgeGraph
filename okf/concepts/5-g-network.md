---
okf_version: "0.2"
type: Class
title: 5G Network
resource: urn:ngm:class:5-g-network
domain: infrastructure
description: A 5G Network is the end-to-end fifth-generation mobile telecommunications system comprising a 5G New Radio (NR) radio access network built around gNB base stations, a cloud-native 5G Core implementing a service-based architecture with independently deployable network functions (AMF, SMF, UPF, PCF, NRF, AUSF), and the transport infrastructure interconnecting them. The architecture fundamentally sep
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:telecommunications-infrastructure
hasPart:
  - urn:ngm:class:5-g
  - urn:ngm:class:multi-access-edge-computing
  - urn:ngm:class:network-slicing
  - urn:ngm:class:5-g
  - urn:ngm:class:5g-core
  - urn:ngm:class:multi-access-edge-computing
requires:
  - urn:ngm:class:spectrum-allocation
  - urn:ngm:class:cloud-native-architecture
  - urn:ngm:class:transport-network
enables:
  - urn:ngm:class:5-g-connectivity
  - urn:ngm:class:io-t-infrastructure
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:extended-reality
  - urn:ngm:class:private-5g
  - urn:ngm:class:autonomous-vehicle
contrastsWith:
  - urn:ngm:class:wi-fi
  - urn:ngm:class:4g-lte
bridgesTo:
  - urn:ngm:class:6-g-network-slice
  - urn:ngm:class:artificial-intelligence-operations
  - urn:ngm:class:digital-twin
  - urn:ngm:class:ai-driven-network-operations
uses:
  - urn:ngm:class:network-function-virtualization
  - urn:ngm:class:software-defined-networking
  - urn:ngm:class:edge-computing
  - urn:ngm:class:massive-mimo
  - urn:ngm:class:millimetre-wave
standardizedBy:
  - urn:ngm:class:3-gpp
  - urn:ngm:class:o-ran-alliance
  - urn:ngm:class:etsi
relatedTo:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:open-ran
  - urn:ngm:class:mobile-edge-computing
---

# 5G Network

A 5G Network is the end-to-end fifth-generation mobile telecommunications system comprising a 5G New Radio (NR) radio access network built around gNB base stations, a cloud-native 5G Core implementing a service-based architecture with independently deployable network functions (AMF, SMF, UPF, PCF, NRF, AUSF), and the transport infrastructure interconnecting them. The architecture fundamentally separates the control plane from the user plane, enables network slicing to provision multiple virtualised logical networks on shared physical resources, and integrates multi-access edge computing nodes for deterministic low-latency application hosting. Defined across 3GPP Release 15 (frozen 2018) through Release 18 (5G-Advanced), 5G networks support three canonical service classes: enhanced Mobile Broadband (eMBB), Ultra-Reliable Low-Latency Communications (URLLC), and massive Machine-Type Communications (mMTC), making them the foundational connectivity layer for industrial IoT, autonomous systems, extended reality, and private campus networks.
