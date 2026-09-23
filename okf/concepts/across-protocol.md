---
okf_version: "0.2"
type: Class
title: Across Protocol
resource: urn:ngm:class:across-protocol
domain: blockchain
description: Across Protocol is a decentralised cross-chain bridging protocol that uses an optimistic verification model and a network of liquidity providers—called relayers—to enable fast, capital-efficient transfers of ERC-20 tokens between Ethereum mainnet and Layer 2 networks such as Optimism, Arbitrum, and Polygon. Relayers front user funds immediately on the destination chain and are reimbursed from a li
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:cross-chain-bridge
enables:
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:cross-chain-interoperability
dependsOn:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:layer-2-solutions
uses:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:liquidity-provider
relatedTo:
  - urn:ngm:class:interoperability-protocol
---

# Across Protocol

Across Protocol is a decentralised cross-chain bridging protocol that uses an optimistic verification model and a network of liquidity providers—called relayers—to enable fast, capital-efficient transfers of ERC-20 tokens between Ethereum mainnet and Layer 2 networks such as Optimism, Arbitrum, and Polygon. Relayers front user funds immediately on the destination chain and are reimbursed from a liquidity pool on Ethereum after an optimistic challenge period, creating a bridge architecture that prioritises speed and low fees over trustless finality.
