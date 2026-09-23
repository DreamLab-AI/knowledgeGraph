---
okf_version: "0.2"
type: Class
title: rb 0095 safety zone
resource: urn:ngm:class:rb-0095-safety-zone
domain: robotics
description: A safety zone is a defined spatial region around a robot or autonomous system within which human presence or other objects trigger protective actions such as speed reduction, monitored stops, or full emergency stops. Safety zones are configured and monitored via safeguarding devices and are a central mechanism for achieving collaborative and safe robot operation in accordance with ISO 10218 and IS
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-safety-and-standards
  - urn:ngm:class:robot-safety
requires:
  - urn:ngm:class:rb-0089-risk-assessment
  - urn:ngm:class:rb-0087-safety-standard
dependsOn:
  - urn:ngm:class:rb-0075-range-finder
  - urn:ngm:class:functional-safety
relatedTo:
  - urn:ngm:class:rb-0096-safeguarding
  - urn:ngm:class:rb-0091-safety-rated-monitored-stop
  - urn:ngm:class:rb-0092-protective-stop
  - urn:ngm:class:rb-0093-speed-limitation
---

# rb 0095 safety zone

A safety zone is a defined spatial region around a robot or autonomous system within which human presence or other objects trigger protective actions such as speed reduction, monitored stops, or full emergency stops. Safety zones are configured and monitored via safeguarding devices and are a central mechanism for achieving collaborative and safe robot operation in accordance with ISO 10218 and ISO/TS 15066.
