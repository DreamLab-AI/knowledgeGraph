---
okf_version: "0.2"
type: Class
title: Multi-Tenancy
resource: urn:ngm:class:multi-tenancy
domain: infrastructure
description: Multi-tenancy is a software architecture in which a single instance of an application or platform serves many independent customers, called tenants, while keeping each tenant's data, configuration, and behaviour logically isolated. It maximises resource utilisation and operational efficiency by sharing compute, storage, and code across tenants, relying on isolation boundaries to preserve privacy a
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cloud-computing
requires:
  - urn:ngm:class:security
  - urn:ngm:class:privacy
enables:
  - urn:ngm:class:cloud-computing
dependsOn:
  - urn:ngm:class:security
implements:
  - urn:ngm:class:cloud-computing
bridgesTo:
  - urn:ngm:class:kubernetes
uses:
  - urn:ngm:class:kubernetes
supports:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:service-discovery
partOf:
  - urn:ngm:class:cloud-computing
relatedTo:
  - urn:ngm:class:observability
  - urn:ngm:class:privacy
---

# Multi-Tenancy

Multi-tenancy is a software architecture in which a single instance of an application or platform serves many independent customers, called tenants, while keeping each tenant's data, configuration, and behaviour logically isolated. It maximises resource utilisation and operational efficiency by sharing compute, storage, and code across tenants, relying on isolation boundaries to preserve privacy and prevent interference. It is foundational to software-as-a-service and to shared cloud infrastructure such as container orchestration platforms.
