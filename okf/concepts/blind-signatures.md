---
okf_version: "0.2"
type: Class
title: Blind Signatures
resource: urn:ngm:class:blind-signatures
domain: security
description: Blind Signatures are a cryptographic primitive invented by David Chaum in 1982 that allow a signer to sign a message without being able to see its content, enabling the message author to later unblind the signature and present a valid signature from the signer without the signer being able to link the signing event to the subsequent presentation. The scheme preserves the unlinkability property — t
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:blinding-factor
requires:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:rsa-cryptosystem
enables:
  - urn:ngm:class:ecash
  - urn:ngm:class:privacy-enhancing-technologies
  - urn:ngm:class:anonymous-credential
  - urn:ngm:class:unlinkability
implements:
  - urn:ngm:class:unlinkability
contrastsWith:
  - urn:ngm:class:ring-signature
  - urn:ngm:class:threshold-signature-scheme
bridgesTo:
  - urn:ngm:class:finance
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-algorithm
  - urn:ngm:class:hash-function
standardizedBy:
  - urn:ngm:class:ietf-rfc
  - urn:ngm:class:w3-c-verifiable-credentials
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:post-quantum-cryptography
---

# Blind Signatures

Blind Signatures are a cryptographic primitive invented by David Chaum in 1982 that allow a signer to sign a message without being able to see its content, enabling the message author to later unblind the signature and present a valid signature from the signer without the signer being able to link the signing event to the subsequent presentation. The scheme preserves the unlinkability property — the signer cannot correlate a signing request with a later use of that signature — making it foundational for privacy-preserving payment systems and anonymous credential issuance.
