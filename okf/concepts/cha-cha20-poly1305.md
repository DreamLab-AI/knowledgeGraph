---
okf_version: "0.2"
type: Class
title: ChaCha20-Poly1305
resource: urn:ngm:class:cha-cha20-poly1305
domain: security
description: ChaCha20-Poly1305 is an authenticated encryption with associated data (AEAD) cipher suite combining the ChaCha20 stream cipher for encryption with the Poly1305 message authentication code, providing both confidentiality and integrity in a single construction. Designed by Daniel J. Bernstein, it offers performance advantages over AES-GCM on systems lacking hardware AES acceleration (particularly mo
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-algorithm
enables:
  - urn:ngm:class:tls-1-3
  - urn:ngm:class:tls-encryption
contrastsWith:
  - urn:ngm:class:aes-gcm
uses:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:nonce
  - urn:ngm:class:cryptographic-keys
relatedTo:
  - urn:ngm:class:cryptographic-library
---

# ChaCha20-Poly1305

ChaCha20-Poly1305 is an authenticated encryption with associated data (AEAD) cipher suite combining the ChaCha20 stream cipher for encryption with the Poly1305 message authentication code, providing both confidentiality and integrity in a single construction. Designed by Daniel J. Bernstein, it offers performance advantages over AES-GCM on systems lacking hardware AES acceleration (particularly mobile and embedded devices) whilst providing equivalent or superior security margins. It is standardised in RFC 7539 (IETF) and RFC 8439, and is widely deployed in TLS 1.3, QUIC, WireGuard, SSH, and numerous cryptographic libraries as an alternative to AES-based suites.
