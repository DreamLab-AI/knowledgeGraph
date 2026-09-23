---
okf_version: "0.2"
type: Class
title: Pseudonymity
resource: urn:ngm:class:pseudonymity
domain: security
description: "Pseudonymity is the property of operating under a persistent, stable identifier that is not directly linked to a participant's real-world legal identity, enabling consistent reputation and accountability without exposing personal information. Unlike full anonymity — where individual actions cannot be attributed to any consistent actor — pseudonymity preserves linkability across interactions under "
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:privacy
requires:
  - urn:ngm:class:key-pair
  - urn:ngm:class:identifier
enables:
  - urn:ngm:class:reputation-system
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:whistleblowing
  - urn:ngm:class:censorship-resistance
implements:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:verifiable-credential-vc
contrastsWith:
  - urn:ngm:class:anonymity
  - urn:ngm:class:identity-disclosure
  - urn:ngm:class:real-name-policy
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:blockchain
  - urn:ngm:class:tor
  - urn:ngm:class:tor
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:ring-signature
  - urn:ngm:class:hash-function
standardizedBy:
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:gdpr
partOf:
  - urn:ngm:class:privacy
relatedTo:
  - urn:ngm:class:data-minimisation
  - urn:ngm:class:unlinkability
  - urn:ngm:class:deanonymisation
  - urn:ngm:class:identity-management
  - urn:ngm:class:contextual-integrity
---

# Pseudonymity

Pseudonymity is the property of operating under a persistent, stable identifier that is not directly linked to a participant's real-world legal identity, enabling consistent reputation and accountability without exposing personal information. Unlike full anonymity — where individual actions cannot be attributed to any consistent actor — pseudonymity preserves linkability across interactions under the chosen identifier while severing the mapping to biological or legal selfhood. The pseudonymous identifier may be a username, cryptographic public key, or blockchain address; its strength depends on the isolation of contextual signals that could enable de-anonymisation. Pseudonymity is foundational to privacy-preserving communication, decentralised identity systems, and selective-disclosure credential architectures.
