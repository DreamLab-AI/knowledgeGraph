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
  - urn:ngm:class:autoscaling
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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Infrastructure as Code

Infrastructure as Code (IaC) is the practice of defining and provisioning computing infrastructure through machine-readable definition files rather than manual configuration. Declarative or imperative specifications describe the desired state of servers, networks, and services, which tooling then realises idempotently and reproducibly. Treating infrastructure like software allows version control, peer review, automated testing, and consistent deployment across environments, eliminating configuration drift.
