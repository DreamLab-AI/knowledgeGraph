---
okf_version: "0.2"
type: Class
title: Monte Carlo Localization
resource: urn:ngm:class:monte-carlo-localization
domain: robotics
description: A probabilistic localization algorithm that represents the robot's belief about its position using a set of weighted particles (samples), where each particle represents a hypothesis of the robot's pose. It implements a particle filter to recursively estimate the robot's pose distribution.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:localisation
  - urn:ngm:class:bayes-filter
requires:
  - urn:ngm:class:motion-model
  - urn:ngm:class:sensor-measurements
  - urn:ngm:class:map
enables:
  - urn:ngm:class:localisation
  - urn:ngm:class:localisation
  - urn:ngm:class:kidnapped-robot-problem
contrastsWith:
  - urn:ngm:class:kalman-filter
uses:
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:rb-1008-odometry
  - urn:ngm:class:sensor-fusion
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Monte Carlo Localization

A probabilistic localization algorithm that represents the robot's belief about its position using a set of weighted particles (samples), where each particle represents a hypothesis of the robot's pose. It implements a particle filter to recursively estimate the robot's pose distribution.
