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
---

# Cvss

The Common Vulnerability Scoring System (CVSS) is an open, standardised framework for rating the severity of software vulnerabilities on a 0-10 scale. It decomposes severity into Base, Temporal and Environmental metric groups capturing intrinsic exploitability, real-world threat conditions and organisation-specific impact. CVSS provides a vendor-neutral common language so defenders can compare and prioritise remediation consistently across heterogeneous products.
