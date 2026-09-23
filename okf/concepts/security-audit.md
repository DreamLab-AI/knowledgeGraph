---
okf_version: "0.2"
type: Class
title: Security Audit
resource: urn:ngm:class:security-audit
domain: security
description: A security audit is a systematic evaluation of a system's controls, configurations, and code against security requirements and threats. It combines techniques such as code review, configuration assessment, penetration testing, and control verification to identify vulnerabilities and compliance gaps. Audits produce evidence and remediation guidance used to reduce risk and demonstrate assurance.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cybersecurity
hasPart:
  - urn:ngm:class:penetration-testing
  - urn:ngm:class:vulnerability-assessment
  - urn:ngm:class:code-review
  - urn:ngm:class:configuration-management
requires:
  - urn:ngm:class:threat-model
  - urn:ngm:class:access-control
  - urn:ngm:class:audit-log
enables:
  - urn:ngm:class:risk-management
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:incident-response
contrastsWith:
  - urn:ngm:class:security-monitoring
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:threat-surface-map
  - urn:ngm:class:static-analysis
  - urn:ngm:class:cryptography
standardizedBy:
  - urn:ngm:class:iso-27001
  - urn:ngm:class:nist-cybersecurity-framework
  - urn:ngm:class:soc-2
relatedTo:
  - urn:ngm:class:threat-surface-map
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:supply-chain-security
---

# Security Audit

A security audit is a systematic evaluation of a system's controls, configurations, and code against security requirements and threats. It combines techniques such as code review, configuration assessment, penetration testing, and control verification to identify vulnerabilities and compliance gaps. Audits produce evidence and remediation guidance used to reduce risk and demonstrate assurance.
