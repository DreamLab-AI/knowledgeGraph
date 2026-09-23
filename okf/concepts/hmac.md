---
okf_version: "0.2"
type: Class
title: HMAC
resource: urn:ngm:class:hmac
domain: security
description: HMAC (hash-based message authentication code) is a construction that combines a cryptographic hash function with a secret key to produce a fixed-length tag verifying both the integrity and the authenticity of a message. It applies the underlying hash twice with key-derived inner and outer padding, providing security that does not depend on the hash being collision-resistant in the same way a plain
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:sha-256
requires:
  - urn:ngm:class:sha-256
enables:
  - urn:ngm:class:security
dependsOn:
  - urn:ngm:class:cryptography
implements:
  - urn:ngm:class:authentication
contrastsWith:
  - urn:ngm:class:authorization
bridgesTo:
  - urn:ngm:class:token
uses:
  - urn:ngm:class:sha-256
supports:
  - urn:ngm:class:authentication
  - urn:ngm:class:tls
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:sha-256
  - urn:ngm:class:tls
  - urn:ngm:class:authentication
---

# HMAC

HMAC (hash-based message authentication code) is a construction that combines a cryptographic hash function with a secret key to produce a fixed-length tag verifying both the integrity and the authenticity of a message. It applies the underlying hash twice with key-derived inner and outer padding, providing security that does not depend on the hash being collision-resistant in the same way a plain hash would. HMAC is widely used to authenticate API requests, tokens, and protocol messages.
