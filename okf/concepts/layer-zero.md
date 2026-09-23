---
okf_version: "0.2"
type: Class
title: LayerZero
resource: urn:ngm:class:layer-zero
domain: blockchain
description: LayerZero is a cross-chain interoperability protocol that allows smart contracts on different blockchains to send messages to one another. It uses a configurable security model in which an oracle delivers block headers and an independent relayer delivers transaction proofs, with a message accepted only when the two agree. This separation is intended to avoid reliance on a single intermediary chain
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:blockchain-domain
requires:
  - urn:ngm:class:oracle
  - urn:ngm:class:relayer
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:omnichain-application
  - urn:ngm:class:cross-chain-governance
  - urn:ngm:class:token-bridge
dependsOn:
  - urn:ngm:class:evm-compatible-blockchain
  - urn:ngm:class:oracle-network
implements:
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:message-passing-interface
contrastsWith:
  - urn:ngm:class:wormhole
  - urn:ngm:class:axelar
  - urn:ngm:class:ibc
  - urn:ngm:class:polkadot-xcm
bridgesTo:
  - urn:ngm:class:bridge
  - urn:ngm:class:interoperability
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:light-node
  - urn:ngm:class:transaction
  - urn:ngm:class:block-header
supports:
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:nft-bridging
  - urn:ngm:class:cross-chain-liquidity
relatedTo:
  - urn:ngm:class:fungible-token
  - urn:ngm:class:blockchain-security
---

# LayerZero

LayerZero is a cross-chain interoperability protocol that allows smart contracts on different blockchains to send messages to one another. It uses a configurable security model in which an oracle delivers block headers and an independent relayer delivers transaction proofs, with a message accepted only when the two agree. This separation is intended to avoid reliance on a single intermediary chain for verifying cross-chain communication.
