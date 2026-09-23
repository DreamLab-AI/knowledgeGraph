---
okf_version: "0.2"
type: Class
title: Resilience Engineering
resource: urn:ngm:class:resilience-engineering
domain: infrastructure
description: "Resilience engineering is the discipline concerned with how complex socio-technical systems sustain required operation under expected and unexpected disturbances, and how they adapt, degrade gracefully, and recover. Rather than treating failure solely as a deviation to be eliminated, it studies the adaptive capacities that let systems anticipate, monitor, respond to, and learn from disruption. In "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:reliability-engineering
hasPart:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:redundancy
  - urn:ngm:class:disaster-recovery
requires:
  - urn:ngm:class:observability
  - urn:ngm:class:incident-response
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:observability
  - urn:ngm:class:monitoring
contrastsWith:
  - urn:ngm:class:fault-tolerance
bridgesTo:
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:complex-systems
uses:
  - urn:ngm:class:chaos-engineering
  - urn:ngm:class:redundancy
supports:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:site-reliability-engineering
partOf:
  - urn:ngm:class:reliability-engineering
relatedTo:
  - urn:ngm:class:chaos-engineering
  - urn:ngm:class:high-availability
  - urn:ngm:class:complex-systems
---

# Resilience Engineering

Resilience engineering is the discipline concerned with how complex socio-technical systems sustain required operation under expected and unexpected disturbances, and how they adapt, degrade gracefully, and recover. Rather than treating failure solely as a deviation to be eliminated, it studies the adaptive capacities that let systems anticipate, monitor, respond to, and learn from disruption. In computing it informs architectures and operational practices that bend rather than break under load spikes, partial outages, and cascading faults.
