---
okf_version: "0.2"
type: Class
title: Axelar
resource: urn:ngm:class:axelar
domain: blockchain
description: Axelar is a decentralised cross-chain communication network that enables general message passing and token transfers between heterogeneous blockchains via a proof-of-stake overlay network and a permissionless gateway smart contract model. It provides a Universal Message Passing (UMP) primitive that allows any contract on any connected chain to call any contract on any other connected chain as a si
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cross-chain-interoperability
hasPart:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:token
  - urn:ngm:class:interchain-token-service
  - urn:ngm:class:squid-router
requires:
  - urn:ngm:class:validator-set
  - urn:ngm:class:threshold-cryptography
enables:
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:omnichain-application
  - urn:ngm:class:cross-chain-dex
  - urn:ngm:class:cross-chain-governance
dependsOn:
  - urn:ngm:class:cosmos-sdk
  - urn:ngm:class:byzantine-fault-tolerance
contrastsWith:
  - urn:ngm:class:wormhole
  - urn:ngm:class:chainlink-ccip
  - urn:ngm:class:layer-zero
bridgesTo:
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:ethereum-smart-contract-platform
uses:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:message-passing
supports:
  - urn:ngm:class:evm
  - urn:ngm:class:non-evm-chain
  - urn:ngm:class:de-fi-protocol
partOf:
  - urn:ngm:class:cosmos
relatedTo:
  - urn:ngm:class:bridge
  - urn:ngm:class:interoperability-protocol
---

# Axelar

Axelar is a decentralised cross-chain communication network that enables general message passing and token transfers between heterogeneous blockchains via a proof-of-stake overlay network and a permissionless gateway smart contract model. It provides a Universal Message Passing (UMP) primitive that allows any contract on any connected chain to call any contract on any other connected chain as a single composable operation.
