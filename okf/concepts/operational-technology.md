---
okf_version: "0.2"
type: Class
title: Operational Technology
resource: urn:ngm:class:operational-technology
domain: infrastructure
description: "Operational technology (OT) is the hardware and software that directly monitors and controls physical processes, devices, and infrastructure in industrial environments. It encompasses industrial control systems such as SCADA and distributed control systems, programmable logic controllers, sensors, and actuators that manage manufacturing, energy, and utilities. OT prioritises availability, safety, "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:scada
  - urn:ngm:class:process-control
requires:
  - urn:ngm:class:safety
  - urn:ngm:class:iec-62443
enables:
  - urn:ngm:class:automation
contrastsWith:
  - urn:ngm:class:cloud-computing
bridgesTo:
  - urn:ngm:class:industry-4-0
  - urn:ngm:class:cyber-physical-systems
uses:
  - urn:ngm:class:opc-ua
  - urn:ngm:class:telemetry
supports:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:predictive-maintenance
  - urn:ngm:class:industrial-automation
standardizedBy:
  - urn:ngm:class:iec-62443
relatedTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:resilience
---

# Operational Technology

Operational technology (OT) is the hardware and software that directly monitors and controls physical processes, devices, and infrastructure in industrial environments. It encompasses industrial control systems such as SCADA and distributed control systems, programmable logic controllers, sensors, and actuators that manage manufacturing, energy, and utilities. OT prioritises availability, safety, and real-time determinism, distinguishing it from information technology, with which it increasingly converges under Industry 4.0.
