---
okf_version: "0.2"
type: Class
title: Security Framework
resource: urn:ngm:class:security-framework
domain: security
description: A Security Framework is a structured, normative system of policies, controls, standards, and procedural guidelines that an organisation applies to protect digital assets, information systems, and users from adversarial threats and accidental harm. It integrates risk management principles with technical controls across identity, access, cryptography, monitoring, and incident response to establish a
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:access-control
  - urn:ngm:class:incident-response
  - urn:ngm:class:risk-management
  - urn:ngm:class:audit-logging
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:cryptography
  - urn:ngm:class:threat-modelling
  - urn:ngm:class:vulnerability-management
enables:
  - urn:ngm:class:data-governance
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:zero-trust-architecture
contrastsWith:
  - urn:ngm:class:perimeter-security
bridgesTo:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:smart-contract-auditing
supports:
  - urn:ngm:class:privacy-preserving-technology
  - urn:ngm:class:digital-identity
  - urn:ngm:class:supply-chain-security
standardizedBy:
  - urn:ngm:class:nist-cybersecurity-framework
  - urn:ngm:class:iso-iec-27001
  - urn:ngm:class:cis-controls
relatedTo:
  - urn:ngm:class:cyber-resilience
  - urn:ngm:class:security-operations-centre
  - urn:ngm:class:penetration-testing
---

# Security Framework

A Security Framework is a structured, normative system of policies, controls, standards, and procedural guidelines that an organisation applies to protect digital assets, information systems, and users from adversarial threats and accidental harm. It integrates risk management principles with technical controls across identity, access, cryptography, monitoring, and incident response to establish a cohesive defence posture. Widely adopted frameworks such as NIST CSF, ISO/IEC 27001, and CIS Controls provide systematic vocabularies for assessing security maturity and aligning investment with threat landscape. In emergent domains such as spatial computing, decentralised infrastructure, and AI-mediated platforms, security frameworks extend to cover smart-contract auditing, decentralised identity, privacy-preserving computation, and supply-chain integrity.
