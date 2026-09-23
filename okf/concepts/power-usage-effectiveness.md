---
okf_version: "0.2"
type: Class
title: Power Usage Effectiveness
resource: urn:ngm:class:power-usage-effectiveness
domain: infrastructure
description: Power usage effectiveness (PUE) is a metric used to assess the energy efficiency of a data centre, defined as the ratio of total facility energy to the energy delivered to IT equipment. A PUE of 1.0 represents perfect efficiency where all energy reaches computing hardware, while higher values reflect overhead from cooling, power conversion and lighting. It is a widely used benchmark for sustainabi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:energy-efficiency
hasPart:
  - urn:ngm:class:cooling-system
  - urn:ngm:class:power-supply
enables:
  - urn:ngm:class:operational-efficiency
dependsOn:
  - urn:ngm:class:power-distribution-unit
  - urn:ngm:class:energy-management
uses:
  - urn:ngm:class:energy-consumption
  - urn:ngm:class:electricity-consumption
supports:
  - urn:ngm:class:carbon-footprint-measurement
partOf:
  - urn:ngm:class:environmental-sustainability
  - urn:ngm:class:sustainability-reporting
relatedTo:
  - urn:ngm:class:energy-efficiency
  - urn:ngm:class:data-centre
  - urn:ngm:class:immersion-cooling
---

# Power Usage Effectiveness

Power usage effectiveness (PUE) is a metric used to assess the energy efficiency of a data centre, defined as the ratio of total facility energy to the energy delivered to IT equipment. A PUE of 1.0 represents perfect efficiency where all energy reaches computing hardware, while higher values reflect overhead from cooling, power conversion and lighting. It is a widely used benchmark for sustainability and operational efficiency in data centres.
