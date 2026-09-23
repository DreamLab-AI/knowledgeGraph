---
okf_version: "0.2"
type: Class
title: Newton-Euler Dynamics
resource: urn:ngm:class:newton-euler-dynamics
domain: robotics
description: Recursive formulation of rigid-body mechanics that applies Newton's second law (F=ma) and Euler's rotation equation (τ=Iα) to each link of a robot chain in outward and inward passes, computing joint torques and reaction forces for dynamics simulation, control, and real-time motion planning.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robot-dynamics
enables:
  - urn:ngm:class:control-system
  - urn:ngm:class:embodied-ai-simulation
uses:
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:physics-simulation
partOf:
  - urn:ngm:class:robot-dynamics
relatedTo:
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:robot-joint
  - urn:ngm:class:inertia
---

# Newton-Euler Dynamics

Recursive formulation of rigid-body mechanics that applies Newton's second law (F=ma) and Euler's rotation equation (τ=Iα) to each link of a robot chain in outward and inward passes, computing joint torques and reaction forces for dynamics simulation, control, and real-time motion planning.
