---
okf_version: "0.2"
type: Class
title: Conditional Payment
resource: urn:ngm:class:conditional-payment
domain: blockchain
description: "A conditional payment is a transfer of value that is released only when one or more predefined conditions are met, rather than executing unconditionally on submission. On blockchains these conditions are enforced by smart contracts or scripts such as hash and time locks, removing the need for a trusted intermediary to adjudicate. Conditional payments are the foundation of escrow, payment channels "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:timelock
  - urn:ngm:class:oracle
enables:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:payment-channel
  - urn:ngm:class:micropayment
implements:
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:trustless-execution
contrastsWith:
  - urn:ngm:class:micropayment
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:state-channel
supports:
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:trustless-execution
---

# Conditional Payment

A conditional payment is a transfer of value that is released only when one or more predefined conditions are met, rather than executing unconditionally on submission. On blockchains these conditions are enforced by smart contracts or scripts such as hash and time locks, removing the need for a trusted intermediary to adjudicate. Conditional payments are the foundation of escrow, payment channels and atomic cross-chain swaps.
