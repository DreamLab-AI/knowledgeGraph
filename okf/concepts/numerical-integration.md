---
okf_version: "0.2"
type: Class
title: Numerical Integration
resource: urn:ngm:class:numerical-integration
domain: spatial-computing
description: Numerical integration is the family of algorithms that approximate definite integrals and advance differential equations in time when closed-form solutions are unavailable. In physics simulation it denotes the time-stepping schemes (such as explicit and implicit Euler, Verlet, and Runge-Kutta methods) that integrate equations of motion to update positions and velocities each frame. The choice of s
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:physics-simulation
hasPart:
  - urn:ngm:class:rigid-body-dynamics
requires:
  - urn:ngm:class:physics-simulation
enables:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:simulation
contrastsWith:
  - urn:ngm:class:finite-element-analysis
uses:
  - urn:ngm:class:finite-element-analysis
supports:
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:collision-detection
  - urn:ngm:class:real-time-rendering
partOf:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:simulation
relatedTo:
  - urn:ngm:class:finite-element-analysis
  - urn:ngm:class:collision-detection
---

# Numerical Integration

Numerical integration is the family of algorithms that approximate definite integrals and advance differential equations in time when closed-form solutions are unavailable. In physics simulation it denotes the time-stepping schemes (such as explicit and implicit Euler, Verlet, and Runge-Kutta methods) that integrate equations of motion to update positions and velocities each frame. The choice of scheme balances accuracy, numerical stability, and computational cost.
