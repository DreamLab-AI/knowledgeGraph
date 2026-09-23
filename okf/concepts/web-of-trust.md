---
okf_version: "0.2"
type: Class
title: Web of Trust
resource: urn:ngm:class:web-of-trust
domain: security
description: "A web of trust is a decentralised trust model in which participants vouch for the authenticity of one another's public keys by signing them, building confidence through chains of peer endorsements rather than a central authority. Trust is transitive and weighted: a key gains credibility as more trusted parties attest to it. Originating with PGP, the model contrasts with the hierarchical certificat"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:trust-establishment
requires:
  - urn:ngm:class:cryptographic-key
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:identity-verification
implements:
  - urn:ngm:class:digital-signature
contrastsWith:
  - urn:ngm:class:certificate-authority
bridgesTo:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:did
uses:
  - urn:ngm:class:trust-anchor
supports:
  - urn:ngm:class:decentralised-identity
relatedTo:
  - urn:ngm:class:reputation-system
  - urn:ngm:class:trust-establishment
  - urn:ngm:class:security
---

# Web of Trust

A web of trust is a decentralised trust model in which participants vouch for the authenticity of one another's public keys by signing them, building confidence through chains of peer endorsements rather than a central authority. Trust is transitive and weighted: a key gains credibility as more trusted parties attest to it. Originating with PGP, the model contrasts with the hierarchical certificate-authority approach of public-key infrastructure.
