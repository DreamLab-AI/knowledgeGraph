---
okf_version: "0.2"
type: Class
title: Robot Kinematics
resource: urn:ngm:class:robot-kinematics
domain: robotics
description: Robot Kinematics is the mathematical study of the geometry of robot motion—comprising forward kinematics (mapping joint parameters to end-effector pose) and inverse kinematics (computing joint configurations that achieve a desired pose)—without regard to the forces or torques that produce that motion. It is foundational to robot programming, trajectory planning, and the design of manipulation syst
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotics
hasPart:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:denavit-hartenberg-parameters
  - urn:ngm:class:jacobian-matrix
requires:
  - urn:ngm:class:coordinate-transformation
  - urn:ngm:class:rb-0023-degrees-of-freedom
  - urn:ngm:class:coordinate-frame
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:trajectory-planning
  - urn:ngm:class:robot-programming
  - urn:ngm:class:end-effector
contrastsWith:
  - urn:ngm:class:robot-dynamics
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:quaternion-math
standardizedBy:
  - urn:ngm:class:iso-8373
partOf:
  - urn:ngm:class:robotics
  - urn:ngm:class:robot-dynamics
relatedTo:
  - urn:ngm:class:surgical-robot
  - urn:ngm:class:service-robot
  - urn:ngm:class:manipulator
  - urn:ngm:class:humanoid-robot
  - urn:ngm:class:soft-robotics
---

# Robot Kinematics

Robot Kinematics is the mathematical study of the geometry of robot motion—comprising forward kinematics (mapping joint parameters to end-effector pose) and inverse kinematics (computing joint configurations that achieve a desired pose)—without regard to the forces or torques that produce that motion. It is foundational to robot programming, trajectory planning, and the design of manipulation systems.
