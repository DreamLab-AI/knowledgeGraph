---
okf_version: "0.2"
type: Class
title: Weight Decay
resource: urn:ngm:class:weight-decay
domain: artificial-intelligence
description: A regularisation technique that adds a penalty proportional to the L2 norm of model weights to the loss function, discouraging large weight magnitudes and thereby limiting model complexity. Weight decay prevents overfitting, promotes simpler generalisable solutions, and in optimisers such as AdamW is implemented directly in the weight update step rather than via loss augmentation.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:machine-learning-discipline-technique
enables:
  - urn:ngm:class:regularisation
contrastsWith:
  - urn:ngm:class:dropout
uses:
  - urn:ngm:class:optimiser
  - urn:ngm:class:gradient-descent
partOf:
  - urn:ngm:class:training
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Weight Decay

A regularisation technique that adds a penalty proportional to the L2 norm of model weights to the loss function, discouraging large weight magnitudes and thereby limiting model complexity. Weight decay prevents overfitting, promotes simpler generalisable solutions, and in optimisers such as AdamW is implemented directly in the weight update step rather than via loss augmentation.
