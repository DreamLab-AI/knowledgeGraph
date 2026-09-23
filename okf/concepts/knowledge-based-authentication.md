---
okf_version: "0.2"
type: Class
title: Knowledge Based Authentication
resource: urn:ngm:class:knowledge-based-authentication
domain: security
description: Knowledge-Based Authentication (KBA) verifies identity by challenging a user to supply information presumed known only to them, such as a password, PIN, or answers to security questions. Static KBA uses pre-registered secrets, while dynamic KBA generates questions from third-party records at challenge time. Because the underlying secrets can be guessed, phished, or harvested through social enginee
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:multi-factor-authentication
hasPart:
  - urn:ngm:class:password-authentication
requires:
  - urn:ngm:class:password-authentication
enables:
  - urn:ngm:class:identity-verification
contrastsWith:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:zero-trust-architecture
bridgesTo:
  - urn:ngm:class:multi-factor-authentication
uses:
  - urn:ngm:class:identity-verification
supports:
  - urn:ngm:class:access-control
partOf:
  - urn:ngm:class:security
relatedTo:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:social-engineering
  - urn:ngm:class:access-control
---

# Knowledge Based Authentication

Knowledge-Based Authentication (KBA) verifies identity by challenging a user to supply information presumed known only to them, such as a password, PIN, or answers to security questions. Static KBA uses pre-registered secrets, while dynamic KBA generates questions from third-party records at challenge time. Because the underlying secrets can be guessed, phished, or harvested through social engineering, KBA is increasingly supplemented or replaced by possession- and biometric-based factors.
