---
okf_version: "0.2"
type: Class
title: Model Width
resource: urn:ngm:class:model-width
domain: artificial-intelligence
description: The dimensionality of internal representations at each transformer layer, commonly denoted d_model or hidden dimension. Width sets the information-carrying capacity per token and scales the size of attention heads and feed-forward projections, making it a primary axis alongside depth and data volume in neural scaling law research.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
enables:
  - urn:ngm:class:mixture-of-experts
dependsOn:
  - urn:ngm:class:transformer
  - urn:ngm:class:hyperparameter
contrastsWith:
  - urn:ngm:class:model-depth
relatedTo:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:parameter-count
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Model Width

The dimensionality of internal representations at each transformer layer, commonly denoted d_model or hidden dimension. Width sets the information-carrying capacity per token and scales the size of attention heads and feed-forward projections, making it a primary axis alongside depth and data volume in neural scaling law research.
