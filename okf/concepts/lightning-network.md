---
okf_version: "0.2"
type: Class
title: Lightning Network
resource: urn:ngm:class:lightning-network
domain: blockchain
description: The Lightning Network is a Layer 2 Scaling protocol for Bitcoin enabling instant, high-throughput off-chain payments through a mesh of bidirectional Payment Channel Network channels anchored on the Bitcoin Technical Overview base layer.
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:payment-channel-network
  - urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:distributed-ledger
hasPart:
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:bolt12-offers
  - urn:ngm:class:channel-factory
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:lightning-service-provider
  - urn:ngm:class:onion-routing
  - urn:ngm:class:payment-channel
  - urn:ngm:class:routing-algorithm
  - urn:ngm:class:watchtower
  - urn:ngm:class:hash-time-locked-contracts
  - urn:ngm:class:lightning-service-providers
requires:
  - urn:ngm:class:multisignature
  - urn:ngm:class:timelock
  - urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:instant-transactions
  - urn:ngm:class:machine-to-machine-payments
  - urn:ngm:class:streaming-payments
  - urn:ngm:class:cross-border-compliance
  - urn:ngm:class:financial-infrastructure
  - urn:ngm:class:micropayments
  - urn:ngm:class:stable-coins
  - urn:ngm:class:taproot-assets
  - urn:ngm:class:machine-to-machine-payments
dependsOn:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview
  - urn:ngm:class:cryptography-security-and-privacy
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:hash-function
  - urn:ngm:class:digital-signature
  - urn:ngm:class:schnorr-signatures
implements:
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:bolt12-offers
  - urn:ngm:class:channel-factory
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:onion-routing
  - urn:ngm:class:splicing
  - urn:ngm:class:hash-time-locked-contracts
  - urn:ngm:class:multi-path-payments
  - urn:ngm:class:lnurl-protocol
contrastsWith:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:traditional-payment-systems
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:cbdc-frameworks
  - urn:ngm:class:btc-layer-3
uses:
  - urn:ngm:class:mu-sig-2
  - urn:ngm:class:multisignature
  - urn:ngm:class:onion-routing
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:timelock
  - urn:ngm:class:taproot-assets
  - urn:ngm:class:schnorr-signatures
  - urn:ngm:class:sphinx-protocol
supports:
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:bitcoin-proof-of-work-protocol-as-money
  - urn:ngm:class:cbdcs
  - urn:ngm:class:financial-infrastructure
  - urn:ngm:class:global-inequality
  - urn:ngm:class:micropayments
  - urn:ngm:class:stable-coins
  - urn:ngm:class:bitcoin-proof-of-work-protocol-value-proposition
standardizedBy:
  - urn:ngm:class:acinq
  - urn:ngm:class:blockstream
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:lightning-labs
  - urn:ngm:class:spiral
relatedTo:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:btc-layer-3
  - urn:ngm:class:cashu
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:distributed-identity
---

# Lightning Network

The Lightning Network is a Layer 2 Scaling protocol for Bitcoin enabling instant, high-throughput off-chain payments through a mesh of bidirectional Payment Channel Network channels anchored on the Bitcoin Technical Overview base layer.
