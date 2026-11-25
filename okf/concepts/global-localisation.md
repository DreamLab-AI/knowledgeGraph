---
okf_version: "0.2"
type: Class
title: Global Localisation
resource: urn:ngm:class:global-localisation
domain: robotics
description: Global localisation is the problem of estimating a robot's pose within a known map without any prior knowledge of its starting position, often called the kidnapped-robot problem. Unlike pose tracking, it must resolve ambiguity across the entire map, typically by maintaining and refining multiple pose hypotheses from sensor observations. It is fundamental to robot navigation, autonomous vehicles, a
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
relatedTo:
  - urn:ngm:class:gps
  - urn:ngm:class:particle-filter
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Global Localisation

Global localisation is the problem of estimating a robot's pose within a known map without any prior knowledge of its starting position, often called the kidnapped-robot problem. Unlike pose tracking, it must resolve ambiguity across the entire map, typically by maintaining and refining multiple pose hypotheses from sensor observations. It is fundamental to robot navigation, autonomous vehicles, and recovery from localisation failures.
