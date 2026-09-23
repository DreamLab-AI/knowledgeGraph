---
okf_version: "0.2"
type: Class
title: Weight Initialisation
resource: urn:ngm:class:weight-initialisation
domain: machine-learning
description: Weight initialisation is the procedure of assigning starting values to the trainable parameters of a neural network before training commences. The choice of initialisation scheme affects gradient flow, convergence speed, and the avoidance of vanishing or exploding activations across deep layers. Common schemes such as Xavier (Glorot) and He initialisation scale the variance of initial weights acco
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:neural-network-training
requires:
  - urn:ngm:class:gradient-descent
enables:
  - urn:ngm:class:model-training
dependsOn:
  - urn:ngm:class:activation-function
  - urn:ngm:class:backpropagation
contrastsWith:
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:regularisation
bridgesTo:
  - urn:ngm:class:transfer-learning
uses:
  - urn:ngm:class:optimiser
supports:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:recurrent-neural-network
partOf:
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:model-training
relatedTo:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:activation-function
---

# Weight Initialisation

Weight initialisation is the procedure of assigning starting values to the trainable parameters of a neural network before training commences. The choice of initialisation scheme affects gradient flow, convergence speed, and the avoidance of vanishing or exploding activations across deep layers. Common schemes such as Xavier (Glorot) and He initialisation scale the variance of initial weights according to layer fan-in and fan-out.
