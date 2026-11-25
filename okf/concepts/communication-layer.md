---
okf_version: "0.2"
type: Class
title: Communication Layer
resource: urn:ngm:class:communication-layer
domain: infrastructure
description: The Communication Layer is the stratum that governs the exchange of messages between components or participants. It sits above the Transport Layer that delivers bytes and below the coordination and application strata that rely on conversation. It contains messaging patterns, encoding, addressing, and delivery semantics.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:transport-layer
enables:
  - urn:ngm:class:coordination-layer
  - urn:ngm:class:integration-layer
bridgesTo:
  - urn:ngm:class:publish-subscribe
  - urn:ngm:class:message-passing
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Communication Layer

The Communication Layer is the stratum that governs the exchange of messages between components or participants. It sits above the Transport Layer that delivers bytes and below the coordination and application strata that rely on conversation. It contains messaging patterns, encoding, addressing, and delivery semantics.
