---
okf_version: "0.2"
type: Class
title: Selective Disclosure
resource: urn:ngm:class:selective-disclosure
domain: security
description: Selective disclosure is a cryptographic capability that allows the holder of a verifiable credential to present only a chosen subset of the credential's claims to a verifier, without revealing the undisclosed fields or requiring re-issuance by the issuer. It is implemented through specialised signature schemes such as BBS+ signatures and SD-JWT, as well as zero-knowledge proof systems, enabling fi
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:privacy-preserving-technology
requires:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:commitment-scheme
enables:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:data-minimisation
  - urn:ngm:class:attribute-based-access-control
  - urn:ngm:class:privacy-preserving-authentication
implements:
  - urn:ngm:class:bbs-signatures
  - urn:ngm:class:sd-jwt
  - urn:ngm:class:zk-snarks
contrastsWith:
  - urn:ngm:class:bearer-token
  - urn:ngm:class:full-credential-presentation
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:differential-privacy
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:hash-function
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:elliptic-curve-cryptography
supports:
  - urn:ngm:class:e-idas-2-0
  - urn:ngm:class:gdpr-compliance
  - urn:ngm:class:self-sovereign-identity
standardizedBy:
  - urn:ngm:class:w-3-c-verifiable-credentials-data-model
  - urn:ngm:class:sd-jwt
  - urn:ngm:class:decentralized-identity-foundation
  - urn:ngm:class:sd-jwt
  - urn:ngm:class:decentralized-identity-foundation
relatedTo:
  - urn:ngm:class:credential-format-standard
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:digital-identity-wallet
---

# Selective Disclosure

Selective disclosure is a cryptographic capability that allows the holder of a verifiable credential to present only a chosen subset of the credential's claims to a verifier, without revealing the undisclosed fields or requiring re-issuance by the issuer. It is implemented through specialised signature schemes such as BBS+ signatures and SD-JWT, as well as zero-knowledge proof systems, enabling fine-grained data minimisation in decentralised identity architectures. As a core privacy-engineering primitive, selective disclosure satisfies regulatory requirements such as GDPR's data minimisation principle and supports the eIDAS 2.0 digital wallet framework. The concept bridges cryptographic credential security with practical privacy-preserving authentication across identity, finance, and access-control domains.
