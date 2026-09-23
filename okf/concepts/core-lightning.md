---
okf_version: "0.2"
type: Class
title: Core Lightning
resource: urn:ngm:class:core-lightning
domain: blockchain
description: Core Lightning (formerly c-lightning) is a specification-compliant, production-grade implementation of the Bitcoin Lightning Network protocol written in C and maintained by Blockstream. It provides a lightweight, modular node daemon that enables off-chain Bitcoin micropayments through bidirectional payment channels anchored on the Bitcoin blockchain. The implementation adheres to the BOLT (Basis o
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:lightning-network
hasPart:
  - urn:ngm:class:lightning-plugin-architecture
  - urn:ngm:class:lightning-network-daemon
requires:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:payment-channel
  - urn:ngm:class:hashed-timelock-contract
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:bolt-specifications
enables:
  - urn:ngm:class:micropayment
  - urn:ngm:class:streaming-payments
  - urn:ngm:class:bitcoin-payment-routing
implements:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:lightning-network
  - urn:ngm:class:bolt-specifications
contrastsWith:
  - urn:ngm:class:lnd
  - urn:ngm:class:eclair
  - urn:ngm:class:ldk
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:machine-to-machine-payments
  - urn:ngm:class:machine-to-machine-payments
uses:
  - urn:ngm:class:onion-routing
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:taproot
standardizedBy:
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:bolt-specifications
relatedTo:
  - urn:ngm:class:blockstream
  - urn:ngm:class:channel-factory
  - urn:ngm:class:splicing
  - urn:ngm:class:peer-to-peer-network
---

# Core Lightning

Core Lightning (formerly c-lightning) is a specification-compliant, production-grade implementation of the Bitcoin Lightning Network protocol written in C and maintained by Blockstream. It provides a lightweight, modular node daemon that enables off-chain Bitcoin micropayments through bidirectional payment channels anchored on the Bitcoin blockchain. The implementation adheres to the BOLT (Basis of Lightning Technology) specification suite, ensuring interoperability with other Lightning implementations such as LND and Eclair. A distinguishing feature is its plugin architecture, which allows operators to extend node behaviour in arbitrary programming languages via a JSON-RPC interface.
