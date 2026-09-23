---
okf_version: "0.2"
type: Class
title: Trust Registry
resource: urn:ngm:class:trust-registry
domain: security
description: A trust registry is an authoritative, queryable record that lists which issuers, verifiers, and credential types are recognised as trustworthy within a given governance framework. It allows a relying party to programmatically determine whether a presented verifiable credential comes from an accredited source and remains valid. Trust registries underpin scalable decentralised identity ecosystems by
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:trust-framework
requires:
  - urn:ngm:class:interoperability
enables:
  - urn:ngm:class:identity-verification
dependsOn:
  - urn:ngm:class:trust-anchor
implements:
  - urn:ngm:class:trust-framework
contrastsWith:
  - urn:ngm:class:certificate-authority
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
uses:
  - urn:ngm:class:certificate-authority
supports:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:credential-issuance
partOf:
  - urn:ngm:class:governance-framework
relatedTo:
  - urn:ngm:class:did
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:digital-identity
---

# Trust Registry

A trust registry is an authoritative, queryable record that lists which issuers, verifiers, and credential types are recognised as trustworthy within a given governance framework. It allows a relying party to programmatically determine whether a presented verifiable credential comes from an accredited source and remains valid. Trust registries underpin scalable decentralised identity ecosystems by providing the machine-readable basis for trust decisions.
