---
okf_version: "0.2"
type: Class
title: Hybrid Cloud
resource: urn:ngm:class:hybrid-cloud
domain: infrastructure
description: "Hybrid cloud is a computing architecture that combines on-premises or private-cloud infrastructure with one or more public clouds, orchestrated so that workloads and data can move between them. It lets organisations keep sensitive systems in controlled environments while bursting to public capacity for scale or specialised services. Hybrid cloud emphasises interoperability, unified management and "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cloud-computing
hasPart:
  - urn:ngm:class:private-cloud
  - urn:ngm:class:public-cloud
requires:
  - urn:ngm:class:interoperability
enables:
  - urn:ngm:class:cloud-migration
  - urn:ngm:class:elasticity
contrastsWith:
  - urn:ngm:class:multi-cloud
  - urn:ngm:class:vendor-lock-in
bridgesTo:
  - urn:ngm:class:on-premises
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:containerisation
supports:
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:data-sovereignty
partOf:
  - urn:ngm:class:cloud-computing
relatedTo:
  - urn:ngm:class:cloud-infrastructure
---

# Hybrid Cloud

Hybrid cloud is a computing architecture that combines on-premises or private-cloud infrastructure with one or more public clouds, orchestrated so that workloads and data can move between them. It lets organisations keep sensitive systems in controlled environments while bursting to public capacity for scale or specialised services. Hybrid cloud emphasises interoperability, unified management and consistent identity and networking across environments.
