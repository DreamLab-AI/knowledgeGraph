---
okf_version: "0.2"
type: Class
title: Airdrop
resource: urn:ngm:class:airdrop
domain: blockchain
description: "An Airdrop is a token distribution mechanism in which a blockchain project allocates free tokens to a set of wallet addresses, typically to bootstrap a community, reward early users or decentralise ownership. Eligibility may be based on prior on-chain activity, holdings of another asset or completion of tasks. Airdrops are a marketing and governance tool but attract Sybil attacks that the project "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:token-distribution
enables:
  - urn:ngm:class:governance-token
  - urn:ngm:class:de-fi
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:gas-fee
contrastsWith:
  - urn:ngm:class:initial-coin-offering
uses:
  - urn:ngm:class:token
  - urn:ngm:class:crypto-wallet
supports:
  - urn:ngm:class:sybil-attack
partOf:
  - urn:ngm:class:token-distribution
relatedTo:
  - urn:ngm:class:tokenomics
  - urn:ngm:class:cryptocurrency-token
  - urn:ngm:class:staking
---

# Airdrop

An Airdrop is a token distribution mechanism in which a blockchain project allocates free tokens to a set of wallet addresses, typically to bootstrap a community, reward early users or decentralise ownership. Eligibility may be based on prior on-chain activity, holdings of another asset or completion of tasks. Airdrops are a marketing and governance tool but attract Sybil attacks that the project must mitigate.
