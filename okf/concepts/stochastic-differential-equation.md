---
okf_version: "0.2"
type: Class
title: Stochastic Differential Equation
resource: urn:ngm:class:stochastic-differential-equation
domain: machine-learning
description: A stochastic differential equation (SDE) is a differential equation in which one or more terms incorporate a stochastic process, typically Brownian motion or white noise, making the solution itself a stochastic process. SDEs generalise ordinary differential equations by including a diffusion term driven by a Wiener process, and their solutions are interpreted via Ito or Stratonovich calculus. SDEs
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:differential-equations
hasPart:
  - urn:ngm:class:drift-coefficient
  - urn:ngm:class:diffusion-coefficient
requires:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:it-calculus
  - urn:ngm:class:wiener-process
  - urn:ngm:class:measure-theory
enables:
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:score-based-generative-model
  - urn:ngm:class:langevin-dynamics
dependsOn:
  - urn:ngm:class:brownian-motion
  - urn:ngm:class:fokker-planck-equation
implements:
  - urn:ngm:class:euler-maruyama-method
  - urn:ngm:class:milstein-method
contrastsWith:
  - urn:ngm:class:ordinary-differential-equation
bridgesTo:
  - urn:ngm:class:black-scholes-model
  - urn:ngm:class:neural-ordinary-differential-equation
uses:
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:stratonovich-calculus
partOf:
  - urn:ngm:class:stochastic-processes
relatedTo:
  - urn:ngm:class:dynamical-systems
  - urn:ngm:class:markov-processes
  - urn:ngm:class:optimal-control
---

# Stochastic Differential Equation

A stochastic differential equation (SDE) is a differential equation in which one or more terms incorporate a stochastic process, typically Brownian motion or white noise, making the solution itself a stochastic process. SDEs generalise ordinary differential equations by including a diffusion term driven by a Wiener process, and their solutions are interpreted via Ito or Stratonovich calculus. SDEs are foundational in financial mathematics, physics, biology, and machine learning — particularly in score-based generative modelling and diffusion models.
