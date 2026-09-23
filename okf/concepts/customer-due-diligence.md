---
okf_version: "0.2"
type: Class
title: Customer Due Diligence
resource: urn:ngm:class:customer-due-diligence
domain: finance
description: Customer due diligence (CDD) is the set of regulated procedures by which a financial institution or obliged entity identifies and verifies a customer, understands the nature and purpose of the business relationship, and assesses the money-laundering and terrorist-financing risk it poses. It encompasses identity verification, beneficial-ownership identification, screening against sanctions and poli
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:kyc
hasPart:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:beneficial-ownership
  - urn:ngm:class:enhanced-due-diligence
requires:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:risk-based-approach
  - urn:ngm:class:sanctions-screening
enables:
  - urn:ngm:class:transaction-monitoring
contrastsWith:
  - urn:ngm:class:enhanced-due-diligence
bridgesTo:
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:politically-exposed-person
supports:
  - urn:ngm:class:regulatory-compliance
standardizedBy:
  - urn:ngm:class:fatf
partOf:
  - urn:ngm:class:aml
relatedTo:
  - urn:ngm:class:transaction-monitoring
  - urn:ngm:class:aml
---

# Customer Due Diligence

Customer due diligence (CDD) is the set of regulated procedures by which a financial institution or obliged entity identifies and verifies a customer, understands the nature and purpose of the business relationship, and assesses the money-laundering and terrorist-financing risk it poses. It encompasses identity verification, beneficial-ownership identification, screening against sanctions and politically exposed person lists, and ongoing monitoring of transactions and risk profile. CDD is a core obligation of anti-money-laundering regimes, calibrated through a risk-based approach that escalates to enhanced due diligence for higher-risk customers and permits simplified measures for lower-risk ones.
