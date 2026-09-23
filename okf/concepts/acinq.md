---
okf_version: "0.2"
type: Class
title: ACINQ
resource: urn:ngm:class:acinq
domain: blockchain
description: ACINQ is a Paris-based Bitcoin technology company specialising in the development and operation of Lightning Network infrastructure, most notably the Eclair Lightning Network node implementation written in Scala and the Phoenix self-custodial mobile Bitcoin wallet. The company operates one of the largest publicly reachable Lightning Network routing nodes, providing significant liquidity and routin
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:lightning-network
hasPart:
  - urn:ngm:class:eclair
  - urn:ngm:class:phoenix-wallet
requires:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:payment-channel
enables:
  - urn:ngm:class:micropayment
  - urn:ngm:class:non-custodial-wallet
  - urn:ngm:class:trampoline-routing
implements:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:onion-routing
  - urn:ngm:class:lightning-network
  - urn:ngm:class:onion-routing
contrastsWith:
  - urn:ngm:class:lnd
  - urn:ngm:class:core-lightning
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:peer-to-peer-network
uses:
  - urn:ngm:class:htlc
  - urn:ngm:class:onion-routing
  - urn:ngm:class:programming-language
  - urn:ngm:class:programming-language
supports:
  - urn:ngm:class:splicing
  - urn:ngm:class:bitcoin-payment
partOf:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-layer-2
  - urn:ngm:class:channel-liquidity
  - urn:ngm:class:bolt12-offers
  - urn:ngm:class:routing-node
  - urn:ngm:class:bolt-12
---

# ACINQ

ACINQ is a Paris-based Bitcoin technology company specialising in the development and operation of Lightning Network infrastructure, most notably the Eclair Lightning Network node implementation written in Scala and the Phoenix self-custodial mobile Bitcoin wallet. The company operates one of the largest publicly reachable Lightning Network routing nodes, providing significant liquidity and routing capacity to the network. ACINQ contributes to the BOLT (Basis of Lightning Technology) protocol specification process and has pioneered features such as trampoline routing to reduce the on-device computation required by mobile Lightning clients.
