---
okf_version: "0.2"
type: Class
title: Cloud Security
resource: urn:ngm:class:cloud-security
domain: security
description: Cloud security is the discipline of protecting data, applications, identities and infrastructure hosted in cloud computing environments against unauthorised access, misconfiguration, data loss and service disruption. It applies controls across the shared-responsibility boundary between cloud providers and customers, spanning identity and access management, encryption, network segmentation, configu
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:security
requires:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:encryption
implements:
  - urn:ngm:class:authentication
bridgesTo:
  - urn:ngm:class:confidential-computing
uses:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:access-control
  - urn:ngm:class:threat-detection
  - urn:ngm:class:data-loss-prevention
supports:
  - urn:ngm:class:compliance
  - urn:ngm:class:data-privacy
standardizedBy:
  - urn:ngm:class:iso-27001
partOf:
  - urn:ngm:class:security
  - urn:ngm:class:cloud-computing
relatedTo:
  - urn:ngm:class:security-architecture
  - urn:ngm:class:data-governance
---

# Cloud Security

Cloud security is the discipline of protecting data, applications, identities and infrastructure hosted in cloud computing environments against unauthorised access, misconfiguration, data loss and service disruption. It applies controls across the shared-responsibility boundary between cloud providers and customers, spanning identity and access management, encryption, network segmentation, configuration governance and continuous monitoring. Cloud security extends established information-security principles to elastic, multi-tenant and API-driven platforms where infrastructure is provisioned programmatically.
