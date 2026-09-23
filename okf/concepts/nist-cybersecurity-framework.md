---
okf_version: "0.2"
type: Class
title: NIST Cybersecurity Framework
resource: urn:ngm:class:nist-cybersecurity-framework
domain: security
description: The NIST Cybersecurity Framework (CSF) is a voluntary, outcomes-based risk management framework published by the US National Institute of Standards and Technology that provides organisations with a common taxonomy and structured approach for managing cybersecurity risk across sectors. It organises security activities around six core functions—Govern, Identify, Protect, Detect, Respond, and Recover
maturity: mature
quality: 0.76
is-a:
  - urn:ngm:class:security-framework
hasPart:
  - urn:ngm:class:cybersecurity-framework-core
  - urn:ngm:class:cybersecurity-framework-tiers
  - urn:ngm:class:cybersecurity-framework-profile
  - urn:ngm:class:cybersecurity-framework-govern-function
requires:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:asset-inventory
enables:
  - urn:ngm:class:incident-response
  - urn:ngm:class:supply-chain-risk-management
  - urn:ngm:class:threat-detection
  - urn:ngm:class:security-governance
dependsOn:
  - urn:ngm:class:nist-sp-800-53
  - urn:ngm:class:vulnerability-management
implements:
  - urn:ngm:class:cybersecurity-risk-management
contrastsWith:
  - urn:ngm:class:iso-iec-27001
  - urn:ngm:class:soc-2
  - urn:ngm:class:cis-controls
bridgesTo:
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:ai-governance
uses:
  - urn:ngm:class:risk-register
  - urn:ngm:class:control-mapping
supports:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:compliance-monitoring
  - urn:ngm:class:cyber-insurance
standardizedBy:
  - urn:ngm:class:nist
partOf:
  - urn:ngm:class:nist
  - urn:ngm:class:nist
relatedTo:
  - urn:ngm:class:nist
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:critical-infrastructure-protection
---

# NIST Cybersecurity Framework

The NIST Cybersecurity Framework (CSF) is a voluntary, outcomes-based risk management framework published by the US National Institute of Standards and Technology that provides organisations with a common taxonomy and structured approach for managing cybersecurity risk across sectors. It organises security activities around six core functions—Govern, Identify, Protect, Detect, Respond, and Recover—each decomposed into categories and subcategories cross-referenced to industry standards including ISO/IEC 27001, NIST SP 800-53, and COBIT. Version 2.0, released in February 2024, formalised the Govern function and broadened applicability beyond critical infrastructure to all organisation types and sizes globally. The framework is widely adopted as a baseline for cybersecurity programme assessment, board-level communication, supply-chain risk management, and regulatory compliance alignment.
