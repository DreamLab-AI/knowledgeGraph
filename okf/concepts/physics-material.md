---
okf_version: "0.2"
type: Class
title: Physics Material
resource: urn:ngm:class:physics-material
domain: spatial-computing
description: A data structure encoding surface interaction properties — friction coefficients, coefficient of restitution, density, and drag — that govern object behaviour within a physics simulation engine. Physics materials are distinct from visual rendering materials and are consumed by simulation solvers to produce physically plausible contact responses for metaverse avatars, props, and environments.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:metaverse
uses:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:rigid-body-dynamics
supports:
  - urn:ngm:class:collision-detection
  - urn:ngm:class:physically-based-rendering
partOf:
  - urn:ngm:class:metaverse
---

# Physics Material

A data structure encoding surface interaction properties — friction coefficients, coefficient of restitution, density, and drag — that govern object behaviour within a physics simulation engine. Physics materials are distinct from visual rendering materials and are consumed by simulation solvers to produce physically plausible contact responses for metaverse avatars, props, and environments.
