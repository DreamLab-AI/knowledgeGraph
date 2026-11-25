---
okf_version: "0.2"
type: Class
title: Synthetic Data
resource: urn:ngm:class:synthetic-data
domain: artificial-intelligence
description: "Synthetic data is algorithmically generated content that preserves the statistical properties, distributional characteristics, and structural patterns of real-world datasets without containing actual personal or proprietary records. It is produced using techniques such as generative adversarial networks, variational autoencoders, diffusion models, rule-based simulators, and statistical resampling "
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:generative-model
  - urn:ngm:class:statistical-distribution
enables:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:model-training
  - urn:ngm:class:privacy-preserving-machine-learning
  - urn:ngm:class:sim-to-real-transfer
dependsOn:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:model-evaluation
contrastsWith:
  - urn:ngm:class:real-world-data
  - urn:ngm:class:anonymisation
  - urn:ngm:class:anonymisation
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:simulation-environment
uses:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:variational-autoencoder
  - urn:ngm:class:large-language-model
supports:
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:robotics
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:autonomous-system
relatedTo:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:machine-learning
  - urn:ngm:class:data-governance
  - urn:ngm:class:bias-in-ai
  - urn:ngm:class:machine-learning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Synthetic Data

Synthetic data is algorithmically generated content that preserves the statistical properties, distributional characteristics, and structural patterns of real-world datasets without containing actual personal or proprietary records. It is produced using techniques such as generative adversarial networks, variational autoencoders, diffusion models, rule-based simulators, and statistical resampling methods. Synthetic data serves to augment scarce or imbalanced training corpora, enable privacy-compliant data sharing under regulations such as GDPR, and stress-test machine-learning pipelines with rare, hazardous, or counterfactual edge-case scenarios. Quality is typically benchmarked via fidelity metrics such as Fréchet Inception Distance, train-on-synthetic-test-on-real accuracy, and statistical divergence measures.
