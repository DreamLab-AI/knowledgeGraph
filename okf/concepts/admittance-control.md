---
okf_version: "0.2"
type: Class
title: Admittance Control
resource: urn:ngm:class:admittance-control
domain: robotics
description: Force control strategy where robotic systems respond to external forces by producing proportional motion governed by virtual admittance parameters (mass, damping, stiffness), enabling compliant physical interaction with uncertain or variable environments by regulating position/velocity trajectori...
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:force-control
  - urn:ngm:class:compliance-control
  - urn:ngm:class:robot-control
  - urn:ngm:class:interaction-control
  - urn:ngm:class:motion-control
hasPart:
  - urn:ngm:class:force-sensor
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:position-control
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:admittance-transfer-function
  - urn:ngm:class:position-control
  - urn:ngm:class:virtual-mechanical-system
  - urn:ngm:class:hyperparameter-tuning
requires:
  - urn:ngm:class:dynamic-model
  - urn:ngm:class:kinematic-model
  - urn:ngm:class:real-time-control-loop
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:position-controlled-robot
  - urn:ngm:class:kinematic-model
enables:
  - urn:ngm:class:adaptive-manipulation
  - urn:ngm:class:compliant-motion
  - urn:ngm:class:rb-0094-power-and-force-limiting
  - urn:ngm:class:safe-human-robot-interaction
  - urn:ngm:class:contact-based-assembly
  - urn:ngm:class:rb-0094-power-and-force-limiting
  - urn:ngm:class:delicate-handling
dependsOn:
  - urn:ngm:class:control-theory
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:dynamic-modeling
  - urn:ngm:class:signal-processing
implements:
  - urn:ngm:class:rb-1007-trajectory-generation
  - urn:ngm:class:second-order-mechanical-system
  - urn:ngm:class:virtual-damper-spring-mass
  - urn:ngm:class:force-to-motion-mapping
  - urn:ngm:class:trajectory-generation
bridgesTo:
  - urn:ngm:class:compliance-control
---

# Admittance Control

Force control strategy where robotic systems respond to external forces by producing proportional motion governed by virtual admittance parameters (mass, damping, stiffness), enabling compliant physical interaction with uncertain or variable environments by regulating position/velocity trajectori...
