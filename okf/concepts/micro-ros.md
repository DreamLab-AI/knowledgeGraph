---
okf_version: "0.2"
type: Class
title: micro-ROS
resource: urn:ngm:class:micro-ros
domain: robotics
description: micro-ROS is a framework that brings the ROS 2 programming model and communication to resource-constrained microcontrollers, allowing embedded devices to participate as first-class nodes in a ROS graph.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robot-operating-system
requires:
  - urn:ngm:class:embedded-system
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:dds-middleware
  - urn:ngm:class:microcontroller
enables:
  - urn:ngm:class:real-time-control
  - urn:ngm:class:robot-operating-system
implements:
  - urn:ngm:class:ros-2
  - urn:ngm:class:publish-subscribe-pattern
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:robot-operating-system
  - urn:ngm:class:dds-middleware
uses:
  - urn:ngm:class:freertos
supports:
  - urn:ngm:class:robotics
  - urn:ngm:class:edge-computing
partOf:
  - urn:ngm:class:robot-operating-system
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:internet-of-things
---

# micro-ROS

micro-ROS is a framework that brings the ROS 2 programming model and communication to resource-constrained microcontrollers, allowing embedded devices to participate as first-class nodes in a ROS graph.
