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
  - urn:ngm:class:security-architecture
hasPart:
  - urn:ngm:class:access-control
  - urn:ngm:class:intrusion-detection-system
  - urn:ngm:class:firewall
  - urn:ngm:class:encryption
requires:
  - urn:ngm:class:security-policy
  - urn:ngm:class:threat-modelling
  - urn:ngm:class:intrusion-detection-system
  - urn:ngm:class:intrusion-detection
enables:
  - urn:ngm:class:resilience
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:incident-response
  - urn:ngm:class:risk-mitigation
implements:
  - urn:ngm:class:security-architecture
  - urn:ngm:class:risk-management
  - urn:ngm:class:risk-mitigation
contrastsWith:
  - urn:ngm:class:perimeter-security
uses:
  - urn:ngm:class:firewall
  - urn:ngm:class:encryption
  - urn:ngm:class:access-control
supports:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:cloud-security
standardizedBy:
  - urn:ngm:class:nist-cybersecurity-framework
partOf:
  - urn:ngm:class:security-architecture
relatedTo:
  - urn:ngm:class:network-segmentation
  - urn:ngm:class:identity-management
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:network-security
  - urn:ngm:class:access-control
---

# Defence In Depth

Defence in Depth is a cybersecurity strategy that layers multiple independent security controls such that the failure of any single control does not expose the system to compromise. Originating from military doctrine, it applies redundancy and diversity across physical, technical, and administrative security dimensions. The strategy reduces the probability of successful attack by requiring adversaries to defeat multiple independent barriers sequentially.
