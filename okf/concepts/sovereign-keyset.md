---
okf_version: "0.2"
type: Class
title: Sovereign Keyset
resource: urn:ngm:class:sovereign-keyset
domain: blockchain
description: The cryptographic key material (BIP-340 Schnorr Keypair|BIP-340 Schnorr keypair) held securely by each VisionClaw Agentic Container|VisionClaw agent, used to prove identity via DID Nostr Identity|did:nostr DIDs, sign Verifiable Credential Surface|verifiable credentials, authentica...
maturity: established
quality: 0.86
is-a:
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:bip-340-schnorr-keypair
  - urn:ngm:class:key-rotation-policy
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
requires:
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:key-storage
  - urn:ngm:class:secp256k1-elliptic-curve
  - urn:ngm:class:random-number-generator
  - urn:ngm:class:random-number-generator
  - urn:ngm:class:hardware-security-module
enables:
  - urn:ngm:class:credential-issuance
  - urn:ngm:class:decentralised-trust
  - urn:ngm:class:message-signing
  - urn:ngm:class:peer-authentication
  - urn:ngm:class:self-sovereign-identity
implements:
  - urn:ngm:class:bip-340
  - urn:ngm:class:secp256k1
  - urn:ngm:class:w3-c-did-core
bridgesTo:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:blockchain-keypair
  - urn:ngm:class:schnorr-signature
---

# Sovereign Keyset

The cryptographic key material (BIP-340 Schnorr Keypair|BIP-340 Schnorr keypair) held securely by each VisionClaw Agentic Container|VisionClaw agent, used to prove identity via DID Nostr Identity|did:nostr DIDs, sign Verifiable Credential Surface|verifiable credentials, authentica...
