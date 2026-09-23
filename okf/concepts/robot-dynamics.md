---
okf_version: "0.2"
type: Class
title: Robot Dynamics
resource: urn:ngm:class:robot-dynamics
domain: robotics
description: Robot Dynamics is the branch of classical and computational mechanics that characterises the forces, torques, inertias, and energy flows governing the motion of robotic mechanisms. It distinguishes between forward dynamics—determining joint accelerations and Cartesian trajectories from applied actuator forces and torques—and inverse dynamics—computing the actuator effort required to produce a pres
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:dynamics
  - urn:ngm:class:newton-euler-dynamics
  - urn:ngm:class:dynamics
  - urn:ngm:class:inverse-dynamics
  - urn:ngm:class:lagrangian-mechanics
  - urn:ngm:class:newton-euler-dynamics
requires:
  - urn:ngm:class:kinematics
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:inertia-tensor
  - urn:ngm:class:differential-equations
  - urn:ngm:class:rigid-body-dynamics
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robot-control
  - urn:ngm:class:trajectory-optimisation
  - urn:ngm:class:robot-simulation
  - urn:ngm:class:whole-body-control
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:denavit-hartenberg-parameters
  - urn:ngm:class:jacobian-matrix
  - urn:ngm:class:spatial-algebra
supports:
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:compliant-actuation
relatedTo:
  - urn:ngm:class:robot-safety
  - urn:ngm:class:state-estimation
  - urn:ngm:class:optimal-control
  - urn:ngm:class:contact-mechanics
---

# Robot Dynamics

Robot Dynamics is the branch of classical and computational mechanics that characterises the forces, torques, inertias, and energy flows governing the motion of robotic mechanisms. It distinguishes between forward dynamics—determining joint accelerations and Cartesian trajectories from applied actuator forces and torques—and inverse dynamics—computing the actuator effort required to produce a prescribed motion trajectory. The discipline provides the theoretical foundation for model-based control laws (such as computed-torque and feedback-linearisation controllers), physics-based simulation, and the design of energy-efficient manipulators and legged robots. Accurate dynamic models are indispensable for high-speed manipulation, safe human-robot collaboration, compliant actuation, and whole-body control of mobile robots.
