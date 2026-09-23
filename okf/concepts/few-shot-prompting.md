---
okf_version: "0.2"
type: Class
title: Few-Shot Prompting
resource: urn:ngm:class:few-shot-prompting
domain: machine-learning
description: Few-shot prompting is a prompt engineering technique in which a small number of input-output demonstration examples are included directly in the context provided to a large language model, guiding the model to produce outputs conforming to the demonstrated pattern without any parameter updates. The approach exploits the in-context learning capability of transformer-based models, allowing task spec
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:prompt-engineering
requires:
  - urn:ngm:class:context-window
enables:
  - urn:ngm:class:task-adaptation
  - urn:ngm:class:structured-output
  - urn:ngm:class:information-extraction
dependsOn:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:foundation-model
contrastsWith:
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:zero-shot-prompting
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:natural-language-processing
uses:
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:few-shot-examples
  - urn:ngm:class:large-language-model
  - urn:ngm:class:transformer
partOf:
  - urn:ngm:class:prompt-engineering
relatedTo:
  - urn:ngm:class:zero-shot-prompting
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:meta-learning
---

# Few-Shot Prompting

Few-shot prompting is a prompt engineering technique in which a small number of input-output demonstration examples are included directly in the context provided to a large language model, guiding the model to produce outputs conforming to the demonstrated pattern without any parameter updates. The approach exploits the in-context learning capability of transformer-based models, allowing task specification through examples rather than task-specific fine-tuning.
