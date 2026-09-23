---
okf_version: "0.2"
type: Class
title: Convex Finance
resource: urn:ngm:class:convex-finance
domain: blockchain
description: Convex Finance is a decentralised finance (DeFi) meta-protocol built on Ethereum that enables Curve Finance liquidity providers and CRV holders to earn enhanced rewards without individually locking their own CRV tokens as veCRV. By aggregating vote-escrowed CRV (veCRV) from users who deposit CRV in exchange for cvxCRV, Convex accumulates collective governance and boost power which it redistributes
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:de-fi-protocol
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ethereum
  - urn:ngm:class:vote-escrow-tokenomics
enables:
  - urn:ngm:class:yield-farming
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:yield-generation
  - urn:ngm:class:meta-governance
  - urn:ngm:class:bribe-economy
dependsOn:
  - urn:ngm:class:liquidity-mining
  - urn:ngm:class:stablecoin
contrastsWith:
  - urn:ngm:class:concentrated-liquidity
  - urn:ngm:class:aura-finance
  - urn:ngm:class:yearn
  - urn:ngm:class:yearn
bridgesTo:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:mechanism-design
uses:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:token-economics
  - urn:ngm:class:curve-finance
  - urn:ngm:class:governance-token
partOf:
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:curve-wars
relatedTo:
  - urn:ngm:class:dao
  - urn:ngm:class:total-value-locked
  - urn:ngm:class:frax-finance
  - urn:ngm:class:decentralized-autonomous-organization
---

# Convex Finance

Convex Finance is a decentralised finance (DeFi) meta-protocol built on Ethereum that enables Curve Finance liquidity providers and CRV holders to earn enhanced rewards without individually locking their own CRV tokens as veCRV. By aggregating vote-escrowed CRV (veCRV) from users who deposit CRV in exchange for cvxCRV, Convex accumulates collective governance and boost power which it redistributes pro-rata to depositors, eliminating the individual capital lockup barrier inherent in Curve's vote-escrow tokenomics. The protocol's native CVX token governs allocation of this aggregated veCRV voting power via vlCVX staking, creating a secondary governance layer — the so-called Curve Wars — in which DeFi protocols competitively bribe CVX holders to direct CRV emissions toward their own liquidity pools.
