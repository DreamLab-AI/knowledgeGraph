---
okf_version: "0.2"
type: Class
title: Direct Answer Prompting
resource: urn:ngm:class:direct-answer-prompting
domain: artificial-intelligence
description: Direct answer prompting is a prompting strategy in which a large language model is instructed to produce a final answer immediately, without showing intermediate reasoning steps. It contrasts with chain-of-thought approaches by optimising for brevity, latency and cost on tasks where extended reasoning offers little benefit. The technique is used when an answer is expected to be retrievable or shal
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:prompt-engineering
requires:
  - urn:ngm:class:large-language-model
enables:
  - urn:ngm:class:in-context-learning
dependsOn:
  - urn:ngm:class:large-language-model
contrastsWith:
  - urn:ngm:class:chain-of-thought-reasoning
  - urn:ngm:class:standard-prompting
bridgesTo:
  - urn:ngm:class:in-context-learning
uses:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:prompt-template
supports:
  - urn:ngm:class:natural-language-processing
partOf:
  - urn:ngm:class:prompt-engineering
relatedTo:
  - urn:ngm:class:zero-shot-prompting
  - urn:ngm:class:few-shot-prompting
  - urn:ngm:class:prompt-template
---

# Direct Answer Prompting

Direct answer prompting is a prompting strategy in which a large language model is instructed to produce a final answer immediately, without showing intermediate reasoning steps. It contrasts with chain-of-thought approaches by optimising for brevity, latency and cost on tasks where extended reasoning offers little benefit. The technique is used when an answer is expected to be retrievable or shallow, trading interpretability and complex-reasoning accuracy for efficiency.
