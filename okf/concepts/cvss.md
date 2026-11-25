---
okf_version: "0.2"
type: Class
title: Cvss
resource: urn:ngm:class:cvss
domain: security
description: The Common Vulnerability Scoring System (CVSS) is an open, standardised framework for rating the severity of software vulnerabilities on a 0-10 scale. It decomposes severity into Base, Temporal and Environmental metric groups capturing intrinsic exploitability, real-world threat conditions and organisation-specific impact. CVSS provides a vendor-neutral common language so defenders can compare and
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:vulnerability-management
requires:
  - urn:ngm:class:vulnerability
enables:
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:risk-assessment
dependsOn:
  - urn:ngm:class:vulnerability
contrastsWith:
  - urn:ngm:class:threat-intelligence
bridgesTo:
  - urn:ngm:class:cybersecurity
uses:
  - urn:ngm:class:vulnerability
supports:
  - urn:ngm:class:threat-model
  - urn:ngm:class:incident-response
standardizedBy:
  - urn:ngm:class:cybersecurity
partOf:
  - urn:ngm:class:vulnerability-management
relatedTo:
  - urn:ngm:class:threat-intelligence
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:asset-inventory
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Cvss

The Common Vulnerability Scoring System (CVSS) is an open, standardised framework for rating the severity of software vulnerabilities on a 0-10 scale. It decomposes severity into Base, Temporal and Environmental metric groups capturing intrinsic exploitability, real-world threat conditions and organisation-specific impact. CVSS provides a vendor-neutral common language so defenders can compare and prioritise remediation consistently across heterogeneous products.
