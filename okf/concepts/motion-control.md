---
okf_version: "0.2"
type: Class
title: Motion Control
resource: urn:ngm:class:motion-control
domain: robotics
description: MotionControl is the discipline governing the coordinated generation and execution of actuator commands that transform high-level kinematic or task-space specifications into precise, smooth, and dynamically consistent robot motion through the integrated chain of trajectory generation, servo-loop ...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotics
  - urn:ngm:class:control-theory
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:mechatronics
  - urn:ngm:class:embedded-systems
hasPart:
  - urn:ngm:class:ether-cat
  - urn:ngm:class:feedforward-control
  - urn:ngm:class:pid-control
  - urn:ngm:class:servo-drive
  - urn:ngm:class:encoder
  - urn:ngm:class:impedance-control
  - urn:ngm:class:rb-1007-trajectory-generation
  - urn:ngm:class:motion-control
  - urn:ngm:class:cnc
  - urn:ngm:class:plc
requires:
  - urn:ngm:class:dynamic-model
  - urn:ngm:class:kinematic-model
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:kinematic-model
  - urn:ngm:class:encoder-feedback
  - urn:ngm:class:drive-amplifier
  - urn:ngm:class:deterministic-network
enables:
  - urn:ngm:class:cnc-machining
  - urn:ngm:class:collaborative-systems-modality-robotics
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:precision-manufacturing
  - urn:ngm:class:robot-manipulation
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:semiconductor-lithography
dependsOn:
  - urn:ngm:class:classical-control-theory
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:real-time-computing
  - urn:ngm:class:power-electronics
implements:
  - urn:ngm:class:computed-torque-control
  - urn:ngm:class:field-oriented-control
  - urn:ngm:class:pid-control
  - urn:ngm:class:admittance-control
  - urn:ngm:class:impedance-control
  - urn:ngm:class:pid-control
  - urn:ngm:class:friction-compensation
  - urn:ngm:class:time-optimal-trajectory
contrastsWith:
  - urn:ngm:class:force-control
  - urn:ngm:class:compliant-actuation
  - urn:ngm:class:passive-dynamics
  - urn:ngm:class:open-loop-control
  - urn:ngm:class:hydraulic-actuation
bridgesTo:
  - urn:ngm:class:industrial-automation
uses:
  - urn:ngm:class:ether-cat
  - urn:ngm:class:iec-61131-3
  - urn:ngm:class:cubic-splines
  - urn:ngm:class:quintic-splines
  - urn:ngm:class:s-curve-profiles
  - urn:ngm:class:g-code
  - urn:ngm:class:plcopen
  - urn:ngm:class:heidenhain-endat
supports:
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:delta-robot
  - urn:ngm:class:scara-robot
  - urn:ngm:class:manufacturing-robots
  - urn:ngm:class:cnc-machine-tools
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:delta-robots
  - urn:ngm:class:scara-robots
  - urn:ngm:class:gantry-systems
standardizedBy:
  - urn:ngm:class:iec-61131-3
  - urn:ngm:class:iec-61158
  - urn:ngm:class:iec-61800-adjustable-speed-electrical-power-drive-systems
  - urn:ngm:class:ieee-1588-ptp
  - urn:ngm:class:plcopen-motion-control
  - urn:ngm:class:iso-6983
  - urn:ngm:class:iec-61800-adjustable-speed-electrical-power-drive-systems
relatedTo:
  - urn:ngm:class:learning-from-demonstration
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:digital-twin
  - urn:ngm:class:ros
---

# Motion Control

MotionControl is the discipline governing the coordinated generation and execution of actuator commands that transform high-level kinematic or task-space specifications into precise, smooth, and dynamically consistent robot motion through the integrated chain of trajectory generation, servo-loop ...
