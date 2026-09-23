---
okf_version: "0.2"
type: Class
title: Topological Map
resource: urn:ngm:class:topological-map
domain: robotics
description: Topological Map is a graph-structured spatial abstraction used in Mobile Robot Navigation and Autonomous Navigation, representing environments as discrete nodes (places, waypoints, landmarks) connected by edges (traversable paths, transitions) rather than storing explicit metric coord...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:spatial-representation
  - urn:ngm:class:mobile-robot-navigation
  - urn:ngm:class:graph-database
  - urn:ngm:class:cognitive-map
hasPart:
  - urn:ngm:class:loop-closure-detection
  - urn:ngm:class:visual-place-recognition
  - urn:ngm:class:pose-graph
  - urn:ngm:class:place-node
  - urn:ngm:class:transition-edge
  - urn:ngm:class:visual-place-recognition
  - urn:ngm:class:graph-optimiser
  - urn:ngm:class:semantic-label
requires:
  - urn:ngm:class:graph-representation
  - urn:ngm:class:loop-closure-detection
  - urn:ngm:class:visual-place-recognition
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:odometry
enables:
  - urn:ngm:class:long-range-navigation
  - urn:ngm:class:multi-robot-systems
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:path-planning
  - urn:ngm:class:lifelong-mapping
  - urn:ngm:class:semantic-navigation
dependsOn:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:graph-theory
  - urn:ngm:class:probabilistic-robotics
  - urn:ngm:class:feature-descriptors
  - urn:ngm:class:bayesian-estimation
implements:
  - urn:ngm:class:pose-graph
  - urn:ngm:class:rtab-map
  - urn:ngm:class:visual-place-recognition
  - urn:ngm:class:fab-map
  - urn:ngm:class:spatial-semantic-hierarchy
contrastsWith:
  - urn:ngm:class:occupancy-grid
  - urn:ngm:class:point-cloud-map
  - urn:ngm:class:metric-map
  - urn:ngm:class:dense-3d-reconstruction
  - urn:ngm:class:neural-radiance-fields
uses:
  - urn:ngm:class:bundle-adjustment
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:ransac
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:graph-neural-networks
  - urn:ngm:class:bag-of-words-model
supports:
  - urn:ngm:class:assistive-robotics
  - urn:ngm:class:search-and-rescue-robotics
  - urn:ngm:class:service-robot
  - urn:ngm:class:warehouse-robotics
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:service-robots
standardizedBy:
  - urn:ngm:class:ieee-ras
  - urn:ngm:class:ros-navigation-stack
  - urn:ngm:class:openslam
relatedTo:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:spatial-cognition
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:gaussian-splatting
  - urn:ngm:class:scene-understanding
---

# Topological Map

Topological Map is a graph-structured spatial abstraction used in Mobile Robot Navigation and Autonomous Navigation, representing environments as discrete nodes (places, waypoints, landmarks) connected by edges (traversable paths, transitions) rather than storing explicit metric coord...
