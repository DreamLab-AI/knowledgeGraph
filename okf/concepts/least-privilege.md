---
okf_version: "0.2"
type: Class
title: Least Privilege
resource: urn:ngm:class:least-privilege
domain: security
description: Least privilege is a security principle stating that every user, process or component should be granted only the minimum access rights necessary to perform its function, and no more. By limiting permissions to what is strictly required, the principle reduces the attack surface and confines the damage that a compromised account or faulty component can cause. It is a cornerstone of access control an
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:access-control
requires:
  - urn:ngm:class:authorization
  - urn:ngm:class:authentication
  - urn:ngm:class:authorisation
enables:
  - urn:ngm:class:defense-in-depth
  - urn:ngm:class:access-control
  - urn:ngm:class:defence-in-depth
dependsOn:
  - urn:ngm:class:access-control
contrastsWith:
  - urn:ngm:class:privilege-escalation
bridgesTo:
  - urn:ngm:class:endpoint-security
uses:
  - urn:ngm:class:role-based-access-control
supports:
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:identity-and-access-management
relatedTo:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:authorization
  - urn:ngm:class:defense-in-depth
  - urn:ngm:class:authorisation
  - urn:ngm:class:defence-in-depth
---

# Least Privilege

Least privilege is a security principle stating that every user, process or component should be granted only the minimum access rights necessary to perform its function, and no more. By limiting permissions to what is strictly required, the principle reduces the attack surface and confines the damage that a compromised account or faulty component can cause. It is a cornerstone of access control and underpins modern approaches such as zero-trust architecture and defence in depth.
