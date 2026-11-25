---
okf_version: "0.2"
type: Class
title: Sampling Based Planning
resource: urn:ngm:class:sampling-based-planning
domain: robotics
description: Sampling-based planning is a family of motion-planning methods that find feasible paths by randomly sampling the configuration space and connecting collision-free samples into a graph or tree, rather than constructing an explicit representation of the free space. By trading completeness for probabilistic completeness, these methods scale to the high-dimensional spaces typical of articulated robots
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:motion-planning
hasPart:
  - urn:ngm:class:rapidly-exploring-random-tree
requires:
  - urn:ngm:class:collision-detection
enables:
  - urn:ngm:class:autonomous-navigation
implements:
  - urn:ngm:class:path-planning
  - urn:ngm:class:motion-planning
contrastsWith:
  - urn:ngm:class:path-planning
uses:
  - urn:ngm:class:configuration-space
  - urn:ngm:class:collision-detection
supports:
  - urn:ngm:class:motion-planning
partOf:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:path-planning
  - urn:ngm:class:robot-operating-system
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Sampling Based Planning

Sampling-based planning is a family of motion-planning methods that find feasible paths by randomly sampling the configuration space and connecting collision-free samples into a graph or tree, rather than constructing an explicit representation of the free space. By trading completeness for probabilistic completeness, these methods scale to the high-dimensional spaces typical of articulated robots. Representative algorithms include the Probabilistic Roadmap and the Rapidly Exploring Random Tree.
