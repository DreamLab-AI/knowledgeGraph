---
okf_version: "0.2"
type: Class
title: Snapshot Governance
resource: urn:ngm:class:snapshot-governance
domain: blockchain
description: Snapshot Governance is an off-chain voting mechanism used in decentralised autonomous organisations whereby token holders cast gasless ballots whose weight is determined by a verified snapshot of holdings at a specific block height. The system enables low-friction community governance without requiring on-chain transaction costs for each vote. Results are typically ratified by a multisig or on-cha
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:bc-governance-and-regulation
enables:
  - urn:ngm:class:community-governance
  - urn:ngm:class:protocol-upgrade
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-signature
contrastsWith:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:delegated-governance
uses:
  - urn:ngm:class:token-voting
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ipfs
supports:
  - urn:ngm:class:decentralised-finance
  - urn:ngm:class:dao-treasury
relatedTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:governance-token
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:voting-power
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Snapshot Governance

Snapshot Governance is an off-chain voting mechanism used in decentralised autonomous organisations whereby token holders cast gasless ballots whose weight is determined by a verified snapshot of holdings at a specific block height. The system enables low-friction community governance without requiring on-chain transaction costs for each vote. Results are typically ratified by a multisig or on-chain executor that enforces the outcome. It represents a pragmatic compromise between full on-chain governance and centralised decision-making.
