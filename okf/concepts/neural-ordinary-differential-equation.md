---
okf_version: "0.2"
type: Class
title: Neural Ordinary Differential Equation
resource: urn:ngm:class:neural-ordinary-differential-equation
domain: machine-learning
description: A neural ordinary differential equation (Neural ODE) is a class of deep learning model that parameterises the derivative of a hidden state with a neural network and obtains outputs by numerically integrating this learned dynamics. Rather than stacking a fixed number of discrete layers, it treats the transformation of representations as a continuous trajectory governed by an ODE, with depth replace
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:neural-network
requires:
  - urn:ngm:class:numerical-integration
  - urn:ngm:class:gradient-descent
enables:
  - urn:ngm:class:dynamical-systems
  - urn:ngm:class:simulation
dependsOn:
  - urn:ngm:class:ordinary-differential-equation
implements:
  - urn:ngm:class:ordinary-differential-equation
contrastsWith:
  - urn:ngm:class:residual-network
  - urn:ngm:class:stochastic-differential-equation
bridgesTo:
  - urn:ngm:class:ordinary-differential-equation
  - urn:ngm:class:scientific-computing
uses:
  - urn:ngm:class:ordinary-differential-equation
  - urn:ngm:class:numerical-integration
  - urn:ngm:class:backpropagation
supports:
  - urn:ngm:class:scientific-computing
  - urn:ngm:class:optimisation
partOf:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:residual-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:dynamical-systems
---

# Neural Ordinary Differential Equation

A neural ordinary differential equation (Neural ODE) is a class of deep learning model that parameterises the derivative of a hidden state with a neural network and obtains outputs by numerically integrating this learned dynamics. Rather than stacking a fixed number of discrete layers, it treats the transformation of representations as a continuous trajectory governed by an ODE, with depth replaced by integration time. This continuous-depth formulation enables memory-efficient training via the adjoint method and natural modelling of time-series and continuous dynamics.
