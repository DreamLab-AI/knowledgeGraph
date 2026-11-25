---
okf_version: "0.2"
type: Class
title: Feedforward Compensation
resource: urn:ngm:class:feedforward-compensation
domain: robotics
description: Feedforward compensation is a control technique that uses a model of the system or known disturbances to compute corrective control action in advance, rather than waiting for an error to appear at the output. By anticipating required effort, for example to overcome inertia, friction, or measurable load disturbances, it improves tracking and disturbance rejection beyond what feedback alone provides
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:control-system
relatedTo:
  - urn:ngm:class:velocity-control
  - urn:ngm:class:position-control
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Feedforward Compensation

Feedforward compensation is a control technique that uses a model of the system or known disturbances to compute corrective control action in advance, rather than waiting for an error to appear at the output. By anticipating required effort, for example to overcome inertia, friction, or measurable load disturbances, it improves tracking and disturbance rejection beyond what feedback alone provides. It is typically combined with feedback control to handle modelling errors and unmeasured disturbances.
