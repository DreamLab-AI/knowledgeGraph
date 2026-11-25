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
  - urn:ngm:class:decentralised-identifier
hasPart:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:tls-handshake
requires:
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:credential-verification
  - urn:ngm:class:selective-disclosure
dependsOn:
  - urn:ngm:class:public-key-infrastructure
implements:
  - urn:ngm:class:authentication
uses:
  - urn:ngm:class:digital-certificate
supports:
  - urn:ngm:class:credential-issuance
  - urn:ngm:class:wallet
relatedTo:
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:trust-framework
  - urn:ngm:class:compliance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Holder Binding

Holder binding is the cryptographic mechanism that ties a verifiable credential to the legitimate holder's controlled key material, ensuring that only the entity to whom a credential was issued can present it. It prevents credential theft and replay by requiring the presenter to prove possession of a private key bound to the credential at presentation time. Common realisations include key binding in SD-JWT and proof-of-possession challenges during presentation exchange.
