---
okf_version: "0.2"
type: Class
title: Defence In Depth
resource: urn:ngm:class:defence-in-depth
domain: security
description: Defence in Depth is a cybersecurity strategy that layers multiple independent security controls such that the failure of any single control does not expose the system to compromise. Originating from military doctrine, it applies redundancy and diversity across physical, technical, and administrative security dimensions. The strategy reduces the probability of successful attack by requiring adversa
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:access-control
  - urn:ngm:class:intrusion-detection-system
  - urn:ngm:class:firewall
  - urn:ngm:class:encryption
requires:
  - urn:ngm:class:security-policy
  - urn:ngm:class:threat-modelling
enables:
  - urn:ngm:class:resilience
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:incident-response
implements:
  - urn:ngm:class:security-architecture
  - urn:ngm:class:risk-management
contrastsWith:
  - urn:ngm:class:perimeter-security
supports:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:cloud-security
standardizedBy:
  - urn:ngm:class:nist-cybersecurity-framework
relatedTo:
  - urn:ngm:class:network-segmentation
  - urn:ngm:class:identity-management
  - urn:ngm:class:vulnerability-management
---

# Defence In Depth

Defence in Depth is a cybersecurity strategy that layers multiple independent security controls such that the failure of any single control does not expose the system to compromise. Originating from military doctrine, it applies redundancy and diversity across physical, technical, and administrative security dimensions. The strategy reduces the probability of successful attack by requiring adversaries to defeat multiple independent barriers sequentially.
