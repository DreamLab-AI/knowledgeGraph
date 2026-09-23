---
okf_version: "0.2"
type: Class
title: Textual Inversion
resource: urn:ngm:class:textual-inversion
domain: ai
description: Textual inversion is a fine-tuning technique for text-to-image diffusion models that learns a new embedding vector for a placeholder token from a handful of example images, capturing a specific subject or style without altering the model weights. The learned pseudo-word can then be composed into prompts like any ordinary token. It is lightweight and shareable because only a small embedding, not th
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:parameter-efficient-fine-tuning
relatedTo:
  - urn:ngm:class:kohya-dreambooth-and-similar
  - urn:ngm:class:generative-model
---

# Textual Inversion

Textual inversion is a fine-tuning technique for text-to-image diffusion models that learns a new embedding vector for a placeholder token from a handful of example images, capturing a specific subject or style without altering the model weights. The learned pseudo-word can then be composed into prompts like any ordinary token. It is lightweight and shareable because only a small embedding, not the full network, is trained.
