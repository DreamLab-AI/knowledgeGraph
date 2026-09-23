---
okf_version: "0.2"
type: Class
title: Token
resource: urn:ngm:class:token
domain: blockchain
description: A digital asset representation built on an existing blockchain platform that represents ownership, utility, or access rights, typically adhering to standardized protocols for transferability and interoperability, implemented as a cryptographically-secured unit that can be owned, transferred, and programmably controlled through smart contracts according to defined rules and token standards.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:digital-asset
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:transferable-right
hasPart:
  - urn:ngm:class:fungible-token
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:governance-token
  - urn:ngm:class:utility-token
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:blockchain-entity
enables:
  - urn:ngm:class:staking
  - urn:ngm:class:yield-farming
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:governance
  - urn:ngm:class:tokenomics
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:cryptographic-hash-function
implements:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:erc-1155
contrastsWith:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:coin
bridgesTo:
  - urn:ngm:class:security-token
  - urn:ngm:class:real-world-asset
standardizedBy:
  - urn:ngm:class:iso-iec-23257-2021
  - urn:ngm:class:erc-standards
relatedTo:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:dao
---

# Token

A digital asset representation built on an existing blockchain platform that represents ownership, utility, or access rights, typically adhering to standardized protocols for transferability and interoperability, implemented as a cryptographically-secured unit that can be owned, transferred, and programmably controlled through smart contracts according to defined rules and token standards.
