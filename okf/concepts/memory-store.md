---
okf_version: "0.2"
type: Class
title: Memory Store
resource: urn:ngm:class:memory-store
domain: ai
description: A memory store is the persistence layer in an AI agent system that retains information across turns and sessions for later retrieval. It typically holds conversation history, facts, and learned context, often as embeddings in a vector database to enable semantic recall. The memory store is what allows agents to maintain continuity, personalise responses, and accumulate knowledge beyond a single co
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-agent-system
relatedTo:
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:context-engineering
---

# Memory Store

A memory store is the persistence layer in an AI agent system that retains information across turns and sessions for later retrieval. It typically holds conversation history, facts, and learned context, often as embeddings in a vector database to enable semantic recall. The memory store is what allows agents to maintain continuity, personalise responses, and accumulate knowledge beyond a single context window.
