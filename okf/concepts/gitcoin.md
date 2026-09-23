---
okf_version: "0.2"
type: Class
title: Gitcoin
resource: urn:ngm:class:gitcoin
domain: blockchain
description: Gitcoin is a blockchain-based public goods funding platform founded in 2017 that finances open-source software development through decentralised grant programmes, bounties, and hackathons, most notably employing quadratic funding to allocate matching pools democratically. The platform uses the Ethereum ecosystem as its primary coordination layer, with GTC governance tokens enabling decentralised c
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-defi-and-economics
hasPart:
  - urn:ngm:class:gitcoin-passport
  - urn:ngm:class:gitcoin-grants
  - urn:ngm:class:gtc-token
requires:
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ethereum
enables:
  - urn:ngm:class:quadratic-funding
  - urn:ngm:class:retroactive-public-goods-funding
  - urn:ngm:class:open-source-sustainability
  - urn:ngm:class:decentralised-governance
  - urn:ngm:class:decentralised-governance
dependsOn:
  - urn:ngm:class:open-source-software
  - urn:ngm:class:de-fi
contrastsWith:
  - urn:ngm:class:venture-capital
  - urn:ngm:class:traditional-grant-making
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:digital-identity
  - urn:ngm:class:coordination-mechanisms
  - urn:ngm:class:coordination-mechanisms
uses:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:dao
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:identity-attestation
  - urn:ngm:class:quadratic-funding
supports:
  - urn:ngm:class:web3
  - urn:ngm:class:ethereum
  - urn:ngm:class:web3
  - urn:ngm:class:ethereum
relatedTo:
  - urn:ngm:class:quadratic-voting
  - urn:ngm:class:retroactive-public-goods-funding
  - urn:ngm:class:retroactive-public-goods-funding
---

# Gitcoin

Gitcoin is a blockchain-based public goods funding platform founded in 2017 that finances open-source software development through decentralised grant programmes, bounties, and hackathons, most notably employing quadratic funding to allocate matching pools democratically. The platform uses the Ethereum ecosystem as its primary coordination layer, with GTC governance tokens enabling decentralised community control via its DAO. Gitcoin Passport, a credential aggregation system layering Verifiable Credentials from multiple identity providers, addresses Sybil resistance within open grant rounds and serves as broader Web3 identity infrastructure. Together these mechanisms position Gitcoin as a reference implementation of public goods coordination, bridging open-source software sustainability with decentralised finance and digital identity.
