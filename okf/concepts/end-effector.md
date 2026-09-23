---
okf_version: "0.2"
type: Class
title: End Effector
resource: urn:ngm:class:end-effector
domain: robotics
description: End Effector - A task-specific tool or manipulator mounted at the Robot Wrist that physically interacts with the environment (gripper, welder, drill, camera), translating robotic control commands into productive work through mechanical, electrical, or pneumatic actuation.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotics
  - urn:ngm:class:mechanical-component
hasPart:
  - urn:ngm:class:tactile-sensor
requires:
  - urn:ngm:class:control-interface
  - urn:ngm:class:force-feedback
  - urn:ngm:class:mechanical-interface
  - urn:ngm:class:robot-wrist
  - urn:ngm:class:motion-planning
enables:
  - urn:ngm:class:precision-manufacturing
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:human-robot-collaboration
  - urn:ngm:class:material-handling
  - urn:ngm:class:assembly-operations
dependsOn:
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:actuator
contrastsWith:
  - urn:ngm:class:robot-joint
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:supply-chain-automation
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:pneumatic-actuator
  - urn:ngm:class:computer-vision
supports:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:collaborative-systems-modality-robotics
standardizedBy:
  - urn:ngm:class:iso-8373
partOf:
  - urn:ngm:class:robot-arm
  - urn:ngm:class:manipulation-system
relatedTo:
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:rb-0023-degrees-of-freedom
---

# End Effector

End Effector - A task-specific tool or manipulator mounted at the Robot Wrist that physically interacts with the environment (gripper, welder, drill, camera), translating robotic control commands into productive work through mechanical, electrical, or pneumatic actuation.
