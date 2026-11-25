---
okf_version: "0.2"
type: Class
title: Open AI Chat Completions API
resource: urn:ngm:class:openai-research-organisation-chat-completions-api
domain: ai
description: The OpenAI Chat Completions API is a widely adopted HTTP interface for sending a sequence of role-tagged messages to a large language model and receiving a generated response. Its request and response schema, including roles, tool-calling, and streaming, has become a de facto interoperability standard implemented by many open-source and third-party inference servers. This compatibility lets applic
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-infrastructure
relatedTo:
  - urn:ngm:class:open-generative-ai-tools
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Open AI Chat Completions API

The OpenAI Chat Completions API is a widely adopted HTTP interface for sending a sequence of role-tagged messages to a large language model and receiving a generated response. Its request and response schema, including roles, tool-calling, and streaming, has become a de facto interoperability standard implemented by many open-source and third-party inference servers. This compatibility lets applications swap model backends with minimal code change.
