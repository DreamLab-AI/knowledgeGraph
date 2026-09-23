---
okf_version: "0.2"
type: Class
title: Back-Translation
resource: urn:ngm:class:back-translation
domain: ai
description: Back-translation is a data augmentation and quality-assurance technique in machine translation where text translated into a target language is translated back into the source language. As an augmentation method, monolingual target-language data is translated into the source language to create synthetic parallel pairs that improve translation models. As a QA method, the round-trip output is compare
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:data-augmentation
hasPart:
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:monolingual-data
  - urn:ngm:class:parallel-corpus
  - urn:ngm:class:quality-estimation
  - urn:ngm:class:noise-injection
  - urn:ngm:class:iterative-training
requires:
  - urn:ngm:class:neural-machine-translation
  - urn:ngm:class:monolingual-data
  - urn:ngm:class:sequence-to-sequence-model
  - urn:ngm:class:beam-search
enables:
  - urn:ngm:class:low-resource-language
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:semi-supervised-learning
  - urn:ngm:class:multilingual-model
  - urn:ngm:class:translation
dependsOn:
  - urn:ngm:class:neural-machine-translation
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:attention-mechanism
implements:
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:semi-supervised-learning
  - urn:ngm:class:self-training
contrastsWith:
  - urn:ngm:class:forward-translation
  - urn:ngm:class:round-trip-translation
  - urn:ngm:class:knowledge-distillation
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:language-model
  - urn:ngm:class:bleu-score
  - urn:ngm:class:beam-search
  - urn:ngm:class:cross-entropy-loss
supports:
  - urn:ngm:class:machine-translation
  - urn:ngm:class:quality-estimation
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:curriculum-learning
standardizedBy:
  - urn:ngm:class:wmt-benchmark
relatedTo:
  - urn:ngm:class:parallel-corpus
  - urn:ngm:class:text-generation
  - urn:ngm:class:data-augmentation-strategies
  - urn:ngm:class:multilingual-model
---

# Back-Translation

Back-translation is a data augmentation and quality-assurance technique in machine translation where text translated into a target language is translated back into the source language. As an augmentation method, monolingual target-language data is translated into the source language to create synthetic parallel pairs that improve translation models. As a QA method, the round-trip output is compared with the original to detect meaning drift.
