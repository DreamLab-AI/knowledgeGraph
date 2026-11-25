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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Few-Shot Examples

Few-shot examples are a small set of input-output demonstrations placed within a language model's prompt to illustrate the desired task, format, or reasoning pattern. By conditioning on these in-context examples, the model can perform the task without weight updates, leveraging in-context learning. The number, quality, ordering, and representativeness of the examples strongly influence output accuracy and consistency.
