---
okf_version: "0.2"
type: Class
title: NLPTask
resource: urn:ngm:class:nlptask
domain: infrastructure
description: "NLP tasks are the canonical computational problems that define the scope of natural language processing: text classification, sentiment analysis, named entity recognition, machine translation, text summarisation, and question answering. Each task specifies an input-output contract over human language and serves as a benchmark for evaluating model capability. Transformer-based architectures such as"
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:artificial-intelligence
hasPart:
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:machine-translation
  - urn:ngm:class:question-answering
  - urn:ngm:class:text-generation
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:deep-learning
  - urn:ngm:class:tokenization
  - urn:ngm:class:attention-mechanism
partOf:
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:gpt
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:machine-learning-discipline
---

# NLPTask

NLP tasks are the canonical computational problems that define the scope of natural language processing: text classification, sentiment analysis, named entity recognition, machine translation, text summarisation, and question answering. Each task specifies an input-output contract over human language and serves as a benchmark for evaluating model capability. Transformer-based architectures such as BERT and GPT have become the dominant approach across nearly all NLP tasks, replacing earlier feature-engineering and statistical methods with pre-trained, fine-tunable representations.
