---
okf_version: "0.2"
type: Class
title: ROS 2
resource: urn:ngm:class:ros-2
domain: robotics
description: "ROS 2 (Robot Operating System 2) is an open-source robotics middleware framework developed by Open Robotics that provides a standardised publish-subscribe communication layer built on the DDS (Data Distribution Service) standard, along with a comprehensive ecosystem of drivers, libraries, and tools for sensor integration, motion planning, simulation, and hardware abstraction. ROS 2 supersedes ROS "
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:nav2
  - urn:ngm:class:move-it-2
  - urn:ngm:class:ros2-control
requires:
  - urn:ngm:class:quality-of-service
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robot-control
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:multi-robot-systems
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:real-time-control
implements:
  - urn:ngm:class:middleware
  - urn:ngm:class:hardware-abstraction-layer
contrastsWith:
  - urn:ngm:class:ros
bridgesTo:
  - urn:ngm:class:middleware
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:autonomous-vehicle
uses:
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:ros
  - urn:ngm:class:data-distribution-service
  - urn:ngm:class:publish-subscribe-pattern
supports:
  - urn:ngm:class:robot-simulation
  - urn:ngm:class:edge-computing
relatedTo:
  - urn:ngm:class:real-time
  - urn:ngm:class:simulation-software
  - urn:ngm:class:gazebo-simulator
  - urn:ngm:class:dds
---

# ROS 2

ROS 2 (Robot Operating System 2) is an open-source robotics middleware framework developed by Open Robotics that provides a standardised publish-subscribe communication layer built on the DDS (Data Distribution Service) standard, along with a comprehensive ecosystem of drivers, libraries, and tools for sensor integration, motion planning, simulation, and hardware abstraction. ROS 2 supersedes ROS 1 with support for real-time execution, multi-robot systems, production-grade security via DDS-Security, and native Windows and macOS compatibility. It has become the de facto standard software framework for research and increasingly for commercial robotic platforms.
