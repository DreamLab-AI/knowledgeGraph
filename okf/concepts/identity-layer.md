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
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:decentralised-identifier
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Identity Layer

The Identity Layer is the cross-cutting stratum that establishes, represents, and verifies the identities of participants and resources. It sits above the Cryptographic Layer, on which its proofs rest, and below access, policy, and governance strata that reason about who is acting. It contains identifiers, credentials, authentication mechanisms, and the bindings between them.
