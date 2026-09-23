---
okf_version: "0.2"
type: Class
title: Legged Locomotion
resource: urn:ngm:class:legged-locomotion
domain: robotics
description: Legged locomotion is the study and engineering of motion through articulated limb contacts with the environment, enabling traversal of unstructured, discontinuous, and vertically challenging terrain inaccessible to wheeled or tracked platforms. It requires coordinated management of contact scheduling, ground reaction forces, centre-of-mass dynamics, gait sequencing, and reactive balance control ac
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:robo-navigation-and-planning
hasPart:
  - urn:ngm:class:balance-control
  - urn:ngm:class:gait-planning
  - urn:ngm:class:foothold-selection
  - urn:ngm:class:swing-leg-control
requires:
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:motion-control
  - urn:ngm:class:state-estimation
  - urn:ngm:class:contact-mechanics
  - urn:ngm:class:rigid-body-dynamics
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:search-and-rescue-robotics
  - urn:ngm:class:terrain-traversal
contrastsWith:
  - urn:ngm:class:aerial-robotics
  - urn:ngm:class:wheeled-locomotion
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:robot-simulation
uses:
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:whole-body-control
  - urn:ngm:class:quadratic-programming
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:lidar
relatedTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:sim-to-real-transfer
  - urn:ngm:class:quadruped-robot
  - urn:ngm:class:biomechanics
  - urn:ngm:class:bipedal-robot
  - urn:ngm:class:zero-moment-point
---

# Legged Locomotion

Legged locomotion is the study and engineering of motion through articulated limb contacts with the environment, enabling traversal of unstructured, discontinuous, and vertically challenging terrain inaccessible to wheeled or tracked platforms. It requires coordinated management of contact scheduling, ground reaction forces, centre-of-mass dynamics, gait sequencing, and reactive balance control across walking, running, climbing, jumping, and stair-negotiation tasks. Modern legged locomotion controllers integrate whole-body control (WBC), model predictive control (MPC), and reinforcement learning — frequently trained in simulation with domain randomisation and transferred to hardware — to achieve robust performance on irregular natural and urban terrain. The field draws on classical rigid-body mechanics, optimisation theory, machine learning, and biomechanics to produce systems that rival biological locomotion efficiency and versatility.
