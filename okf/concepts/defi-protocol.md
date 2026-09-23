---
okf_version: "0.2"
type: Class
title: DeFi Protocol
resource: urn:ngm:class:defi-protocol
domain: blockchain
description: A DeFi Protocol is a set of immutable or upgradeable smart contracts deployed on a public blockchain that implements a specific financial primitive—such as lending, decentralised exchange, derivatives, or yield aggregation—in a permissionless and non-custodial manner. Protocol logic encodes all rules governing asset custody, interest-rate models, fee distribution, and liquidation mechanics directl
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:de-fi
hasPart:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:governance-token
requires:
  - urn:ngm:class:blockchain-oracle
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:token-standard
enables:
  - urn:ngm:class:yield-farming
  - urn:ngm:class:liquidity-mining
  - urn:ngm:class:flash-loan
dependsOn:
  - urn:ngm:class:composability
contrastsWith:
  - urn:ngm:class:traditional-finance
bridgesTo:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:cross-chain-bridge
uses:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:price-oracle
partOf:
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:dao
  - urn:ngm:class:mev
  - urn:ngm:class:impermanent-loss
  - urn:ngm:class:blockchain-security
  - urn:ngm:class:tokenomics
---

# DeFi Protocol

A DeFi Protocol is a set of immutable or upgradeable smart contracts deployed on a public blockchain that implements a specific financial primitive—such as lending, decentralised exchange, derivatives, or yield aggregation—in a permissionless and non-custodial manner. Protocol logic encodes all rules governing asset custody, interest-rate models, fee distribution, and liquidation mechanics directly in on-chain code that executes deterministically without intermediaries. Most DeFi protocols expose a composable interface through standardised token standards so that outputs (liquidity tokens, receipt tokens, or yield-bearing positions) can be consumed as inputs by other protocols. Governance over protocol parameters is typically delegated to token holders via an on-chain voting system, making protocol evolution itself a decentralised process.
