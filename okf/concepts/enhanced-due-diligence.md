---
okf_version: "0.2"
type: Class
title: Enhanced Due Diligence
resource: urn:ngm:class:enhanced-due-diligence
domain: finance
description: Enhanced due diligence (EDD) is a heightened level of customer scrutiny applied by regulated institutions to relationships and transactions that present elevated money-laundering, terrorist-financing, or sanctions risk. Going beyond standard customer due diligence, it requires deeper verification of identity and beneficial ownership, investigation of source of funds and wealth, and ongoing intensi
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:customer-due-diligence
hasPart:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:identity-verification
requires:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:sanctions-screening
dependsOn:
  - urn:ngm:class:risk-based-approach
implements:
  - urn:ngm:class:regulatory-compliance
uses:
  - urn:ngm:class:transaction-monitoring
  - urn:ngm:class:identity-verification
supports:
  - urn:ngm:class:anti-money-laundering
  - urn:ngm:class:know-your-customer
partOf:
  - urn:ngm:class:compliance
relatedTo:
  - urn:ngm:class:sanctions-screening
  - urn:ngm:class:transaction-monitoring
  - urn:ngm:class:risk-based-approach
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Enhanced Due Diligence

Enhanced due diligence (EDD) is a heightened level of customer scrutiny applied by regulated institutions to relationships and transactions that present elevated money-laundering, terrorist-financing, or sanctions risk. Going beyond standard customer due diligence, it requires deeper verification of identity and beneficial ownership, investigation of source of funds and wealth, and ongoing intensified monitoring. EDD is mandated for higher-risk categories such as politically exposed persons, customers in high-risk jurisdictions, and complex or unusually large transactions. It is a cornerstone of the risk-based approach embedded in anti-money-laundering and know-your-customer regulatory regimes.
