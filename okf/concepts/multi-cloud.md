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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Multi-Cloud

A cloud deployment strategy in which an organisation consumes services from two or more independent public cloud providers — such as AWS, Azure, and Google Cloud — distributing workloads to avoid vendor lock-in, satisfy data-residency and regulatory requirements, exploit provider-specific strengths, and improve resilience against provider-wide outages, at the cost of increased operational complexity, duplicated tooling, and cross-cloud egress charges.
