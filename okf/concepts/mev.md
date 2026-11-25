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
  - urn:ngm:class:decentralised-exchange
bridgesTo:
  - urn:ngm:class:market-microstructure
  - urn:ngm:class:high-frequency-trading
uses:
  - urn:ngm:class:front-running
  - urn:ngm:class:mempool
partOf:
  - urn:ngm:class:decentralised-finance
relatedTo:
  - urn:ngm:class:consensus-security
  - urn:ngm:class:validator
  - urn:ngm:class:gas-fee
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# MEV

Maximal Extractable Value (MEV) represents the profit that block producers can extract through strategic transaction ordering, inclusion, or exclusion within blocks, arising from their privileged position to control execution sequencing in blockchain networks.
