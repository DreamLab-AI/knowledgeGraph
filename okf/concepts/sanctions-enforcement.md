---
okf_version: "0.2"
type: Class
title: Sanctions Enforcement
resource: urn:ngm:class:sanctions-enforcement
domain: governance
description: Sanctions enforcement is the regulatory and operational process by which financial institutions, governments, and technology platforms identify, screen, and block transactions, assets, and relationships involving sanctioned individuals, entities, or jurisdictions as designated by authorities such as OFAC, the UN Security Council, the European Union, or HM Treasury. It encompasses real-time screeni
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:compliance-framework
hasPart:
  - urn:ngm:class:sanctions-screening
  - urn:ngm:class:compliance-audit-trail
requires:
  - urn:ngm:class:kyc
  - urn:ngm:class:entity-resolution
  - urn:ngm:class:watchlist-management
enables:
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:regulatory-reporting
contrastsWith:
  - urn:ngm:class:aml
  - urn:ngm:class:counter-terrorist-financing
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:smart-contract-compliance
uses:
  - urn:ngm:class:blockchain-analytics
  - urn:ngm:class:machine-learning-classifier
standardizedBy:
  - urn:ngm:class:fatf
  - urn:ngm:class:ofac
partOf:
  - urn:ngm:class:financial-regulation
  - urn:ngm:class:aml
---

# Sanctions Enforcement

Sanctions enforcement is the regulatory and operational process by which financial institutions, governments, and technology platforms identify, screen, and block transactions, assets, and relationships involving sanctioned individuals, entities, or jurisdictions as designated by authorities such as OFAC, the UN Security Council, the European Union, or HM Treasury. It encompasses real-time screening of payment flows against consolidated sanctions lists, asset-freezing procedures, reporting obligations, and the maintenance of audit trails demonstrating compliance. In digital asset and blockchain contexts, sanctions enforcement extends to on-chain transaction monitoring and the blocking of wallet addresses associated with designated parties.
