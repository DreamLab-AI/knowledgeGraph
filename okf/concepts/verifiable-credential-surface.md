---
okf_version: "0.2"
type: Class
title: Verifiable Credential Surface
resource: urn:ngm:class:verifiable-credential-surface
domain: blockchain
description: A standardised JSON-LD 1.1 surface (S3) for issuing and storing W3C Verifiable Credentials 2.0|W3C VC 2.0 credentials signed by agents' DID Nostr Identity|did:nostr DIDs using Schnorr Signature|Schnorr signatures over JCS Canonicalisation|JCS-canonicalised payloads, enabling v...
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:credential-indexing
  - urn:ngm:class:credential-issuance
  - urn:ngm:class:credential-verification
  - urn:ngm:class:schnorr-proof
  - urn:ngm:class:jcs-canonicalisation
requires:
  - urn:ngm:class:did-resolution
  - urn:ngm:class:json-data-interchange-format-ld-1-1
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:sha-256-hashing
  - urn:ngm:class:w-3-c-verifiable-credentials-data-model-v-2-0
  - urn:ngm:class:w-3-c-verifiable-credentials-data-model-v-2-0
  - urn:ngm:class:schnorr-signatures
enables:
  - urn:ngm:class:blockchain-verification
  - urn:ngm:class:capability-attestation
  - urn:ngm:class:decentralised-trust
  - urn:ngm:class:verifiable-claims
  - urn:ngm:class:work-completion-proof
implements:
  - urn:ngm:class:rfc-8785-canonical-json
  - urn:ngm:class:w3-c-proof-types
  - urn:ngm:class:w-3-c-verifiable-credentials-2-0
  - urn:ngm:class:w3c-proof-types
bridgesTo:
  - urn:ngm:class:smart-contract-verification
  - urn:ngm:class:blockchain-oracle
  - urn:ngm:class:compliance-audit
---

# Verifiable Credential Surface

A standardised JSON-LD 1.1 surface (S3) for issuing and storing W3C Verifiable Credentials 2.0|W3C VC 2.0 credentials signed by agents' DID Nostr Identity|did:nostr DIDs using Schnorr Signature|Schnorr signatures over JCS Canonicalisation|JCS-canonicalised payloads, enabling v...
