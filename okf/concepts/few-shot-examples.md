---
okf_version: "0.2"
type: Class
title: Few-Shot Examples
resource: urn:ngm:class:few-shot-examples
domain: ai
description: Few-shot examples are a small set of input-output demonstrations placed within a language model's prompt to illustrate the desired task, format, or reasoning pattern. By conditioning on these in-context examples, the model can perform the task without weight updates, leveraging in-context learning. The number, quality, ordering, and representativeness of the examples strongly influence output accu
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
relatedTo:
  - urn:ngm:class:context-engineering
  - urn:ngm:class:few-shot-prompting
---

# Few-Shot Examples

Few-shot examples are a small set of input-output demonstrations placed within a language model's prompt to illustrate the desired task, format, or reasoning pattern. By conditioning on these in-context examples, the model can perform the task without weight updates, leveraging in-context learning. The number, quality, ordering, and representativeness of the examples strongly influence output accuracy and consistency.
