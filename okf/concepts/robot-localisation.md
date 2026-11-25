---
okf_version: "0.2"
type: Class
title: Robot Localisation
resource: urn:ngm:class:robot-localisation
domain: robotics
description: Robot localisation is the problem of estimating a robot's pose, its position and orientation, within a known map from noisy sensor measurements and motion commands. It is typically solved with probabilistic filters that maintain a belief over possible poses and update it as new observations arrive. Accurate localisation is a prerequisite for reliable navigation and planning.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
relatedTo:
  - urn:ngm:class:bayes-filter
  - urn:ngm:class:particle-filter
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Robot Localisation

Robot localisation is the problem of estimating a robot's pose, its position and orientation, within a known map from noisy sensor measurements and motion commands. It is typically solved with probabilistic filters that maintain a belief over possible poses and update it as new observations arrive. Accurate localisation is a prerequisite for reliable navigation and planning.
