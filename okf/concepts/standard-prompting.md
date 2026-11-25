---
okf_version: "0.2"
type: Class
title: Standard Prompting
resource: urn:ngm:class:standard-prompting
domain: artificial-intelligence
description: Standard prompting is the baseline method of querying a large language model by providing an instruction or question, optionally with input-output examples, and expecting an answer without an elicited reasoning process. It establishes the reference behaviour against which more elaborate strategies such as chain-of-thought, self-consistency and tool-augmented prompting are compared. Standard prompt
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:prompt-engineering
hasPart:
  - urn:ngm:class:zero-shot-prompting
  - urn:ngm:class:few-shot-prompting
requires:
  - urn:ngm:class:large-language-model
enables:
  - urn:ngm:class:in-context-learning
dependsOn:
  - urn:ngm:class:large-language-model
contrastsWith:
  - urn:ngm:class:chain-of-thought-reasoning
  - urn:ngm:class:direct-answer-prompting
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
  - urn:ngm:class:prompt-template
  - urn:ngm:class:in-context-learning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Standard Prompting

Standard prompting is the baseline method of querying a large language model by providing an instruction or question, optionally with input-output examples, and expecting an answer without an elicited reasoning process. It establishes the reference behaviour against which more elaborate strategies such as chain-of-thought, self-consistency and tool-augmented prompting are compared. Standard prompting subsumes zero-shot and few-shot formulations that map directly from prompt to answer.
