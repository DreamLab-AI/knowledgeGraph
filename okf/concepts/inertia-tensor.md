---
okf_version: "0.2"
type: Class
title: Inertia Tensor
resource: urn:ngm:class:inertia-tensor
domain: robotics
description: "The inertia tensor is a 3x3 symmetric matrix that characterises how a rigid body's mass is distributed about a reference point, relating the body's angular velocity to its angular momentum. Its diagonal entries are the moments of inertia about the coordinate axes and its off-diagonal entries are the products of inertia. It is a foundational quantity in rigid-body dynamics, enabling computation of "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:robot-dynamics
requires:
  - urn:ngm:class:rigid-body
enables:
  - urn:ngm:class:dynamics
dependsOn:
  - urn:ngm:class:manipulator
contrastsWith:
  - urn:ngm:class:kinematics
bridgesTo:
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:torque
  - urn:ngm:class:velocity
supports:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:simulation
  - urn:ngm:class:control-theory
partOf:
  - urn:ngm:class:rigid-body-dynamics
relatedTo:
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Inertia Tensor

The inertia tensor is a 3x3 symmetric matrix that characterises how a rigid body's mass is distributed about a reference point, relating the body's angular velocity to its angular momentum. Its diagonal entries are the moments of inertia about the coordinate axes and its off-diagonal entries are the products of inertia. It is a foundational quantity in rigid-body dynamics, enabling computation of rotational acceleration under applied torques.
