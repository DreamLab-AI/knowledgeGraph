---
okf_version: "0.2"
type: Class
title: Gain Tuning
resource: urn:ngm:class:gain-tuning
domain: robotics
description: "Gain tuning is the process of selecting the proportional, integral and derivative gain values of a feedback control loop so that the controlled system responds with the desired speed, stability and overshoot characteristics. Gains are set through analytical methods such as Ziegler-Nichols, model-based optimisation, or empirical trial-and-error adjustment on the physical system. Poorly tuned gains "
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:pid-control
partOf:
  - urn:ngm:class:pid-control
---

# Gain Tuning

Gain tuning is the process of selecting the proportional, integral and derivative gain values of a feedback control loop so that the controlled system responds with the desired speed, stability and overshoot characteristics. Gains are set through analytical methods such as Ziegler-Nichols, model-based optimisation, or empirical trial-and-error adjustment on the physical system. Poorly tuned gains can cause sluggish response, excessive overshoot or instability, making gain tuning a critical step in commissioning any PID-controlled actuator, including derivative-only stages of the loop.
