---
okf_version: "0.2"
type: Class
title: Model Weights
resource: urn:ngm:class:model-weights
domain: artificial-intelligence
description: The learnable numerical parameters in a neural network that encode the connection strengths adjusted during training via backpropagation to minimise loss. Model weights constitute the primary artefact of training and are the target of fine-tuning, quantisation, pruning, and transfer learning; their distribution and magnitude critically determine model capability and safety.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:weight-matrix
  - urn:ngm:class:bias
requires:
  - urn:ngm:class:training
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
enables:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:inference
dependsOn:
  - urn:ngm:class:loss-function
  - urn:ngm:class:optimiser
contrastsWith:
  - urn:ngm:class:model-architecture
bridgesTo:
  - urn:ngm:class:intellectual-property-rights-framework
  - urn:ngm:class:federated-learning
supports:
  - urn:ngm:class:model-compression
  - urn:ngm:class:quantisation
  - urn:ngm:class:pruning
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-rmf
partOf:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:network-architecture
  - urn:ngm:class:ai-safety
  - urn:ngm:class:interpretability
  - urn:ngm:class:model-serialisation
---

# Model Weights

The learnable numerical parameters in a neural network that encode the connection strengths adjusted during training via backpropagation to minimise loss. Model weights constitute the primary artefact of training and are the target of fine-tuning, quantisation, pruning, and transfer learning; their distribution and magnitude critically determine model capability and safety.
