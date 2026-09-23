---
okf_version: "0.2"
type: Class
title: Semiconductor Fabrication
resource: urn:ngm:class:semiconductor-fabrication
domain: infrastructure
description: "Semiconductor fabrication is the industrial process by which integrated circuits and discrete semiconductor devices are constructed on crystalline silicon or compound semiconductor wafers through iterative cycles of deposition, photolithography, etching, doping, and planarisation. Each process generation, characterised by a technology node (e.g. 7 nm, 3 nm, 2 nm), defines achievable feature sizes "
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:photolithography
  - urn:ngm:class:chemical-vapour-deposition
  - urn:ngm:class:ion-implantation
  - urn:ngm:class:chemical-mechanical-planarisation
  - urn:ngm:class:atomic-layer-deposition
requires:
  - urn:ngm:class:process-control
  - urn:ngm:class:cleanroom
  - urn:ngm:class:silicon-wafer
  - urn:ngm:class:extreme-ultraviolet-lithography
enables:
  - urn:ngm:class:gpu
  - urn:ngm:class:integrated-circuit
  - urn:ngm:class:microprocessor
  - urn:ngm:class:memory-chip
dependsOn:
  - urn:ngm:class:supply-chain
  - urn:ngm:class:energy-consumption
  - urn:ngm:class:rare-earth-materials
contrastsWith:
  - urn:ngm:class:additive-manufacturing
  - urn:ngm:class:printed-circuit-board-assembly
bridgesTo:
  - urn:ngm:class:quantum-computation-paradigm
  - urn:ngm:class:neuromorphic-computing
  - urn:ngm:class:artificial-intelligence-hardware
  - urn:ngm:class:quantum-computation-paradigm
standardizedBy:
  - urn:ngm:class:jedec
  - urn:ngm:class:semi-standards
relatedTo:
  - urn:ngm:class:moore-s-law
  - urn:ngm:class:technology-node
  - urn:ngm:class:yield-management
---

# Semiconductor Fabrication

Semiconductor fabrication is the industrial process by which integrated circuits and discrete semiconductor devices are constructed on crystalline silicon or compound semiconductor wafers through iterative cycles of deposition, photolithography, etching, doping, and planarisation. Each process generation, characterised by a technology node (e.g. 7 nm, 3 nm, 2 nm), defines achievable feature sizes and transistor densities, directly determining the computational density and power efficiency of the resulting chips. Fabrication occurs in ISO Class 1–5 cleanrooms to suppress particle contamination, with yield management and statistical process control being critical disciplines. The field bridges materials science, quantum mechanics, chemical engineering, and precision metrology to produce the foundational hardware layer for all digital computing, AI accelerators, communications infrastructure, and embedded systems.
