---
okf_version: "0.2"
type: Class
title: Liquid Democracy
resource: urn:ngm:class:liquid-democracy
domain: blockchain
description: Liquid democracy is a hybrid participatory governance model that synthesises direct democracy and representative democracy by permitting each participant either to cast their vote on a proposal directly or to delegate their voting weight transitively to a trusted proxy, who may in turn re-delegate to another agent, forming an arbitrarily deep delegation chain. Delegations are revocable at any poin
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:bc-governance-and-regulation
requires:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:vote-checkpointing
enables:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:delegate-democracy
  - urn:ngm:class:delegate-democracy
  - urn:ngm:class:participatory-governance
dependsOn:
  - urn:ngm:class:erc-20-votes
  - urn:ngm:class:token-weighted-voting
implements:
  - urn:ngm:class:transitive-delegation
  - urn:ngm:class:vote-weight-aggregation
contrastsWith:
  - urn:ngm:class:quadratic-voting
  - urn:ngm:class:conviction-voting
  - urn:ngm:class:representative-democracy
  - urn:ngm:class:direct-democracy
bridgesTo:
  - urn:ngm:class:collective-intelligence
  - urn:ngm:class:multi-agent-systems
uses:
  - urn:ngm:class:governance-token
  - urn:ngm:class:voting-mechanism
  - urn:ngm:class:smart-contract
  - urn:ngm:class:delegation-graph
relatedTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:snapshot-governance
  - urn:ngm:class:futarchy
  - urn:ngm:class:holographic-consensus
---

# Liquid Democracy

Liquid democracy is a hybrid participatory governance model that synthesises direct democracy and representative democracy by permitting each participant either to cast their vote on a proposal directly or to delegate their voting weight transitively to a trusted proxy, who may in turn re-delegate to another agent, forming an arbitrarily deep delegation chain. Delegations are revocable at any point before a proposal closes, preserving individual sovereignty over the vote. In distributed-systems and blockchain governance contexts the model is implemented via smart-contract delegation registries and off-chain signalling layers, enabling token holders or identity-verified citizens to assign on-chain voting power to domain experts while retaining the right to override on any individual proposal.
