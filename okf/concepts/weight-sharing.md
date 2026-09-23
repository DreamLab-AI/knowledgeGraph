---
okf_version: "0.2"
type: Class
title: Weight Sharing
resource: urn:ngm:class:weight-sharing
domain: machine-learning
description: Weight sharing is a neural-network design technique in which the same set of learnable parameters is reused across multiple positions, time steps, or model components rather than learning independent parameters for each. By tying parameters together it dramatically reduces model size, encodes structural priors such as translation invariance, and improves data efficiency and generalisation. It is t
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:neural-network
hasPart:
  - urn:ngm:class:parameter
  - urn:ngm:class:convolution
enables:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transfer-learning
dependsOn:
  - urn:ngm:class:neural-network
implements:
  - urn:ngm:class:model-architecture
contrastsWith:
  - urn:ngm:class:overfitting
uses:
  - urn:ngm:class:parameter
  - urn:ngm:class:convolution
supports:
  - urn:ngm:class:deep-learning
partOf:
  - urn:ngm:class:neural-architecture-search
relatedTo:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer
---

# Weight Sharing

Weight sharing is a neural-network design technique in which the same set of learnable parameters is reused across multiple positions, time steps, or model components rather than learning independent parameters for each. By tying parameters together it dramatically reduces model size, encodes structural priors such as translation invariance, and improves data efficiency and generalisation. It is the defining mechanism of convolutional layers, which apply one filter across all spatial locations, and of recurrent networks, which reuse the same transition weights across every time step. Weight sharing also appears in Siamese architectures, in neural architecture search, and in parameter-efficient model designs.
