---
okf_version: "0.2"
type: Class
title: Attention Head
resource: urn:ngm:class:attention-head
domain: artificial-intelligence
description: One of multiple parallel scaled dot-product attention mechanisms in a multi-head attention layer, each operating over a distinct linear projection of the input. Individual heads specialise in different linguistic or structural patterns; most learn simple positional relationships and many can be pruned without significant loss, though a subset carry disproportionate representational load.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-model-architecture
enables:
  - urn:ngm:class:transformers
bridgesTo:
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:attention-weight
partOf:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:network-architecture
relatedTo:
  - urn:ngm:class:attention
  - urn:ngm:class:transformer-architecture
---

# Attention Head

One of multiple parallel scaled dot-product attention mechanisms in a multi-head attention layer, each operating over a distinct linear projection of the input. Individual heads specialise in different linguistic or structural patterns; most learn simple positional relationships and many can be pruned without significant loss, though a subset carry disproportionate representational load.
