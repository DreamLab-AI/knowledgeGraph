---
okf_version: "0.2"
type: Class
title: Inference Compute
resource: urn:ngm:class:inference-compute
domain: ai
description: Inference compute is the computational capacity consumed when a trained machine-learning model generates outputs from inputs, as distinct from the compute used during training. For large language models it scales with model size, context length, and the number of generated tokens, and increasingly with test-time reasoning techniques that spend more compute per query to improve answers. It is a pri
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-infrastructure
relatedTo:
  - urn:ngm:class:agents
  - urn:ngm:class:computer-use-and-browser-agents
---

# Inference Compute

Inference compute is the computational capacity consumed when a trained machine-learning model generates outputs from inputs, as distinct from the compute used during training. For large language models it scales with model size, context length, and the number of generated tokens, and increasingly with test-time reasoning techniques that spend more compute per query to improve answers. It is a primary cost and latency driver for deployed AI systems and agents.
