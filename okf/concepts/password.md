---
okf_version: "0.2"
type: Class
title: Password
resource: urn:ngm:class:password
domain: security
description: "A memorised secret string presented by a user to prove identity during authentication — the archetypal 'something you know' factor. Passwords are cheap to deploy but structurally weak: they are guessable, reusable across services, phishable, and exposed en masse by database breaches, which is why modern security practice hashes them with slow salted algorithms, pairs them with additional factors, "
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:authentication
contrastsWith:
  - urn:ngm:class:cryptographic-key
  - urn:ngm:class:hardware-security-key
partOf:
  - urn:ngm:class:multi-factor-authentication
relatedTo:
  - urn:ngm:class:encryption
---

# Password

A memorised secret string presented by a user to prove identity during authentication — the archetypal 'something you know' factor. Passwords are cheap to deploy but structurally weak: they are guessable, reusable across services, phishable, and exposed en masse by database breaches, which is why modern security practice hashes them with slow salted algorithms, pairs them with additional factors, and increasingly replaces them with cryptographic credentials such as passkeys and hardware security keys.
