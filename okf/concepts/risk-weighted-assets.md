---
okf_version: "0.2"
type: Class
title: Risk Weighted Assets
resource: urn:ngm:class:risk-weighted-assets
domain: finance
description: "Risk-weighted assets (RWA) are a bank's assets and off-balance-sheet exposures weighted according to their credit, market, and operational risk, forming the denominator of regulatory capital ratios. Under the Basel framework, riskier exposures attract higher weights, so banks must hold proportionally more capital against them. RWA links the composition of a bank's portfolio to its minimum capital "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:capital-adequacy
requires:
  - urn:ngm:class:capital-adequacy
  - urn:ngm:class:risk-management
enables:
  - urn:ngm:class:capital-adequacy
dependsOn:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:operational-risk
uses:
  - urn:ngm:class:risk-assessment
supports:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:financial-regulation
standardizedBy:
  - urn:ngm:class:basel-iii
  - urn:ngm:class:basel-committee-on-banking-supervision
partOf:
  - urn:ngm:class:capital-adequacy
relatedTo:
  - urn:ngm:class:operational-risk
  - urn:ngm:class:risk-management
  - urn:ngm:class:basel-committee-on-banking-supervision
  - urn:ngm:class:financial-regulation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Risk Weighted Assets

Risk-weighted assets (RWA) are a bank's assets and off-balance-sheet exposures weighted according to their credit, market, and operational risk, forming the denominator of regulatory capital ratios. Under the Basel framework, riskier exposures attract higher weights, so banks must hold proportionally more capital against them. RWA links the composition of a bank's portfolio to its minimum capital requirements and overall solvency.
