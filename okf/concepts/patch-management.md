---
okf_version: "0.2"
type: Class
title: Patch Management
resource: urn:ngm:class:patch-management
domain: security
description: Patch management is the systematic process of acquiring, testing, prioritising, and deploying software updates across an organisation's systems to remediate vulnerabilities and defects. It tracks asset inventory and known vulnerabilities, schedules and stages patches to balance risk against operational disruption, and verifies that fixes are applied. Effective patch management is a core control fo
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:vulnerability-management
hasPart:
  - urn:ngm:class:incident-response
requires:
  - urn:ngm:class:configuration-management
  - urn:ngm:class:vulnerability
enables:
  - urn:ngm:class:data-protection
dependsOn:
  - urn:ngm:class:vulnerability
implements:
  - urn:ngm:class:vulnerability-management
contrastsWith:
  - urn:ngm:class:incident-response
bridgesTo:
  - urn:ngm:class:cybersecurity
uses:
  - urn:ngm:class:configuration-management
  - urn:ngm:class:devops
supports:
  - urn:ngm:class:security-operations
standardizedBy:
  - urn:ngm:class:standards
  - urn:ngm:class:nist
relatedTo:
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:vulnerability
---

# Patch Management

Patch management is the systematic process of acquiring, testing, prioritising, and deploying software updates across an organisation's systems to remediate vulnerabilities and defects. It tracks asset inventory and known vulnerabilities, schedules and stages patches to balance risk against operational disruption, and verifies that fixes are applied. Effective patch management is a core control for reducing the window during which known exploits can be used.
