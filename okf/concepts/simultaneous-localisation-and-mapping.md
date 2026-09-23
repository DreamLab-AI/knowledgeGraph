---
okf_version: "0.2"
type: Class
title: Simultaneous Localisation and Mapping
resource: urn:ngm:class:simultaneous-localisation-and-mapping
domain: robotics
description: Simultaneous Localisation and Mapping (SLAM) is a computational technique by which a mobile robot or autonomous agent concurrently estimates its own pose and constructs a consistent map of a previously unknown environment from sequential sensor observations, resolving the fundamental circular dependency between localisation (which requires a map) and mapping (which requires a known pose). SLAM alg
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:robo-navigation-and-planning
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:loop-closure-detection
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:loop-closure-detection
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:semantic-mapping
  - urn:ngm:class:autonomous-vehicle
dependsOn:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:non-linear-optimisation
contrastsWith:
  - urn:ngm:class:dead-reckoning
  - urn:ngm:class:gps-navigation
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
  - urn:ngm:class:neural-radiance-field
uses:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:lidar
  - urn:ngm:class:factor-graph
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:point-cloud
relatedTo:
  - urn:ngm:class:localisation
  - urn:ngm:class:odometry
  - urn:ngm:class:occupancy-grid
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:visual-place-recognition
  - urn:ngm:class:visual-place-recognition
---

# Simultaneous Localisation and Mapping

Simultaneous Localisation and Mapping (SLAM) is a computational technique by which a mobile robot or autonomous agent concurrently estimates its own pose and constructs a consistent map of a previously unknown environment from sequential sensor observations, resolving the fundamental circular dependency between localisation (which requires a map) and mapping (which requires a known pose). SLAM algorithms process data from sensors such as LiDAR, stereo cameras, RGB-D cameras, and inertial measurement units using probabilistic and optimisation-based frameworks — including extended Kalman filters, particle filters, and pose-graph optimisation — to maintain joint estimates of agent state and environmental structure. The problem is formulated as Bayesian inference over a high-dimensional joint distribution of robot trajectory and landmark positions, typically approximated through factor graphs. SLAM is foundational to autonomous vehicles, mobile robotics, augmented reality, and any system that must navigate without prior maps or GPS.
