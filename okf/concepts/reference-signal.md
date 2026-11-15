---
okf_version: "0.2"
type: Class
title: Reference Signal
resource: urn:ngm:class:reference-signal
domain: robotics
description: A reference signal is the commanded target value, or setpoint trajectory, that a control system attempts to make its output follow over time. The controller computes the error between the reference and the measured output and acts to drive that error to zero. The shape and feasibility of the reference signal directly determine achievable tracking performance.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:control-theory
relatedTo:
  - urn:ngm:class:feedback-loop
  - urn:ngm:class:control-theory
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Reference Signal

A reference signal is the commanded target value, or setpoint trajectory, that a control system attempts to make its output follow over time. The controller computes the error between the reference and the measured output and acts to drive that error to zero. The shape and feasibility of the reference signal directly determine achievable tracking performance.
