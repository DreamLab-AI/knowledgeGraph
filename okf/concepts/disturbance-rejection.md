---
okf_version: "0.2"
type: Class
title: Disturbance Rejection
resource: urn:ngm:class:disturbance-rejection
domain: robotics
description: Disturbance rejection is the capacity of a control system to maintain desired output behaviour despite unmeasured external disturbances or model uncertainties acting on the plant. It is typically achieved through feedback control, integral action, or disturbance observers that estimate and cancel the disturbance's effect. In robotics it is essential for maintaining stable setpoints and trajectorie
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:feedback-control
---

# Disturbance Rejection

Disturbance rejection is the capacity of a control system to maintain desired output behaviour despite unmeasured external disturbances or model uncertainties acting on the plant. It is typically achieved through feedback control, integral action, or disturbance observers that estimate and cancel the disturbance's effect. In robotics it is essential for maintaining stable setpoints and trajectories when a robot is subject to external forces, friction, or sensor noise.
