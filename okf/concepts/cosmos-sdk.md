---
okf_version: "0.2"
type: Class
title: Cosmos SDK
resource: urn:ngm:class:cosmos-sdk
domain: blockchain
description: The Cosmos SDK is an open-source modular framework for building application-specific blockchains in the Cosmos ecosystem. It provides composable modules for accounts, staking, governance, and token management, and integrates with the Tendermint BFT consensus engine to enable sovereign, interoperable chains connected via the Inter-Blockchain Communication protocol.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cosmos
hasPart:
  - urn:ngm:class:abci
requires:
  - urn:ngm:class:tendermint
enables:
  - urn:ngm:class:ibc
  - urn:ngm:class:application-specific-blockchain
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:delegated-proof-of-stake
dependsOn:
  - urn:ngm:class:cosmos
implements:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:proof-of-stake
contrastsWith:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:de-fi
  - urn:ngm:class:blockchain-interoperability
uses:
  - urn:ngm:class:protobuf
supports:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:token-economics
partOf:
  - urn:ngm:class:cosmos
  - urn:ngm:class:blockchain
---

# Cosmos SDK

The Cosmos SDK is an open-source modular framework for building application-specific blockchains in the Cosmos ecosystem. It provides composable modules for accounts, staking, governance, and token management, and integrates with the Tendermint BFT consensus engine to enable sovereign, interoperable chains connected via the Inter-Blockchain Communication protocol.
