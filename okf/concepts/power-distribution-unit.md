---
okf_version: "0.2"
type: Class
title: Power Distribution Unit
resource: urn:ngm:class:power-distribution-unit
domain: infrastructure
description: A power distribution unit (PDU) is a device that delivers and manages electrical power to multiple pieces of equipment within a data centre rack or row. It takes input from an upstream supply such as a UPS or the building electrical feed and distributes regulated, often metered, power across many outlets. Modern intelligent PDUs add remote monitoring, per-outlet switching and environmental sensing
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computing-infrastructure
hasPart:
  - urn:ngm:class:power-supply
  - urn:ngm:class:monitoring
requires:
  - urn:ngm:class:redundancy
  - urn:ngm:class:high-availability
enables:
  - urn:ngm:class:observability
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:energy-and-power
  - urn:ngm:class:power-supply
contrastsWith:
  - urn:ngm:class:power-supply
supports:
  - urn:ngm:class:data-centre
  - urn:ngm:class:high-availability
  - urn:ngm:class:energy-efficiency
partOf:
  - urn:ngm:class:data-centre
  - urn:ngm:class:computing-infrastructure
relatedTo:
  - urn:ngm:class:cooling-system
  - urn:ngm:class:sustainability
---

# Power Distribution Unit

A power distribution unit (PDU) is a device that delivers and manages electrical power to multiple pieces of equipment within a data centre rack or row. It takes input from an upstream supply such as a UPS or the building electrical feed and distributes regulated, often metered, power across many outlets. Modern intelligent PDUs add remote monitoring, per-outlet switching and environmental sensing to support availability and energy-efficiency goals.
