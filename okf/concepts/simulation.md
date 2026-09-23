---
okf_version: "0.2"
type: Class
title: Simulation
resource: urn:ngm:class:simulation
domain: spatial-computing
description: "Simulation is the computational reproduction of real-world systems, physical phenomena, or abstract processes through mathematical models that evolve over time, enabling experimentation, training, and prediction without risk to personnel or infrastructure. Simulations span a fidelity spectrum from simplified discrete-event models to high-fidelity continuous-physics environments powered by physics "
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:digital-twin
hasPart:
  - urn:ngm:class:physics-engine
  - urn:ngm:class:state-machine
  - urn:ngm:class:sensor-model
requires:
  - urn:ngm:class:computational-model
  - urn:ngm:class:real-time-computing
  - urn:ngm:class:high-performance-computing
enables:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:immersive-experience
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:training-and-simulation
  - urn:ngm:class:scenario-planning
dependsOn:
  - urn:ngm:class:mathematical-modelling
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:data-validation
contrastsWith:
  - urn:ngm:class:physical-prototype
  - urn:ngm:class:emulation
bridgesTo:
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:ai-safety
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:physics-engine
  - urn:ngm:class:render-pipeline
  - urn:ngm:class:procedural-content-generation
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:agent-based-modelling
relatedTo:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:digital-twin
  - urn:ngm:class:augmented-reality
---

# Simulation

Simulation is the computational reproduction of real-world systems, physical phenomena, or abstract processes through mathematical models that evolve over time, enabling experimentation, training, and prediction without risk to personnel or infrastructure. Simulations span a fidelity spectrum from simplified discrete-event models to high-fidelity continuous-physics environments powered by physics engines, rendering pipelines, and stochastic solvers. In spatial computing and metaverse contexts, real-time simulation underpins immersive training, digital twin synchronisation, and AI agent incubation. Simulation outputs are validated against empirical data and uncertainty quantified to ensure transferability of findings to the real world.
