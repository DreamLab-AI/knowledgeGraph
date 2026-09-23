---
okf_version: "0.2"
type: Class
title: Surgical Robot
resource: urn:ngm:class:surgical-robot
domain: robotics
description: "A Surgical Robot is a teleoperated or semi-autonomous robotic system designed to assist surgeons in performing minimally invasive procedures with enhanced precision, dexterity, and haptic feedback. Systems such as the da Vinci platform translate the surgeon's hand movements—filtered for tremor—into sub-millimetre instrument motions within the patient's body, enabling laparoscopic, urological, and "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:service-robot
hasPart:
  - urn:ngm:class:robotic-arm
  - urn:ngm:class:end-effector
requires:
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:control-system
  - urn:ngm:class:computer-vision
  - urn:ngm:class:real-time-computing
enables:
  - urn:ngm:class:minimally-invasive-surgery
dependsOn:
  - urn:ngm:class:human-robot-interaction
contrastsWith:
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:autonomous-robot
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:motion-planning
  - urn:ngm:class:stereo-vision
standardizedBy:
  - urn:ngm:class:iso-8373
partOf:
  - urn:ngm:class:robotics
  - urn:ngm:class:medical-robotics
relatedTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:medical-imaging
---

# Surgical Robot

A Surgical Robot is a teleoperated or semi-autonomous robotic system designed to assist surgeons in performing minimally invasive procedures with enhanced precision, dexterity, and haptic feedback. Systems such as the da Vinci platform translate the surgeon's hand movements—filtered for tremor—into sub-millimetre instrument motions within the patient's body, enabling laparoscopic, urological, and cardiac procedures through small incisions.
