---
okf_version: "0.2"
type: Class
title: Error Signal
resource: urn:ngm:class:error-signal
domain: robotics
description: An error signal is the quantity in a feedback control system representing the instantaneous difference between the reference setpoint and the actual measured output. It is the driving input to the controller, which acts to reduce it toward zero. The error signal's magnitude, rate of change, and accumulated value are processed by proportional, derivative, and integral control terms respectively.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:control-system
relatedTo:
  - urn:ngm:class:derivative-control
  - urn:ngm:class:feedback-loop
---

# Error Signal

An error signal is the quantity in a feedback control system representing the instantaneous difference between the reference setpoint and the actual measured output. It is the driving input to the controller, which acts to reduce it toward zero. The error signal's magnitude, rate of change, and accumulated value are processed by proportional, derivative, and integral control terms respectively.
