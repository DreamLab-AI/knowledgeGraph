---
okf_version: "0.2"
type: Class
title: Foundation Model Layer
resource: urn:ngm:class:foundation-model-layer
domain: ai
description: The Foundation Model Layer is the stratum that holds large, broadly pretrained models intended for adaptation to many downstream tasks. It sits above the Training Layer that produced it and below the Model and Inference Layers that specialise and serve it. It contains base model weights, pretraining configurations, and adaptation interfaces.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:training-layer
  - urn:ngm:class:model-architecture-layer
enables:
  - urn:ngm:class:model-layer
  - urn:ngm:class:inference-layer
bridgesTo:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:self-supervised-learning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Foundation Model Layer

The Foundation Model Layer is the stratum that holds large, broadly pretrained models intended for adaptation to many downstream tasks. It sits above the Training Layer that produced it and below the Model and Inference Layers that specialise and serve it. It contains base model weights, pretraining configurations, and adaptation interfaces.
