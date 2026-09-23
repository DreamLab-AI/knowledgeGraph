---
okf_version: "0.2"
type: Class
title: Message Authentication Code
resource: urn:ngm:class:message-authentication-code
domain: security
description: A Message Authentication Code (MAC) is a fixed-size cryptographic tag generated from an arbitrary-length message and a shared secret key using a keyed hash or block-cipher-based algorithm, providing simultaneous data integrity verification and authentication of the sender to any party holding the same secret key. Unlike digital signatures, MACs are symmetric and do not provide non-repudiation.
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:cryptography
requires:
  - urn:ngm:class:symmetric-key
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:message-authentication
  - urn:ngm:class:authenticated-encryption
implements:
  - urn:ngm:class:hmac
contrastsWith:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:non-repudiation
bridgesTo:
  - urn:ngm:class:iot-security
  - urn:ngm:class:distributed-systems-security
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:block-cipher
  - urn:ngm:class:pseudorandom-function
supports:
  - urn:ngm:class:tls
  - urn:ngm:class:ipsec
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:authentication
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:post-quantum-cryptography
---

# Message Authentication Code

A Message Authentication Code (MAC) is a fixed-size cryptographic tag generated from an arbitrary-length message and a shared secret key using a keyed hash or block-cipher-based algorithm, providing simultaneous data integrity verification and authentication of the sender to any party holding the same secret key. Unlike digital signatures, MACs are symmetric and do not provide non-repudiation.
