---
okf_version: "0.2"
type: Class
title: Payment Settlement
resource: urn:ngm:class:payment-settlement
domain: blockchain
description: Payment settlement is the process by which a payment obligation between parties is irrevocably discharged through the transfer of value, completing a transaction so that the recipient gains final, unconditional ownership of funds. Settlement may occur gross or net, in real time or in batches, and across traditional rails or blockchain ledgers, with finality being the property that the transfer can
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:settlement
requires:
  - urn:ngm:class:finality
  - urn:ngm:class:liquidity
enables:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:stablecoin
dependsOn:
  - urn:ngm:class:consensus
  - urn:ngm:class:central-bank
contrastsWith:
  - urn:ngm:class:state-channel
bridgesTo:
  - urn:ngm:class:distributed-ledger
uses:
  - urn:ngm:class:on-chain-transaction
  - urn:ngm:class:real-time-gross-settlement
supports:
  - urn:ngm:class:swift
partOf:
  - urn:ngm:class:financial-regulation
relatedTo:
  - urn:ngm:class:settlement
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:liquidity
---

# Payment Settlement

Payment settlement is the process by which a payment obligation between parties is irrevocably discharged through the transfer of value, completing a transaction so that the recipient gains final, unconditional ownership of funds. Settlement may occur gross or net, in real time or in batches, and across traditional rails or blockchain ledgers, with finality being the property that the transfer can no longer be reversed. In distributed-ledger contexts, settlement is achieved when an on-chain transaction reaches consensus finality.
