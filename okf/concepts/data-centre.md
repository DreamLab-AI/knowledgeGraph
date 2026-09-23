---
okf_version: "0.2"
type: Class
title: Data Centre
resource: urn:ngm:class:data-centre
domain: infrastructure
description: A data centre is a dedicated facility that houses computing, storage and networking infrastructure together with the power, cooling and physical security needed to operate them reliably. It provides the consolidated environment for hosting servers, cloud services and high-performance workloads such as AI training. Its energy and power demands make efficiency, measured through metrics like PUE, a c
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:computing-infrastructure
hasPart:
  - urn:ngm:class:server
  - urn:ngm:class:liquid-cooling
  - urn:ngm:class:cooling-system
  - urn:ngm:class:power-distribution-unit
  - urn:ngm:class:network-switch
requires:
  - urn:ngm:class:energy-and-power
  - urn:ngm:class:physical-security
  - urn:ngm:class:high-speed-network-connectivity
  - urn:ngm:class:power-grid
  - urn:ngm:class:renewable-energy
enables:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:model-training
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:cdn
  - urn:ngm:class:high-availability
dependsOn:
  - urn:ngm:class:power-grid
  - urn:ngm:class:fibre-optic-network
contrastsWith:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:fog-computing
bridgesTo:
  - urn:ngm:class:carbon-footprint
  - urn:ngm:class:renewable-energy
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:virtualisation
  - urn:ngm:class:power-usage-effectiveness
  - urn:ngm:class:hot-aisle-cold-aisle-containment
  - urn:ngm:class:redundancy
  - urn:ngm:class:gpu
supports:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:edge-computing
  - urn:ngm:class:failover
standardizedBy:
  - urn:ngm:class:tier-classification-standard
  - urn:ngm:class:iso-iec-27001
partOf:
  - urn:ngm:class:cloud-computing
relatedTo:
  - urn:ngm:class:energy-and-power
  - urn:ngm:class:colocation-services
  - urn:ngm:class:cdn
  - urn:ngm:class:geographic-distribution
---

# Data Centre

A data centre is a dedicated facility that houses computing, storage and networking infrastructure together with the power, cooling and physical security needed to operate them reliably. It provides the consolidated environment for hosting servers, cloud services and high-performance workloads such as AI training. Its energy and power demands make efficiency, measured through metrics like PUE, a central operational and sustainability concern.
