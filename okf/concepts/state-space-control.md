---
okf_version: "0.2"
type: Class
title: State Space Control
resource: urn:ngm:class:state-space-control
domain: robotics
description: State Space Control is a modern control theory framework that describes dynamic systems as a set of first-order differential equations over an internal state vector, enabling full-state feedback design via techniques such as pole placement, LQR, and model predictive control. Unlike classical frequency-domain methods, state-space representations directly support multi-input multi-output systems, ob
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:feedback-control
enables:
  - urn:ngm:class:multirotor-uav
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:motion-planning
uses:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:optimal-control
partOf:
  - urn:ngm:class:state-space-sequence-models
relatedTo:
  - urn:ngm:class:pid-control
  - urn:ngm:class:control-theory
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:control-system
---

# State Space Control

State Space Control is a modern control theory framework that describes dynamic systems as a set of first-order differential equations over an internal state vector, enabling full-state feedback design via techniques such as pole placement, LQR, and model predictive control. Unlike classical frequency-domain methods, state-space representations directly support multi-input multi-output systems, observer design, and optimal control synthesis, making them foundational for robotic and aerospace applications.
