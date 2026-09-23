---
okf_version: "0.2"
type: Class
title: Settlement Finality
resource: urn:ngm:class:settlement-finality
domain: blockchain
description: Settlement finality is the point at which a transfer of value or assets becomes irrevocable and unconditional, such that it can no longer be reversed, unwound, or repudiated even in the event of a participant's insolvency. In traditional finance it is defined by legal frameworks governing payment and securities systems, while in blockchain systems it emerges from consensus guarantees that may be d
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:settlement
hasPart:
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:economic-finality
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:immutability
enables:
  - urn:ngm:class:atomic-settlement
  - urn:ngm:class:delivery-versus-payment
dependsOn:
  - urn:ngm:class:consensus-mechanism
contrastsWith:
  - urn:ngm:class:probabilistic-finality
bridgesTo:
  - urn:ngm:class:central-securities-depository
uses:
  - urn:ngm:class:proof-of-stake
supports:
  - urn:ngm:class:financial-market-infrastructure
partOf:
  - urn:ngm:class:settlement
relatedTo:
  - urn:ngm:class:clearing-and-settlement
  - urn:ngm:class:netting
  - urn:ngm:class:double-spending
---

# Settlement Finality

Settlement finality is the point at which a transfer of value or assets becomes irrevocable and unconditional, such that it can no longer be reversed, unwound, or repudiated even in the event of a participant's insolvency. In traditional finance it is defined by legal frameworks governing payment and securities systems, while in blockchain systems it emerges from consensus guarantees that may be deterministic or probabilistic. Finality is essential to systemic stability because it eliminates settlement risk once the defined threshold is reached.
