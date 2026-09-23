---
okf_version: "0.2"
type: Class
title: Cosmos
resource: urn:ngm:class:cosmos
domain: blockchain
description: Cosmos is an ecosystem of sovereign, application-specific blockchains that interoperate through the Inter-Blockchain Communication (IBC) protocol, coordinated by a central hub (the Cosmos Hub, secured by the ATOM staking token) and constructed using the Cosmos SDK, a modular Go framework for building proof-of-stake chains. Each chain in the ecosystem runs the CometBFT (formerly Tendermint BFT) con
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:blockchain-network
hasPart:
  - urn:ngm:class:cosmos-sdk
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:cosmos
  - urn:ngm:class:interchain-security
requires:
  - urn:ngm:class:tendermint
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator-node
enables:
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:interchain-accounts
  - urn:ngm:class:de-fi
contrastsWith:
  - urn:ngm:class:polkadot
  - urn:ngm:class:ethereum
  - urn:ngm:class:rollup
  - urn:ngm:class:rollup
bridgesTo:
  - urn:ngm:class:modular-blockchain
  - urn:ngm:class:data-availability
uses:
  - urn:ngm:class:tendermint-consensus
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:light-client
  - urn:ngm:class:on-chain-governance
relatedTo:
  - urn:ngm:class:application-specific-blockchain
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:liquid-staking
---

# Cosmos

Cosmos is an ecosystem of sovereign, application-specific blockchains that interoperate through the Inter-Blockchain Communication (IBC) protocol, coordinated by a central hub (the Cosmos Hub, secured by the ATOM staking token) and constructed using the Cosmos SDK, a modular Go framework for building proof-of-stake chains. Each chain in the ecosystem runs the CometBFT (formerly Tendermint BFT) consensus engine, which provides instant deterministic finality and enables IBC light-client proofs across trust boundaries without centralised bridges. The architecture decouples application logic from consensus, permitting developers to optimise validator sets, fee markets, and governance parameters independently while participating in a shared interoperability fabric often described as the Internet of Blockchains.
