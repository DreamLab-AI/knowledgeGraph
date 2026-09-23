---
okf_version: "0.2"
type: Class
title: Scientific Computing
resource: urn:ngm:class:scientific-computing
domain: infrastructure
description: Scientific computing is the discipline concerned with the development and application of computational methods and software to solve mathematical and scientific problems that are analytically intractable or whose scale demands automation. It encompasses numerical analysis, algorithm design, software engineering for high-performance systems, and the management of large-scale simulation workflows. K
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:high-performance-computing
hasPart:
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:linear-algebra
requires:
  - urn:ngm:class:computational-resources
  - urn:ngm:class:distributed-computing
enables:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:fluid-simulation
  - urn:ngm:class:molecular-dynamics
  - urn:ngm:class:climate-modelling
  - urn:ngm:class:finite-element-analysis
dependsOn:
  - urn:ngm:class:simulation
  - urn:ngm:class:high-performance-computing
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:cuda
  - urn:ngm:class:simulation-engine
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:mpi
  - urn:ngm:class:openmp
relatedTo:
  - urn:ngm:class:data-science
---

# Scientific Computing

Scientific computing is the discipline concerned with the development and application of computational methods and software to solve mathematical and scientific problems that are analytically intractable or whose scale demands automation. It encompasses numerical analysis, algorithm design, software engineering for high-performance systems, and the management of large-scale simulation workflows. Key application domains include climate modelling, computational fluid dynamics, molecular dynamics, finite element analysis, and astronomical simulation. Scientific computing increasingly overlaps with machine learning as data-driven models augment or replace first-principles simulations.
