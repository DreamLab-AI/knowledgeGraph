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
---

# Communication Layer

The Communication Layer is the stratum that governs the exchange of messages between components or participants. It sits above the Transport Layer that delivers bytes and below the coordination and application strata that rely on conversation. It contains messaging patterns, encoding, addressing, and delivery semantics.
