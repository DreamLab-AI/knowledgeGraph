---
okf_version: "0.2"
type: Class
title: Tezos
resource: urn:ngm:class:tezos
domain: blockchain
description: "Tezos is a self-amending, proof-of-stake Layer 1 blockchain platform launched in 2018 that enables on-chain governance through a formal, stakeholder-driven amendment process, allowing protocol upgrades to be proposed, debated, and applied without hard forks. It uses a Liquid Proof of Stake consensus mechanism in which token holders (XTZ holders) may either bake blocks themselves or delegate their "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:layer-1
  - urn:ngm:class:layer-1-blockchain
requires:
  - urn:ngm:class:liquid-proof-of-stake
  - urn:ngm:class:proof-of-stake
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:digital-asset-custody
implements:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:bft-consensus
contrastsWith:
  - urn:ngm:class:ethereum
  - urn:ngm:class:cardano
  - urn:ngm:class:polkadot
  - urn:ngm:class:solana
bridgesTo:
  - urn:ngm:class:formal-methods
  - urn:ngm:class:institutional-finance
uses:
  - urn:ngm:class:michelson
  - urn:ngm:class:formal-verification
  - urn:ngm:class:consensus-protocol
standardizedBy:
  - urn:ngm:class:tezos-improvement-proposal
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-token
  - urn:ngm:class:staking
  - urn:ngm:class:protocol-upgrades
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:protocol-upgrade
---

# Tezos

Tezos is a self-amending, proof-of-stake Layer 1 blockchain platform launched in 2018 that enables on-chain governance through a formal, stakeholder-driven amendment process, allowing protocol upgrades to be proposed, debated, and applied without hard forks. It uses a Liquid Proof of Stake consensus mechanism in which token holders (XTZ holders) may either bake blocks themselves or delegate their stake to bakers, earning proportional rewards. The platform supports Turing-complete smart contracts written in Michelson and higher-level languages such as Ligo and SmartPy, targeting decentralised finance, NFT issuance, and digital asset custody. Its on-chain governance model is considered a pioneering example of decentralised protocol evolution and formal verification-friendly contract design.
