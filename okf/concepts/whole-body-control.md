---
okf_version: "0.2"
type: Class
title: Whole Body Control
resource: urn:ngm:class:whole-body-control
domain: robotics
description: "Whole Body Control (WBC) is a control framework for legged and humanoid robots that simultaneously optimises motion tasks, contact forces, and balance constraints across all degrees of freedom by solving a hierarchical quadratic programme or weighted task-space objective at each control cycle. By treating locomotion, manipulation, and postural balance as a unified optimisation problem, WBC avoids "
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
requires:
  - urn:ngm:class:system-identification
  - urn:ngm:class:inverse-kinematics
enables:
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:humanoid-robot
relatedTo:
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:reinforcement-learning
---

# Whole Body Control

Whole Body Control (WBC) is a control framework for legged and humanoid robots that simultaneously optimises motion tasks, contact forces, and balance constraints across all degrees of freedom by solving a hierarchical quadratic programme or weighted task-space objective at each control cycle. By treating locomotion, manipulation, and postural balance as a unified optimisation problem, WBC avoids the sub-optimality of treating these objectives separately. It typically relies on a rigid-body dynamics model and is often combined with model predictive control or reinforcement learning policies for online adaptation to uneven terrain and external disturbances.
