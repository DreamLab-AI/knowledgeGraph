---
okf_version: "0.2"
type: Class
title: Hypervisor
resource: urn:ngm:class:hypervisor
domain: infrastructure
description: "A hypervisor, or virtual machine monitor, is system software that creates and runs virtual machines by abstracting and partitioning a host's physical CPU, memory, and I/O resources. Type 1 (bare-metal) hypervisors run directly on hardware, while Type 2 (hosted) hypervisors run atop a conventional operating system. By isolating multiple guest operating systems on shared hardware, the hypervisor is "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:virtualisation
  - urn:ngm:class:infra-computing-and-cloud
requires:
  - urn:ngm:class:hardware-abstraction
  - urn:ngm:class:memory-management
enables:
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:cloud-computing
dependsOn:
  - urn:ngm:class:operating-system
contrastsWith:
  - urn:ngm:class:containerisation
uses:
  - urn:ngm:class:hardware-abstraction
supports:
  - urn:ngm:class:multi-tenancy
  - urn:ngm:class:cloud-infrastructure
partOf:
  - urn:ngm:class:system-software
relatedTo:
  - urn:ngm:class:operating-system
  - urn:ngm:class:snapshot
  - urn:ngm:class:tee
---

# Hypervisor

A hypervisor, or virtual machine monitor, is system software that creates and runs virtual machines by abstracting and partitioning a host's physical CPU, memory, and I/O resources. Type 1 (bare-metal) hypervisors run directly on hardware, while Type 2 (hosted) hypervisors run atop a conventional operating system. By isolating multiple guest operating systems on shared hardware, the hypervisor is the foundational technology of server virtualisation and cloud computing.
