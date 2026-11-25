---
okf_version: "0.2"
type: Class
title: Cylindrical Robot
resource: urn:ngm:class:cylindrical-robot
domain: robotics
description: Cylindrical robot employs one rotary joint (azimuth) and two prismatic joints (radial and vertical) that produce a cylindrical workspace, enabling efficient reach over rectangular work envelopes.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:coordinate-robots
  - urn:ngm:class:fixed-base-manipulator
hasPart:
  - urn:ngm:class:azimuth-drive
  - urn:ngm:class:radial-actuator
  - urn:ngm:class:vertical-actuator
  - urn:ngm:class:end-effector-mount
requires:
  - urn:ngm:class:actuators
  - urn:ngm:class:rotary-joint
  - urn:ngm:class:actuators
  - urn:ngm:class:base-support
enables:
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:palletising
  - urn:ngm:class:component-assembly
  - urn:ngm:class:depalletising
bridgesTo:
  - urn:ngm:class:spatial-computing-paradigm
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Cylindrical Robot

Cylindrical robot employs one rotary joint (azimuth) and two prismatic joints (radial and vertical) that produce a cylindrical workspace, enabling efficient reach over rectangular work envelopes.
