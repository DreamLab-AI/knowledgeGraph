---
okf_version: "0.2"
type: Class
title: Stability Analysis
resource: urn:ngm:class:stability-analysis
domain: machine-learning
description: Stability analysis is the systematic mathematical investigation of whether a dynamical system — physical, computational, financial, or ecological — will remain bounded, return to equilibrium, or diverge when subjected to perturbations from an operating point. Classical techniques include Lyapunov stability theory, eigenvalue analysis of linearised systems, Bode and Nyquist frequency-domain methods
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:control-theory
enables:
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:robotic-control
  - urn:ngm:class:financial-stability
uses:
  - urn:ngm:class:simulation
  - urn:ngm:class:signal-processing
  - urn:ngm:class:optimisation-algorithm
relatedTo:
  - urn:ngm:class:control-system
  - urn:ngm:class:training-instability
  - urn:ngm:class:robot-dynamics
---

# Stability Analysis

Stability analysis is the systematic mathematical investigation of whether a dynamical system — physical, computational, financial, or ecological — will remain bounded, return to equilibrium, or diverge when subjected to perturbations from an operating point. Classical techniques include Lyapunov stability theory, eigenvalue analysis of linearised systems, Bode and Nyquist frequency-domain methods, and Floquet theory for periodic systems. In AI, stability analysis extends to training dynamics, gradient flow, and the behaviour of neural networks under input distribution shifts.
