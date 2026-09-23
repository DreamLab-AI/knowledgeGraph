---
okf_version: "0.2"
type: Class
title: Markov Chain
resource: urn:ngm:class:markov-chain
domain: machine-learning
description: A stochastic process in which the probability of each future state depends only on the current state and not on the sequence of preceding states (the Markov property), enabling tractable analysis of steady-state distributions, mixing times, and long-run behaviour.
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:stochastic-process
hasPart:
  - urn:ngm:class:state-space
requires:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:linear-algebra
enables:
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:hidden-markov-model
  - urn:ngm:class:pagerank
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:dynamical-systems-theory
uses:
  - urn:ngm:class:random-walk
  - urn:ngm:class:ergodicity
relatedTo:
  - urn:ngm:class:dynamical-systems-theory
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:graph-theory
---

# Markov Chain

A stochastic process in which the probability of each future state depends only on the current state and not on the sequence of preceding states (the Markov property), enabling tractable analysis of steady-state distributions, mixing times, and long-run behaviour.
