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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Attention Head

One of multiple parallel scaled dot-product attention mechanisms in a multi-head attention layer, each operating over a distinct linear projection of the input. Individual heads specialise in different linguistic or structural patterns; most learn simple positional relationships and many can be pruned without significant loss, though a subset carry disproportionate representational load.
