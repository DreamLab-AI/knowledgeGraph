---
okf_version: "0.2"
type: Class
title: Attitude Control
resource: urn:ngm:class:attitude-control
domain: space-science-and-systems
description: "Attitude control changes or maintains a spacecraft's orientation. A guidance function supplies the desired orientation, attitude determination estimates the current one, and a controller commands actuators to reduce the error. This loop supports payload pointing, communications, thermal management and solar-array illumination while rejecting disturbances such as aerodynamic drag, gravity-gradient "
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:spacecraft-guidance-navigation-and-control
bridgesTo:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:control-theory
relatedTo:
  - urn:ngm:class:spacecraft-guidance-navigation-and-control
  - urn:ngm:class:flight-control-system
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:space-corpus-research/0.1.0","process":"process:space-corpus-research/0.1.0","at":"2026-10-02T08:17:04Z"}
---

# Attitude Control

Attitude control changes or maintains a spacecraft's orientation. A guidance function supplies the desired orientation, attitude determination estimates the current one, and a controller commands actuators to reduce the error. This loop supports payload pointing, communications, thermal management and solar-array illumination while rejecting disturbances such as aerodynamic drag, gravity-gradient torque and solar radiation pressure.[^1][^3]
