---
okf_version: "0.2"
type: Class
title: Cloud-Native Architecture
resource: urn:ngm:class:cloud-native-architecture
domain: infrastructure
description: Cloud-native architecture is an approach to designing and operating applications that fully exploit elastic, on-demand cloud infrastructure. It favours loosely coupled, independently deployable services packaged in containers, orchestrated dynamically, and managed through automation, declarative configuration and continuous delivery. The goal is resilient, scalable systems that can be evolved rapi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cloud-infrastructure
hasPart:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:containerisation
requires:
  - urn:ngm:class:containerisation
  - urn:ngm:class:kubernetes
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:continuous-deployment
dependsOn:
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:observability
contrastsWith:
  - urn:ngm:class:service-oriented-architecture
bridgesTo:
  - urn:ngm:class:twelve-factor-app
  - urn:ngm:class:service-mesh
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:devops
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:immutable-infrastructure
partOf:
  - urn:ngm:class:cloud-infrastructure
relatedTo:
  - urn:ngm:class:devops
  - urn:ngm:class:observability
---

# Cloud-Native Architecture

Cloud-native architecture is an approach to designing and operating applications that fully exploit elastic, on-demand cloud infrastructure. It favours loosely coupled, independently deployable services packaged in containers, orchestrated dynamically, and managed through automation, declarative configuration and continuous delivery. The goal is resilient, scalable systems that can be evolved rapidly and recover automatically from failure.
