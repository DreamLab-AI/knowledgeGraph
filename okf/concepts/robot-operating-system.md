---
okf_version: "0.2"
type: Class
title: Robot Operating System
resource: urn:ngm:class:robot-operating-system
domain: robotics
description: The Robot Operating System (ROS / ROS 2) is an open-source middleware framework providing a structured communication layer, tool ecosystem, and package repository for robotic software development, enabling modular composition of perception, planning, and actuation subsystems through a publish-sub...
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotics
  - urn:ngm:class:robotic-middleware
  - urn:ngm:class:publish-subscribe-framework
hasPart:
  - urn:ngm:class:colcon-build-system
  - urn:ngm:class:robot-operating-system
  - urn:ngm:class:urdf-robot-model
  - urn:ngm:class:robot-operating-system
  - urn:ngm:class:ros-topic
  - urn:ngm:class:ros-service
  - urn:ngm:class:ros-action
  - urn:ngm:class:ros-package
requires:
  - urn:ngm:class:data-distribution-service
  - urn:ngm:class:python-3
  - urn:ngm:class:cmake-build-system
  - urn:ngm:class:dds-middleware
  - urn:ngm:class:middleware
  - urn:ngm:class:operating-system
enables:
  - urn:ngm:class:robot-simulation
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:hardware-abstraction
  - urn:ngm:class:motion-planning
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:multi-robot-coordination
dependsOn:
  - urn:ngm:class:eprosima-fast-dds
  - urn:ngm:class:cyclonedds
  - urn:ngm:class:python-rclpy
  - urn:ngm:class:c-rclcpp
implements:
  - urn:ngm:class:ros-rep
  - urn:ngm:class:dds-rtps-protocol
  - urn:ngm:class:sros2-security
  - urn:ngm:class:ros-rep
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:service-oriented-architecture
bridgesTo:
  - urn:ngm:class:gazebo-simulator
  - urn:ngm:class:web-assembly
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:edge-computing
  - urn:ngm:class:micro-ros
uses:
  - urn:ngm:class:gazebo-simulator
  - urn:ngm:class:colcon-build-system
partOf:
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:robotic-software-stack
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:robotics-platform
relatedTo:
  - urn:ngm:class:slam
  - urn:ngm:class:motion-planning
---

# Robot Operating System

The Robot Operating System (ROS / ROS 2) is an open-source middleware framework providing a structured communication layer, tool ecosystem, and package repository for robotic software development, enabling modular composition of perception, planning, and actuation subsystems through a publish-sub...
