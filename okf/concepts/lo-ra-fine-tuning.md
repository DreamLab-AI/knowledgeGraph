---
okf_version: "0.2"
type: Class
title: LoRA Fine-Tuning
resource: urn:ngm:class:lo-ra-fine-tuning
domain: artificial-intelligence
description: LoRA (Low-Rank Adaptation) fine-tuning is a parameter-efficient fine-tuning technique that adapts large pre-trained transformer models by inserting pairs of trainable low-rank matrices (A ∈ ℝ^{d×r} and B ∈ ℝ^{r×d}, where r ≪ d) alongside frozen weight matrices in selected layers, so that the effective weight update ΔW = BA is constrained to a low-dimensional subspace. By training only the injected
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:parameter-efficient-fine-tuning
requires:
  - urn:ngm:class:pre-training
  - urn:ngm:class:large-language-models
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:domain-adaptation
relatedTo:
  - urn:ngm:class:quantisation
  - urn:ngm:class:model-training
---

# LoRA Fine-Tuning

LoRA (Low-Rank Adaptation) fine-tuning is a parameter-efficient fine-tuning technique that adapts large pre-trained transformer models by inserting pairs of trainable low-rank matrices (A ∈ ℝ^{d×r} and B ∈ ℝ^{r×d}, where r ≪ d) alongside frozen weight matrices in selected layers, so that the effective weight update ΔW = BA is constrained to a low-dimensional subspace. By training only the injected adapter matrices — typically representing 0.1–1% of the original parameter count — LoRA achieves near full fine-tuning performance at a fraction of the GPU memory and compute cost, enabling adaptation of billion-parameter models on consumer hardware. It is now the dominant technique in the PEFT ecosystem and is implemented in Hugging Face's PEFT library.
