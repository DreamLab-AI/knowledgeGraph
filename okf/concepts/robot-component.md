---
okf_version: "0.2"
type: Class
title: Robot Component
resource: urn:ngm:class:robot-component
domain: robotics
description: A Robot Component is any modular element forming part of a robotic system, encompassing hardware modules (motors, sensors, links, joints), electrical components (power supplies, motor drivers, embedded computers), software components (perception modules, planners, controllers), and interface components (communication protocols, connectors, mounting systems). Standardised component interfaces—ISO 9
maturity: emerging
quality: 0.35
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:actuator
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:end-effector
enables:
  - urn:ngm:class:manipulation
uses:
  - urn:ngm:class:control-system
---

# Robot Component

A Robot Component is any modular element forming part of a robotic system, encompassing hardware modules (motors, sensors, links, joints), electrical components (power supplies, motor drivers, embedded computers), software components (perception modules, planners, controllers), and interface components (communication protocols, connectors, mounting systems). Standardised component interfaces—ISO 9409 tool flanges, EtherCAT, ROS 2—enable plug-and-play integration, reducing development time and supporting modular system design, component reuse, and hierarchical decomposition.
