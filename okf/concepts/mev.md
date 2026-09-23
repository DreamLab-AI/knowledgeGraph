---
okf_version: "0.2"
type: Class
title: MEV
resource: urn:ngm:class:mev
domain: blockchain
description: Maximal Extractable Value (MEV) represents the profit that block producers can extract through strategic transaction ordering, inclusion, or exclusion within blocks, arising from their privileged position to control execution sequencing in blockchain networks.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain
requires:
  - urn:ngm:class:transaction-ordering
  - urn:ngm:class:block-production
dependsOn:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:decentralized-exchange
bridgesTo:
  - urn:ngm:class:market-microstructure
  - urn:ngm:class:high-frequency-trading
uses:
  - urn:ngm:class:front-running
  - urn:ngm:class:mempool
partOf:
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:consensus-security
  - urn:ngm:class:validator
  - urn:ngm:class:gas-fee
---

# MEV

Maximal Extractable Value (MEV) represents the profit that block producers can extract through strategic transaction ordering, inclusion, or exclusion within blocks, arising from their privileged position to control execution sequencing in blockchain networks.
