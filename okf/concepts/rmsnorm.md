---
okf_version: "0.2"
type: Class
title: RMSNorm
resource: urn:ngm:class:rmsnorm
domain: artificial-intelligence
description: Root Mean Square Layer Normalisation (RMSNorm) is a neural network normalisation technique that re-scales each activation vector by the inverse of the root mean square of its elements, eliminating the mean-subtraction and bias terms present in standard Layer Normalisation. By removing the re-centring computation, RMSNorm reduces operational cost while achieving comparable training stability and ge
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-model-architecture
enables:
  - urn:ngm:class:training-and-fine-tuning
contrastsWith:
  - urn:ngm:class:layer-normalisation
  - urn:ngm:class:batch-normalisation
partOf:
  - urn:ngm:class:neural-network-layer
relatedTo:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:large-language-models
---

# RMSNorm

Root Mean Square Layer Normalisation (RMSNorm) is a neural network normalisation technique that re-scales each activation vector by the inverse of the root mean square of its elements, eliminating the mean-subtraction and bias terms present in standard Layer Normalisation. By removing the re-centring computation, RMSNorm reduces operational cost while achieving comparable training stability and generalisation performance to Layer Normalisation in transformer architectures. RMSNorm has been adopted as the default normalisation layer in several state-of-the-art large language models including LLaMA and Mistral, reflecting both its empirical effectiveness and its computational efficiency on GPU hardware.
