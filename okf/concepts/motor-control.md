---
okf_version: "0.2"
type: Class
title: Motor Control
resource: urn:ngm:class:motor-control
domain: robotics
description: Motor control, in robotics and mechatronics, is the discipline of regulating an electric motor's speed, torque, direction and position so that it produces the mechanical motion a system commands. It relies on power modulation techniques such as pulse-width modulation together with closed-loop feedback from encoders or current sensors to correct deviation from the commanded reference. Motor control
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:robo-actuation-and-control
uses:
  - urn:ngm:class:pulse-width-modulation
---

# Motor Control

Motor control, in robotics and mechatronics, is the discipline of regulating an electric motor's speed, torque, direction and position so that it produces the mechanical motion a system commands. It relies on power modulation techniques such as pulse-width modulation together with closed-loop feedback from encoders or current sensors to correct deviation from the commanded reference. Motor control is implemented in dedicated motor controller hardware but refers more broadly to the algorithms and control loops that translate high-level motion commands into physical actuation.
