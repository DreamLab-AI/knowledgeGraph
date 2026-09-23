---
okf_version: "0.2"
type: Class
title: Unlinkability
resource: urn:ngm:class:unlinkability
domain: security
description: Unlinkability is a privacy property that prevents an adversary from determining whether two or more items of interest, such as messages, transactions or sessions, are related to the same entity. It is a core goal of privacy-enhancing technologies and is achieved through techniques such as pseudonym rotation, mixing, blinding and zero-knowledge constructions. Unlinkability protects against profilin
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:privacy-enhancing-technologies
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:pseudonymity
enables:
  - urn:ngm:class:privacy
  - urn:ngm:class:pseudonymity
  - urn:ngm:class:data-protection
dependsOn:
  - urn:ngm:class:cryptography
implements:
  - urn:ngm:class:privacy
  - urn:ngm:class:data-protection
contrastsWith:
  - urn:ngm:class:surveillance
bridgesTo:
  - urn:ngm:class:tor
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:onion-routing
  - urn:ngm:class:cryptography
supports:
  - urn:ngm:class:identity-management
  - urn:ngm:class:differential-privacy
partOf:
  - urn:ngm:class:privacy-enhancing-technologies
  - urn:ngm:class:privacy
relatedTo:
  - urn:ngm:class:pseudonymity
  - urn:ngm:class:privacy-enhancing-technologies
  - urn:ngm:class:differential-privacy
---

# Unlinkability

Unlinkability is a privacy property that prevents an adversary from determining whether two or more items of interest, such as messages, transactions or sessions, are related to the same entity. It is a core goal of privacy-enhancing technologies and is achieved through techniques such as pseudonym rotation, mixing, blinding and zero-knowledge constructions. Unlinkability protects against profiling and correlation while still permitting legitimate use of a system.
