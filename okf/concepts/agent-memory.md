---
okf_version: "0.2"
type: Class
title: Agent Memory
resource: urn:ngm:class:agent-memory
domain: artificial-intelligence
description: "Agent memory is the structured ensemble of mechanisms by which an autonomous AI agent stores, indexes, consolidates, retrieves, and forgets information across steps, sessions, and lifetimes — enabling coherent, personalised, and long-horizon behaviour that transcends the hard limit of any single context window. It encompasses four functionally distinct tiers: working memory (active context window)"
maturity: emerging
quality: 0.88
is-a:
  - urn:ngm:class:ai-agent
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:memory-management
hasPart:
  - urn:ngm:class:episodic-memory
  - urn:ngm:class:semantic-memory
  - urn:ngm:class:procedural-memory
  - urn:ngm:class:working-memory
  - urn:ngm:class:long-term-memory
  - urn:ngm:class:knowledge-graph
requires:
  - urn:ngm:class:vector-database
  - urn:ngm:class:embeddings
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:context-window
  - urn:ngm:class:foundation-model
  - urn:ngm:class:large-language-models
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:personalisation
  - urn:ngm:class:long-horizon-task-execution
  - urn:ngm:class:continual-learning
  - urn:ngm:class:task-automation
  - urn:ngm:class:planning-and-scheduling
  - urn:ngm:class:self-reflection
  - urn:ngm:class:in-context-learning
dependsOn:
  - urn:ngm:class:embeddings
  - urn:ngm:class:vector-database
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:reasoning-engine
implements:
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:reflexion
  - urn:ngm:class:chain-of-thought
contrastsWith:
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:context-window
bridgesTo:
  - urn:ngm:class:agent-loop
  - urn:ngm:class:tool-use
  - urn:ngm:class:cognitive-architecture
uses:
  - urn:ngm:class:pinecone
  - urn:ngm:class:pgvector
  - urn:ngm:class:weaviate
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:temporal-reasoning
supports:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:ai-safety
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:provenance
  - urn:ngm:class:agent-identity
relatedTo:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:hallucination
  - urn:ngm:class:forgetting
  - urn:ngm:class:data-compression
  - urn:ngm:class:privacy
  - urn:ngm:class:gdpr
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:consolidation
---

# Agent Memory

Agent memory is the structured ensemble of mechanisms by which an autonomous AI agent stores, indexes, consolidates, retrieves, and forgets information across steps, sessions, and lifetimes — enabling coherent, personalised, and long-horizon behaviour that transcends the hard limit of any single context window. It encompasses four functionally distinct tiers: working memory (active context window); episodic memory (timestamped records of prior observations, actions, and outcomes); semantic memory (declarative facts, entity relationships, and world knowledge); and procedural memory (skill programs, tool-use patterns, and reusable plan templates).
