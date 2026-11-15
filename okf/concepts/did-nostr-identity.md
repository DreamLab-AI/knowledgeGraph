---
okf_version: "0.2"
type: Class
title: DID Nostr Identity
resource: urn:ngm:class:did-nostr-identity
domain: blockchain
description: A W3C DID Core|W3C Decentralised Identifier (did:nostr:<pubkey>) binding a VisionClaw Agentic Container|VisionClaw agent to its BIP-340 Schnorr Keypair|BIP-340 x-only public key, enabling cryptographic proof of identity, self-sovereign key management, and inter-agent trust without a c...
maturity: established
quality: 0.88
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:distributed-identity
hasPart:
  - urn:ngm:class:bip-340-schnorr-keypair
  - urn:ngm:class:did-resolution
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
requires:
  - urn:ngm:class:bip-340
  - urn:ngm:class:did-method
  - urn:ngm:class:nostr-protocol
  - urn:ngm:class:bip-340
  - urn:ngm:class:did-method
enables:
  - urn:ngm:class:credential-issuance
  - urn:ngm:class:cryptographic-identity
  - urn:ngm:class:decentralised-trust
  - urn:ngm:class:message-signing
  - urn:ngm:class:self-sovereign-key-management
implements:
  - urn:ngm:class:bip-340
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:nostr-nip-01
  - urn:ngm:class:schnorr-signatures
bridgesTo:
  - urn:ngm:class:blockchain-identity
  - urn:ngm:class:smart-contract-verification
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# DID Nostr Identity

A W3C DID Core|W3C Decentralised Identifier (did:nostr:<pubkey>) binding a VisionClaw Agentic Container|VisionClaw agent to its BIP-340 Schnorr Keypair|BIP-340 x-only public key, enabling cryptographic proof of identity, self-sovereign key management, and inter-agent trust without a c...
