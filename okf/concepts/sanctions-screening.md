---
okf_version: "0.2"
type: Class
title: Sanctions Screening
resource: urn:ngm:class:sanctions-screening
domain: finance
description: Sanctions Screening is the regulatory compliance process by which financial institutions, fintech operators, and other regulated entities check customers, counterparties, and transactions against government-issued sanctions lists—such as those maintained by OFAC, the UN Security Council, HM Treasury, and the EU—to prevent prohibited dealings with designated individuals, entities, and jurisdictions
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:regulatory-compliance
hasPart:
  - urn:ngm:class:watchlist-management
requires:
  - urn:ngm:class:customer-due-diligence
  - urn:ngm:class:audit-trail
enables:
  - urn:ngm:class:sanctions-enforcement
  - urn:ngm:class:compliance-monitoring
  - urn:ngm:class:risk-based-approach
dependsOn:
  - urn:ngm:class:identity-verification
contrastsWith:
  - urn:ngm:class:transaction-monitoring
bridgesTo:
  - urn:ngm:class:blockchain-analytics
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:blockchain-compliance
  - urn:ngm:class:fuzzy-logic
  - urn:ngm:class:machine-learning-classifier
standardizedBy:
  - urn:ngm:class:fatf
  - urn:ngm:class:financial-regulation
partOf:
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:financial-crime-compliance
relatedTo:
  - urn:ngm:class:aml
  - urn:ngm:class:kyc
  - urn:ngm:class:correspondent-banking
---

# Sanctions Screening

Sanctions Screening is the regulatory compliance process by which financial institutions, fintech operators, and other regulated entities check customers, counterparties, and transactions against government-issued sanctions lists—such as those maintained by OFAC, the UN Security Council, HM Treasury, and the EU—to prevent prohibited dealings with designated individuals, entities, and jurisdictions. The process involves name-matching algorithms, fuzzy logic to handle transliterations and aliases, and risk-based escalation procedures for potential matches. In blockchain and digital asset contexts, screening extends to wallet addresses and on-chain transaction flows. Failure to screen adequately exposes institutions to severe civil and criminal penalties.
