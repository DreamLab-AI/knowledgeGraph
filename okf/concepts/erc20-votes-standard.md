---
okf_version: "0.2"
type: Class
title: ERC20Votes Standard
resource: urn:ngm:class:erc20-votes-standard
domain: blockchain
description: ERC20Votes is an extension of the ERC-20 fungible-token standard that adds on-chain governance capabilities by tracking historical voting power through checkpointed balances and supporting delegation of votes. It records a snapshot of each account's balance at every block where it changes, so a governance contract can query voting weight at a specific past block, preventing double-voting and flash
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:erc20-standard
enables:
  - urn:ngm:class:dao
uses:
  - urn:ngm:class:smart-contract
relatedTo:
  - urn:ngm:class:erc-20-votes
  - urn:ngm:class:ethereum-smart-contract-platform
---

# ERC20Votes Standard

ERC20Votes is an extension of the ERC-20 fungible-token standard that adds on-chain governance capabilities by tracking historical voting power through checkpointed balances and supporting delegation of votes. It records a snapshot of each account's balance at every block where it changes, so a governance contract can query voting weight at a specific past block, preventing double-voting and flash-loan manipulation. Implemented in widely audited libraries, it is the dominant pattern for token-based voting in decentralised autonomous organisations.
