---
okf_version: "0.2"
type: Class
title: Parameter Governance
resource: urn:ngm:class:parameter-governance
domain: blockchain
description: Parameter governance is the on-chain process by which a decentralised protocol's tunable configuration values — such as fees, collateral ratios, interest-rate curves, and reward emissions — are proposed, deliberated, voted upon, and enacted without altering the underlying contract code. By exposing safe adjustment levers to token-holder governance, it lets protocols adapt to market conditions whil
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:on-chain-governance
requires:
  - urn:ngm:class:governance-token
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:decentralised-governance
dependsOn:
  - urn:ngm:class:smart-contract
implements:
  - urn:ngm:class:on-chain-voting
uses:
  - urn:ngm:class:on-chain-voting
  - urn:ngm:class:token-weighted-voting
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:dao
  - urn:ngm:class:dao
partOf:
  - urn:ngm:class:on-chain-governance
relatedTo:
  - urn:ngm:class:governance-token
  - urn:ngm:class:governance
---

# Parameter Governance

Parameter governance is the on-chain process by which a decentralised protocol's tunable configuration values — such as fees, collateral ratios, interest-rate curves, and reward emissions — are proposed, deliberated, voted upon, and enacted without altering the underlying contract code. By exposing safe adjustment levers to token-holder governance, it lets protocols adapt to market conditions while preserving the immutability of core logic. It is a foundational pattern in DeFi and DAO management, distinct from full code upgrades.
