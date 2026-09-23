---
okf_version: "0.2"
type: Class
title: Simulation Layer
resource: urn:ngm:class:simulation-layer
domain: infrastructure
description: The Simulation Layer is the cross-cutting stratum that models system or environment behaviour to test and predict outcomes without acting on the real world. It sits above compute and model strata it uses and supports research, evaluation, and planning. It contains simulators, environment models, and the scenarios run within them.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:compute-layer
  - urn:ngm:class:model-layer
enables:
  - urn:ngm:class:research-layer
  - urn:ngm:class:evaluation-layer
bridgesTo:
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:digital-twin
---

# Simulation Layer

The Simulation Layer is the cross-cutting stratum that models system or environment behaviour to test and predict outcomes without acting on the real world. It sits above compute and model strata it uses and supports research, evaluation, and planning. It contains simulators, environment models, and the scenarios run within them.
