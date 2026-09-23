---
okf_version: "0.2"
type: Class
title: Permissioned Network
resource: urn:ngm:class:permissioned-network
domain: blockchain
description: A Permissioned Network is a distributed ledger architecture in which participation—whether as a validator, transaction submitter, or read-only observer—is restricted to entities that have been explicitly authorised by a governing body or membership protocol. Unlike public blockchains, nodes must satisfy identity verification, legal agreement, or technical credentialing requirements before joining,
maturity: established
quality: 0
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
hasPart:
  - urn:ngm:class:validator-node
requires:
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-management
enables:
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:blockchain-compliance
contrastsWith:
  - urn:ngm:class:public-blockchain
uses:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:smart-contract
relatedTo:
  - urn:ngm:class:private-blockchain
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:blockchain-interoperability
---

# Permissioned Network

A Permissioned Network is a distributed ledger architecture in which participation—whether as a validator, transaction submitter, or read-only observer—is restricted to entities that have been explicitly authorised by a governing body or membership protocol. Unlike public blockchains, nodes must satisfy identity verification, legal agreement, or technical credentialing requirements before joining, enabling stronger privacy guarantees, higher throughput, and deterministic finality than open networks while sacrificing censorship resistance. Permissioned networks are the dominant choice for enterprise and consortium deployments such as trade finance, healthcare data exchange, and central-bank digital currency infrastructure.
