---
okf_version: "0.2"
type: Class
title: Safetensors
resource: urn:ngm:class:safetensors
domain: ai
description: Safetensors is a secure, simple, and fast file format for storing and loading neural network tensor weights, developed by Hugging Face as a safe alternative to Python's pickle-based serialisation. The format stores tensor metadata in a JSON header followed by raw binary data, enabling zero-copy memory-mapped loading without executing arbitrary code during deserialisation.
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:data-serialization
enables:
  - urn:ngm:class:model-checkpoint
  - urn:ngm:class:ai-model-inference-engine
uses:
  - urn:ngm:class:model-weights
  - urn:ngm:class:hugging-face
relatedTo:
  - urn:ngm:class:safetensors-format
  - urn:ngm:class:hugging-face-model-hub
---

# Safetensors

Safetensors is a secure, simple, and fast file format for storing and loading neural network tensor weights, developed by Hugging Face as a safe alternative to Python's pickle-based serialisation. The format stores tensor metadata in a JSON header followed by raw binary data, enabling zero-copy memory-mapped loading without executing arbitrary code during deserialisation.
