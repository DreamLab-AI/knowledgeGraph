---
okf_version: "0.2"
type: Class
title: Anonymous Credential
resource: urn:ngm:class:anonymous-credential
domain: security
description: An anonymous credential is a cryptographic attestation that lets a holder prove possession of certified attributes to a verifier without revealing their identity or allowing their presentations to be linked. Built on techniques such as blind signatures and zero-knowledge proofs, it supports selective disclosure of individual attributes while keeping the rest private. Anonymous credentials are a co
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:unlinkability
implements:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:verifiable-credentials
contrastsWith:
  - urn:ngm:class:digital-identity
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
uses:
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:privacy
  - urn:ngm:class:pseudonymity
relatedTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:verifiable-credentials
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Anonymous Credential

An anonymous credential is a cryptographic attestation that lets a holder prove possession of certified attributes to a verifier without revealing their identity or allowing their presentations to be linked. Built on techniques such as blind signatures and zero-knowledge proofs, it supports selective disclosure of individual attributes while keeping the rest private. Anonymous credentials are a core privacy-enhancing primitive for authentication and access control.
