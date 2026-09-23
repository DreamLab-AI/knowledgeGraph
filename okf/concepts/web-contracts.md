---
okf_version: "0.2"
type: Class
title: Web Contracts
resource: urn:ngm:class:web-contracts
domain: blockchain
description: "Web Contracts is a transport-agnostic smart-contract system that runs verifiable agreements over plain web files instead of a global blockchain. It separates concerns into four layers: an immutable contract.json (rules in any language), a mutable state.json (a JCS-canonicalised, SHA-256 hash-chained sequence of states), a ledger.json (multi-currency balances), and a Trail that anchors the hash cha"
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:smart-contract
hasPart:
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:ledger
enables:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:escrow-system
  - urn:ngm:class:micropayment
dependsOn:
  - urn:ngm:class:single-use-seals
  - urn:ngm:class:proof-of-publication
implements:
  - urn:ngm:class:client-side-validation
contrastsWith:
  - urn:ngm:class:ethereum
  - urn:ngm:class:smart-contract-execution
bridgesTo:
  - urn:ngm:class:solid
  - urn:ngm:class:nostr
  - urn:ngm:class:ai-agent
uses:
  - urn:ngm:class:block-trails
  - urn:ngm:class:did-nostr
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:sha-256
  - urn:ngm:class:json-data-interchange-format-schema
relatedTo:
  - urn:ngm:class:web-assembly
  - urn:ngm:class:x402-and-l402-payment-protocols
---

# Web Contracts

Web Contracts is a transport-agnostic smart-contract system that runs verifiable agreements over plain web files instead of a global blockchain. It separates concerns into four layers: an immutable contract.json (rules in any language), a mutable state.json (a JCS-canonicalised, SHA-256 hash-chained sequence of states), a ledger.json (multi-currency balances), and a Trail that anchors the hash chain to Bitcoin via Block Trails for tamper evidence. Contracts declare effects (credit/debit/transfer) that an executor applies atomically; any verifier can replay the state chain from genesis, check the hashes, and confirm the Bitcoin anchoring, so cheating breaks the chain detectably. Identity is did:nostr and authentication is NIP-98 signed HTTP, which lets both humans (via NIP-07) and autonomous agents participate without global consensus or gas.
