---
okf_version: "0.2"
type: Class
title: SLAM
resource: urn:ngm:class:slam
domain: spatial-computing
description: Simultaneous Localization and Mapping (SLAM) is a robotics and computer vision technique enabling devices to build maps of unknown environments whilst simultaneously tracking their own position within those environments, combining localisation and map construction in real-time using probabilistic state estimation and sensor fusion.
maturity: emerging
quality: 0.65
is-a:
  - urn:ngm:class:spatial-mapping
hasPart:
  - urn:ngm:class:localisation
  - urn:ngm:class:occupancy-grid
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:state-estimation
  - urn:ngm:class:loop-closure-detection
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:digital-twin
dependsOn:
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:point-cloud-processing
contrastsWith:
  - urn:ngm:class:gps-navigation
bridgesTo:
  - urn:ngm:class:metaverse
  - urn:ngm:class:virtual-environment
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:lidar
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:kalman-filter
partOf:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:spatial-computing-paradigm
relatedTo:
  - urn:ngm:class:computer-vision
generated: {"by":"human:npub16kv2h3hdalphuyzj8tkycq8cm9n54ymer23558ds80afkc9e7frqwrawzj","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# SLAM

Simultaneous Localization and Mapping (SLAM) is a robotics and computer vision technique enabling devices to build maps of unknown environments whilst simultaneously tracking their own position within those environments, combining localisation and map construction in real-time using probabilistic state estimation and sensor fusion.
