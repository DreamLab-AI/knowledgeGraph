---
okf_version: "0.2"
type: Class
title: Localisation
resource: urn:ngm:class:localisation
domain: robotics
description: "Localisation is the computational process by which a mobile agent—robot, autonomous vehicle, or mixed-reality device—estimates its six-degree-of-freedom pose (position and orientation) within a reference coordinate frame, using sensor observations fused through probabilistic inference algorithms. It encompasses both map-based approaches (matching live sensor data against a prior map) and map-free "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:state-estimation
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:probabilistic-inference
  - urn:ngm:class:coordinate-frame
  - urn:ngm:class:sensor-system
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:path-planning
  - urn:ngm:class:spatial-anchoring
  - urn:ngm:class:augmented-reality
dependsOn:
  - urn:ngm:class:odometry
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:loop-closure-detection
  - urn:ngm:class:probabilistic-robotics
contrastsWith:
  - urn:ngm:class:global-localisation
  - urn:ngm:class:position-control
  - urn:ngm:class:mapping
  - urn:ngm:class:position-control
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
  - urn:ngm:class:indoor-positioning-system
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:point-cloud
  - urn:ngm:class:occupancy-grid
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:bayes-filter
  - urn:ngm:class:motion-model
  - urn:ngm:class:sensor-model
  - urn:ngm:class:monte-carlo-localization
supports:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:mobile-robotics
  - urn:ngm:class:autonomous-vehicle
relatedTo:
  - urn:ngm:class:slam
  - urn:ngm:class:dead-reckoning
  - urn:ngm:class:navigation
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:robot-pose
  - urn:ngm:class:uncertainty
  - urn:ngm:class:navigation
  - urn:ngm:class:map-matching
---

# Localisation

Localisation is the computational process by which a mobile agent—robot, autonomous vehicle, or mixed-reality device—estimates its six-degree-of-freedom pose (position and orientation) within a reference coordinate frame, using sensor observations fused through probabilistic inference algorithms. It encompasses both map-based approaches (matching live sensor data against a prior map) and map-free approaches (dead-reckoning and visual odometry), as well as the joint Simultaneous Localisation and Mapping (SLAM) problem in which the map and pose are estimated concurrently. Accurate localisation is a prerequisite for autonomous navigation, path planning, and real-time spatial anchoring in both physical and virtual environments. The field draws on Bayesian filtering, factor graph optimisation, deep metric learning, and multi-sensor fusion across domains ranging from warehouse automation and self-driving vehicles to extended-reality (XR) headsets.
