---
okf_version: "0.2"
type: Class
title: OpenAI API
resource: urn:ngm:class:openai-research-organisation-api
domain: ai
description: The OpenAI API is a hosted programming interface that gives developers access to OpenAI's models for text generation, reasoning, embeddings, image generation, speech, and tool use over HTTP. Exposing capabilities through endpoints such as chat completions, responses, and embeddings, it abstracts model hosting, scaling, and inference behind a usage-priced REST interface with structured outputs, fun
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:api
enables:
  - urn:ngm:class:llm-application-framework
  - urn:ngm:class:prompt-engineering
implements:
  - urn:ngm:class:rest-api
relatedTo:
  - urn:ngm:class:gpt
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# OpenAI API

The OpenAI API is a hosted programming interface that gives developers access to OpenAI's models for text generation, reasoning, embeddings, image generation, speech, and tool use over HTTP. Exposing capabilities through endpoints such as chat completions, responses, and embeddings, it abstracts model hosting, scaling, and inference behind a usage-priced REST interface with structured outputs, function calling, and streaming. Its conventions have become a de facto standard widely emulated by other providers and compatible open-source serving stacks.
