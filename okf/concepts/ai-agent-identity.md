---
okf_version: "0.2"
type: Class
title: Ai Agent Identity
resource: urn:ngm:class:ai-agent-identity
domain: blockchain
description: A persistent, verifiable digital identity assigned to an autonomous AI agent, enabling it to authenticate, sign transactions, and participate in decentralised systems on behalf of itself or a principal. AI agent identity encompasses credential issuance, key management, and delegation of authority scoped to the agent's operational context. Such identities may be anchored on a blockchain ledger to e
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:verifiable-credentials
requires:
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:multi-agent-system
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger
contrastsWith:
  - urn:ngm:class:human-identity
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralized-identifier
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:verifiable-credential-vc
supports:
  - urn:ngm:class:accountability
relatedTo:
  - urn:ngm:class:access-control
  - urn:ngm:class:trust-framework
  - urn:ngm:class:smart-contract
---

# Ai Agent Identity

A persistent, verifiable digital identity assigned to an autonomous AI agent, enabling it to authenticate, sign transactions, and participate in decentralised systems on behalf of itself or a principal. AI agent identity encompasses credential issuance, key management, and delegation of authority scoped to the agent's operational context. Such identities may be anchored on a blockchain ledger to ensure auditability and prevent impersonation. They bridge self-sovereign identity (SSI) principles with agentic software systems.
