---
okf_version: "0.2"
type: Class
title: Continuous Deployment
resource: urn:ngm:class:continuous-deployment
domain: infrastructure
description: Continuous Deployment is a software release practice in which every code change that passes the automated pipeline is released to production automatically, without manual approval gates. It extends continuous delivery by removing the final human decision step, so that a successful build, test, and integration sequence results directly in a live deployment. The practice depends on comprehensive aut
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:devops
hasPart:
  - urn:ngm:class:automated-testing
  - urn:ngm:class:monitoring
requires:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:version-control
  - urn:ngm:class:quality-assurance
enables:
  - urn:ngm:class:feedback-loop
dependsOn:
  - urn:ngm:class:continuous-delivery
contrastsWith:
  - urn:ngm:class:continuous-delivery
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:microservices
supports:
  - urn:ngm:class:site-reliability-engineering
partOf:
  - urn:ngm:class:devops
relatedTo:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:service-mesh
---

# Continuous Deployment

Continuous Deployment is a software release practice in which every code change that passes the automated pipeline is released to production automatically, without manual approval gates. It extends continuous delivery by removing the final human decision step, so that a successful build, test, and integration sequence results directly in a live deployment. The practice depends on comprehensive automated testing, robust monitoring, and rapid rollback mechanisms to maintain reliability while sustaining a high deployment cadence.
