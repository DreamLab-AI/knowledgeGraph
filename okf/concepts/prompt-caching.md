---
okf_version: "0.2"
type: Class
title: Prompt Caching
resource: urn:ngm:class:prompt-caching
domain: artificial-intelligence
description: Prompt caching is an inference optimisation in which the key-value attention state for a shared, unchanging prefix of a prompt -- such as a system prompt or long context document -- is computed once and reused across subsequent requests, avoiding redundant computation. It reduces latency and cost for workloads that repeatedly send the same long context with only a short suffix varying between call
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:caching
enables:
  - urn:ngm:class:context-engineering
uses:
  - urn:ngm:class:kv-cache
partOf:
  - urn:ngm:class:caching
---

# Prompt Caching

Prompt caching is an inference optimisation in which the key-value attention state for a shared, unchanging prefix of a prompt -- such as a system prompt or long context document -- is computed once and reused across subsequent requests, avoiding redundant computation. It reduces latency and cost for workloads that repeatedly send the same long context with only a short suffix varying between calls. It builds directly on KV cache mechanisms and is a common lever in context engineering for large language model applications.
