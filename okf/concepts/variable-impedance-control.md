---
okf_version: "0.2"
type: Class
title: Variable Impedance Control
resource: urn:ngm:class:variable-impedance-control
domain: robotics
description: Variable Impedance Control is a robot control strategy that modulates stiffness, damping, and inertia parameters online during task execution, adapting mechanical impedance in response to sensed interaction forces, task phase, or environmental uncertainty rather than maintaining fixed impedance. This contrasts with conventional impedance control, which prescribes constant mechanical properties, by
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:impedance-control
requires:
  - urn:ngm:class:sensor
  - urn:ngm:class:torque
  - urn:ngm:class:force-control
enables:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:safety
  - urn:ngm:class:collaborative-systems-modality-robot
uses:
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:reinforcement-learning
relatedTo:
  - urn:ngm:class:control-theory
  - urn:ngm:class:motion-planning
  - urn:ngm:class:lower-limb-exoskeleton
  - urn:ngm:class:embodied-ai
---

# Variable Impedance Control

Variable Impedance Control is a robot control strategy that modulates stiffness, damping, and inertia parameters online during task execution, adapting mechanical impedance in response to sensed interaction forces, task phase, or environmental uncertainty rather than maintaining fixed impedance. This contrasts with conventional impedance control, which prescribes constant mechanical properties, by enabling robots to behave compliantly during contact-rich or uncertain phases and rigidly during free-space precision movements. Key implementations include learning-based approaches that infer optimal impedance trajectories from demonstrations, model predictive formulations that optimise impedance over a receding horizon, and biomimetic strategies that replicate the variable stiffness observed in human neuromuscular systems to achieve safe, dexterous physical interaction.
