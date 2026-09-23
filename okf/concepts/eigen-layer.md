---
okf_version: "0.2"
type: Class
title: EigenLayer
resource: urn:ngm:class:eigen-layer
domain: blockchain
description: EigenLayer is an Ethereum-based restaking protocol that allows ETH stakers to extend their cryptoeconomic security — the stake already deposited to validate the Ethereum consensus layer — to additional decentralised services called Actively Validated Services (AVS). By opting into EigenLayer smart contracts, stakers grant the protocol the right to apply slashing conditions from multiple AVS operat
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:blockchain-protocol
enables:
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:decentralized-application
  - urn:ngm:class:layer-2-scaling
uses:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator-node
  - urn:ngm:class:cryptographic-protocol
relatedTo:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:validator-economics
  - urn:ngm:class:liquid-proof-of-stake
---

# EigenLayer

EigenLayer is an Ethereum-based restaking protocol that allows ETH stakers to extend their cryptoeconomic security — the stake already deposited to validate the Ethereum consensus layer — to additional decentralised services called Actively Validated Services (AVS). By opting into EigenLayer smart contracts, stakers grant the protocol the right to apply slashing conditions from multiple AVS operators simultaneously, enabling new protocols such as data availability layers, bridges, oracles, and sequencers to bootstrap economic security without deploying their own native token staking systems. EigenLayer fundamentally reuses and resells Ethereum's security budget.
