---
okf_version: "0.2"
type: Class
title: Maximum Sequence Length
resource: urn:ngm:class:maximum-sequence-length
domain: artificial-intelligence
description: The upper bound on the number of tokens a model can ingest in a single forward pass, determined during training by the positional encoding scheme and available memory. It governs context retention, task complexity, and whether long inputs must be truncated, chunked, or processed with sliding-window attention.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:natural-language-processing
requires:
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:transformer
enables:
  - urn:ngm:class:context-window
dependsOn:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:training-data
contrastsWith:
  - urn:ngm:class:token
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Maximum Sequence Length

The upper bound on the number of tokens a model can ingest in a single forward pass, determined during training by the positional encoding scheme and available memory. It governs context retention, task complexity, and whether long inputs must be truncated, chunked, or processed with sliding-window attention.
