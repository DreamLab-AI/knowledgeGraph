---
okf_version: "0.2"
type: Class
title: Model Inversion
resource: urn:ngm:class:model-inversion
domain: artificial-intelligence
description: An inference-time privacy attack that reconstructs sensitive training data or personal attributes from a trained model by iteratively querying model outputs, confidence scores, or internal representations. Model inversion attacks expose a fundamental tension between model utility and data privacy, motivating defences such as differential privacy, federated learning, and membership-inference auditi
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:model-weights
contrastsWith:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:federated-learning
supports:
  - urn:ngm:class:ai-safety
relatedTo:
  - urn:ngm:class:membership-inference
  - urn:ngm:class:adversarial-attacks
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Model Inversion

An inference-time privacy attack that reconstructs sensitive training data or personal attributes from a trained model by iteratively querying model outputs, confidence scores, or internal representations. Model inversion attacks expose a fundamental tension between model utility and data privacy, motivating defences such as differential privacy, federated learning, and membership-inference auditing.
