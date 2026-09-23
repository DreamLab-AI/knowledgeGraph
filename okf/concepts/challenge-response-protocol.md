---
okf_version: "0.2"
type: Class
title: Challenge-Response Protocol
resource: urn:ngm:class:challenge-response-protocol
domain: security
description: A challenge-response protocol is an authentication protocol in which a verifier issues an unpredictable challenge and the claimant must return a response computed from a shared secret or private key, proving knowledge of the credential without transmitting it. Because each challenge is fresh, typically a random nonce, a valid response cannot be reused, defeating replay attacks. The pattern underpi
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:authentication-protocol
hasPart:
  - urn:ngm:class:nonce
  - urn:ngm:class:cryptographic-protocol
enables:
  - urn:ngm:class:mutual-authentication
  - urn:ngm:class:identity-verification
implements:
  - urn:ngm:class:authentication-protocol
contrastsWith:
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:encryption
supports:
  - urn:ngm:class:authentication
  - urn:ngm:class:passwordless-authentication
standardizedBy:
  - urn:ngm:class:authentication-standards
partOf:
  - urn:ngm:class:authentication-mechanism
relatedTo:
  - urn:ngm:class:kerberos
---

# Challenge-Response Protocol

A challenge-response protocol is an authentication protocol in which a verifier issues an unpredictable challenge and the claimant must return a response computed from a shared secret or private key, proving knowledge of the credential without transmitting it. Because each challenge is fresh, typically a random nonce, a valid response cannot be reused, defeating replay attacks. The pattern underpins many authentication mechanisms including CHAP, HMAC-based schemes, and public-key signature challenges.
