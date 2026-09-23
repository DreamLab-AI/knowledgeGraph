---
okf_version: "0.2"
type: Class
title: Network Function Virtualization
resource: urn:ngm:class:network-function-virtualization
domain: infrastructure
description: Network Function Virtualization (NFV) is an architectural paradigm that decouples network functions — such as firewalls, load balancers, intrusion detection systems, and routers — from dedicated proprietary hardware appliances and implements them as software running on commercial off-the-shelf (COTS) servers, switches, and storage. Standardised by ETSI's NFV Industry Specification Group, NFV intro
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:network-architecture
hasPart:
  - urn:ngm:class:virtual-network-function
  - urn:ngm:class:nfv-infrastructure
  - urn:ngm:class:nfv-management-and-orchestration
requires:
  - urn:ngm:class:hypervisor
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:virtualisation
enables:
  - urn:ngm:class:network-slicing
  - urn:ngm:class:edge-computing
  - urn:ngm:class:network-scalability
  - urn:ngm:class:service-function-chaining
dependsOn:
  - urn:ngm:class:software-defined-networking
  - urn:ngm:class:commercial-off-the-shelf-hardware
implements:
  - urn:ngm:class:etsi-nfv-standard
contrastsWith:
  - urn:ngm:class:network-appliance
  - urn:ngm:class:proprietary-hardware
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:edge-ai
uses:
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:openstack
supports:
  - urn:ngm:class:5-g-network
  - urn:ngm:class:5-g-network
  - urn:ngm:class:telecom-cloud
standardizedBy:
  - urn:ngm:class:etsi
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:software-defined-networking
  - urn:ngm:class:cloud-native-network-function
---

# Network Function Virtualization

Network Function Virtualization (NFV) is an architectural paradigm that decouples network functions — such as firewalls, load balancers, intrusion detection systems, and routers — from dedicated proprietary hardware appliances and implements them as software running on commercial off-the-shelf (COTS) servers, switches, and storage. Standardised by ETSI's NFV Industry Specification Group, NFV introduces a three-layer model comprising the NFV Infrastructure (NFVI), Virtual Network Functions (VNFs), and the NFV Management and Orchestration (MANO) framework. By enabling elastic provisioning, rapid deployment, and lifecycle automation of network services, NFV reduces capital and operational expenditure while providing the flexibility required for 5G, edge computing, and cloud-native telecom architectures. It is closely related to and operationally complementary with Software-Defined Networking (SDN), which separates the network control plane from the data plane.
