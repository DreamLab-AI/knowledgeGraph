---
okf_version: "0.2"
type: Class
title: Robot Actuator
resource: urn:ngm:class:robot-actuator
domain: robotics
description: A robot actuator is an electromechanical, pneumatic, hydraulic, or shape-memory device that converts stored or supplied energy into controlled mechanical motion, forming the effector substrate through which a robotic system exerts forces and displacements on its environment. Actuators are the physical implementation layer between a robot's control system and its mechanical structure, determining t
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:electric-motor
  - urn:ngm:class:hydraulic-cylinder
  - urn:ngm:class:pneumatic-actuator
  - urn:ngm:class:gear-transmission
  - urn:ngm:class:piezoelectric-actuator
requires:
  - urn:ngm:class:robot-controller
  - urn:ngm:class:power-electronics
  - urn:ngm:class:position-sensor
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:force-torque-control
  - urn:ngm:class:compliant-motion
  - urn:ngm:class:robot-locomotion
  - urn:ngm:class:motion-planning
dependsOn:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:motor-driver
implements:
  - urn:ngm:class:series-elastic-actuation
  - urn:ngm:class:direct-drive-actuation
contrastsWith:
  - urn:ngm:class:robot-sensor
  - urn:ngm:class:passive-mechanism
bridgesTo:
  - urn:ngm:class:hardware-component
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:pid-control
  - urn:ngm:class:encoder
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:end-effector
  - urn:ngm:class:end-effector
standardizedBy:
  - urn:ngm:class:iso-9283
  - urn:ngm:class:iec-61800-adjustable-speed-electrical-power-drive-systems
  - urn:ngm:class:iso-9283-manipulating-industrial-robots
partOf:
  - urn:ngm:class:robot-joint
  - urn:ngm:class:manipulator
  - urn:ngm:class:manipulator
relatedTo:
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:exoskeleton
  - urn:ngm:class:collaborative-systems-modality-robot
---

# Robot Actuator

A robot actuator is an electromechanical, pneumatic, hydraulic, or shape-memory device that converts stored or supplied energy into controlled mechanical motion, forming the effector substrate through which a robotic system exerts forces and displacements on its environment. Actuators are the physical implementation layer between a robot's control system and its mechanical structure, determining the speed, force, precision, and compliance characteristics achievable by the overall system. Modern robot actuators range from high-torque servo motors and linear voice-coil drives to soft pneumatic bellows and piezoelectric micro-actuators, each presenting distinct trade-offs in power density, bandwidth, back-drivability, and safety. The selection and design of actuators is a primary determinant of robot morphology, task capability, and energy efficiency across manipulation, locomotion, and human-collaborative applications.
