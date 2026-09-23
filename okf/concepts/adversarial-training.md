---
okf_version: "0.2"
type: Class
title: Adversarial Training
resource: urn:ngm:class:adversarial-training
domain: artificial-intelligence
description: Adversarial training is a robustness technique that augments model training with adversarially perturbed examples generated to maximise the model's loss. By solving an inner maximisation that crafts worst-case inputs within a bounded perturbation set and an outer minimisation over model parameters, it teaches models to resist adversarial attacks. It improves robustness against perturbations at the
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-training
hasPart:
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:gradient-descent
requires:
  - urn:ngm:class:adversarial-attack
  - urn:ngm:class:supervised-learning
enables:
  - urn:ngm:class:robustness
implements:
  - urn:ngm:class:model-robustness
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:neural-network
partOf:
  - urn:ngm:class:model-training
relatedTo:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:overfitting
  - urn:ngm:class:security
---

# Adversarial Training

Adversarial training is a robustness technique that augments model training with adversarially perturbed examples generated to maximise the model's loss. By solving an inner maximisation that crafts worst-case inputs within a bounded perturbation set and an outer minimisation over model parameters, it teaches models to resist adversarial attacks. It improves robustness against perturbations at the cost of additional computation and sometimes reduced clean accuracy.
