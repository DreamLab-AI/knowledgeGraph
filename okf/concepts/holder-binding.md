---
okf_version: "0.2"
type: Class
title: Holder Binding
resource: urn:ngm:class:holder-binding
domain: security
description: "Holder binding is the cryptographic mechanism that ties a verifiable credential to the legitimate holder's controlled key material, ensuring that only the entity to whom a credential was issued can present it. It prevents credential theft and replay by requiring the presenter to prove possession of a private key bound to the credential at presentation time. Common realisations include key binding "
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:decentralized-identifier
hasPart:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:tls-handshake
requires:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:credential-verification
  - urn:ngm:class:selective-disclosure
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
implements:
  - urn:ngm:class:authentication
uses:
  - urn:ngm:class:digital-certificate
supports:
  - urn:ngm:class:credential-issuance
  - urn:ngm:class:wallet
relatedTo:
  - urn:ngm:class:did
  - urn:ngm:class:trust-framework
  - urn:ngm:class:compliance
---

# Holder Binding

Holder binding is the cryptographic mechanism that ties a verifiable credential to the legitimate holder's controlled key material, ensuring that only the entity to whom a credential was issued can present it. It prevents credential theft and replay by requiring the presenter to prove possession of a private key bound to the credential at presentation time. Common realisations include key binding in SD-JWT and proof-of-possession challenges during presentation exchange.
