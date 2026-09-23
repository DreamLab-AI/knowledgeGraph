---
okf_version: "0.2"
type: Class
title: PID Control
resource: urn:ngm:class:pid-control
domain: robotics
description: "PID (Proportional–Integral–Derivative) control is a closed-loop feedback control algorithm that computes a corrective output by summing three terms derived from the error signal: a proportional term that scales the instantaneous error, an integral term that accumulates past error to eliminate steady-state offset, and a derivative term that reacts to the rate of change of error to anticipate and da"
maturity: mature
quality: 0.76
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:proportional-control
  - urn:ngm:class:derivative-control
  - urn:ngm:class:integral-control
requires:
  - urn:ngm:class:sensor
  - urn:ngm:class:feedback-loop
  - urn:ngm:class:setpoint
enables:
  - urn:ngm:class:force-control
  - urn:ngm:class:robot-control
  - urn:ngm:class:motion-control
  - urn:ngm:class:temperature-regulation
dependsOn:
  - urn:ngm:class:control-theory
  - urn:ngm:class:stability-analysis
implements:
  - urn:ngm:class:closed-loop-control
contrastsWith:
  - urn:ngm:class:impedance-control
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:sliding-mode-control
  - urn:ngm:class:open-loop-control
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:neural-network
uses:
  - urn:ngm:class:actuator
  - urn:ngm:class:error-signal
  - urn:ngm:class:gain-tuning
relatedTo:
  - urn:ngm:class:cascade-control
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:anti-windup
  - urn:ngm:class:bode-plot
  - urn:ngm:class:ziegler-nichols-method
---

# PID Control

PID (Proportional–Integral–Derivative) control is a closed-loop feedback control algorithm that computes a corrective output by summing three terms derived from the error signal: a proportional term that scales the instantaneous error, an integral term that accumulates past error to eliminate steady-state offset, and a derivative term that reacts to the rate of change of error to anticipate and damp future deviations. The control law u(t) = Kp·e(t) + Ki·∫e(τ)dτ + Kd·(de/dt) is parameterised by three tunable gains and applies universally to any plant where a measurable output can be compared against a desired setpoint. Originating in the 1940s through work by Minorsky, Ziegler, and Nichols, PID remains the dominant feedback controller in industrial automation, robotics, aerospace, and embedded systems due to its conceptual simplicity, zero requirement for an explicit plant model, and extensive supporting theory for stability analysis and gain tuning.
