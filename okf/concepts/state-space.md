---
okf_version: "0.2"
type: Class
title: State Space
resource: urn:ngm:class:state-space
domain: ai
description: A state space is the mathematical set of all possible configurations (states) of a dynamical system, together with the transition rules that govern how the system evolves from one state to another over time. In control theory it is represented by first-order differential or difference equations relating state variables, inputs, and outputs; in artificial intelligence it denotes the complete set of
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:control-theory
enables:
  - urn:ngm:class:optimal-control
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:system-identification
uses:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:state-estimation
  - urn:ngm:class:hidden-state
supports:
  - urn:ngm:class:state-observer
relatedTo:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:time-series-analysis
---

# State Space

A state space is the mathematical set of all possible configurations (states) of a dynamical system, together with the transition rules that govern how the system evolves from one state to another over time. In control theory it is represented by first-order differential or difference equations relating state variables, inputs, and outputs; in artificial intelligence it denotes the complete set of system configurations that a search or planning algorithm may explore.
