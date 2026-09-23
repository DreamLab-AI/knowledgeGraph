---
okf_version: "0.2"
type: Class
title: Operating System
resource: urn:ngm:class:operating-system
domain: infrastructure
description: "An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services for application programs — encompassing process scheduling, memory management, file-system abstraction, device-driver interfaces, networking stacks, and security enforcement. Acting as the intermediary between hardware and user-space applications, the OS exposes stable APIs "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:process-scheduler
  - urn:ngm:class:memory-management-unit
  - urn:ngm:class:file-system
  - urn:ngm:class:device-drivers
  - urn:ngm:class:system-call-interface
  - urn:ngm:class:kernel
  - urn:ngm:class:device-drivers
  - urn:ngm:class:network-stack
requires:
  - urn:ngm:class:hardware
  - urn:ngm:class:cpu
  - urn:ngm:class:memory
enables:
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:containerisation
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:edge-computing
  - urn:ngm:class:cloud-computing
implements:
  - urn:ngm:class:posix
  - urn:ngm:class:open-xr
contrastsWith:
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:bare-metal
bridgesTo:
  - urn:ngm:class:ros
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:virtualisation
  - urn:ngm:class:hypervisor
supports:
  - urn:ngm:class:multithreading
  - urn:ngm:class:inter-process-communication
  - urn:ngm:class:security-isolation
relatedTo:
  - urn:ngm:class:resource-management
  - urn:ngm:class:firmware
  - urn:ngm:class:middleware
---

# Operating System

An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services for application programs — encompassing process scheduling, memory management, file-system abstraction, device-driver interfaces, networking stacks, and security enforcement. Acting as the intermediary between hardware and user-space applications, the OS exposes stable APIs that decouple software from underlying physical or virtualised hardware. Specialised variants range from real-time operating systems (RTOS) for deterministic control loops in embedded and robotic systems, to hypervisor-based OSes supporting full hardware virtualisation, to spatial-computing runtime stacks that coordinate sensor fusion, GPU pipelines, and display refresh at sub-millisecond latencies.
