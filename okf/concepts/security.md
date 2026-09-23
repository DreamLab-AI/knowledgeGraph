---
okf_version: "0.2"
type: Class
title: Security
resource: urn:ngm:class:security
domain: security
description: The protection of AI systems and their components against unauthorized access, manipulation, disruption, or exploitation, encompassing confidentiality, integrity, and availability of data, models, and infrastructure throughout the AI lifecycle.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:governance
hasPart:
  - urn:ngm:class:access-control
  - urn:ngm:class:intrusion-detection
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:incident-response
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:encryption
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:threat-modelling
enables:
  - urn:ngm:class:privacy
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:trust
  - urn:ngm:class:data-integrity
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:secure-boot
  - urn:ngm:class:hardware-security-module
contrastsWith:
  - urn:ngm:class:threat-actor
  - urn:ngm:class:attack-vector
  - urn:ngm:class:adversarial-machine-learning
bridgesTo:
  - urn:ngm:class:distributed-identity
  - urn:ngm:class:cyber-security-and-cryptography
  - urn:ngm:class:ai-governance-law-and-privacy
supports:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:security-framework
  - urn:ngm:class:regulatory-compliance
standardizedBy:
  - urn:ngm:class:nist-cybersecurity-framework
  - urn:ngm:class:iso-27001
relatedTo:
  - urn:ngm:class:surveillance
  - urn:ngm:class:supply-chain-security
---

# Security

The protection of AI systems and their components against unauthorized access, manipulation, disruption, or exploitation, encompassing confidentiality, integrity, and availability of data, models, and infrastructure throughout the AI lifecycle.
