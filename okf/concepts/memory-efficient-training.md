---
okf_version: "0.2"
type: Class
title: Memory-Efficient Training
resource: urn:ngm:class:memory-efficient-training
domain: machine-learning
description: Memory-efficient training encompasses techniques that reduce the accelerator memory required to train large neural networks, allowing larger models or batch sizes to fit within fixed hardware budgets. Approaches include gradient checkpointing, which recomputes intermediate activations during the backward pass instead of storing them, and parameter-efficient methods such as LoRA and DoRA, which tra
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:model-training
partOf:
  - urn:ngm:class:model-training
---

# Memory-Efficient Training

Memory-efficient training encompasses techniques that reduce the accelerator memory required to train large neural networks, allowing larger models or batch sizes to fit within fixed hardware budgets. Approaches include gradient checkpointing, which recomputes intermediate activations during the backward pass instead of storing them, and parameter-efficient methods such as LoRA and DoRA, which train small low-rank adapters instead of full weight matrices. These techniques trade additional compute or reduced expressivity for substantially lower peak memory use during model training.
