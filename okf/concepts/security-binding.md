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
---

# Security Binding

A security binding is the chain that links an agent's identifier to the hardware and ledger that vouch for it. In the SAC-CG Agent Ontology the class `SecurityBinding` "represents the chain binding DID → Key Material → Hardware → Ledger verification."[^1]
