---
okf_version: "0.2"
type: Class
title: Adversarial Machine Learning
resource: urn:ngm:class:adversarial-machine-learning
domain: security
description: Adversarial machine learning is the study of attacks that exploit vulnerabilities in machine learning models and the development of defences against them, encompassing threats across the model lifecycle including training-time data poisoning, evasion attacks at inference time, model inversion, and membership inference. Attackers craft carefully perturbed inputs or manipulate training data to cause
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ai-security
hasPart:
  - urn:ngm:class:adversarial-attack
  - urn:ngm:class:backdoor-attack
  - urn:ngm:class:membership-inference
requires:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:threat-modelling
enables:
  - urn:ngm:class:adversarial-robustness
  - urn:ngm:class:model-robustness
  - urn:ngm:class:red-teaming
  - urn:ngm:class:trustworthy-ai
dependsOn:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:formal-verification
contrastsWith:
  - urn:ngm:class:machine-learning-discipline
bridgesTo:
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:adversarial-attacks
  - urn:ngm:class:data-poisoning
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:neural-network
  - urn:ngm:class:transfer-learning
relatedTo:
  - urn:ngm:class:model-inversion
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:adversarial-testing
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:federated-learning
  - urn:ngm:class:ai-safety
---

# Adversarial Machine Learning

Adversarial machine learning is the study of attacks that exploit vulnerabilities in machine learning models and the development of defences against them, encompassing threats across the model lifecycle including training-time data poisoning, evasion attacks at inference time, model inversion, and membership inference. Attackers craft carefully perturbed inputs or manipulate training data to cause misclassification, extract sensitive information, or degrade model performance, whilst defenders develop robust training procedures, certified defences, and detection mechanisms. The field spans both offensive security research and the development of trustworthy AI systems.
