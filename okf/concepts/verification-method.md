---
okf_version: "0.2"
type: Class
title: Verification Method
resource: urn:ngm:class:verification-method
domain: blockchain
description: A verification method is an entry in a decentralised identifier document that specifies the cryptographic material and parameters used to authenticate or authorise actions on behalf of the identifier subject. It typically expresses a public key, key type and controller, and is referenced by verification relationships such as authentication, assertion and key agreement. Verification methods are the
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:did-document
hasPart:
  - urn:ngm:class:public-key
  - urn:ngm:class:cryptographic-key
requires:
  - urn:ngm:class:cryptographic-key
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:credential-verification
  - urn:ngm:class:identity-verification
dependsOn:
  - urn:ngm:class:self-sovereign-identity
implements:
  - urn:ngm:class:authentication
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-proof
supports:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:verifiable-credentials
standardizedBy:
  - urn:ngm:class:decentralised-identifier
partOf:
  - urn:ngm:class:did-document
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:verification
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Verification Method

A verification method is an entry in a decentralised identifier document that specifies the cryptographic material and parameters used to authenticate or authorise actions on behalf of the identifier subject. It typically expresses a public key, key type and controller, and is referenced by verification relationships such as authentication, assertion and key agreement. Verification methods are the mechanism by which proofs presented by a subject are checked against the published DID document.
