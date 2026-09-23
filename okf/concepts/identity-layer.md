---
okf_version: "0.2"
type: Class
title: Identity Layer
resource: urn:ngm:class:identity-layer
domain: security
description: The Identity Layer is the cross-cutting stratum that establishes, represents, and verifies the identities of participants and resources. It sits above the Cryptographic Layer, on which its proofs rest, and below access, policy, and governance strata that reason about who is acting. It contains identifiers, credentials, authentication mechanisms, and the bindings between them.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:cryptographic-layer
  - urn:ngm:class:identifier-layer
enables:
  - urn:ngm:class:policy-layer
  - urn:ngm:class:custody-layer
bridgesTo:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:did
---

# Identity Layer

The Identity Layer is the cross-cutting stratum that establishes, represents, and verifies the identities of participants and resources. It sits above the Cryptographic Layer, on which its proofs rest, and below access, policy, and governance strata that reason about who is acting. It contains identifiers, credentials, authentication mechanisms, and the bindings between them.
