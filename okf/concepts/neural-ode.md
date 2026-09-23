---
okf_version: "0.2"
type: Class
title: Neural Ode
resource: urn:ngm:class:neural-ode
domain: machine-learning
description: A neural ordinary differential equation (Neural ODE) is a deep learning model that parameterises the continuous-time derivative of a hidden state with a neural network, so the forward pass becomes the solution of an ODE by a numerical integrator. This replaces a discrete stack of layers with a continuous-depth transformation and trains efficiently via the adjoint sensitivity method, giving constan
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:deep-learning
enables:
  - urn:ngm:class:system-identification
dependsOn:
  - urn:ngm:class:backpropagation
implements:
  - urn:ngm:class:neural-network
contrastsWith:
  - urn:ngm:class:residual-network
bridgesTo:
  - urn:ngm:class:system-identification
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:system-identification
partOf:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:residual-network
  - urn:ngm:class:differential-equations
  - urn:ngm:class:dynamical-systems
---

# Neural Ode

A neural ordinary differential equation (Neural ODE) is a deep learning model that parameterises the continuous-time derivative of a hidden state with a neural network, so the forward pass becomes the solution of an ODE by a numerical integrator. This replaces a discrete stack of layers with a continuous-depth transformation and trains efficiently via the adjoint sensitivity method, giving constant memory cost. Neural ODEs are well suited to modelling continuous dynamics, irregularly sampled time series, and continuous normalising flows.
