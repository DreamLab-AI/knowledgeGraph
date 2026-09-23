---
okf_version: "0.2"
type: Class
title: Feedforward Control
resource: urn:ngm:class:feedforward-control
domain: robotics
description: Feedforward control is a control strategy in which the controller acts on a reference command or a measured disturbance before it affects the output, rather than reacting to output error after the fact. Because it does not rely on output measurement, pure feedforward cannot correct for unmodelled effects and is therefore usually paired with feedback. It is widely used in motion and process control
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:control-system
relatedTo:
  - urn:ngm:class:motion-control
  - urn:ngm:class:velocity-control
---

# Feedforward Control

Feedforward control is a control strategy in which the controller acts on a reference command or a measured disturbance before it affects the output, rather than reacting to output error after the fact. Because it does not rely on output measurement, pure feedforward cannot correct for unmodelled effects and is therefore usually paired with feedback. It is widely used in motion and process control to improve command tracking and pre-empt known disturbances.
