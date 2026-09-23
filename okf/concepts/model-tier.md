---
okf_version: "0.2"
type: Class
title: Model Tier
resource: urn:ngm:class:model-tier
domain: ai
description: A model tier is a named capability-and-cost band into which the language models available to an agent system are grouped, so that work can be routed to the cheapest model that is competent for it. A typical scheme distinguishes a small fast tier for classification and routing, a mid tier for routine generation, and a frontier tier for hard reasoning, each with characteristic latency, price per tok
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:model-selection
  - urn:ngm:class:modelselection
enables:
  - urn:ngm:class:cost-optimisation
  - urn:ngm:class:costoptimisation
uses:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:largelanguagemodel
partOf:
  - urn:ngm:class:llm-orchestration
  - urn:ngm:class:llmorchestration
relatedTo:
  - urn:ngm:class:cost-efficient-inference
  - urn:ngm:class:costefficientinference
---

# Model Tier

A model tier is a named capability-and-cost band into which the language models available to an agent system are grouped, so that work can be routed to the cheapest model that is competent for it. A typical scheme distinguishes a small fast tier for classification and routing, a mid tier for routine generation, and a frontier tier for hard reasoning, each with characteristic latency, price per token, and quality envelope. Tiering turns the continuous space of model choices into a discrete policy surface that orchestration layers can reason about, enabling deliberate trade-offs between spend, speed, and answer quality across a workload.
