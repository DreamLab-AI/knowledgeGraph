---
okf_version: "0.2"
type: Class
title: Training Layer
resource: urn:ngm:class:training-layer
domain: machine-learning
description: The Training Layer is the stratum that fits model parameters from data using optimisation procedures. It sits above the Compute and Data strata it consumes and below the Model and Foundation Model strata that hold its results. It contains training loops, optimisers, loss functions, and the orchestration of large-scale learning runs.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:compute-layer
  - urn:ngm:class:data-layer
enables:
  - urn:ngm:class:model-layer
  - urn:ngm:class:foundation-model-layer
bridgesTo:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
---

# Training Layer

The Training Layer is the stratum that fits model parameters from data using optimisation procedures. It sits above the Compute and Data strata it consumes and below the Model and Foundation Model strata that hold its results. It contains training loops, optimisers, loss functions, and the orchestration of large-scale learning runs.
