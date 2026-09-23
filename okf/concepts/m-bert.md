---
okf_version: "0.2"
type: Class
title: mBERT
resource: urn:ngm:class:m-bert
domain: artificial-intelligence
description: "Multilingual BERT (mBERT) is a variant of the BERT encoder pre-trained jointly on Wikipedia text in 104 languages using masked language modelling and next-sentence prediction objectives. By sharing a single vocabulary and model weights across all languages, mBERT learns cross-lingually aligned representations that support zero-shot cross-lingual transfer: a model fine-tuned for a task in one langu"
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:ai-model-architecture
enables:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:named-entity-recognition
dependsOn:
  - urn:ngm:class:pre-training
  - urn:ngm:class:fine-tuning
uses:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:neural-network-text-tokenisation
relatedTo:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:albert
  - urn:ngm:class:embedding-model
---

# mBERT

Multilingual BERT (mBERT) is a variant of the BERT encoder pre-trained jointly on Wikipedia text in 104 languages using masked language modelling and next-sentence prediction objectives. By sharing a single vocabulary and model weights across all languages, mBERT learns cross-lingually aligned representations that support zero-shot cross-lingual transfer: a model fine-tuned for a task in one language can be applied directly to another language without that language's labelled data. mBERT is the foundational benchmark for evaluating multilingual language understanding and cross-lingual transfer learning.
