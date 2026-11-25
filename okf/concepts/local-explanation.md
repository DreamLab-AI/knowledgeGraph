---
okf_version: "0.2"
type: Class
title: Local Explanation
resource: urn:ngm:class:local-explanation
domain: artificial-intelligence
description: Interpretability techniques that explain individual model predictions for specific instances, providing insight into why a particular input produced a given output without necessarily characterising the model's global behaviour. Methods such as LIME and SHAP generate feature-attribution scores scoped to the neighbourhood of a single query point.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:model-interpretability
enables:
  - urn:ngm:class:accountability
  - urn:ngm:class:fairness
contrastsWith:
  - urn:ngm:class:global-explanation
bridgesTo:
  - urn:ngm:class:sc-content-and-assets
uses:
  - urn:ngm:class:feature-importance
partOf:
  - urn:ngm:class:explainable-ai
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Local Explanation

Interpretability techniques that explain individual model predictions for specific instances, providing insight into why a particular input produced a given output without necessarily characterising the model's global behaviour. Methods such as LIME and SHAP generate feature-attribution scores scoped to the neighbourhood of a single query point.
