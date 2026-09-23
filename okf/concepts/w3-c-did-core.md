---
okf_version: "0.2"
type: Class
title: W3C DID Core
resource: urn:ngm:class:w3-c-did-core
domain: blockchain
description: W3C DID Core is the World Wide Web Consortium Recommendation (published July 2022) defining Decentralised Identifiers (DIDs) — globally unique, controller-owned URIs of the form did:<method>:<method-specific-id> that are cryptographically verifiable and resolvable without a centralised registration authority. Each DID resolves to a JSON-LD DID Document containing verification methods (public keys)
maturity: established
quality: 0.76
is-a:
  - urn:ngm:class:decentralised-identity
hasPart:
  - urn:ngm:class:did-document
  - urn:ngm:class:did-method
  - urn:ngm:class:verification-method
  - urn:ngm:class:service-endpoint
requires:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:did-resolver
enables:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:zero-knowledge-proof
implements:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:uri-scheme
contrastsWith:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:oauth-2-0
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:ai-agent-identity
  - urn:ngm:class:internet-of-things
uses:
  - urn:ngm:class:json-ld
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:distributed-ledger-technology
supports:
  - urn:ngm:class:credential-exchange
  - urn:ngm:class:digital-identity
  - urn:ngm:class:access-control
standardizedBy:
  - urn:ngm:class:world-wide-web-consortium
relatedTo:
  - urn:ngm:class:sidetree-protocol
  - urn:ngm:class:linked-data-proofs
  - urn:ngm:class:decentralized-identity-foundation
---

# W3C DID Core

W3C DID Core is the World Wide Web Consortium Recommendation (published July 2022) defining Decentralised Identifiers (DIDs) — globally unique, controller-owned URIs of the form did:<method>:<method-specific-id> that are cryptographically verifiable and resolvable without a centralised registration authority. Each DID resolves to a JSON-LD DID Document containing verification methods (public keys), authentication suites, and service endpoints. The specification is method-agnostic, accommodating distributed ledgers, peer-to-peer networks, and web servers as verifiable data registries, and forms the identity layer of the broader Self-Sovereign Identity and Verifiable Credentials ecosystem.
