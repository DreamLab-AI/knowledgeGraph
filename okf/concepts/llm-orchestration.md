---
okf_version: "0.2"
type: Class
title: LLM Orchestration
resource: urn:ngm:class:llm-orchestration
domain: ai
description: The coordination of multiple calls to one or more large language models, together with tools, retrieval and control logic, to accomplish a task that a single prompt cannot reliably handle.
maturity: growing
quality: 0.6
is-a:
  - urn:ngm:class:large-language-model
requires:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:tool-use
enables:
  - urn:ngm:class:retrieval-augmented-generation
bridgesTo:
  - urn:ngm:class:lang-chain
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# LLM Orchestration

The coordination of multiple calls to one or more large language models, together with tools, retrieval and control logic, to accomplish a task that a single prompt cannot reliably handle.
