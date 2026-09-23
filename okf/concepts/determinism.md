---
okf_version: "0.2"
type: Class
title: Determinism
resource: urn:ngm:class:determinism
domain: infrastructure
description: Determinism, in computing and distributed systems, is the property by which a computational process produces identical outputs given identical inputs and initial state, regardless of when, where, or how many times it is executed. Deterministic systems are essential for reproducibility of scientific experiments, predictability of embedded and safety-critical control systems, and correctness of dist
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:consensus-mechanism
contrastsWith:
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:probabilistic-model
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:cyber-physical-systems
relatedTo:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:random-number-generation
---

# Determinism

Determinism, in computing and distributed systems, is the property by which a computational process produces identical outputs given identical inputs and initial state, regardless of when, where, or how many times it is executed. Deterministic systems are essential for reproducibility of scientific experiments, predictability of embedded and safety-critical control systems, and correctness of distributed consensus protocols where all participating nodes must reach the same conclusion from the same inputs. In the context of blockchain and smart contracts, determinism is a hard requirement because non-deterministic execution would cause different nodes to compute different state transitions, breaking consensus.
