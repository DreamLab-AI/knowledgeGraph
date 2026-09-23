---
okf_version: "0.2"
type: Class
title: rb 0067 force torque sensor
resource: urn:ngm:class:rb-0067-force-torque-sensor
domain: robotics
description: "A force-torque sensor (FT sensor) is a transducer mounted at a robot's wrist or tool centre point that simultaneously measures all six components of mechanical load: three orthogonal forces (Fx, Fy, Fz) and three orthogonal torques (Tx, Ty, Tz). These measurements enable the robot controller to monitor contact forces in real time, supporting force-controlled assembly, surface-following tasks, huma"
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-perception
enables:
  - urn:ngm:class:rb-0053-force-control
  - urn:ngm:class:rb-0056-impedance-control
  - urn:ngm:class:rb-0057-admittance-control
bridgesTo:
  - urn:ngm:class:force-torque-sensor
supports:
  - urn:ngm:class:cobot-safety-levels
  - urn:ngm:class:rb-0066-robot-sensor
relatedTo:
  - urn:ngm:class:rb-0070-tactile-sensing
  - urn:ngm:class:rb-0094-power-and-force-limiting
  - urn:ngm:class:haptic-feedback
---

# rb 0067 force torque sensor

A force-torque sensor (FT sensor) is a transducer mounted at a robot's wrist or tool centre point that simultaneously measures all six components of mechanical load: three orthogonal forces (Fx, Fy, Fz) and three orthogonal torques (Tx, Ty, Tz). These measurements enable the robot controller to monitor contact forces in real time, supporting force-controlled assembly, surface-following tasks, human-robot contact detection, and safety-critical power-and-force limiting under ISO/TS 15066. FT sensors are the primary feedback device for impedance and admittance control strategies.
