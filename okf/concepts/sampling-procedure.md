---
okf_version: "0.2"
type: Class
title: Sampling Procedure
resource: urn:ngm:class:sampling-procedure
domain: ai
description: A sampling procedure is the method by which a generative model draws output samples from its learned probability distribution. It governs how latent or noise variables are mapped to concrete outputs, including techniques such as ancestral sampling, temperature scaling, top-k and nucleus sampling, and iterative denoising in diffusion models. The choice of procedure controls the diversity, fidelity,
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
relatedTo:
  - urn:ngm:class:generative-adversarial-networks
  - urn:ngm:class:inpainting
---

# Sampling Procedure

A sampling procedure is the method by which a generative model draws output samples from its learned probability distribution. It governs how latent or noise variables are mapped to concrete outputs, including techniques such as ancestral sampling, temperature scaling, top-k and nucleus sampling, and iterative denoising in diffusion models. The choice of procedure controls the diversity, fidelity, and computational cost of generation.
