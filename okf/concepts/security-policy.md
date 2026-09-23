---
okf_version: "0.2"
type: Class
title: Security Policy
resource: urn:ngm:class:security-policy
domain: security
description: A security policy is a formalised set of rules, principles, and procedures that govern how an organisation protects its information assets, systems, and personnel. It defines acceptable use, access control objectives, incident response obligations, and compliance requirements. Security policies serve as the authoritative reference for all subordinate security controls, technical configurations, an
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:access-control-policy
  - urn:ngm:class:incident-response-plan
  - urn:ngm:class:acceptable-use-policy
requires:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:audit-logging
enables:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:regulatory-compliance
dependsOn:
  - urn:ngm:class:governance
  - urn:ngm:class:risk-assessment
uses:
  - urn:ngm:class:risk-management
  - urn:ngm:class:compliance
supports:
  - urn:ngm:class:cyber-resilience
standardizedBy:
  - urn:ngm:class:iso-iec-27001
  - urn:ngm:class:nist-cybersecurity-framework
relatedTo:
  - urn:ngm:class:threat-model
  - urn:ngm:class:data-protection
  - urn:ngm:class:network-security
---

# Security Policy

A security policy is a formalised set of rules, principles, and procedures that govern how an organisation protects its information assets, systems, and personnel. It defines acceptable use, access control objectives, incident response obligations, and compliance requirements. Security policies serve as the authoritative reference for all subordinate security controls, technical configurations, and procedural guidelines within an enterprise.
