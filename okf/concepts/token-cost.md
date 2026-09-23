---
okf_version: "0.2"
type: Class
title: Token Cost
resource: urn:ngm:class:token-cost
domain: artificial-intelligence
description: "Token cost is the economic and computational expense incurred when a large language model consumes and produces tokens, calculated as the sum of input (prompt) tokens and output (completion) tokens multiplied by their respective per-token prices, and it constitutes the dominant recurring cost driver of deployed generative-AI and agent-orchestration systems. Because providers meter usage in tokens "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:performance-metrics
requires:
  - urn:ngm:class:tokeniser
enables:
  - urn:ngm:class:cost-efficient-inference
  - urn:ngm:class:cost-optimisation
contrastsWith:
  - urn:ngm:class:latency
relatedTo:
  - urn:ngm:class:context-window
  - urn:ngm:class:large-language-model
---

# Token Cost

Token cost is the economic and computational expense incurred when a large language model consumes and produces tokens, calculated as the sum of input (prompt) tokens and output (completion) tokens multiplied by their respective per-token prices, and it constitutes the dominant recurring cost driver of deployed generative-AI and agent-orchestration systems. Because providers meter usage in tokens rather than requests, token cost scales super-linearly with prompt length, conversation history, retrieved context, tool-call payloads, and multi-step agent fan-out, making it the primary budget variable an orchestrator must forecast, cap, and attribute. Managing token cost involves measurement (counting tokens per call and per session), attribution (allocating spend to tasks, agents, or tenants), and reduction levers such as prompt compression, context pruning, caching, model-tier routing, and truncation of chat history against the model context window.
