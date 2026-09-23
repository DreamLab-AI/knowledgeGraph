---
okf_version: "0.2"
type: Class
title: Disentangled Representation
resource: urn:ngm:class:disentangled-representation
domain: artificial-intelligence
description: "A disentangled representation is a learned representation in which distinct, semantically meaningful factors of variation in the data — such as an object's shape, colour and pose — are captured by separate, largely independent dimensions of the latent space, so that changing one factor leaves the others unaffected. It is a goal of representation learning that improves interpretability and enables "
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:representation-learning
partOf:
  - urn:ngm:class:representation-learning
relatedTo:
  - urn:ngm:class:neural-network-latent-space
  - urn:ngm:class:vae
---

# Disentangled Representation

A disentangled representation is a learned representation in which distinct, semantically meaningful factors of variation in the data — such as an object's shape, colour and pose — are captured by separate, largely independent dimensions of the latent space, so that changing one factor leaves the others unaffected. It is a goal of representation learning that improves interpretability and enables controlled generation, since manipulating a single latent dimension produces a predictable, isolated change in the output. Variational autoencoders and related generative models are commonly used to encourage disentanglement, for example through additional regularisation terms that penalise correlation between latent dimensions.
