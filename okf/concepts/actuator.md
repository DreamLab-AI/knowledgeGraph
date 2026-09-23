---
okf_version: "0.2"
type: Class
title: Actuator
resource: urn:ngm:class:actuator
domain: robotics
description: "An actuator is a transducer that converts a stored or supplied energy form — electrical, hydraulic, pneumatic, or thermochemical — into controlled mechanical motion or force, functioning as the output effector in any closed-loop control chain. Actuators execute commands issued by a controller by producing joint rotations, linear displacements, gripping forces, or compliant deformations, and their "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:servo-motor
  - urn:ngm:class:hydraulic-actuator
  - urn:ngm:class:pneumatic-actuator
  - urn:ngm:class:series-elastic-actuator
  - urn:ngm:class:electric-linear-actuator
  - urn:ngm:class:electric-linear-actuator
requires:
  - urn:ngm:class:control-system
  - urn:ngm:class:feedback-control
  - urn:ngm:class:power-electronics
  - urn:ngm:class:sensor
enables:
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:teleoperation
  - urn:ngm:class:motion-planning
dependsOn:
  - urn:ngm:class:encoder
  - urn:ngm:class:pid-controller
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:embedded-system
contrastsWith:
  - urn:ngm:class:passive-mechanism
  - urn:ngm:class:transducer
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:internet-of-things
partOf:
  - urn:ngm:class:robot
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:mechatronic-system
  - urn:ngm:class:cyber-physical-systems
relatedTo:
  - urn:ngm:class:torque-control
  - urn:ngm:class:impedance-control
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:industrial-automation
---

# Actuator

An actuator is a transducer that converts a stored or supplied energy form — electrical, hydraulic, pneumatic, or thermochemical — into controlled mechanical motion or force, functioning as the output effector in any closed-loop control chain. Actuators execute commands issued by a controller by producing joint rotations, linear displacements, gripping forces, or compliant deformations, and their dynamic properties (torque density, bandwidth, backdrivability, stiffness) fundamentally bound a system's achievable speed, precision, payload capacity, and intrinsic safety during physical interaction. The choice of actuation technology cascades through every level of system design, from mechanical linkage geometry and energy storage requirements to real-time control law selection and safety-rated force limitation.
