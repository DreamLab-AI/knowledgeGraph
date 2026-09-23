---
okf_version: "0.2"
type: Class
title: Task Specific Model
resource: urn:ngm:class:task-specific-model
domain: artificial-intelligence
description: A Task Specific Model is a machine learning model trained or adapted to perform a single, narrowly defined task such as sentiment classification, named entity recognition or defect detection. Unlike general-purpose foundation models, it optimises parameters against the distribution of one objective, often yielding higher accuracy and lower inference cost for that task. Such models are typically pr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:ai-model-architecture
enables:
  - urn:ngm:class:text-generation
dependsOn:
  - urn:ngm:class:model-architecture
implements:
  - urn:ngm:class:fine-tuning
contrastsWith:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:language-model
bridgesTo:
  - urn:ngm:class:foundation-model
uses:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
supports:
  - urn:ngm:class:decision-making
relatedTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:foundation-model
---

# Task Specific Model

A Task Specific Model is a machine learning model trained or adapted to perform a single, narrowly defined task such as sentiment classification, named entity recognition or defect detection. Unlike general-purpose foundation models, it optimises parameters against the distribution of one objective, often yielding higher accuracy and lower inference cost for that task. Such models are typically produced by training from scratch on labelled data or by fine-tuning a larger base model.
