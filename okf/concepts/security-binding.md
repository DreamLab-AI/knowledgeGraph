---
okf_version: "0.2"
type: Class
title: Security Binding
resource: urn:ngm:class:security-binding
domain: artificial-intelligence
description: A security binding is the chain that links an agent's identifier to the hardware and ledger that vouch for it. In the SAC-CG Agent Ontology the class `SecurityBinding` "represents the chain binding DID → Key Material → Hardware → Ledger verification."[^1]
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:attestation
uses:
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:cryptographic-key
  - urn:ngm:class:hardware-root-of-trust
  - urn:ngm:class:ledger
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:agent-ontology-import/0.1.0","process":"process:agent-ontology-import/0.1.0","at":"2026-10-30T12:00:00Z"}
---

# Security Binding

A security binding is the chain that links an agent's identifier to the hardware and ledger that vouch for it. In the SAC-CG Agent Ontology the class `SecurityBinding` "represents the chain binding DID → Key Material → Hardware → Ledger verification."[^1]
