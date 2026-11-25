---
okf_version: "0.2"
type: Class
title: Clearing
resource: urn:ngm:class:clearing
domain: finance
description: Clearing is the post-trade process of confirming, matching and managing the obligations arising from a transaction in the interval between execution and settlement. A clearing house, often acting as a central counterparty, novates trades and nets exposures, calculating the net obligations of each party and managing counterparty credit risk through margin and default funds. Clearing reduces systemi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:financial-market-infrastructure
hasPart:
  - urn:ngm:class:trade-execution
requires:
  - urn:ngm:class:clearing-house
  - urn:ngm:class:risk-management
enables:
  - urn:ngm:class:settlement
  - urn:ngm:class:trade-execution
dependsOn:
  - urn:ngm:class:clearing-house
contrastsWith:
  - urn:ngm:class:settlement
bridgesTo:
  - urn:ngm:class:financial-infrastructure
uses:
  - urn:ngm:class:clearing-house
supports:
  - urn:ngm:class:payment-processing
  - urn:ngm:class:capital-markets
partOf:
  - urn:ngm:class:financial-market-infrastructure
relatedTo:
  - urn:ngm:class:custody
  - urn:ngm:class:payment-system
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Clearing

Clearing is the post-trade process of confirming, matching and managing the obligations arising from a transaction in the interval between execution and settlement. A clearing house, often acting as a central counterparty, novates trades and nets exposures, calculating the net obligations of each party and managing counterparty credit risk through margin and default funds. Clearing reduces systemic risk and operational burden in securities, derivatives and payment markets.
