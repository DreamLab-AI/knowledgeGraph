---
okf_version: "0.2"
type: Class
title: Model Architecture Layer
resource: urn:ngm:class:model-architecture-layer
domain: ai
description: "The Model Architecture Layer is the stratum that specifies the structural design of a machine learning model: its operators, connectivity, and parameterisation. It sits above the Algorithm Layer, which supplies the primitives it composes, and below the Model Layer, which holds trained instances of these architectures. It contains layer definitions, network topologies, and architectural hyperparame"
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:algorithm-layer
enables:
  - urn:ngm:class:model-layer
  - urn:ngm:class:training-layer
bridgesTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:neural-network
---

# Model Architecture Layer

The Model Architecture Layer is the stratum that specifies the structural design of a machine learning model: its operators, connectivity, and parameterisation. It sits above the Algorithm Layer, which supplies the primitives it composes, and below the Model Layer, which holds trained instances of these architectures. It contains layer definitions, network topologies, and architectural hyperparameters.
