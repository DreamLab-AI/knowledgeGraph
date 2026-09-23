---
okf_version: "0.2"
type: Class
title: Splicing
resource: urn:ngm:class:splicing
domain: blockchain
description: Splicing is a Lightning Network operation that resizes an existing payment channel by adding or removing on-chain funds without closing and reopening it, preserving the channel's state and routing history. A splice-in increases capacity by committing additional bitcoin, while a splice-out withdraws funds to an on-chain address, both executed through a single funding transaction. This keeps the cha
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:payment-channel
requires:
  - urn:ngm:class:on-chain-transaction
  - urn:ngm:class:bitcoin
enables:
  - urn:ngm:class:liquidity
implements:
  - urn:ngm:class:payment-channel
bridgesTo:
  - urn:ngm:class:on-chain-transaction
uses:
  - urn:ngm:class:on-chain-transaction
  - urn:ngm:class:bitcoin
supports:
  - urn:ngm:class:liquidity
  - urn:ngm:class:payment-channel
partOf:
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:lightning-network
  - urn:ngm:class:core-lightning
---

# Splicing

Splicing is a Lightning Network operation that resizes an existing payment channel by adding or removing on-chain funds without closing and reopening it, preserving the channel's state and routing history. A splice-in increases capacity by committing additional bitcoin, while a splice-out withdraws funds to an on-chain address, both executed through a single funding transaction. This keeps the channel continuously available and reduces the on-chain cost and downtime of channel management.
