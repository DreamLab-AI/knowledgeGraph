---
okf_version: "0.2"
type: Class
title: Chainlink CCIP
resource: urn:ngm:class:chainlink-ccip
domain: blockchain
description: Chainlink Cross-Chain Interoperability Protocol (CCIP) is a cross-chain messaging and token transfer standard developed by Chainlink Labs that enables smart contracts on different blockchain networks to securely send messages and transfer assets across chain boundaries, backed by a decentralised oracle network providing an independent risk management layer that monitors and validates cross-chain t
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:cross-chain-interoperability
requires:
  - urn:ngm:class:evm-compatible-blockchain
enables:
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:tokenised-real-world-assets
contrastsWith:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:layer-zero
  - urn:ngm:class:wormhole
  - urn:ngm:class:ibc
bridgesTo:
  - urn:ngm:class:traditional-finance
  - urn:ngm:class:swift-messaging
uses:
  - urn:ngm:class:chainlink-oracles
  - urn:ngm:class:smart-contract
  - urn:ngm:class:blockchain-oracle
  - urn:ngm:class:oracle-network
  - urn:ngm:class:merkle-tree
relatedTo:
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:oracle-network
  - urn:ngm:class:de-fi
  - urn:ngm:class:token-bridge
---

# Chainlink CCIP

Chainlink Cross-Chain Interoperability Protocol (CCIP) is a cross-chain messaging and token transfer standard developed by Chainlink Labs that enables smart contracts on different blockchain networks to securely send messages and transfer assets across chain boundaries, backed by a decentralised oracle network providing an independent risk management layer that monitors and validates cross-chain transactions. CCIP introduces a programmable token transfer abstraction allowing arbitrary data payloads to accompany token movements, enabling complex cross-chain application logic.
