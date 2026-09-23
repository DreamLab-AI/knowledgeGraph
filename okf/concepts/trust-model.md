---
okf_version: "0.2"
type: Class
title: Trust Model
resource: urn:ngm:class:trust-model
domain: security
description: A trust model is a formal description of which entities are trusted, for what, and on what basis within a security or identity system. It defines the roots of trust, the relationships through which trust is delegated or transitively established, and the assumptions an adversary cannot violate. Trust models range from centralised certificate hierarchies to decentralised webs of trust and zero-trust
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:trust-anchor
requires:
  - urn:ngm:class:trust-anchor
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:authorisation
  - urn:ngm:class:authentication
dependsOn:
  - urn:ngm:class:trust
implements:
  - urn:ngm:class:trust-establishment
contrastsWith:
  - urn:ngm:class:web-of-trust
  - urn:ngm:class:decentralised-trust
uses:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:cryptographic-proof
supports:
  - urn:ngm:class:zero-trust-architecture
relatedTo:
  - urn:ngm:class:threat-model
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:identity-verification
---

# Trust Model

A trust model is a formal description of which entities are trusted, for what, and on what basis within a security or identity system. It defines the roots of trust, the relationships through which trust is delegated or transitively established, and the assumptions an adversary cannot violate. Trust models range from centralised certificate hierarchies to decentralised webs of trust and zero-trust architectures, and they directly shape how authentication and authorisation are designed.
