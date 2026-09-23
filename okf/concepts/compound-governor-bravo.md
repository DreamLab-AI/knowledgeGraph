---
okf_version: "0.2"
type: Class
title: Compound Governor Bravo
resource: urn:ngm:class:compound-governor-bravo
domain: blockchain
description: Compound Governor Bravo is the second-generation on-chain governance smart contract deployed by the Compound protocol, superseding Governor Alpha with configurable parameters and a clean separation between governance voting logic and the Timelock executor contract. It enables COMP token holders to create, vote on, and enqueue governance proposals that modify protocol parameters — including interes
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:on-chain-governance
requires:
  - urn:ngm:class:timelock
  - urn:ngm:class:ethereum-smart-contract-platform-smart-contracts
  - urn:ngm:class:vote-delegation
  - urn:ngm:class:comp-token
  - urn:ngm:class:ethereum-smart-contract-platform-smart-contracts
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:dao
  - urn:ngm:class:protocol-parameter-management
dependsOn:
  - urn:ngm:class:governance-token
  - urn:ngm:class:ethereum
implements:
  - urn:ngm:class:token-weighted-voting
  - urn:ngm:class:proposal-lifecycle
  - urn:ngm:class:quorum-mechanism
contrastsWith:
  - urn:ngm:class:open-zeppelin-governor
  - urn:ngm:class:snapshot-governance
  - urn:ngm:class:compound-governor-alpha
bridgesTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:smart-contract-security
uses:
  - urn:ngm:class:voting-mechanism
  - urn:ngm:class:proposal-system
  - urn:ngm:class:calldata-execution
supports:
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:dao-governance
partOf:
  - urn:ngm:class:compound
  - urn:ngm:class:governance-framework
  - urn:ngm:class:governance-framework
relatedTo:
  - urn:ngm:class:governance-attack
  - urn:ngm:class:dao-analytics
  - urn:ngm:class:de-fi-protocol
---

# Compound Governor Bravo

Compound Governor Bravo is the second-generation on-chain governance smart contract deployed by the Compound protocol, superseding Governor Alpha with configurable parameters and a clean separation between governance voting logic and the Timelock executor contract. It enables COMP token holders to create, vote on, and enqueue governance proposals that modify protocol parameters — including interest rate models, collateral factors, reserve factors, and supported asset listings — without requiring contract redeployment to adjust governance thresholds. Governor Bravo introduced an abstraction layer allowing the proposal threshold, voting delay, voting period, and quorum to be updated through the same governance process they govern, substantially reducing upgrade friction. The contract has become a widely forked reference implementation across decentralised finance, with derivatives adopted by Uniswap, Indexed Finance, and many other protocols seeking battle-tested on-chain governance infrastructure.
