---
okf_version: "0.2"
type: Class
title: Atomic Delivery versus Payment
resource: urn:ngm:class:atomic-delivery-versus-payment
domain: blockchain
description: "Atomic Delivery versus Payment (atomic DvP) is a settlement mechanism in which the transfer of an asset and the corresponding payment are executed as a single indivisible transaction: either both legs complete simultaneously or neither does, eliminating counterparty risk by making it impossible for one party to receive value without the other receiving theirs. It applies the atomicity property of "
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:delivery-versus-payment
enables:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:cross-chain-asset-transfer
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:hash-time-locked-contract
relatedTo:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:smart-contract-execution
---

# Atomic Delivery versus Payment

Atomic Delivery versus Payment (atomic DvP) is a settlement mechanism in which the transfer of an asset and the corresponding payment are executed as a single indivisible transaction: either both legs complete simultaneously or neither does, eliminating counterparty risk by making it impossible for one party to receive value without the other receiving theirs. It applies the atomicity property of database transactions to financial and digital asset exchange.
