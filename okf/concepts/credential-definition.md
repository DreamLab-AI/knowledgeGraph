---
okf_version: "0.2"
type: Class
title: Credential Definition
resource: urn:ngm:class:credential-definition
domain: security
description: A credential definition is an on-ledger or registry artefact, published by a credential issuer, that binds a credential schema to the issuer's cryptographic public keys and signing parameters. It specifies the attributes a credential will contain and the cryptographic material verifiers use to validate signatures and zero-knowledge proofs derived from issued credentials. Central to decentralised-i
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:verifiable-credential-standard
enables:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:self-sovereign-identity
uses:
  - urn:ngm:class:digital-signature
relatedTo:
  - urn:ngm:class:identity-provider
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Credential Definition

A credential definition is an on-ledger or registry artefact, published by a credential issuer, that binds a credential schema to the issuer's cryptographic public keys and signing parameters. It specifies the attributes a credential will contain and the cryptographic material verifiers use to validate signatures and zero-knowledge proofs derived from issued credentials. Central to decentralised-identity ecosystems such as those built on AnonCreds, a credential definition lets a holder prove possession of an issuer-signed credential, selectively disclosing only chosen attributes.
