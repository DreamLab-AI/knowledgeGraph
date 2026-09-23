---
okf_version: "0.2"
type: Class
title: Safetensors Format
resource: urn:ngm:class:safetensors-format
domain: ai
description: "Safetensors is a file format for storing tensors — the weight matrices of machine-learning models — designed to be safe, fast, and simple. Unlike Python pickle-based formats, safetensors stores only raw tensor data and a JSON header describing shapes, dtypes, and offsets, so loading a file cannot execute arbitrary code. The layout supports zero-copy and memory-mapped loading, enabling rapid model "
maturity: established
quality: 0.78
is-a:
  - urn:ngm:class:data-format
enables:
  - urn:ngm:class:model-deployment
relatedTo:
  - urn:ngm:class:safetensors
  - urn:ngm:class:data-serialization
---

# Safetensors Format

Safetensors is a file format for storing tensors — the weight matrices of machine-learning models — designed to be safe, fast, and simple. Unlike Python pickle-based formats, safetensors stores only raw tensor data and a JSON header describing shapes, dtypes, and offsets, so loading a file cannot execute arbitrary code. The layout supports zero-copy and memory-mapped loading, enabling rapid model initialisation and lazy access to individual tensors. Developed by Hugging Face, it has become a de facto standard for distributing open model weights.
