---
okf_version: "0.2"
type: Class
title: Current Sensor
resource: urn:ngm:class:current-sensor
domain: robotics
description: Current Sensor - An electrical measurement device (Hall effect, fluxgate, or shunt-based) that detects current flow in motor circuits and power systems, enabling Motor Torque Estimation, Fault Detection, and Energy Monitoring in autonomous robots.
maturity: draft
quality: 0.52
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:robotics
  - urn:ngm:class:sensor
requires:
  - urn:ngm:class:analogue-to-digital-conversion
  - urn:ngm:class:signal-conditioning
enables:
  - urn:ngm:class:monitoring
  - urn:ngm:class:predictive-maintenance
  - urn:ngm:class:overload-protection
  - urn:ngm:class:monitoring
bridgesTo:
  - urn:ngm:class:sensor
  - urn:ngm:class:computer-vision
partOf:
  - urn:ngm:class:motor-control-system
  - urn:ngm:class:power-management
---

# Current Sensor

Current Sensor - An electrical measurement device (Hall effect, fluxgate, or shunt-based) that detects current flow in motor circuits and power systems, enabling Motor Torque Estimation, Fault Detection, and Energy Monitoring in autonomous robots.
