---
okf_version: "0.2"
type: Class
title: Reactive Planning
resource: urn:ngm:class:reactive-planning
domain: artificial-intelligence
description: An approach to agent control that selects actions directly from the current perceived situation rather than constructing and executing a complete plan in advance, trading long-horizon optimality for immediate responsiveness so that agents can act robustly in dynamic, uncertain, or partially observable environments where deliberative plans would be invalidated before they finish executing.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:automated-planning
implements:
  - urn:ngm:class:subsumption-architecture
contrastsWith:
  - urn:ngm:class:classical-planning
  - urn:ngm:class:task-and-motion-planning
uses:
  - urn:ngm:class:behaviour-tree
relatedTo:
  - urn:ngm:class:real-time-systems
  - urn:ngm:class:motion-planning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Reactive Planning

An approach to agent control that selects actions directly from the current perceived situation rather than constructing and executing a complete plan in advance, trading long-horizon optimality for immediate responsiveness so that agents can act robustly in dynamic, uncertain, or partially observable environments where deliberative plans would be invalidated before they finish executing.
