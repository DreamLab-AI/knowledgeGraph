---
okf_version: "0.2"
type: Class
title: Gitcoin Grants
resource: urn:ngm:class:gitcoin-grants
domain: blockchain
description: "Gitcoin Grants is a decentralised crowdfunding programme for open-source and public goods projects in the Web3 ecosystem, which implements quadratic funding as its core matching mechanism to amplify contributions from a broad community of small donors relative to a smaller number of large funders. In quadratic funding, the matching pool allocation for each project is proportional to the square of "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:public-goods-funding
requires:
  - urn:ngm:class:cryptocurrency-wallet
  - urn:ngm:class:decentralized-identity
enables:
  - urn:ngm:class:open-source-development
  - urn:ngm:class:dao
  - urn:ngm:class:retroactive-public-goods-funding
  - urn:ngm:class:community-governance
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:ethereum
  - urn:ngm:class:de-fi
implements:
  - urn:ngm:class:matching-funds
contrastsWith:
  - urn:ngm:class:venture-capital
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:quadratic-funding
  - urn:ngm:class:smart-contract
  - urn:ngm:class:gitcoin-passport
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:allo-protocol
supports:
  - urn:ngm:class:developer-ecosystem
  - urn:ngm:class:ethereum
relatedTo:
  - urn:ngm:class:gitcoin
  - urn:ngm:class:web3
  - urn:ngm:class:dao
  - urn:ngm:class:crowdfunding
---

# Gitcoin Grants

Gitcoin Grants is a decentralised crowdfunding programme for open-source and public goods projects in the Web3 ecosystem, which implements quadratic funding as its core matching mechanism to amplify contributions from a broad community of small donors relative to a smaller number of large funders. In quadratic funding, the matching pool allocation for each project is proportional to the square of the sum of the square roots of individual contributions, incentivising broad participation over concentrated giving and making grant outcomes resistant to plutocratic capture. Gitcoin Grants operates in periodic rounds with a central matching pool funded by protocols, DAOs, and foundations, and uses Gitcoin Passport as a Sybil resistance layer to prevent fake identity manipulation of the quadratic formula.
