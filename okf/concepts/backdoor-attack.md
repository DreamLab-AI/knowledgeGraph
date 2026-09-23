---
okf_version: "0.2"
type: Class
title: Backdoor Attack
resource: urn:ngm:class:backdoor-attack
domain: artificial-intelligence
description: A training-time adversarial attack that embeds a hidden trigger pattern into an AI model via data poisoning, causing the model to behave normally on standard inputs but produce attacker-chosen outputs when the trigger is present, creating a covert vulnerability that survives fine-tuning and is exploitable post-deployment.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:ai-safety
contrastsWith:
  - urn:ngm:class:adversarial-attack
  - urn:ngm:class:adversarial-robustness
uses:
  - urn:ngm:class:data-poisoning
  - urn:ngm:class:machine-learning-model
relatedTo:
  - urn:ngm:class:model-robustness
  - urn:ngm:class:privacy
---

# Backdoor Attack

A training-time adversarial attack that embeds a hidden trigger pattern into an AI model via data poisoning, causing the model to behave normally on standard inputs but produce attacker-chosen outputs when the trigger is present, creating a covert vulnerability that survives fine-tuning and is exploitable post-deployment.
