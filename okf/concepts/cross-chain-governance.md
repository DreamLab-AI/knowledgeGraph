---
okf_version: "0.2"
type: Class
title: Cross-Chain Governance
resource: urn:ngm:class:cross-chain-governance
domain: blockchain
description: Cross-Chain Governance is a coordination framework and set of protocols that enable governance proposals, voting outcomes, and policy updates to propagate and be enforced across multiple heterogeneous blockchain networks without requiring a single trusted intermediary. It extends on-chain governance mechanisms — token-weighted voting, quadratic voting, time-locked execution — to multi-chain enviro
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bc-governance-and-regulation
requires:
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:smart-contract
  - urn:ngm:class:distributed-consensus
enables:
  - urn:ngm:class:protocol-upgrades
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:treasury-management
  - urn:ngm:class:protocol-upgrade
dependsOn:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:relay-network
  - urn:ngm:class:fraud-proof
contrastsWith:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:off-chain-governance
  - urn:ngm:class:centralised-governance
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:multi-stakeholder-governance
uses:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:governance-token
  - urn:ngm:class:on-chain-voting
  - urn:ngm:class:time-lock
relatedTo:
  - urn:ngm:class:polkadot-parachains
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:polkadot-parachains
---

# Cross-Chain Governance

Cross-Chain Governance is a coordination framework and set of protocols that enable governance proposals, voting outcomes, and policy updates to propagate and be enforced across multiple heterogeneous blockchain networks without requiring a single trusted intermediary. It extends on-chain governance mechanisms — token-weighted voting, quadratic voting, time-locked execution — to multi-chain environments using interoperability layers such as IBC (Inter-Blockchain Communication), cross-chain message-passing bridges, or relay networks. Achieving consistent governance state across chains requires solving distributed consensus problems while preserving each chain's sovereignty. The field sits at the intersection of blockchain interoperability, distributed systems coordination, and decentralised decision-making.
