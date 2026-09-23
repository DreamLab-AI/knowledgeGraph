---
okf_version: "0.2"
type: Class
title: Infrastructure as Code
resource: urn:ngm:class:infrastructure-as-code
domain: infrastructure
description: "Infrastructure as Code (IaC) is the practice of defining and provisioning computing infrastructure through machine-readable definition files rather than manual configuration. Declarative or imperative specifications describe the desired state of servers, networks, and services, which tooling then realises idempotently and reproducibly. Treating infrastructure like software allows version control, "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:automation
hasPart:
  - urn:ngm:class:configuration-management
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:cloud-infrastructure
enables:
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:reproducibility
  - urn:ngm:class:auto-scaling
dependsOn:
  - urn:ngm:class:idempotency
implements:
  - urn:ngm:class:immutable-infrastructure
bridgesTo:
  - urn:ngm:class:cloud-native
uses:
  - urn:ngm:class:terraform
  - urn:ngm:class:cloud-computing
supports:
  - urn:ngm:class:gitops
partOf:
  - urn:ngm:class:devops
relatedTo:
  - urn:ngm:class:azure
  - urn:ngm:class:containerisation
  - urn:ngm:class:azure
---

# Infrastructure as Code

Infrastructure as Code (IaC) is the practice of defining and provisioning computing infrastructure through machine-readable definition files rather than manual configuration. Declarative or imperative specifications describe the desired state of servers, networks, and services, which tooling then realises idempotently and reproducibly. Treating infrastructure like software allows version control, peer review, automated testing, and consistent deployment across environments, eliminating configuration drift.
