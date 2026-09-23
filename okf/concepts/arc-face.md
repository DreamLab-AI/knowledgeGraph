---
okf_version: "0.2"
type: Class
title: ArcFace
resource: urn:ngm:class:arc-face
domain: ai
description: ArcFace is a deep learning loss function and associated training methodology for facial recognition, introduced by Deng et al. at Imperial College London in 2019, that improves discriminative feature learning by adding an additive angular margin penalty to the softmax loss function. By penalising the angle between a sample embedding and its class centre in hyperspherical feature space, ArcFace for
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:facial-recognition
  - urn:ngm:class:loss-function
  - urn:ngm:class:representation-learning
hasPart:
  - urn:ngm:class:embedding
  - urn:ngm:class:cross-entropy-loss
requires:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:image-processing
  - urn:ngm:class:model-training
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
enables:
  - urn:ngm:class:biometric-verification
  - urn:ngm:class:identity-verification
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:access-control
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:digital-identity-verification
  - urn:ngm:class:kyc
contrastsWith:
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:self-supervised-learning
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:loss-function
  - urn:ngm:class:embedding
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:cross-entropy-loss
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:dropout
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
supports:
  - urn:ngm:class:surveillance
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:liveness-detection
relatedTo:
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:representation-learning
  - urn:ngm:class:liveness-detection
  - urn:ngm:class:face-swap
  - urn:ngm:class:biometric-data
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:data-protection
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:transfer-learning
---

# ArcFace

ArcFace is a deep learning loss function and associated training methodology for facial recognition, introduced by Deng et al. at Imperial College London in 2019, that improves discriminative feature learning by adding an additive angular margin penalty to the softmax loss function. By penalising the angle between a sample embedding and its class centre in hyperspherical feature space, ArcFace forces the model to learn more compact intra-class and more separable inter-class feature embeddings than standard softmax or earlier margin-based losses. It has achieved state-of-the-art performance on numerous facial recognition benchmarks and is widely adopted in production identity verification systems.
