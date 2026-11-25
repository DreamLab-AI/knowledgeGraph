---
okf_version: "0.2"
type: Class
title: Navigation System
resource: urn:ngm:class:navigation-system
domain: robotics
description: An integrated set of hardware and software components that enables a robot or autonomous agent to determine its position, plan collision-free paths, and execute motion towards a goal. Navigation systems typically combine localisation, mapping, path planning, and obstacle avoidance modules, often relying on sensor fusion from LiDAR, cameras, and IMUs.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-navigation-and-planning
hasPart:
  - urn:ngm:class:path-planning
  - urn:ngm:class:localisation
  - urn:ngm:class:obstacle-avoidance
requires:
  - urn:ngm:class:slam
  - urn:ngm:class:sensor
enables:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:mobile-robot
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:motion-planning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Navigation System

An integrated set of hardware and software components that enables a robot or autonomous agent to determine its position, plan collision-free paths, and execute motion towards a goal. Navigation systems typically combine localisation, mapping, path planning, and obstacle avoidance modules, often relying on sensor fusion from LiDAR, cameras, and IMUs.
