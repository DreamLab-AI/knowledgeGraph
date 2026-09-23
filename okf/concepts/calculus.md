---
okf_version: "0.2"
type: Class
title: Calculus
resource: urn:ngm:class:calculus
domain: machine-learning
description: "Calculus is the branch of mathematics concerned with continuous change, comprising differential calculus (rates of change and slopes via derivatives) and integral calculus (accumulation and areas via integrals). In machine learning it provides the foundational machinery for optimisation: gradients computed through differentiation drive parameter updates, while integration underpins probability, ex"
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:mathematical-science
  - urn:ngm:class:mathematics
  - urn:ngm:class:applied-mathematics
  - urn:ngm:class:applied-mathematics
hasPart:
  - urn:ngm:class:differential-calculus
  - urn:ngm:class:integral-calculus
  - urn:ngm:class:multivariable-calculus
  - urn:ngm:class:vector-calculus
  - urn:ngm:class:chain-rule
  - urn:ngm:class:taylor-series
  - urn:ngm:class:jacobian
  - urn:ngm:class:hessian
  - urn:ngm:class:stochastic-calculus
  - urn:ngm:class:variational-calculus
  - urn:ngm:class:functional-analysis
requires:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:real-analysis
  - urn:ngm:class:limits-and-continuity
  - urn:ngm:class:set-theory
enables:
  - urn:ngm:class:optimisation
  - urn:ngm:class:backpropagation
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:variational-inference
  - urn:ngm:class:neural-tangent-kernel
  - urn:ngm:class:natural-gradient
  - urn:ngm:class:diffusion-models
dependsOn:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:real-analysis
  - urn:ngm:class:measure-theory
implements:
  - urn:ngm:class:gradient-based-learning
  - urn:ngm:class:variational-methods
  - urn:ngm:class:sensitivity-analysis
  - urn:ngm:class:differentiable-programming
contrastsWith:
  - urn:ngm:class:discrete-mathematics
  - urn:ngm:class:combinatorics
  - urn:ngm:class:symbolic-computation
  - urn:ngm:class:boolean-logic
uses:
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:computational-graphs
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:probability-theory
  - urn:ngm:class:statistics
  - urn:ngm:class:physics
  - urn:ngm:class:engineering
  - urn:ngm:class:large-language-models
  - urn:ngm:class:reinforcement-learning
standardizedBy:
  - urn:ngm:class:ieee
  - urn:ngm:class:acm
  - urn:ngm:class:siam
relatedTo:
  - urn:ngm:class:statistics
  - urn:ngm:class:information-theory
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:differential-equations
  - urn:ngm:class:measure-theory
  - urn:ngm:class:functional-analysis
  - urn:ngm:class:topology
  - urn:ngm:class:loss-function
  - urn:ngm:class:activation-function
---

# Calculus

Calculus is the branch of mathematics concerned with continuous change, comprising differential calculus (rates of change and slopes via derivatives) and integral calculus (accumulation and areas via integrals). In machine learning it provides the foundational machinery for optimisation: gradients computed through differentiation drive parameter updates, while integration underpins probability, expectation and continuous-time models. It is indispensable for understanding how learning algorithms adjust models to minimise loss.
