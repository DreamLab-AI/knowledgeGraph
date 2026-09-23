---
okf_version: "0.2"
type: Class
title: Phishing Resistant Authentication
resource: urn:ngm:class:phishing-resistant-authentication
domain: security
description: Phishing-resistant authentication is a class of authentication methods designed so that credentials cannot be captured and replayed by an attacker who tricks a user into interacting with a fraudulent site or relay. It achieves this primarily through public-key cryptography combined with origin binding, so that a credential is cryptographically tied to the legitimate service's domain and will not a
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:key-generation
enables:
  - urn:ngm:class:passwordless-authentication
dependsOn:
  - urn:ngm:class:elliptic-curve-cryptography
implements:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:multi-factor-authentication
contrastsWith:
  - urn:ngm:class:passwordless-authentication
uses:
  - urn:ngm:class:fido2
  - urn:ngm:class:digital-signature
  - urn:ngm:class:authentication
supports:
  - urn:ngm:class:authentication
standardizedBy:
  - urn:ngm:class:fido-alliance
relatedTo:
  - urn:ngm:class:nonce
---

# Phishing Resistant Authentication

Phishing-resistant authentication is a class of authentication methods designed so that credentials cannot be captured and replayed by an attacker who tricks a user into interacting with a fraudulent site or relay. It achieves this primarily through public-key cryptography combined with origin binding, so that a credential is cryptographically tied to the legitimate service's domain and will not authenticate to an impostor. FIDO2/WebAuthn passkeys and hardware security keys are the canonical implementations, replacing shared secrets such as passwords and one-time codes that remain vulnerable to interception.
