---
okf_version: "0.2"
type: Class
title: Power Infrastructure
resource: urn:ngm:class:power-infrastructure
domain: infrastructure
description: Power infrastructure is the set of electrical generation, distribution, conditioning and backup systems that deliver reliable energy to computing and physical facilities. In data centres it encompasses utility feeds, power distribution units, uninterruptible supplies and generators that together guarantee continuity under load and fault. It is a foundational dependency for high-availability infras
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:data-centre
hasPart:
  - urn:ngm:class:electrical-power
  - urn:ngm:class:power-supply
requires:
  - urn:ngm:class:redundancy
  - urn:ngm:class:capacity-planning
enables:
  - urn:ngm:class:high-availability
dependsOn:
  - urn:ngm:class:electrical-power
  - urn:ngm:class:renewable-energy
contrastsWith:
  - urn:ngm:class:cooling-system
uses:
  - urn:ngm:class:energy-efficiency
supports:
  - urn:ngm:class:cooling-system
  - urn:ngm:class:cloud-infrastructure
partOf:
  - urn:ngm:class:cloud-infrastructure
relatedTo:
  - urn:ngm:class:carbon-footprint
  - urn:ngm:class:renewable-energy
---

# Power Infrastructure

Power infrastructure is the set of electrical generation, distribution, conditioning and backup systems that deliver reliable energy to computing and physical facilities. In data centres it encompasses utility feeds, power distribution units, uninterruptible supplies and generators that together guarantee continuity under load and fault. It is a foundational dependency for high-availability infrastructure, often co-designed with cooling and capacity planning.
