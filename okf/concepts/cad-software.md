---
okf_version: "0.2"
type: Class
title: CAD Software
resource: urn:ngm:class:cad-software
domain: spatial-computing
description: Computer-Aided Design (CAD) software is a category of application that enables engineers, architects, and designers to create, modify, analyse, and optimise two-dimensional drawings and three-dimensional geometric models of physical artefacts and structures. CAD tools encode geometry using boundary representation (B-rep) or constructive solid geometry (CSG) methods, support parametric constraint-b
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:design-software
hasPart:
  - urn:ngm:class:constraint-solver
  - urn:ngm:class:geometric-kernel
requires:
  - urn:ngm:class:computational-geometry
enables:
  - urn:ngm:class:parametric-design-methodology-modeling
  - urn:ngm:class:manufacturing-process
  - urn:ngm:class:product-design
  - urn:ngm:class:finite-element-analysis
  - urn:ngm:class:generative-design
  - urn:ngm:class:additive-manufacturing
dependsOn:
  - urn:ngm:class:geometric-kernel
  - urn:ngm:class:computer-graphics
implements:
  - urn:ngm:class:computational-geometry
  - urn:ngm:class:constraint-solver
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:robotics
  - urn:ngm:class:bim-virtual-model
uses:
  - urn:ngm:class:mesh-data
  - urn:ngm:class:3-d-file-format
supports:
  - urn:ngm:class:simulation
  - urn:ngm:class:cnc-machining
standardizedBy:
  - urn:ngm:class:iso-10303-step
relatedTo:
  - urn:ngm:class:manufacturing-automation
  - urn:ngm:class:electronic-design-automation
---

# CAD Software

Computer-Aided Design (CAD) software is a category of application that enables engineers, architects, and designers to create, modify, analyse, and optimise two-dimensional drawings and three-dimensional geometric models of physical artefacts and structures. CAD tools encode geometry using boundary representation (B-rep) or constructive solid geometry (CSG) methods, support parametric constraint-based modelling, and produce outputs usable in manufacturing, simulation, and visualisation pipelines.
