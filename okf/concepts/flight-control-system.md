---
okf_version: "0.2"
type: Class
title: Flight Control System
resource: urn:ngm:class:flight-control-system
domain: robotics
description: A flight control system is the set of sensors, actuators, and control-law software that stabilises an aircraft or aerial robot and translates pilot or autopilot commands into control-surface or motor movements. It fuses data from inertial and other sensors to estimate attitude and rate, then computes corrective outputs at high frequency to maintain stable flight. In unmanned aerial robots it typic
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:control-system
---

# Flight Control System

A flight control system is the set of sensors, actuators, and control-law software that stabilises an aircraft or aerial robot and translates pilot or autopilot commands into control-surface or motor movements. It fuses data from inertial and other sensors to estimate attitude and rate, then computes corrective outputs at high frequency to maintain stable flight. In unmanned aerial robots it typically also implements guidance and navigation loops on top of the core stabilisation control.
