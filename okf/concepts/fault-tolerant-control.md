---
okf_version: "0.2"
type: Class
title: Fault-Tolerant Control
resource: urn:ngm:class:fault-tolerant-control
domain: robotics
description: Fault-tolerant control is a control-system design approach that maintains acceptable performance, or degrades gracefully, in the presence of sensor, actuator or component failures. It combines fault detection and isolation with reconfiguration mechanisms, such as switching to redundant actuators or re-tuning controller gains, so that a system continues operating safely rather than failing outright
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:control-algorithm
relatedTo:
  - urn:ngm:class:spacecraft-autonomy
  - urn:ngm:class:fault-detection-isolation-and-recovery
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Fault-Tolerant Control

Fault-tolerant control is a control-system design approach that maintains acceptable performance, or degrades gracefully, in the presence of sensor, actuator or component failures. It combines fault detection and isolation with reconfiguration mechanisms, such as switching to redundant actuators or re-tuning controller gains, so that a system continues operating safely rather than failing outright. It is widely applied in autonomous robots, aircraft and industrial process control where uninterrupted operation is safety-critical.
