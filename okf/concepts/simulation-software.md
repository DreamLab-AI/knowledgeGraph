---
okf_version: "0.2"
type: Class
title: Simulation Software
resource: urn:ngm:class:simulation-software
domain: spatial-computing
description: Application software that constructs, parameterises, and executes computational models of physical, biological, social, or engineered systems, enabling controlled experimentation and behaviour observation across time steps without manipulating real-world systems. Simulation software encompasses physics engines, agent-based modelling frameworks, discrete-event simulators, and real-time digital twin
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:simulation-engine
  - urn:ngm:class:physics-engine
  - urn:ngm:class:scenario-manager
  - urn:ngm:class:visualisation-pipeline
  - urn:ngm:class:data-logger
requires:
  - urn:ngm:class:computational-model
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:numerical-solver
enables:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:synthetic-data-generation
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:virtual-prototyping
dependsOn:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:rendering-engine
contrastsWith:
  - urn:ngm:class:emulation-software
  - urn:ngm:class:physical-prototyping
bridgesTo:
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:agent-based-modelling
  - urn:ngm:class:finite-element-analysis
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:discrete-event-simulation
  - urn:ngm:class:monte-carlo-methods
supports:
  - urn:ngm:class:autonomous-vehicle-testing
  - urn:ngm:class:climate-modelling
  - urn:ngm:class:xr-training
partOf:
  - urn:ngm:class:digital-engineering-toolchain
relatedTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:model-based-systems-engineering
---

# Simulation Software

Application software that constructs, parameterises, and executes computational models of physical, biological, social, or engineered systems, enabling controlled experimentation and behaviour observation across time steps without manipulating real-world systems. Simulation software encompasses physics engines, agent-based modelling frameworks, discrete-event simulators, and real-time digital twin environments, serving domains ranging from aerospace engineering and molecular biology to urban planning and immersive training. Unlike general-purpose scientific computing, simulation software provides domain-specific abstraction layers, visualisation pipelines, and scenario management tools that allow non-specialists to configure and run experiments at scale. The field intersects spatial computing, machine learning, and high-performance computing as simulations grow to planetary scale and real-time fidelity.
