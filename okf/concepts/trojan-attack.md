---
okf_version: "0.2"
type: Class
title: Trojan Attack
resource: urn:ngm:class:trojan-attack
domain: spatial-computing
description: A Trojan Attack is a supply-chain-oriented backdoor attack on AI models in which a pre-trained model or training pipeline is maliciously modified to embed hidden triggers; the model performs normally on clean inputs but produces attacker-defined outputs when specific trigger patterns are present. Unlike general backdoor attacks, Trojan attacks emphasise persistence through fine-tuning and distribu
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-governance-and-safety
requires:
  - urn:ngm:class:supply-chain
dependsOn:
  - urn:ngm:class:ai-security
contrastsWith:
  - urn:ngm:class:adversarial-robustness
relatedTo:
  - urn:ngm:class:backdoor-attack
  - urn:ngm:class:data-poisoning
  - urn:ngm:class:adversarial-attack
---

# Trojan Attack

A Trojan Attack is a supply-chain-oriented backdoor attack on AI models in which a pre-trained model or training pipeline is maliciously modified to embed hidden triggers; the model performs normally on clean inputs but produces attacker-defined outputs when specific trigger patterns are present. Unlike general backdoor attacks, Trojan attacks emphasise persistence through fine-tuning and distribution via public model repositories.
