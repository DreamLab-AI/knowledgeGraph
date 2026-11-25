---
okf_version: "0.2"
type: Class
title: Message Authentication
resource: urn:ngm:class:message-authentication
domain: infrastructure
description: Message authentication is the cryptographic property that guarantees a received message originated from a claimed sender and has not been altered in transit. It is achieved through message authentication codes (MACs), digital signatures, or authenticated encryption schemes, each binding message content to a key or key pair that only the legitimate sender possesses.
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:authentication
uses:
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:asymmetric-cryptography
supports:
  - urn:ngm:class:authentication-standards
  - urn:ngm:class:bbs-signatures
relatedTo:
  - urn:ngm:class:authentication-protocol
  - urn:ngm:class:authentication-mechanism
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Message Authentication

Message authentication is the cryptographic property that guarantees a received message originated from a claimed sender and has not been altered in transit. It is achieved through message authentication codes (MACs), digital signatures, or authenticated encryption schemes, each binding message content to a key or key pair that only the legitimate sender possesses.
