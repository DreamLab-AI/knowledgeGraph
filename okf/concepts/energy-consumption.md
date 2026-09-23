---
okf_version: "0.2"
type: Class
title: Energy Consumption
resource: urn:ngm:class:energy-consumption
domain: infrastructure
description: Energy consumption is the total quantity of energy drawn by a system, process, or device over a defined time period, typically expressed in kilowatt-hours (kWh) or joules. In computing and digital infrastructure contexts it encompasses the electrical power used by processors, memory, networking equipment, and cooling systems. It is a foundational metric in evaluating the environmental footprint, o
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:sustainability
hasPart:
  - urn:ngm:class:power-usage-effectiveness
  - urn:ngm:class:thermal-design-power
  - urn:ngm:class:idle-power-consumption
requires:
  - urn:ngm:class:power-infrastructure
  - urn:ngm:class:cooling-system
  - urn:ngm:class:cooling-system
enables:
  - urn:ngm:class:green-computing
  - urn:ngm:class:carbon-accounting
dependsOn:
  - urn:ngm:class:hardware-architecture
  - urn:ngm:class:workload-scheduling
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:energy-efficiency
bridgesTo:
  - urn:ngm:class:model-training
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:edge-computing
  - urn:ngm:class:model-training
partOf:
  - urn:ngm:class:carbon-footprint
  - urn:ngm:class:operational-cost
relatedTo:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:data-centre
  - urn:ngm:class:renewable-energy
  - urn:ngm:class:computational-complexity-theory
  - urn:ngm:class:computational-complexity-theory
---

# Energy Consumption

Energy consumption is the total quantity of energy drawn by a system, process, or device over a defined time period, typically expressed in kilowatt-hours (kWh) or joules. In computing and digital infrastructure contexts it encompasses the electrical power used by processors, memory, networking equipment, and cooling systems. It is a foundational metric in evaluating the environmental footprint, operational cost, and sustainability compliance of data centres, blockchain networks, AI training pipelines, and distributed systems. Minimising energy consumption without sacrificing throughput or reliability is a core design constraint across hardware architecture, consensus mechanisms, and large-scale deployment.
