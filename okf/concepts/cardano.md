---
okf_version: "0.2"
type: Class
title: Cardano
resource: urn:ngm:class:cardano
domain: blockchain
description: Cardano is a public proof-of-stake blockchain platform launched in 2017 by IOHK, with Charles Hoskinson, a co-founder of Ethereum, among its founders. It is distinctive for its emphasis on peer-reviewed academic research and formal methods, and its consensus protocol Ouroboros was the first proof-of-stake protocol with published security proofs. The platform separates a settlement layer for its AD
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-domain
hasPart:
  - urn:ngm:class:settlement-layer
requires:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:utxo
  - urn:ngm:class:cryptocurrency
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
  - urn:ngm:class:native-token
  - urn:ngm:class:on-chain-governance
implements:
  - urn:ngm:class:ouroboros-consensus
  - urn:ngm:class:utxo-model
  - urn:ngm:class:formal-verification
contrastsWith:
  - urn:ngm:class:ethereum
  - urn:ngm:class:bitcoin
  - urn:ngm:class:solana
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:supply-chain-traceability
  - urn:ngm:class:ethereum-smart-contract-platform
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:layer-1-blockchain
---

# Cardano

Cardano is a public proof-of-stake blockchain platform launched in 2017 by IOHK, with Charles Hoskinson, a co-founder of Ethereum, among its founders. It is distinctive for its emphasis on peer-reviewed academic research and formal methods, and its consensus protocol Ouroboros was the first proof-of-stake protocol with published security proofs. The platform separates a settlement layer for its ADA cryptocurrency from a computation layer for smart contracts, which were enabled through the Alonzo upgrade in 2021. Cardano uses an extended UTXO accounting model and the functional language Plutus for on-chain logic.
