---
okf_version: "0.2"
type: Class
title: Vocabulary
resource: urn:ngm:class:vocabulary
domain: spatial-computing
description: The complete set of unique tokens in a language model's tokenisation scheme, typically ranging from 32,000 to 128,000 entries in modern architectures. Vocabulary size directly governs embedding matrix dimensions, output layer size, and token-level granularity, with larger vocabularies improving expressiveness and training efficiency at the cost of increased memory during inference.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:sc-standards-and-interop
requires:
  - urn:ngm:class:neural-network-text-tokenisation
enables:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:inference
uses:
  - urn:ngm:class:subword-tokenisation
  - urn:ngm:class:byte-pair-encoding
  - urn:ngm:class:word-piece
partOf:
  - urn:ngm:class:transformer
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Vocabulary

The complete set of unique tokens in a language model's tokenisation scheme, typically ranging from 32,000 to 128,000 entries in modern architectures. Vocabulary size directly governs embedding matrix dimensions, output layer size, and token-level granularity, with larger vocabularies improving expressiveness and training efficiency at the cost of increased memory during inference.
