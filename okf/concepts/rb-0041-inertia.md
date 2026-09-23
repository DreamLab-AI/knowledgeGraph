---
okf_version: "0.2"
type: Class
title: rb 0041 inertia
resource: urn:ngm:class:rb-0041-inertia
domain: robotics
description: In robotics, inertia refers to the resistance of a robot's links and payload to changes in motion, quantified by the inertia tensor for rotational dynamics and mass for translational dynamics. Accurate inertia modelling is essential for dynamic control, trajectory planning, and compliance with power-and-force-limiting safety requirements, because high inertia directly increases the impact forces d
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:newton-euler-dynamics
dependsOn:
  - urn:ngm:class:rb-0033-payload
supports:
  - urn:ngm:class:rb-0064-computed-torque-control
  - urn:ngm:class:rb-0094-power-and-force-limiting
relatedTo:
  - urn:ngm:class:rb-0022-robot-dynamics
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:rb-0043-torque
  - urn:ngm:class:rb-0045-acceleration
---

# rb 0041 inertia

In robotics, inertia refers to the resistance of a robot's links and payload to changes in motion, quantified by the inertia tensor for rotational dynamics and mass for translational dynamics. Accurate inertia modelling is essential for dynamic control, trajectory planning, and compliance with power-and-force-limiting safety requirements, because high inertia directly increases the impact forces during unintended contact.
