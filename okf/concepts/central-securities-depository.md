---
okf_version: "0.2"
type: Class
title: Central Securities Depository
resource: urn:ngm:class:central-securities-depository
domain: finance
description: A central securities depository (CSD) is a financial market infrastructure that holds securities in dematerialised or immobilised form and enables their transfer through book-entry, providing safekeeping and settlement of trades. It maintains the authoritative record of securities ownership and supports the final leg of post-trade processing, often in conjunction with clearing houses. By centralis
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:financial-market-infrastructure
hasPart:
  - urn:ngm:class:securities-settlement
  - urn:ngm:class:custody
requires:
  - urn:ngm:class:settlement-finality
  - urn:ngm:class:custody
enables:
  - urn:ngm:class:delivery-versus-payment
  - urn:ngm:class:atomic-settlement
dependsOn:
  - urn:ngm:class:settlement
  - urn:ngm:class:clearing-and-settlement
contrastsWith:
  - urn:ngm:class:blockchain
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:settlement
supports:
  - urn:ngm:class:settlement
partOf:
  - urn:ngm:class:financial-market-infrastructure
relatedTo:
  - urn:ngm:class:netting
  - urn:ngm:class:trade-execution
---

# Central Securities Depository

A central securities depository (CSD) is a financial market infrastructure that holds securities in dematerialised or immobilised form and enables their transfer through book-entry, providing safekeeping and settlement of trades. It maintains the authoritative record of securities ownership and supports the final leg of post-trade processing, often in conjunction with clearing houses. By centralising custody and settlement, a CSD reduces operational risk and is foundational to the integrity of securities markets.
