---
okf_version: "0.2"
type: Class
title: Multi-Cloud
resource: urn:ngm:class:multi-cloud
domain: infrastructure
description: A cloud deployment strategy in which an organisation consumes services from two or more independent public cloud providers — such as AWS, Azure, and Google Cloud — distributing workloads to avoid vendor lock-in, satisfy data-residency and regulatory requirements, exploit provider-specific strengths, and improve resilience against provider-wide outages, at the cost of increased operational complexi
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cloud-computing
contrastsWith:
  - urn:ngm:class:hybrid-cloud
uses:
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:infrastructure-as-a-service
---

# Multi-Cloud

A cloud deployment strategy in which an organisation consumes services from two or more independent public cloud providers — such as AWS, Azure, and Google Cloud — distributing workloads to avoid vendor lock-in, satisfy data-residency and regulatory requirements, exploit provider-specific strengths, and improve resilience against provider-wide outages, at the cost of increased operational complexity, duplicated tooling, and cross-cloud egress charges.
