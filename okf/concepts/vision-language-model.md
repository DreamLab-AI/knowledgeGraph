---
okf_version: "0.2"
type: Class
title: Vision Language Model
resource: urn:ngm:class:vision-language-model
domain: ai
description: A Vision Language Model (VLM) is a multimodal neural architecture that jointly processes visual inputs (images or video) and natural language text, learning shared representations that enable cross-modal tasks such as image captioning, visual question answering, visual grounding, and instruction-following based on image context. VLMs typically pair a visual encoder with a large language model back
maturity: emerging
quality: 0.85
is-a:
  - urn:ngm:class:multimodal-ai-architecture-models
enables:
  - urn:ngm:class:visual-question-answering
  - urn:ngm:class:visual-grounding
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:visual-representation
  - urn:ngm:class:instruction-tuning
relatedTo:
  - urn:ngm:class:multimodal-ai-architecture-reasoning
---

# Vision Language Model

A Vision Language Model (VLM) is a multimodal neural architecture that jointly processes visual inputs (images or video) and natural language text, learning shared representations that enable cross-modal tasks such as image captioning, visual question answering, visual grounding, and instruction-following based on image context. VLMs typically pair a visual encoder with a large language model backbone connected by a learned projection mechanism.
