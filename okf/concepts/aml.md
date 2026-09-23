---
okf_version: "0.2"
type: Class
title: AML
resource: urn:ngm:class:aml
domain: finance
description: Anti-Money Laundering (AML) is the body of laws, regulations, policies, and operational controls that obligate financial institutions to detect, prevent, and report the process by which criminals disguise proceeds of illegal activity as legitimate income. AML frameworks encompass Know Your Customer (KYC) identity verification, ongoing transaction monitoring, suspicious activity reporting (SAR), an
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:financial-services
hasPart:
  - urn:ngm:class:kyc
  - urn:ngm:class:transaction-monitoring
  - urn:ngm:class:suspicious-activity-report
  - urn:ngm:class:customer-due-diligence
  - urn:ngm:class:suspicious-activity-report
requires:
  - urn:ngm:class:classification
  - urn:ngm:class:identity-verification
  - urn:ngm:class:risk-scoring
enables:
  - urn:ngm:class:financial-crime-prevention
  - urn:ngm:class:regulatory-compliance
contrastsWith:
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:sanctions-screening
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:graph-analytics
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:natural-language-processing
standardizedBy:
  - urn:ngm:class:fatf
  - urn:ngm:class:basel-iii
relatedTo:
  - urn:ngm:class:financial-regulation
  - urn:ngm:class:explainability
  - urn:ngm:class:data-governance
---

# AML

Anti-Money Laundering (AML) is the body of laws, regulations, policies, and operational controls that obligate financial institutions to detect, prevent, and report the process by which criminals disguise proceeds of illegal activity as legitimate income. AML frameworks encompass Know Your Customer (KYC) identity verification, ongoing transaction monitoring, suspicious activity reporting (SAR), and risk-based compliance programmes overseen by regulators such as the Financial Action Task Force (FATF), FinCEN, and national supervisory authorities. Machine learning and network analytics have become central to modern AML systems, enabling real-time anomaly detection and entity-resolution across large transaction graphs. Regulated entities that fail to meet AML obligations face substantial financial penalties, licence revocations, and criminal liability.
