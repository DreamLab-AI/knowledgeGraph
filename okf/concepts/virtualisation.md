---
okf_version: "0.2"
type: Class
title: Virtualisation
resource: urn:ngm:class:virtualisation
domain: infrastructure
description: Virtualisation is the creation of abstracted, software-defined representations of physical computing resources — processors, memory, storage and networks — allowing multiple isolated environments to share one set of hardware. A hypervisor or equivalent control layer presents each environment with the illusion of dedicated resources while multiplexing the underlying hardware. It is the foundational
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:operating-system
hasPart:
  - urn:ngm:class:virtual-machine
requires:
  - urn:ngm:class:compute-resources
  - urn:ngm:class:resource-management
enables:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:scalability
  - urn:ngm:class:network-function-virtualization
dependsOn:
  - urn:ngm:class:hardware-abstraction
bridgesTo:
  - urn:ngm:class:kubernetes
uses:
  - urn:ngm:class:hypervisor
  - urn:ngm:class:hardware-abstraction
  - urn:ngm:class:operating-system
supports:
  - urn:ngm:class:data-centre
  - urn:ngm:class:resource-management
relatedTo:
  - urn:ngm:class:hypervisor
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:operating-system
---

# Virtualisation

Virtualisation is the creation of abstracted, software-defined representations of physical computing resources — processors, memory, storage and networks — allowing multiple isolated environments to share one set of hardware. A hypervisor or equivalent control layer presents each environment with the illusion of dedicated resources while multiplexing the underlying hardware. It is the foundational technology behind cloud computing, enabling consolidation, isolation, elastic provisioning and efficient utilisation of infrastructure.
