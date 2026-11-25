---
okf_version: "0.2"
type: Class
title: State Observer
resource: urn:ngm:class:state-observer
domain: robotics
description: A state observer is a dynamical system that estimates the internal state of a controlled plant from its measured inputs and outputs when the full state cannot be directly sensed. By running a model of the plant in parallel and correcting it with the measurement error, an observer reconstructs unmeasured variables for use in feedback control. Classical examples include the Luenberger observer for d
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:state-estimation
uses:
  - urn:ngm:class:kalman-filter
supports:
  - urn:ngm:class:control-system
  - urn:ngm:class:optimal-control
relatedTo:
  - urn:ngm:class:control-theory
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# State Observer

A state observer is a dynamical system that estimates the internal state of a controlled plant from its measured inputs and outputs when the full state cannot be directly sensed. By running a model of the plant in parallel and correcting it with the measurement error, an observer reconstructs unmeasured variables for use in feedback control. Classical examples include the Luenberger observer for deterministic systems and the Kalman filter for stochastic systems, making observers essential to state-feedback control of partially observable processes.
