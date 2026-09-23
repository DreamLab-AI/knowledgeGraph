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
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:verifiable-credential-vc
standardizedBy:
  - urn:ngm:class:decentralized-identifier
partOf:
  - urn:ngm:class:did-document
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:verification
---

# Verification Method

A verification method is an entry in a decentralised identifier document that specifies the cryptographic material and parameters used to authenticate or authorise actions on behalf of the identifier subject. It typically expresses a public key, key type and controller, and is referenced by verification relationships such as authentication, assertion and key agreement. Verification methods are the mechanism by which proofs presented by a subject are checked against the published DID document.
