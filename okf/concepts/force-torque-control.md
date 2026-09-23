---
okf_version: "0.2"
type: Class
title: Force Torque Control
resource: urn:ngm:class:force-torque-control
domain: robotics
description: Force-torque control is a robot control strategy that regulates the contact forces and moments a manipulator exerts on its environment, rather than commanding position alone. It uses force-torque sensing, typically at the wrist or in the joints, within a feedback loop so that the robot can maintain a desired contact force or yield compliantly to external loads. This is essential for tasks involvin
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:force-control
hasPart:
  - urn:ngm:class:feedback-control
requires:
  - urn:ngm:class:actuators
enables:
  - urn:ngm:class:robot-manipulation
dependsOn:
  - urn:ngm:class:motion-control
implements:
  - urn:ngm:class:impedance-control
contrastsWith:
  - urn:ngm:class:admittance-control
bridgesTo:
  - urn:ngm:class:haptics
uses:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:end-effector
supports:
  - urn:ngm:class:manipulation
partOf:
  - urn:ngm:class:robot-control
relatedTo:
  - urn:ngm:class:robotic-arm
  - urn:ngm:class:compliance-control
  - urn:ngm:class:impedance-control
---

# Force Torque Control

Force-torque control is a robot control strategy that regulates the contact forces and moments a manipulator exerts on its environment, rather than commanding position alone. It uses force-torque sensing, typically at the wrist or in the joints, within a feedback loop so that the robot can maintain a desired contact force or yield compliantly to external loads. This is essential for tasks involving physical contact, such as assembly, polishing, and safe interaction with people.
