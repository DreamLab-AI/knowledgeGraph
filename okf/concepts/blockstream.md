---
okf_version: "0.2"
type: Class
title: Blockstream
resource: urn:ngm:class:blockstream
domain: blockchain
description: Blockstream is a Bitcoin-focused technology company founded in 2014 that develops open-source infrastructure and commercial products for the Bitcoin ecosystem, including the Liquid Network federated sidechain, c-lightning (now Core Lightning), and satellite-based blockchain distribution via Blockstream Satellite. The company is led by co-founders including Adam Back (inventor of Hashcash) and is a
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:blockchain-infrastructure
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:liquid-network
  - urn:ngm:class:core-lightning
  - urn:ngm:class:blockstream-satellite
  - urn:ngm:class:blockstream-amp
requires:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:proof-of-work
enables:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:sidechain
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:federated-peg
dependsOn:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
  - urn:ngm:class:cryptographic-hash-function
implements:
  - urn:ngm:class:elements-project
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:taproot
contrastsWith:
  - urn:ngm:class:ethereum
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
bridgesTo:
  - urn:ngm:class:digital-asset-custody
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:hashcash
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:satellite-communication
supports:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
  - urn:ngm:class:open-source-development
relatedTo:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:payment-channel-network
  - urn:ngm:class:multisig
---

# Blockstream

Blockstream is a Bitcoin-focused technology company founded in 2014 that develops open-source infrastructure and commercial products for the Bitcoin ecosystem, including the Liquid Network federated sidechain, c-lightning (now Core Lightning), and satellite-based blockchain distribution via Blockstream Satellite. The company is led by co-founders including Adam Back (inventor of Hashcash) and is a major contributor to Bitcoin Core protocol development. Blockstream's work spans cryptographic research, Layer 2 payment channels, hardware security modules, and institutional-grade Bitcoin financial products such as Blockstream AMP (Asset Management Platform).
