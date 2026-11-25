---
okf_version: "0.2"
type: Class
title: Agent Layer
resource: urn:ngm:class:agent-layer
domain: ai
description: The Agent Layer is the stratum that hosts autonomous entities capable of perceiving, deciding, and acting toward goals. It sits above control and inference strata that supply its capabilities and below coordination and application strata that direct collectives of agents. It contains agent policies, goal representations, memory, and decision loops.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:inference-layer
  - urn:ngm:class:control-layer
enables:
  - urn:ngm:class:coordination-layer
  - urn:ngm:class:application-layer
bridgesTo:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:reinforcement-learning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Agent Layer

The Agent Layer is the stratum that hosts autonomous entities capable of perceiving, deciding, and acting toward goals. It sits above control and inference strata that supply its capabilities and below coordination and application strata that direct collectives of agents. It contains agent policies, goal representations, memory, and decision loops.
