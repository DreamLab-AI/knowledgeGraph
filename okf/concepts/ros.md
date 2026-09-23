---
okf_version: "0.2"
type: Class
title: ROS
resource: urn:ngm:class:ros
domain: robotics
description: ROS (Robot Operating System) is an open-source middleware framework providing publish-subscribe communication, build tooling and reusable libraries for constructing robot software from distributed, composable components.
maturity: established
quality: 0.72
requires:
  - urn:ngm:class:dds-middleware
  - urn:ngm:class:middleware
  - urn:ngm:class:operating-system
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:multi-robot-coordination
  - urn:ngm:class:robot-simulation
dependsOn:
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:inter-process-communication
implements:
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:service-oriented-architecture
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:edge-computing
  - urn:ngm:class:micro-ros
uses:
  - urn:ngm:class:gazebo-simulator
  - urn:ngm:class:colcon-build-system
supports:
  - urn:ngm:class:real-time-control
  - urn:ngm:class:robotics
  - urn:ngm:class:micro-ros
partOf:
  - urn:ngm:class:robotics-platform
relatedTo:
  - urn:ngm:class:slam
  - urn:ngm:class:motion-planning
---

# ROS

ROS (Robot Operating System) is an open-source middleware framework providing publish-subscribe communication, build tooling and reusable libraries for constructing robot software from distributed, composable components.
