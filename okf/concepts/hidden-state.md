---
okf_version: "0.2"
type: Class
title: Hidden State
resource: urn:ngm:class:hidden-state
domain: artificial-intelligence
description: The vector representation of a token or sequence at any layer in a neural network, encoding contextualised information learned by the model. Hidden states are progressively refined through self-attention and feed-forward transformations, with deeper layers capturing increasingly abstract semantic features used in downstream tasks.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-content-and-assets
requires:
  - urn:ngm:class:token-embedding
enables:
  - urn:ngm:class:language-modeling
  - urn:ngm:class:transfer-learning
partOf:
  - urn:ngm:class:neural-network
  - urn:ngm:class:transformer
relatedTo:
  - urn:ngm:class:attention-mechanism
---

# Hidden State

The vector representation of a token or sequence at any layer in a neural network, encoding contextualised information learned by the model. Hidden states are progressively refined through self-attention and feed-forward transformations, with deeper layers capturing increasingly abstract semantic features used in downstream tasks.
