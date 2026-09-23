---
okf_version: "0.2"
type: Class
title: Direct Preference Optimisation
resource: urn:ngm:class:direct-preference-optimisation
domain: machine-learning
description: An alignment method that directly uses preference data to fine-tune language models without training a separate reward model or using reinforcement learning, offering a simpler and more stable alternative to RLHF. DPO reparameterises the reward model objective to optimise the policy directly on preference comparison pairs.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:sc-content-and-assets
hasPart:
  - urn:ngm:class:bradley-terry-model
  - urn:ngm:class:preference-dataset
  - urn:ngm:class:reference-policy
requires:
  - urn:ngm:class:preference-learning
  - urn:ngm:class:large-language-models
  - urn:ngm:class:supervised-fine-tuning
  - urn:ngm:class:human-preference
  - urn:ngm:class:cross-entropy-loss
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:stochastic-gradient-descent
enables:
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:instruction-following
  - urn:ngm:class:value-alignment
  - urn:ngm:class:language-model-alignment
  - urn:ngm:class:safety-and-alignment
dependsOn:
  - urn:ngm:class:pairwise-comparison
  - urn:ngm:class:neural-network
implements:
  - urn:ngm:class:policy-optimisation
  - urn:ngm:class:bradley-terry-model
  - urn:ngm:class:maximum-likelihood-estimation
contrastsWith:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:proximal-policy-optimisation
  - urn:ngm:class:reward-modelling
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:language-model
  - urn:ngm:class:reference-policy
  - urn:ngm:class:kl-divergence
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:gradient-accumulation
  - urn:ngm:class:lo-ra
  - urn:ngm:class:mixed-precision-training
supports:
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:human-feedback
  - urn:ngm:class:constitutional-ai-training-methodology
standardizedBy:
  - urn:ngm:class:iclr
  - urn:ngm:class:icml
  - urn:ngm:class:neur-ips
relatedTo:
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:kto
  - urn:ngm:class:rlhf
---

# Direct Preference Optimisation

An alignment method that directly uses preference data to fine-tune language models without training a separate reward model or using reinforcement learning, offering a simpler and more stable alternative to RLHF. DPO reparameterises the reward model objective to optimise the policy directly on preference comparison pairs.
