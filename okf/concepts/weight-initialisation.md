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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Weight Initialisation

Weight initialisation is the procedure of assigning starting values to the trainable parameters of a neural network before training commences. The choice of initialisation scheme affects gradient flow, convergence speed, and the avoidance of vanishing or exploding activations across deep layers. Common schemes such as Xavier (Glorot) and He initialisation scale the variance of initial weights according to layer fan-in and fan-out.
