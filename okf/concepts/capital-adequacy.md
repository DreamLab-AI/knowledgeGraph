---
okf_version: "0.2"
type: Class
title: Capital Adequacy
resource: urn:ngm:class:capital-adequacy
domain: finance
description: Capital adequacy is the regulatory and risk management requirement that financial institutions maintain a minimum level of capital relative to their risk-weighted assets, ensuring they can absorb losses without becoming insolvent and thereby protecting depositors, counterparties, and the broader financial system. The Basel Committee on Banking Supervision (BCBS) has codified capital adequacy requi
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:compliance-framework
hasPart:
  - urn:ngm:class:common-equity-tier-1
  - urn:ngm:class:capital-conservation-buffer
  - urn:ngm:class:countercyclical-capital-buffer
requires:
  - urn:ngm:class:risk-weighted-assets
  - urn:ngm:class:stress-testing
enables:
  - urn:ngm:class:compliance-monitoring
  - urn:ngm:class:financial-stability
  - urn:ngm:class:systemic-risk
dependsOn:
  - urn:ngm:class:credit-risk
  - urn:ngm:class:market-risk
  - urn:ngm:class:operational-risk
bridgesTo:
  - urn:ngm:class:climate-financial-risk
uses:
  - urn:ngm:class:risk-assessment
supports:
  - urn:ngm:class:systemic-risk
standardizedBy:
  - urn:ngm:class:basel-committee-on-banking-supervision
  - urn:ngm:class:basel-iii
  - urn:ngm:class:prudential-regulation
relatedTo:
  - urn:ngm:class:risk-management
  - urn:ngm:class:compliance
  - urn:ngm:class:liquidity-coverage-ratio
---

# Capital Adequacy

Capital adequacy is the regulatory and risk management requirement that financial institutions maintain a minimum level of capital relative to their risk-weighted assets, ensuring they can absorb losses without becoming insolvent and thereby protecting depositors, counterparties, and the broader financial system. The Basel Committee on Banking Supervision (BCBS) has codified capital adequacy requirements through successive accords — Basel I (1988), Basel II (2004), Basel III (2010, phased through 2028) — specifying the composition of qualifying capital (Common Equity Tier 1, Additional Tier 1, Tier 2) and the risk-weighting methodologies for credit, market, and operational risk exposures.
