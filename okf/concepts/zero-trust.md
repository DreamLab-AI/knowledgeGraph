---
okf_version: "0.2"
type: Class
title: Zero Trust
resource: urn:ngm:class:zero-trust
domain: security
description: "A security architecture built on the principle of 'never trust, always verify': no user, device, or workload is trusted by virtue of its network location, and every access request must be continuously authenticated, authorised, and encrypted based on identity, device posture, and context, replacing the traditional perimeter model in which anything inside the corporate network was implicitly truste"
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:security-architecture
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:identity-and-access-management
implements:
  - urn:ngm:class:least-privilege
contrastsWith:
  - urn:ngm:class:perimeter-security
  - urn:ngm:class:virtual-private-network
relatedTo:
  - urn:ngm:class:access-control
  - urn:ngm:class:network-security
---

# Zero Trust

A security architecture built on the principle of 'never trust, always verify': no user, device, or workload is trusted by virtue of its network location, and every access request must be continuously authenticated, authorised, and encrypted based on identity, device posture, and context, replacing the traditional perimeter model in which anything inside the corporate network was implicitly trusted.
