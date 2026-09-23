---
okf_version: "0.2"
type: Class
title: Continuous Delivery
resource: urn:ngm:class:continuous-delivery
domain: infrastructure
description: Continuous Delivery is a software engineering discipline in which code changes are automatically built, tested and prepared for release to production so that the software is always in a deployable state. It extends continuous integration by adding automated release pipelines, environment promotion and deployment gates, allowing teams to ship changes rapidly, reliably and with low risk. Releases be
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:devops
requires:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:version-control
enables:
  - urn:ngm:class:microservices
  - urn:ngm:class:cloud-native
dependsOn:
  - urn:ngm:class:testing
  - urn:ngm:class:monitoring
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:automation
  - urn:ngm:class:git
supports:
  - urn:ngm:class:observability
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:reliability-engineering
partOf:
  - urn:ngm:class:devops
relatedTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:software-engineering
---

# Continuous Delivery

Continuous Delivery is a software engineering discipline in which code changes are automatically built, tested and prepared for release to production so that the software is always in a deployable state. It extends continuous integration by adding automated release pipelines, environment promotion and deployment gates, allowing teams to ship changes rapidly, reliably and with low risk. Releases become routine, low-ceremony events rather than infrequent high-stakes operations.
