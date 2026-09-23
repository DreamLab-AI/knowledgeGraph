---
okf_version: "0.2"
type: Class
title: Force Control
resource: urn:ngm:class:force-control
domain: robotics
description: Force Control is the family of robotic control paradigms that regulate the contact force and/or torque exerted by a manipulator, end-effector, joint or whole-body system on its environment rather than (or in addition to) regulating Cartesian or joint position, formalised through a closed-loop rel...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotic-control
  - urn:ngm:class:closed-loop-control
  - urn:ngm:class:interaction-control
  - urn:ngm:class:cyber-physical-control
hasPart:
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:control-law
  - urn:ngm:class:end-effector
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:joint-torque-sensor
  - urn:ngm:class:manipulator-jacobian
  - urn:ngm:class:reference-wrench
  - urn:ngm:class:compliance-framework
requires:
  - urn:ngm:class:anti-windup
  - urn:ngm:class:coordinate-transformation
  - urn:ngm:class:real-time-computation
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:force-measurement
enables:
  - urn:ngm:class:bipedal-balance
  - urn:ngm:class:compliant-manipulation
  - urn:ngm:class:safe-human-robot-interaction
  - urn:ngm:class:peg-in-hole-assembly
  - urn:ngm:class:polishing
  - urn:ngm:class:deburring
  - urn:ngm:class:surgical-suturing
  - urn:ngm:class:tactile-exploration
dependsOn:
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:lagrangian-mechanics
  - urn:ngm:class:newton-euler-recursion
  - urn:ngm:class:optimal-control
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:signal-processing
implements:
  - urn:ngm:class:computed-torque-control
  - urn:ngm:class:admittance-control
  - urn:ngm:class:impedance-control
  - urn:ngm:class:hybrid-position-force-control
  - urn:ngm:class:explicit-force-control
  - urn:ngm:class:implicit-force-control
  - urn:ngm:class:operational-space-control
contrastsWith:
  - urn:ngm:class:pure-position-control
  - urn:ngm:class:velocity-control
  - urn:ngm:class:open-loop-trajectory-execution
  - urn:ngm:class:torque-only-control
uses:
  - urn:ngm:class:differential-dynamic-programming
  - urn:ngm:class:quadratic-programming
  - urn:ngm:class:series-elastic-actuator
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:variable-stiffness-actuator
  - urn:ngm:class:whole-body-control
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:remote-centre-of-compliance
  - urn:ngm:class:whole-body-control
supports:
  - urn:ngm:class:collaborative-systems-modality-robotics
  - urn:ngm:class:rehabilitation-robotics
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:industrial-assembly
  - urn:ngm:class:humanoid-locomotion
  - urn:ngm:class:telerobotics
  - urn:ngm:class:robotic-polishing
standardizedBy:
  - urn:ngm:class:icra
  - urn:ngm:class:ieee-ras
  - urn:ngm:class:iros
  - urn:ngm:class:iso-10218
  - urn:ngm:class:iso-ts-15066
  - urn:ngm:class:rss
  - urn:ngm:class:humanoids-conference
relatedTo:
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:reinforcement-learning-for-robotics
  - urn:ngm:class:tactile-sensing
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:teleoperation
---

# Force Control

Force Control is the family of robotic control paradigms that regulate the contact force and/or torque exerted by a manipulator, end-effector, joint or whole-body system on its environment rather than (or in addition to) regulating Cartesian or joint position, formalised through a closed-loop rel...
