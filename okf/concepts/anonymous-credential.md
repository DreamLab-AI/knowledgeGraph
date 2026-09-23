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
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:verifiable-credential-vc
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
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:verifiable-credential-vc
---

# Anonymous Credential

An anonymous credential is a cryptographic attestation that lets a holder prove possession of certified attributes to a verifier without revealing their identity or allowing their presentations to be linked. Built on techniques such as blind signatures and zero-knowledge proofs, it supports selective disclosure of individual attributes while keeping the rest private. Anonymous credentials are a core privacy-enhancing primitive for authentication and access control.
