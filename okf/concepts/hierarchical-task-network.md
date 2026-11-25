---
okf_version: "0.2"
type: Class
title: Hierarchical Task Network
resource: urn:ngm:class:hierarchical-task-network
domain: artificial-intelligence
description: A hierarchical task network (HTN) is an automated planning formalism in which planning proceeds by recursively decomposing high-level compound tasks into networks of smaller subtasks until only primitive, directly executable actions remain. Decomposition is guided by domain-specific methods that encode expert knowledge about how tasks may be accomplished, together with ordering constraints between
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:automated-planning
hasPart:
  - urn:ngm:class:task-decomposition
  - urn:ngm:class:goal
requires:
  - urn:ngm:class:task-decomposition
  - urn:ngm:class:automated-reasoning
enables:
  - urn:ngm:class:planning
  - urn:ngm:class:decision-making
dependsOn:
  - urn:ngm:class:automated-planning
contrastsWith:
  - urn:ngm:class:reinforcement-learning
bridgesTo:
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:graph-search
  - urn:ngm:class:decision-making
supports:
  - urn:ngm:class:robotics
partOf:
  - urn:ngm:class:automated-planning
relatedTo:
  - urn:ngm:class:planning
  - urn:ngm:class:goal
  - urn:ngm:class:automated-reasoning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Hierarchical Task Network

A hierarchical task network (HTN) is an automated planning formalism in which planning proceeds by recursively decomposing high-level compound tasks into networks of smaller subtasks until only primitive, directly executable actions remain. Decomposition is guided by domain-specific methods that encode expert knowledge about how tasks may be accomplished, together with ordering constraints between subtasks. HTN planning contrasts with classical state-space planning by searching over task decompositions rather than over world states alone, which often yields stronger guidance and greater efficiency in well-structured domains.
