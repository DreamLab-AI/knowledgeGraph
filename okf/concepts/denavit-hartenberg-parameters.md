---
okf_version: "0.2"
type: Class
title: Denavit-Hartenberg Parameters
resource: urn:ngm:class:denavit-hartenberg-parameters
domain: robotics
description: Denavit-Hartenberg (DH) parameters are a standardised four-parameter convention for describing the relative geometry between consecutive links of a robotic manipulator. Each joint is characterised by link length, link twist, link offset, and joint angle, yielding a homogeneous transformation matrix per joint. Chaining these matrices gives a compact, systematic model of the arm's kinematics.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:control-theory
relatedTo:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:kinematics-model
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Denavit-Hartenberg Parameters

Denavit-Hartenberg (DH) parameters are a standardised four-parameter convention for describing the relative geometry between consecutive links of a robotic manipulator. Each joint is characterised by link length, link twist, link offset, and joint angle, yielding a homogeneous transformation matrix per joint. Chaining these matrices gives a compact, systematic model of the arm's kinematics.
