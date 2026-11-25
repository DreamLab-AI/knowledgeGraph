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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Training Layer

The Training Layer is the stratum that fits model parameters from data using optimisation procedures. It sits above the Compute and Data strata it consumes and below the Model and Foundation Model strata that hold its results. It contains training loops, optimisers, loss functions, and the orchestration of large-scale learning runs.
