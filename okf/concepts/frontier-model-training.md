---
okf_version: "0.2"
type: Class
title: Frontier Model Training
resource: urn:ngm:class:frontier-model-training
domain: ai
description: Frontier model training refers to the end-to-end process of constructing the largest and most capable AI systems at the current performance frontier, encompassing data curation at web scale, distributed pretraining across thousands of accelerators, supervised fine-tuning, and reinforcement learning from human feedback, at compute costs exceeding tens of millions of US dollars per run. These traini
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:large-language-model-training
enables:
  - urn:ngm:class:frontier-models
  - urn:ngm:class:model-evaluation
dependsOn:
  - urn:ngm:class:model-training
uses:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:gpu-computing
relatedTo:
  - urn:ngm:class:machine-learning-discipline-infrastructure
  - urn:ngm:class:benchmarks
---

# Frontier Model Training

Frontier model training refers to the end-to-end process of constructing the largest and most capable AI systems at the current performance frontier, encompassing data curation at web scale, distributed pretraining across thousands of accelerators, supervised fine-tuning, and reinforcement learning from human feedback, at compute costs exceeding tens of millions of US dollars per run. These training pipelines push the boundaries of achievable capability and introduce novel safety, governance, and infrastructure challenges not present in smaller-scale model development.
