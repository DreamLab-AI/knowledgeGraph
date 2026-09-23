---
okf_version: "0.2"
type: Class
title: Verifiable Data Registry
resource: urn:ngm:class:verifiable-data-registry
domain: infrastructure
description: A system that mediates the creation, verification, and resolution of decentralized identifiers and verifiable credentials, typically implemented as a blockchain, distributed ledger, or decentralized network for storing public key and revocation information.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:data-registry
hasPart:
  - urn:ngm:class:did-document
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:decentralized-storage
enables:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:digital-identity
  - urn:ngm:class:credential-revocation
  - urn:ngm:class:did-resolution
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:distributed-ledger
implements:
  - urn:ngm:class:w3-c-did-specification
  - urn:ngm:class:w3-c-verifiable-credentials
contrastsWith:
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:certificate-authority
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:cryptography
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:trust-framework
  - urn:ngm:class:zero-knowledge-proof
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:decentralized-identity-foundation
partOf:
  - urn:ngm:class:decentralized-identity
relatedTo:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:verifiable-credential-vc
---

# Verifiable Data Registry

A system that mediates the creation, verification, and resolution of decentralized identifiers and verifiable credentials, typically implemented as a blockchain, distributed ledger, or decentralized network for storing public key and revocation information.
