---
okf_version: "0.2"
type: Class
title: Real-Time Operating System
resource: urn:ngm:class:real-time-operating-system
domain: infrastructure
description: "A Real-Time Operating System (RTOS) is an operating system designed to service computational tasks within guaranteed, bounded time constraints, providing temporal determinism that makes it the foundational software substrate for safety-critical and time-sensitive embedded applications. RTOSes implement priority-based preemptive scheduling, bounded interrupt latency, and synchronisation primitives "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:operating-system
hasPart:
  - urn:ngm:class:interrupt-handler
  - urn:ngm:class:memory-management-unit
requires:
  - urn:ngm:class:deterministic-scheduling
  - urn:ngm:class:worst-case-execution-time
  - urn:ngm:class:embedded-processor
enables:
  - urn:ngm:class:sub-millisecond-latency
  - urn:ngm:class:real-time
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:real-time-control
  - urn:ngm:class:safety-critical-systems
implements:
  - urn:ngm:class:inter-process-communication
  - urn:ngm:class:preemptive-scheduling
  - urn:ngm:class:priority-inversion-prevention
contrastsWith:
  - urn:ngm:class:general-purpose-operating-system
  - urn:ngm:class:soft-real-time-system
bridgesTo:
  - urn:ngm:class:edge-ai
  - urn:ngm:class:cyber-physical-systems
uses:
  - urn:ngm:class:latency
  - urn:ngm:class:embedded-ai-frameworks
  - urn:ngm:class:message-queue
  - urn:ngm:class:semaphore
supports:
  - urn:ngm:class:robotic-system
  - urn:ngm:class:motor-driver
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:industrial-automation
partOf:
  - urn:ngm:class:operating-system
relatedTo:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:ros
  - urn:ngm:class:freertos
  - urn:ngm:class:zephyr-rtos
---

# Real-Time Operating System

A Real-Time Operating System (RTOS) is an operating system designed to service computational tasks within guaranteed, bounded time constraints, providing temporal determinism that makes it the foundational software substrate for safety-critical and time-sensitive embedded applications. RTOSes implement priority-based preemptive scheduling, bounded interrupt latency, and synchronisation primitives (semaphores, mutexes, message queues) that ensure predictable worst-case task-switching behaviour irrespective of system load. They are classified as hard real-time — where any deadline miss constitutes a system failure — or soft real-time, where occasional misses cause graceful degradation rather than catastrophic failure. Deployed in medical devices, industrial controllers, automotive electronics, avionics, and robotics, RTOSes underpin every domain in which a missed computational deadline can cause physical harm, financial loss, or mission failure.
