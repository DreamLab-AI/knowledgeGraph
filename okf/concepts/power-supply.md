---
okf_version: "0.2"
type: Class
title: Power Supply
resource: urn:ngm:class:power-supply
domain: infrastructure
description: A power supply unit (PSU) is an internal hardware component that converts alternating current (AC) from mains electricity into regulated low-voltage direct current (DC) required by computing equipment's internal components including motherboard, CPU, GPU, and storage devices. In data centre contexts, power supply systems include redundant PSUs, uninterruptible power supplies (UPS), and power distr
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:hardware-component
hasPart:
  - urn:ngm:class:voltage-regulator
  - urn:ngm:class:rectifier
  - urn:ngm:class:transformer
requires:
  - urn:ngm:class:mains-electricity
  - urn:ngm:class:cooling-system
enables:
  - urn:ngm:class:reliability
  - urn:ngm:class:high-availability
  - urn:ngm:class:continuous-operation
  - urn:ngm:class:reliability
dependsOn:
  - urn:ngm:class:power-distribution-unit
contrastsWith:
  - urn:ngm:class:power-distribution-unit
bridgesTo:
  - urn:ngm:class:energy-efficiency
  - urn:ngm:class:power-management
supports:
  - urn:ngm:class:redundancy
standardizedBy:
  - urn:ngm:class:80-plus-certification
  - urn:ngm:class:atx-standard
partOf:
  - urn:ngm:class:data-centre
  - urn:ngm:class:server
relatedTo:
  - urn:ngm:class:power-usage-effectiveness
  - urn:ngm:class:generator
---

# Power Supply

A power supply unit (PSU) is an internal hardware component that converts alternating current (AC) from mains electricity into regulated low-voltage direct current (DC) required by computing equipment's internal components including motherboard, CPU, GPU, and storage devices. In data centre contexts, power supply systems include redundant PSUs, uninterruptible power supplies (UPS), and power distribution units (PDUs) organised in hierarchical redundancy tiers.
