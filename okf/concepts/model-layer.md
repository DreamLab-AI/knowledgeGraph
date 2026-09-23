---
okf_version: "0.2"
type: Class
title: Model Layer
resource: urn:ngm:class:model-layer
domain: ai
description: The Model Layer is the stratum that holds trained machine learning models as deployable artefacts with fixed parameters. In the canonical stack it sits above the Algorithm Layer and below the Inference Layer, packaging learned functions for use. It contains weight sets, model metadata, and the serialised representations that inference engines load.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:algorithm-layer
  - urn:ngm:class:training-layer
enables:
  - urn:ngm:class:inference-layer
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:model-registry
---

# Model Layer

The Model Layer is the stratum that holds trained machine learning models as deployable artefacts with fixed parameters. In the canonical stack it sits above the Algorithm Layer and below the Inference Layer, packaging learned functions for use. It contains weight sets, model metadata, and the serialised representations that inference engines load.
