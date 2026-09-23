---
okf_version: "0.2"
type: Class
title: Noise Injection
resource: urn:ngm:class:noise-injection
domain: machine-learning
description: Noise injection is the deliberate addition of random perturbations — Gaussian noise, dropout-style masking, token swaps or signal distortions — to inputs, hidden activations, weights or gradients during training or data generation. As a data augmentation and regularisation technique it discourages over-fitting and improves robustness to distribution shift; in generative adversarial networks it sup
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:data-augmentation
enables:
  - urn:ngm:class:robustness
partOf:
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:back-translation
relatedTo:
  - urn:ngm:class:regularisation
  - urn:ngm:class:dropout
  - urn:ngm:class:generator-network
  - urn:ngm:class:noise-mechanisms
  - urn:ngm:class:differential-privacy
---

# Noise Injection

Noise injection is the deliberate addition of random perturbations — Gaussian noise, dropout-style masking, token swaps or signal distortions — to inputs, hidden activations, weights or gradients during training or data generation. As a data augmentation and regularisation technique it discourages over-fitting and improves robustness to distribution shift; in generative adversarial networks it supplies the stochastic latent input that drives sample diversity, and in differential privacy calibrated noise provides formal privacy guarantees.
