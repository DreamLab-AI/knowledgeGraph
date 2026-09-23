---
okf_version: "0.2"
type: Class
title: Emission Factors
resource: urn:ngm:class:emission-factors
domain: governance
description: Emission Factors are coefficients that quantify the average amount of a pollutant—typically greenhouse gases expressed in CO2-equivalent—released per unit of an activity, such as per kilowatt-hour of electricity consumed or per kilometre driven by a particular vehicle class. They are derived from empirical measurement campaigns and modelling studies, and published by bodies such as the IPCC, the I
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:carbon-accounting
hasPart:
  - urn:ngm:class:scope-1-emissions
  - urn:ngm:class:scope-2-emissions
  - urn:ngm:class:scope-3-emissions
requires:
  - urn:ngm:class:ghg-protocol
  - urn:ngm:class:life-cycle-assessment
  - urn:ngm:class:activity-data
enables:
  - urn:ngm:class:carbon-footprint-measurement
  - urn:ngm:class:environmental-impact-metric
  - urn:ngm:class:greenhouse-gas-inventory
  - urn:ngm:class:carbon-disclosure
dependsOn:
  - urn:ngm:class:measurement-uncertainty
bridgesTo:
  - urn:ngm:class:supply-chain-transparency
supports:
  - urn:ngm:class:sustainability-reporting
  - urn:ngm:class:carbon-credits
  - urn:ngm:class:net-zero-target-setting
standardizedBy:
  - urn:ngm:class:ipcc
  - urn:ngm:class:iso-14064
partOf:
  - urn:ngm:class:carbon-accounting
  - urn:ngm:class:environmental-accounting
relatedTo:
  - urn:ngm:class:carbon-footprint-assessment
---

# Emission Factors

Emission Factors are coefficients that quantify the average amount of a pollutant—typically greenhouse gases expressed in CO2-equivalent—released per unit of an activity, such as per kilowatt-hour of electricity consumed or per kilometre driven by a particular vehicle class. They are derived from empirical measurement campaigns and modelling studies, and published by bodies such as the IPCC, the IEA, and national environmental agencies. Emission factors are the fundamental input to carbon accounting frameworks such as the GHG Protocol, enabling organisations to calculate their Scope 1, 2, and 3 inventories from activity data. Regular revision of these factors reflects technological change and regional grid decarbonisation.
