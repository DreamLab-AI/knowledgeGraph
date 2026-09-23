---
okf_version: "0.2"
type: Class
title: BBS+ Signatures
resource: urn:ngm:class:bbs-signatures
domain: security
description: BBS+ Signatures is the collective term for the class of pairing-based multi-message signature schemes derived from the BBS construction, encompassing both the base signature algorithm and the proof-of-knowledge protocols that enable selective disclosure and unlinkable presentation of signed credential attributes. As a scheme family, BBS+ Signatures represent the cryptographic foundation for privac
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-signature
hasPart:
  - urn:ngm:class:bbs-signature
requires:
  - urn:ngm:class:bilinear-pairing
enables:
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:privacy-preserving-authentication
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:anonymous-credential
dependsOn:
  - urn:ngm:class:zero-knowledge-proof
contrastsWith:
  - urn:ngm:class:json-data-interchange-format-web-token
bridgesTo:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:governance
uses:
  - urn:ngm:class:cryptographic-proof-system
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:commitment-scheme
supports:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralized-identifier
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:privacy-preserving-identity
---

# BBS+ Signatures

BBS+ Signatures is the collective term for the class of pairing-based multi-message signature schemes derived from the BBS construction, encompassing both the base signature algorithm and the proof-of-knowledge protocols that enable selective disclosure and unlinkable presentation of signed credential attributes. As a scheme family, BBS+ Signatures represent the cryptographic foundation for privacy-preserving digital credential ecosystems.
