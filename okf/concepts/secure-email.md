---
okf_version: "0.2"
type: Class
title: Secure Email
resource: urn:ngm:class:secure-email
domain: security
description: Secure email is the set of technologies and practices that protect the confidentiality, integrity, and authenticity of electronic mail in transit and at rest. It combines transport encryption between mail servers, end-to-end message encryption and signing schemes, and sender-authentication and anti-spoofing controls, so that recipients can trust who sent a message and that its contents were not re
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:secure-communication
requires:
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:secure-communication
dependsOn:
  - urn:ngm:class:digital-signature
implements:
  - urn:ngm:class:end-to-end-encryption
contrastsWith:
  - urn:ngm:class:transport-layer-security
  - urn:ngm:class:transport-layer-security
uses:
  - urn:ngm:class:end-to-end-encryption
  - urn:ngm:class:transport-layer-security
  - urn:ngm:class:transport-layer-security
supports:
  - urn:ngm:class:compliance
standardizedBy:
  - urn:ngm:class:public-key-infrastructure
relatedTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:public-key-infrastructure
---

# Secure Email

Secure email is the set of technologies and practices that protect the confidentiality, integrity, and authenticity of electronic mail in transit and at rest. It combines transport encryption between mail servers, end-to-end message encryption and signing schemes, and sender-authentication and anti-spoofing controls, so that recipients can trust who sent a message and that its contents were not read or altered along the way.
