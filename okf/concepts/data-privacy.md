---
okf_version: "0.2"
type: Class
title: Data Privacy
resource: urn:ngm:class:data-privacy
domain: governance
description: Data Privacy is the governance and engineering discipline that ensures individuals retain meaningful control over their personal information through legal frameworks, technical safeguards, and organisational policies governing the appropriate collection, processing, storage, and sharing of personal data. It spans both the regulatory compliance dimension—expressed in instruments such as GDPR, CCPA,
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:compliance-framework
hasPart:
  - urn:ngm:class:consent-management
  - urn:ngm:class:data-anonymization-pipeline
  - urn:ngm:class:data-minimisation
  - urn:ngm:class:privacy-by-design
requires:
  - urn:ngm:class:data-governance
  - urn:ngm:class:access-control
  - urn:ngm:class:audit-logging
enables:
  - urn:ngm:class:informed-consent
  - urn:ngm:class:granular-consent-control
  - urn:ngm:class:data-subject-rights
  - urn:ngm:class:digital-trust
contrastsWith:
  - urn:ngm:class:surveillance
  - urn:ngm:class:data-monetisation
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:on-device-ai
uses:
  - urn:ngm:class:cryptographic-security
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:federated-learning
  - urn:ngm:class:homomorphic-encryption
standardizedBy:
  - urn:ngm:class:gdpr
  - urn:ngm:class:ccpa
  - urn:ngm:class:iso-27701
relatedTo:
  - urn:ngm:class:gdpr-compliance
  - urn:ngm:class:personal-data-store
  - urn:ngm:class:cybersecurity
---

# Data Privacy

Data Privacy is the governance and engineering discipline that ensures individuals retain meaningful control over their personal information through legal frameworks, technical safeguards, and organisational policies governing the appropriate collection, processing, storage, and sharing of personal data. It spans both the regulatory compliance dimension—expressed in instruments such as GDPR, CCPA, PIPEDA, and sector-specific regulations—and the engineering discipline of privacy-by-design that minimises data exposure through techniques such as anonymisation, pseudonymisation, differential privacy, federated learning, and consent management. As AI training practices, surveillance capitalism, and cross-border data flows intensify the stakes of personal information handling, data privacy functions as a core organisational risk management and trust-building domain. The field requires integration across legal, technical, and organisational layers to be effective, and is increasingly operationalised through dedicated Privacy-Enhancing Technologies (PETs).
