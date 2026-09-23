---
okf_version: "0.2"
type: Class
title: Proximity Detection
resource: urn:ngm:class:proximity-detection
domain: infrastructure
description: Proximity Detection is the computational process of determining the spatial distance and relative position between entities—users, objects, or agents—within a virtual or physical environment in real time. In metaverse and robotics contexts it underpins social-distance awareness, collision avoidance, interaction triggering, and context-sensitive content delivery. Implementations range from bounding
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:infra-computing-and-cloud
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:collision-detection
enables:
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:presence-detection
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:point-cloud
relatedTo:
  - urn:ngm:class:social-presence
---

# Proximity Detection

Proximity Detection is the computational process of determining the spatial distance and relative position between entities—users, objects, or agents—within a virtual or physical environment in real time. In metaverse and robotics contexts it underpins social-distance awareness, collision avoidance, interaction triggering, and context-sensitive content delivery. Implementations range from bounding-volume overlap tests and signed-distance fields in 3D engines to sensor-fusion pipelines combining lidar, ultrasound, and camera inputs in robotic systems.
