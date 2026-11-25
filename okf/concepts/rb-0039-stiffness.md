---
okf_version: "0.2"
type: Class
title: rb 0039 stiffness
resource: urn:ngm:class:rb-0039-stiffness
domain: robotics
description: Stiffness, in robotics, is the ratio of applied force (or torque) to the resulting displacement (or angular deflection) of a robot link, joint, or end-effector. High stiffness yields precise positioning at the cost of storing large elastic energy that can be hazardous in contact; low stiffness (compliance) absorbs impact and is preferred in human-robot collaboration. Variable-stiffness actuation a
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
enables:
  - urn:ngm:class:force-control
  - urn:ngm:class:soft-robotics
contrastsWith:
  - urn:ngm:class:rb-0027-robot-link
relatedTo:
  - urn:ngm:class:impedance-control
  - urn:ngm:class:compliance-control
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:inertia
  - urn:ngm:class:rigid-body-dynamics
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# rb 0039 stiffness

Stiffness, in robotics, is the ratio of applied force (or torque) to the resulting displacement (or angular deflection) of a robot link, joint, or end-effector. High stiffness yields precise positioning at the cost of storing large elastic energy that can be hazardous in contact; low stiffness (compliance) absorbs impact and is preferred in human-robot collaboration. Variable-stiffness actuation and impedance control allow robots to modulate stiffness dynamically, trading accuracy against safety depending on task context.
