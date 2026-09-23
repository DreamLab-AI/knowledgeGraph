---
okf_version: "0.2"
type: Class
title: Tally
resource: urn:ngm:class:tally
domain: blockchain
description: A web platform and toolset for creating and managing on-chain decentralised autonomous organisations, providing interfaces for proposal creation, delegation and governance voting across widely used governance contract frameworks.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:dao-tooling
requires:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:governance-token
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ethereum
enables:
  - urn:ngm:class:governance
  - urn:ngm:class:on-chain-voting
  - urn:ngm:class:vote-delegation
implements:
  - urn:ngm:class:compound-governor-bravo
  - urn:ngm:class:open-zeppelin-governor
contrastsWith:
  - urn:ngm:class:snapshot
  - urn:ngm:class:aragon
bridgesTo:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:dao
uses:
  - urn:ngm:class:web3-wallet
  - urn:ngm:class:ipfs
supports:
  - urn:ngm:class:decentralised-governance
  - urn:ngm:class:token-weighted-voting
relatedTo:
  - urn:ngm:class:multisig-wallet
  - urn:ngm:class:timelock-controller
  - urn:ngm:class:dao
---

# Tally

A web platform and toolset for creating and managing on-chain decentralised autonomous organisations, providing interfaces for proposal creation, delegation and governance voting across widely used governance contract frameworks.
