---
okf_version: "0.2"
type: Class
title: Streaming Payments
resource: urn:ngm:class:streaming-payments
domain: blockchain
description: Streaming payments are a payment model in which value flows continuously from payer to payee in real time, accruing per second or per block rather than in discrete lump sums. On programmable ledgers and payment channels this is implemented by smart contracts or channel updates that let a recipient withdraw the proportion earned at any moment. The model suits salaries, subscriptions, rentals, and m
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:programmable-money
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:payment-channel
enables:
  - urn:ngm:class:micropayment
dependsOn:
  - urn:ngm:class:smart-contract
implements:
  - urn:ngm:class:programmable-money
bridgesTo:
  - urn:ngm:class:payment-channel
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:stablecoin
  - urn:ngm:class:payment-channel
supports:
  - urn:ngm:class:micropayment
partOf:
  - urn:ngm:class:programmable-money
relatedTo:
  - urn:ngm:class:superfluid
  - urn:ngm:class:sablier
  - urn:ngm:class:lightning-network
---

# Streaming Payments

Streaming payments are a payment model in which value flows continuously from payer to payee in real time, accruing per second or per block rather than in discrete lump sums. On programmable ledgers and payment channels this is implemented by smart contracts or channel updates that let a recipient withdraw the proportion earned at any moment. The model suits salaries, subscriptions, rentals, and machine-to-machine billing where settlement should track elapsed time or usage.
