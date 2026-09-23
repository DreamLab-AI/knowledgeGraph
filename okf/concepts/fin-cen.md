---
okf_version: "0.2"
type: Class
title: FinCEN
resource: urn:ngm:class:fin-cen
domain: finance
description: "The Financial Crimes Enforcement Network (FinCEN) is a bureau of the US Department of the Treasury established in 1990 that serves as the primary US financial intelligence unit (FIU). FinCEN administers the Bank Secrecy Act (BSA), collects financial transaction reports from financial institutions (SARs, CTRs), analyses this data for patterns of money laundering, terrorist financing, and financial "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:regulatory-framework
hasPart:
  - urn:ngm:class:suspicious-activity-report
  - urn:ngm:class:currency-transaction-report
requires:
  - urn:ngm:class:beneficial-ownership-disclosure
  - urn:ngm:class:customer-identification-programme
enables:
  - urn:ngm:class:aml
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:sanctions-enforcement
  - urn:ngm:class:counter-terrorist-financing
dependsOn:
  - urn:ngm:class:bank-secrecy-act
  - urn:ngm:class:usa-patriot-act
implements:
  - urn:ngm:class:financial-action-task-force
bridgesTo:
  - urn:ngm:class:blockchain-compliance
  - urn:ngm:class:bc-0456-virtual-asset-service-providers
  - urn:ngm:class:travel-rule
uses:
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:compliance-audit-trail
  - urn:ngm:class:financial-intelligence
supports:
  - urn:ngm:class:corporate-transparency-act
relatedTo:
  - urn:ngm:class:financial-regulation
  - urn:ngm:class:us-regulatory-framework
  - urn:ngm:class:sanctions-screening
---

# FinCEN

The Financial Crimes Enforcement Network (FinCEN) is a bureau of the US Department of the Treasury established in 1990 that serves as the primary US financial intelligence unit (FIU). FinCEN administers the Bank Secrecy Act (BSA), collects financial transaction reports from financial institutions (SARs, CTRs), analyses this data for patterns of money laundering, terrorist financing, and financial fraud, and shares intelligence with law enforcement and foreign FIUs through the Egmont Group. FinCEN also issues regulatory guidance and rulemaking for digital asset service providers including money service businesses (MSBs) and, since 2019, cryptocurrency exchanges.
