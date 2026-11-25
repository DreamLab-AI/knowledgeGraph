---
okf_version: "0.2"
type: Class
title: Separation of Concerns
resource: urn:ngm:class:separation-of-concerns
domain: infrastructure
description: "A foundational design principle holding that a system should be decomposed so that each part addresses a single, distinct concern — one aspect of functionality or one axis of decision-making — with minimal overlap between parts. Articulated by Dijkstra in 1974, it underlies modularity, layering, encapsulation, and interface design: by isolating concerns behind boundaries, changes to one concern ca"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:software-architecture
enables:
  - urn:ngm:class:interoperability
relatedTo:
  - urn:ngm:class:component
  - urn:ngm:class:osi-model
  - urn:ngm:class:hardware-abstraction-layer
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Separation of Concerns

A foundational design principle holding that a system should be decomposed so that each part addresses a single, distinct concern — one aspect of functionality or one axis of decision-making — with minimal overlap between parts. Articulated by Dijkstra in 1974, it underlies modularity, layering, encapsulation, and interface design: by isolating concerns behind boundaries, changes to one concern can be made, understood, tested, and reused without cascading through the rest of the system.
