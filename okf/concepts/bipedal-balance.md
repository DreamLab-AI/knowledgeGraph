---
okf_version: "0.2"
type: Class
title: Bipedal Balance
resource: urn:ngm:class:bipedal-balance
domain: robotics
description: Bipedal Balance is the set of sensing, computation, and actuation mechanisms that enable a two-legged robot or agent to maintain postural stability during standing, walking, and dynamic manoeuvres. It encompasses whole-body control strategies, inertial sensing, and real-time torque control to keep the centre of mass within a supportable base of support. The field integrates mechanics, control theo
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:legged-locomotion
requires:
  - urn:ngm:class:robot-dynamics
uses:
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:whole-body-control
  - urn:ngm:class:torque-control
  - urn:ngm:class:inverse-kinematics
relatedTo:
  - urn:ngm:class:reinforcement-learning-for-robotics
---

# Bipedal Balance

Bipedal Balance is the set of sensing, computation, and actuation mechanisms that enable a two-legged robot or agent to maintain postural stability during standing, walking, and dynamic manoeuvres. It encompasses whole-body control strategies, inertial sensing, and real-time torque control to keep the centre of mass within a supportable base of support. The field integrates mechanics, control theory, and machine learning to achieve robust locomotion across uneven terrain.
