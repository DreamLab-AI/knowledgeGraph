---
okf_version: "0.2"
type: Class
title: Data Augmentation
resource: urn:ngm:class:data-augmentation
domain: machine-learning
description: Data augmentation is a machine learning technique that expands a training dataset by applying label-preserving transformations or synthesising new examples from existing data. Typical methods include geometric and photometric image transforms, noise injection, and generative model sampling such as GAN-produced samples, diffusion-model synthesis, and mixing-based strategies such as Mixup and CutMix
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:machine-learning-discipline-technique
  - urn:ngm:class:regularisation
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:geometric-transformation
  - urn:ngm:class:photometric-transformation
  - urn:ngm:class:noise-injection
  - urn:ngm:class:mixup
  - urn:ngm:class:cut-mix
  - urn:ngm:class:autoaugment
  - urn:ngm:class:randaugment
  - urn:ngm:class:feature-space-augmentation
  - urn:ngm:class:generative-adversarial-networks
  - urn:ngm:class:vae
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:synthetic-data
requires:
  - urn:ngm:class:training-dataset
  - urn:ngm:class:training-pipeline
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:deep-learning
  - urn:ngm:class:data-collection
enables:
  - urn:ngm:class:model-generalisation
  - urn:ngm:class:overfitting-prevention
  - urn:ngm:class:model-robustness
  - urn:ngm:class:class-imbalance-mitigation
  - urn:ngm:class:overfitting
  - urn:ngm:class:image-classification
  - urn:ngm:class:class-imbalance
dependsOn:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:convolutional-neural-network
implements:
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:few-shot-learning
contrastsWith:
  - urn:ngm:class:data-collection
  - urn:ngm:class:active-learning
uses:
  - urn:ngm:class:generative-adversarial-networks
  - urn:ngm:class:vae
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:synthetic-data-generator
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:neural-architecture-search
supports:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:semi-supervised-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:medical-imaging
relatedTo:
  - urn:ngm:class:regularisation
  - urn:ngm:class:dropout
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:class-imbalance
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:object-detection
---

# Data Augmentation

Data augmentation is a machine learning technique that expands a training dataset by applying label-preserving transformations or synthesising new examples from existing data. Typical methods include geometric and photometric image transforms, noise injection, and generative model sampling such as GAN-produced samples, diffusion-model synthesis, and mixing-based strategies such as Mixup and CutMix. It improves model generalisation and robustness, mitigating overfitting when labelled data is scarce. Modern automated augmentation pipelines such as AutoAugment and RandAugment use reinforcement learning or random search to discover optimal policies, while 2024-2026 diffusion-based approaches such as DiffuseMix enable label-preserving generation of high-fidelity training examples that improve performance on imbalanced and low-resource benchmarks.
