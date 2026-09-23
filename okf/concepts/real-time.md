---
okf_version: "0.2"
type: Class
title: Real Time
resource: urn:ngm:class:real-time
domain: infrastructure
description: Real-Time Computing is the discipline of designing computing systems, operating environments, and algorithmic frameworks in which program correctness depends not only on the logical result of computation but also on the time at which those results are produced, enforcing temporal constraints — de...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:operating-system
  - urn:ngm:class:safety-critical-systems
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:operating-system
  - urn:ngm:class:control-system
  - urn:ngm:class:cyber-physical-systems
hasPart:
  - urn:ngm:class:interrupt-handler
  - urn:ngm:class:priority-ceiling-protocol
  - urn:ngm:class:scheduler
  - urn:ngm:class:timer
  - urn:ngm:class:rtos
  - urn:ngm:class:task
  - urn:ngm:class:deadline
  - urn:ngm:class:wcet-analysis
requires:
  - urn:ngm:class:determinism
  - urn:ngm:class:hardware-abstraction-layer
  - urn:ngm:class:temporal-correctness
  - urn:ngm:class:wcet-bound
  - urn:ngm:class:schedulability-analysis
  - urn:ngm:class:priority-inheritance
enables:
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:avionics
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:real-time-ai-inference
  - urn:ngm:class:safety-critical-systems
  - urn:ngm:class:safety-critical-systems
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:automotive-control
  - urn:ngm:class:distributed-real-time
dependsOn:
  - urn:ngm:class:scheduling-theory
  - urn:ngm:class:control-theory
  - urn:ngm:class:formal-verification
  - urn:ngm:class:hardware-timing-models
  - urn:ngm:class:ieee-1588-ptp
  - urn:ngm:class:posix
implements:
  - urn:ngm:class:priority-ceiling-protocol
  - urn:ngm:class:rate-monotonic-algorithm
  - urn:ngm:class:earliest-deadline-first
  - urn:ngm:class:hierarchical-scheduling
  - urn:ngm:class:priority-inheritance-protocol
  - urn:ngm:class:constant-bandwidth-server
contrastsWith:
  - urn:ngm:class:general-purpose-operating-systems
  - urn:ngm:class:batch-processing
  - urn:ngm:class:best-effort-networking
  - urn:ngm:class:garbage-collected-runtimes
uses:
  - urn:ngm:class:dds
  - urn:ngm:class:ros-2
  - urn:ngm:class:web-rtc
  - urn:ngm:class:freertos
  - urn:ngm:class:zephyr
  - urn:ngm:class:vxworks
  - urn:ngm:class:qnx
  - urn:ngm:class:tsn
supports:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:avionics
  - urn:ngm:class:industrial-io-t
  - urn:ngm:class:medical-devices
  - urn:ngm:class:telecommunications
  - urn:ngm:class:robotics
  - urn:ngm:class:autonomous-vehicle
standardizedBy:
  - urn:ngm:class:do-178-c
  - urn:ngm:class:iec-61508
  - urn:ngm:class:ieee-1588-ptp
  - urn:ngm:class:iso-26262
  - urn:ngm:class:dds
  - urn:ngm:class:ieee-1588-ptp
  - urn:ngm:class:ieee-802-1-tsn
  - urn:ngm:class:posix-1003-1b
  - urn:ngm:class:dds
relatedTo:
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:time-sensitive-networking
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:edge-computing
  - urn:ngm:class:fpga
  - urn:ngm:class:functional-safety
---

# Real Time

Real-Time Computing is the discipline of designing computing systems, operating environments, and algorithmic frameworks in which program correctness depends not only on the logical result of computation but also on the time at which those results are produced, enforcing temporal constraints — de...
