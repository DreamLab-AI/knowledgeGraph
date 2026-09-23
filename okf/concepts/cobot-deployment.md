---
okf_version: "0.2"
type: Class
title: Cobot Deployment
resource: urn:ngm:class:cobot-deployment
domain: robotics
description: "Cobot deployment is the process of installing and configuring a collaborative robot into a shared workspace with human operators, encompassing risk assessment, speed and separation monitoring, power and force limiting, and compliance with safety standards governing human-robot proximity. It translates abstract safety standards such as ISO/TS 15066 into a concrete, validated physical installation. "
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:collaborative-systems-modality-robot
requires:
  - urn:ngm:class:collaborative-systems-modality-robot
uses:
  - urn:ngm:class:cobot-safety-levels
---

# Cobot Deployment

Cobot deployment is the process of installing and configuring a collaborative robot into a shared workspace with human operators, encompassing risk assessment, speed and separation monitoring, power and force limiting, and compliance with safety standards governing human-robot proximity. It translates abstract safety standards such as ISO/TS 15066 into a concrete, validated physical installation. Successful deployment requires certifying that the cobot's safety-rated monitored stop and force limits meet the standard's thresholds before it operates alongside people.
