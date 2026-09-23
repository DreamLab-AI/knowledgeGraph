---
okf_version: "0.2"
type: Class
title: Foundation Models
resource: urn:ngm:class:foundation-models
domain: artificial-intelligence
description: Foundation models are large neural networks pretrained on broad, diverse data at scale, producing general-purpose representations that can be adapted to many downstream tasks through fine-tuning or prompting. They underpin most modern large language models, vision models and multimodal systems, and their training typically relies on vast web-scale corpora such as Common Crawl. Their broad capabili
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:pretrained-model
requires:
  - urn:ngm:class:common-crawl
---

# Foundation Models

Foundation models are large neural networks pretrained on broad, diverse data at scale, producing general-purpose representations that can be adapted to many downstream tasks through fine-tuning or prompting. They underpin most modern large language models, vision models and multimodal systems, and their training typically relies on vast web-scale corpora such as Common Crawl. Their broad capability comes at the cost of high training compute and emergent, sometimes unpredictable, behaviour.
