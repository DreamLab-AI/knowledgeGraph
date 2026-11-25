---
okf_version: "0.2"
type: Class
title: Hyperledger Fabric
resource: urn:ngm:class:hyperledger-fabric
domain: blockchain
description: Permissioned blockchain framework enabling enterprise consortia to build modular, confidential distributed-ledger systems through private channels, chaincode (smart contracts), pluggable consensus mechanisms, and membership service providers enforcing identity and access control.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:permissioned-blockchain
hasPart:
  - urn:ngm:class:chaincode
  - urn:ngm:class:private-channels
  - urn:ngm:class:membership-service-provider
  - urn:ngm:class:ordering-service
requires:
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:supply-chain-traceability
  - urn:ngm:class:access-control
  - urn:ngm:class:confidential-transactions
implements:
  - urn:ngm:class:smart-contract
contrastsWith:
  - urn:ngm:class:public-blockchain
  - urn:ngm:class:hyperledger-besu
  - urn:ngm:class:ethereum
bridgesTo:
  - urn:ngm:class:supply-chain-management
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:private-channels
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:practical-byzantine-fault-tolerance
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:private-channels
supports:
  - urn:ngm:class:zero-knowledge-proof
partOf:
  - urn:ngm:class:hyperledger-foundation
  - urn:ngm:class:enterprise-blockchain-architecture
  - urn:ngm:class:hyperledger-foundation
relatedTo:
  - urn:ngm:class:consensus-mechanism
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Hyperledger Fabric

Permissioned blockchain framework enabling enterprise consortia to build modular, confidential distributed-ledger systems through private channels, chaincode (smart contracts), pluggable consensus mechanisms, and membership service providers enforcing identity and access control.
