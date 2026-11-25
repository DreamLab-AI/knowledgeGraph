---
okf_version: "0.2"
type: Class
title: rb 0055 velocity control
resource: urn:ngm:class:rb-0055-velocity-control
domain: robotics
description: Velocity control is a robot control strategy in which joint or Cartesian velocities are the primary commanded quantities, with a feedback controller (typically PID-based) continuously correcting deviations between desired and measured velocities. It is used for smooth trajectory following, compliant interaction with soft contacts, and speed-and-separation monitoring safety functions that require r
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:motion-control
requires:
  - urn:ngm:class:encoder
  - urn:ngm:class:feedback-control
  - urn:ngm:class:pid-controller
enables:
  - urn:ngm:class:rb-0092-protective-stop
  - urn:ngm:class:trajectory-planning
relatedTo:
  - urn:ngm:class:position-control
  - urn:ngm:class:torque-control
  - urn:ngm:class:velocity
  - urn:ngm:class:velocity-control
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# rb 0055 velocity control

Velocity control is a robot control strategy in which joint or Cartesian velocities are the primary commanded quantities, with a feedback controller (typically PID-based) continuously correcting deviations between desired and measured velocities. It is used for smooth trajectory following, compliant interaction with soft contacts, and speed-and-separation monitoring safety functions that require real-time speed capping. Velocity control is distinct from position control — it does not inherently resist positional drift — and from torque control, which acts at the force level.
