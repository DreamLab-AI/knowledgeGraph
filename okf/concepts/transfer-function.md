---
okf_version: "0.2"
type: Class
title: Transfer Function
resource: urn:ngm:class:transfer-function
domain: infrastructure
description: A transfer function is the Laplace-domain (continuous-time) or Z-domain (discrete-time) ratio of output to input for a linear time-invariant (LTI) system with zero initial conditions, expressed as a ratio of polynomials whose roots yield the poles and zeros that determine the system's frequency response, stability, and transient behaviour. Transfer functions provide a frequency-domain characterisa
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:control-theory
enables:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:optimal-control
contrastsWith:
  - urn:ngm:class:state-estimation
uses:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:digital-signal-processing
relatedTo:
  - urn:ngm:class:control-system
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:bode-plot
---

# Transfer Function

A transfer function is the Laplace-domain (continuous-time) or Z-domain (discrete-time) ratio of output to input for a linear time-invariant (LTI) system with zero initial conditions, expressed as a ratio of polynomials whose roots yield the poles and zeros that determine the system's frequency response, stability, and transient behaviour. Transfer functions provide a frequency-domain characterisation of systems ranging from electronic filters and mechanical actuators to feedback control loops.
