---
okf_version: "0.2"
type: Class
title: Twelve Factor App
resource: urn:ngm:class:twelve-factor-app
domain: infrastructure
description: The Twelve-Factor App is a methodology for building software-as-a-service applications that are portable, resilient, and suitable for deployment on modern cloud platforms. It defines twelve guidelines covering codebase management, declared dependencies, configuration in the environment, backing services, build-release-run separation, stateless processes, port binding, concurrency, disposability, d
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cloud-native-applications
hasPart:
  - urn:ngm:class:configuration-management
requires:
  - urn:ngm:class:configuration-management
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:continuous-delivery
dependsOn:
  - urn:ngm:class:configuration-management
implements:
  - urn:ngm:class:cloud-native
contrastsWith:
  - urn:ngm:class:microservices
bridgesTo:
  - urn:ngm:class:containerisation
uses:
  - urn:ngm:class:containerisation
supports:
  - urn:ngm:class:devops
relatedTo:
  - urn:ngm:class:cloud-native
  - urn:ngm:class:software-architecture
  - urn:ngm:class:microservices
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Twelve Factor App

The Twelve-Factor App is a methodology for building software-as-a-service applications that are portable, resilient, and suitable for deployment on modern cloud platforms. It defines twelve guidelines covering codebase management, declared dependencies, configuration in the environment, backing services, build-release-run separation, stateless processes, port binding, concurrency, disposability, dev/prod parity, logs as event streams, and admin tasks. Adherence yields applications that scale horizontally, deploy continuously, and integrate cleanly with containerised and orchestrated infrastructure.
