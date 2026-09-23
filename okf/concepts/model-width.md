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
  - urn:ngm:class:mixture-of-experts-architecture
dependsOn:
  - urn:ngm:class:transformer
  - urn:ngm:class:hyperparameter
contrastsWith:
  - urn:ngm:class:model-depth
relatedTo:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:parameter-count
---

# Model Width

The dimensionality of internal representations at each transformer layer, commonly denoted d_model or hidden dimension. Width sets the information-carrying capacity per token and scales the size of attention heads and feed-forward projections, making it a primary axis alongside depth and data volume in neural scaling law research.
