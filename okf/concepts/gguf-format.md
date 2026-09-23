---
okf_version: "0.2"
type: Class
title: GGUF Format
resource: urn:ngm:class:gguf-format
domain: ai
description: "GGUF (GPT-Generated Unified Format) is a binary file format for storing large language model weights, metadata, and tokenizer data in a single self-contained file optimised for fast loading and local inference. Developed in the llama.cpp ecosystem as a successor to GGML, it supports a range of quantization schemes and embeds the metadata needed to run a model without external configuration. It is "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-infrastructure
relatedTo:
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:open-generative-ai-tools
---

# GGUF Format

GGUF (GPT-Generated Unified Format) is a binary file format for storing large language model weights, metadata, and tokenizer data in a single self-contained file optimised for fast loading and local inference. Developed in the llama.cpp ecosystem as a successor to GGML, it supports a range of quantization schemes and embeds the metadata needed to run a model without external configuration. It is the de facto format for running quantized LLMs on consumer hardware.
