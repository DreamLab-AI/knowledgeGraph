---
okf_version: "0.2"
type: Class
title: Cryptographic Key Pair
resource: urn:ngm:class:cryptographic-key-pair
domain: security
description: A cryptographic key pair is a mathematically linked pair of keys, a public key and a private key, used in asymmetric cryptography. The private key is kept secret by its owner while the public key may be distributed openly, and operations performed with one key can only be reversed or verified with the other. Key pairs underpin encryption to a recipient, digital signatures that prove authorship, an
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:public-key-cryptography
hasPart:
  - urn:ngm:class:private-key
requires:
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:encryption
dependsOn:
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:key-management
implements:
  - urn:ngm:class:public-key-cryptography
bridgesTo:
  - urn:ngm:class:did-method
uses:
  - urn:ngm:class:asymmetric-cryptography
supports:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:did-method
partOf:
  - urn:ngm:class:public-key-cryptography
relatedTo:
  - urn:ngm:class:encryption
  - urn:ngm:class:cryptography
  - urn:ngm:class:private-key
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Cryptographic Key Pair

A cryptographic key pair is a mathematically linked pair of keys, a public key and a private key, used in asymmetric cryptography. The private key is kept secret by its owner while the public key may be distributed openly, and operations performed with one key can only be reversed or verified with the other. Key pairs underpin encryption to a recipient, digital signatures that prove authorship, and key agreement, making them foundational to secure communication, authentication and decentralised identity.
