---
okf_version: "0.2"
type: Class
title: Human Pose SLAM Capture System
resource: urn:ngm:class:human-pose-slam-capture-system
domain: spatial-computing
description: A Human Pose SLAM Capture System is an integrated sensing and computation pipeline that simultaneously localises a device within an unknown environment (SLAM) while continuously tracking the full-body skeletal pose of one or more human occupants in real time. It fuses data from depth cameras, inertial measurement units, and RGB imagery through probabilistic state estimation — typically particle fi
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:simultaneous-localisation-and-mapping
hasPart:
  - urn:ngm:class:3-d-scene-reconstruction
  - urn:ngm:class:loop-closure-detection
  - urn:ngm:class:skeletal-tracking
  - urn:ngm:class:3-d-scene-reconstruction
requires:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:spatial-mapping
  - urn:ngm:class:motion-capture
  - urn:ngm:class:avatar-animation
  - urn:ngm:class:extended-reality
  - urn:ngm:class:human-robot-interaction
dependsOn:
  - urn:ngm:class:neural-network-inference
  - urn:ngm:class:point-cloud-processing
contrastsWith:
  - urn:ngm:class:marker-based-motion-capture
  - urn:ngm:class:lidar-slam
bridgesTo:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:metaverse-presence
uses:
  - urn:ngm:class:slam
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:rgb-d-camera
  - urn:ngm:class:factor-graph-optimisation
relatedTo:
  - urn:ngm:class:spatial-anchoring
  - urn:ngm:class:digital-twin
  - urn:ngm:class:body-area-network
---

# Human Pose SLAM Capture System

A Human Pose SLAM Capture System is an integrated sensing and computation pipeline that simultaneously localises a device within an unknown environment (SLAM) while continuously tracking the full-body skeletal pose of one or more human occupants in real time. It fuses data from depth cameras, inertial measurement units, and RGB imagery through probabilistic state estimation — typically particle filters or factor-graph optimisers — to produce a joint world model of both the static scene geometry and dynamic human kinematics. The output drives applications including markerless motion capture, avatar animation in extended reality, safety-aware robot navigation around people, and persistent spatial AI anchoring. The discipline sits at the intersection of computer vision, human-computer interaction, and spatial computing, with maturing industrial deployments in XR headsets, telepresence rigs, and autonomous vehicle pedestrian tracking.
