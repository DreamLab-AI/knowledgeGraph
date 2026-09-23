---
okf_version: "0.2"
type: Class
title: Eclair
resource: urn:ngm:class:eclair
domain: blockchain
description: Eclair is an open-source, production-grade implementation of the Bitcoin Lightning Network protocol, written in Scala and developed by ACINQ. It implements the full BOLT specification suite, enabling trustless off-chain payment channels, multi-hop routing, and peer-to-peer gossip between Lightning nodes. Eclair serves as the backend engine for ACINQ's Phoenix mobile wallet and is widely deployed a
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:lightning-network
requires:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:bitcoin-node
  - urn:ngm:class:htlc
enables:
  - urn:ngm:class:micropayment
  - urn:ngm:class:instant-settlement
  - urn:ngm:class:payment-routing
  - urn:ngm:class:instant-settlement
dependsOn:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:seg-wit
implements:
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:lightning-network
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:lightning-network
contrastsWith:
  - urn:ngm:class:lnd
  - urn:ngm:class:core-lightning
bridgesTo:
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:onion-routing
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:programming-language
  - urn:ngm:class:akka-framework
  - urn:ngm:class:programming-language
supports:
  - urn:ngm:class:phoenix-wallet
  - urn:ngm:class:payment-network
  - urn:ngm:class:payment-network
partOf:
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:acinq
  - urn:ngm:class:payment-channel-network
---

# Eclair

Eclair is an open-source, production-grade implementation of the Bitcoin Lightning Network protocol, written in Scala and developed by ACINQ. It implements the full BOLT specification suite, enabling trustless off-chain payment channels, multi-hop routing, and peer-to-peer gossip between Lightning nodes. Eclair serves as the backend engine for ACINQ's Phoenix mobile wallet and is widely deployed as a routing node by businesses and individuals seeking high-throughput, low-latency Bitcoin micropayments. It is interoperable with other conformant Lightning implementations such as LND and Core Lightning through shared adherence to the BOLT standards.
