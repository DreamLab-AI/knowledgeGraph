---
okf_version: "0.2"
type: Class
title: Governance Proposal
resource: urn:ngm:class:governance-proposal
domain: blockchain
description: A governance proposal is a formally submitted, votable item that requests a change to a decentralised protocol, treasury allocation or organisational parameter, typically within a DAO. It encapsulates a description, an executable payload or off-chain intent, and voting parameters such as quorum and threshold. Token holders or delegates vote on the proposal, and on approval it may be executed autom
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:on-chain-governance
hasPart:
  - urn:ngm:class:quorum
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:voting-mechanism
  - urn:ngm:class:governance-token
  - urn:ngm:class:voting
enables:
  - urn:ngm:class:decentralised-governance
dependsOn:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ethereum
implements:
  - urn:ngm:class:on-chain-governance
uses:
  - urn:ngm:class:snapshot
  - urn:ngm:class:delegation
supports:
  - urn:ngm:class:decentralised-autonomous-organisation
partOf:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:decentralised-autonomous-organisation
relatedTo:
  - urn:ngm:class:voting-mechanism
  - urn:ngm:class:governance-framework
  - urn:ngm:class:voting
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Governance Proposal

A governance proposal is a formally submitted, votable item that requests a change to a decentralised protocol, treasury allocation or organisational parameter, typically within a DAO. It encapsulates a description, an executable payload or off-chain intent, and voting parameters such as quorum and threshold. Token holders or delegates vote on the proposal, and on approval it may be executed automatically by smart contracts.
