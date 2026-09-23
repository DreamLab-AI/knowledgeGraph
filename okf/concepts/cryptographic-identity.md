---
okf_version: "0.2"
type: Class
title: Cryptographic Identity
resource: urn:ngm:class:cryptographic-identity
domain: blockchain
description: Cryptographic identity is an identity model in which an actor is represented and authenticated through possession of a private key rather than through a centrally issued credential. Control of the corresponding public key — or an identifier derived from it — proves the actor's identity by producing verifiable digital signatures. This model underpins blockchain accounts, decentralized identifiers a
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:decentralized-identity
requires:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:authentication
dependsOn:
  - urn:ngm:class:key-management
  - urn:ngm:class:public-key-cryptography
implements:
  - urn:ngm:class:authentication
contrastsWith:
  - urn:ngm:class:identity-verification
bridgesTo:
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:wallet
partOf:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:digital-identity
relatedTo:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:trust
---

# Cryptographic Identity

Cryptographic identity is an identity model in which an actor is represented and authenticated through possession of a private key rather than through a centrally issued credential. Control of the corresponding public key — or an identifier derived from it — proves the actor's identity by producing verifiable digital signatures. This model underpins blockchain accounts, decentralized identifiers and self-sovereign identity, removing the need for a trusted registry to vouch for who someone is.
