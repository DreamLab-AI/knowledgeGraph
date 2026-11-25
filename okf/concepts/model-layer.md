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
  - urn:ngm:class:machine-learning
  - urn:ngm:class:model-registry
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Model Layer

The Model Layer is the stratum that holds trained machine learning models as deployable artefacts with fixed parameters. In the canonical stack it sits above the Algorithm Layer and below the Inference Layer, packaging learned functions for use. It contains weight sets, model metadata, and the serialised representations that inference engines load.
