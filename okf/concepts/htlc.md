---
okf_version: "0.2"
type: Class
title: HTLC
resource: urn:ngm:class:htlc
domain: blockchain
description: A Hashed Time-Locked Contract is a conditional payment construct that releases funds when a preimage is revealed before a deadline, otherwise refunding the sender. It combines a cryptographic hash commitment with an on-chain timeout to achieve trustless conditional transfer across untrusted intermediaries.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:preimage
  - urn:ngm:class:timelock
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:payment-channel
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:cross-chain-bridge
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:utxo-model
implements:
  - urn:ngm:class:conditional-payment
  - urn:ngm:class:trustless-escrow
contrastsWith:
  - urn:ngm:class:escrow-system
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:bitcoin-script
uses:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:sha-256
  - urn:ngm:class:merkle-tree
supports:
  - urn:ngm:class:payment-routing
  - urn:ngm:class:onion-routing
partOf:
  - urn:ngm:class:payment-channel-network
  - urn:ngm:class:layer-2-protocol
relatedTo:
  - urn:ngm:class:state-channel
  - urn:ngm:class:payment-network
---

# HTLC

A Hashed Time-Locked Contract is a conditional payment construct that releases funds when a preimage is revealed before a deadline, otherwise refunding the sender. It combines a cryptographic hash commitment with an on-chain timeout to achieve trustless conditional transfer across untrusted intermediaries.
