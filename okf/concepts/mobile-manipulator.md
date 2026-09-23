---
okf_version: "0.2"
type: Class
title: Mobile Manipulator
resource: urn:ngm:class:mobile-manipulator
domain: robotics
description: "A Mobile Manipulator is a robotic system that integrates a mobile base — wheeled, legged, or tracked — with one or more articulated manipulator arms, enabling it to navigate through unstructured environments and perform dexterous manipulation tasks at arbitrary locations. This combination resolves the fundamental trade-off between workspace reach and precision, making mobile manipulators suitable "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:hybrid-robot
hasPart:
  - urn:ngm:class:mobile-robot
  - urn:ngm:class:manipulator-arm
  - urn:ngm:class:end-effector
requires:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:path-planning
  - urn:ngm:class:perception-system
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:manipulation
  - urn:ngm:class:autonomous-navigation
uses:
  - urn:ngm:class:slam
  - urn:ngm:class:robot-control
relatedTo:
  - urn:ngm:class:humanoid-robot
  - urn:ngm:class:wheeled-mobile-robot
  - urn:ngm:class:autonomous-robot
---

# Mobile Manipulator

A Mobile Manipulator is a robotic system that integrates a mobile base — wheeled, legged, or tracked — with one or more articulated manipulator arms, enabling it to navigate through unstructured environments and perform dexterous manipulation tasks at arbitrary locations. This combination resolves the fundamental trade-off between workspace reach and precision, making mobile manipulators suitable for logistics, inspection, surgery assistance, and domestic service applications. Effective operation requires tight coordination between navigation, motion planning, perception, and manipulation subsystems.
