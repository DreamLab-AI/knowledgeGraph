---
okf_version: "0.2"
type: Class
title: Containerisation
resource: urn:ngm:class:containerisation
domain: infrastructure
description: Containerisation is an operating-system-level virtualisation technique that packages an application together with its dependencies, libraries, and configuration into a single portable, isolated unit called a container. Containers share the host kernel yet maintain isolated user spaces, making them far lighter than full virtual machines while remaining reproducible across environments. The approach
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:virtualisation
  - urn:ngm:class:container-runtime
hasPart:
  - urn:ngm:class:container-runtime
requires:
  - urn:ngm:class:container-runtime
enables:
  - urn:ngm:class:microservices
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:cloud-native
dependsOn:
  - urn:ngm:class:virtual-machine
implements:
  - urn:ngm:class:immutable-infrastructure
contrastsWith:
  - urn:ngm:class:virtual-machine
uses:
  - urn:ngm:class:cloud-computing
supports:
  - urn:ngm:class:devops
  - urn:ngm:class:continuous-deployment
partOf:
  - urn:ngm:class:cloud-native
relatedTo:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:gitops
---

# Containerisation

Containerisation is an operating-system-level virtualisation technique that packages an application together with its dependencies, libraries, and configuration into a single portable, isolated unit called a container. Containers share the host kernel yet maintain isolated user spaces, making them far lighter than full virtual machines while remaining reproducible across environments. The approach underpins cloud-native software delivery, providing consistent runtime behaviour from a developer's laptop to production clusters.
