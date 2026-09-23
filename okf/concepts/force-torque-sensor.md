---
okf_version: "0.2"
type: Class
title: Force Torque Sensor
resource: urn:ngm:class:force-torque-sensor
domain: robotics
description: Force-Torque Sensor - A multi-axis transducer mounted on the Robot Wrist that measures three-dimensional forces and torques (6-DoF) exerted during interaction with objects or humans, enabling Force Feedback, Contact Detection, and Compliance Control in precision manipulation.
maturity: draft
quality: 0.7
is-a:
  - urn:ngm:class:sensor
  - urn:ngm:class:robotics
hasPart:
  - urn:ngm:class:strain-gauge
requires:
  - urn:ngm:class:calibration
  - urn:ngm:class:data-processing
  - urn:ngm:class:analog-to-digital-converter
  - urn:ngm:class:signal-amplification
enables:
  - urn:ngm:class:robotic-grasping
  - urn:ngm:class:impedance-control
  - urn:ngm:class:force-feedback
  - urn:ngm:class:compliance-control
  - urn:ngm:class:robotic-grasping
  - urn:ngm:class:precision-assembly
  - urn:ngm:class:contact-detection
dependsOn:
  - urn:ngm:class:robot-wrist
  - urn:ngm:class:real-time-control
  - urn:ngm:class:real-time-control
contrastsWith:
  - urn:ngm:class:tactile-sensor
  - urn:ngm:class:proximity-sensor
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:ether-cat
  - urn:ngm:class:sensor-fusion
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:collaborative-systems-modality-robotics
  - urn:ngm:class:surgical-robotics
standardizedBy:
  - urn:ngm:class:iso-8373
partOf:
  - urn:ngm:class:haptic-feedback-system
  - urn:ngm:class:robotic-arm
  - urn:ngm:class:wrist-assembly
relatedTo:
  - urn:ngm:class:inertial-measurement-unit
---

# Force Torque Sensor

Force-Torque Sensor - A multi-axis transducer mounted on the Robot Wrist that measures three-dimensional forces and torques (6-DoF) exerted during interaction with objects or humans, enabling Force Feedback, Contact Detection, and Compliance Control in precision manipulation.
