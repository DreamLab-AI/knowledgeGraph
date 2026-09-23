---
okf_version: "0.2"
type: Class
title: Prefix Tuning
resource: urn:ngm:class:prefix-tuning
domain: artificial-intelligence
description: A parameter-efficient fine-tuning technique that prepends trainable continuous vectors (prefixes) to the key and value matrices at each transformer layer, whilst keeping the pre-trained model parameters frozen. Unlike prompt tuning, which operates only on input embeddings, prefix tuning influences the attention mechanism at every layer, achieving stronger task-specific adaptation with roughly 0.1%
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:parameter-efficient-fine-tuning
requires:
  - urn:ngm:class:fine-tuning
contrastsWith:
  - urn:ngm:class:prompt-tuning
  - urn:ngm:class:adapter-modules
uses:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transfer-learning
partOf:
  - urn:ngm:class:parameter-efficient-fine-tuning
---

# Prefix Tuning

A parameter-efficient fine-tuning technique that prepends trainable continuous vectors (prefixes) to the key and value matrices at each transformer layer, whilst keeping the pre-trained model parameters frozen. Unlike prompt tuning, which operates only on input embeddings, prefix tuning influences the attention mechanism at every layer, achieving stronger task-specific adaptation with roughly 0.1% of model parameters.
