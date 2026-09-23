---
okf_version: "0.2"
type: Class
title: Defense In Depth
resource: urn:ngm:class:defense-in-depth
domain: security
description: Defense in depth is a security strategy that layers multiple, independent controls across an environment so that the failure or bypass of any single control does not lead to compromise. Adapted from military doctrine, it spans physical, network, host, application, and data layers, combining preventive, detective, and responsive measures to slow attackers, increase the cost of intrusion, and provid
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security-architecture
requires:
  - urn:ngm:class:intrusion-detection-system
  - urn:ngm:class:intrusion-detection
enables:
  - urn:ngm:class:risk-mitigation
implements:
  - urn:ngm:class:risk-mitigation
contrastsWith:
  - urn:ngm:class:perimeter-security
uses:
  - urn:ngm:class:firewall
  - urn:ngm:class:encryption
  - urn:ngm:class:access-control
supports:
  - urn:ngm:class:endpoint-security
  - urn:ngm:class:network-security
partOf:
  - urn:ngm:class:security-architecture
relatedTo:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:network-security
  - urn:ngm:class:access-control
---

# Defense In Depth

Defense in depth is a security strategy that layers multiple, independent controls across an environment so that the failure or bypass of any single control does not lead to compromise. Adapted from military doctrine, it spans physical, network, host, application, and data layers, combining preventive, detective, and responsive measures to slow attackers, increase the cost of intrusion, and provide redundancy. It assumes no control is infallible and complements modern paradigms such as zero trust by ensuring that defences are distributed rather than concentrated at a single perimeter.
