---
okf_version: "0.2"
type: Class
title: XLNet
resource: urn:ngm:class:xlnet
domain: spatial-computing
description: A generalised autoregressive pre-training model that learns bidirectional contexts by maximising the expected likelihood over all permutations of the token factorisation order, using a two-stream self-attention mechanism to avoid information leakage. XLNet integrates the Transformer-XL segment recurrence mechanism for long-range dependency modelling and outperforms BERT on 20 NLU benchmarks.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:sc-content-and-assets
requires:
  - urn:ngm:class:vocabulary
  - urn:ngm:class:training
enables:
  - urn:ngm:class:inference
contrastsWith:
  - urn:ngm:class:word-piece
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:natural-language-processing
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# XLNet

A generalised autoregressive pre-training model that learns bidirectional contexts by maximising the expected likelihood over all permutations of the token factorisation order, using a two-stream self-attention mechanism to avoid information leakage. XLNet integrates the Transformer-XL segment recurrence mechanism for long-range dependency modelling and outperforms BERT on 20 NLU benchmarks.
