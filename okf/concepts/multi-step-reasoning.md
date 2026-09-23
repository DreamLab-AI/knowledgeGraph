---
okf_version: "0.2"
type: Class
title: Multi-Step Reasoning
resource: urn:ngm:class:multi-step-reasoning
domain: ai
description: Multi-step reasoning is the capacity of an AI system to solve problems that require chaining several intermediate inferences, rather than mapping an input directly to an answer in a single step. It encompasses decomposing a problem into sub-problems, maintaining and updating intermediate state, and composing partial results into a final solution. In large language models it is elicited through cha
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:reasoning
hasPart:
  - urn:ngm:class:task-decomposition
requires:
  - urn:ngm:class:working-memory
  - urn:ngm:class:self-consistency
enables:
  - urn:ngm:class:reasoning-engine
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:question-answering
dependsOn:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:attention-mechanism
contrastsWith:
  - urn:ngm:class:inference
  - urn:ngm:class:pattern-matching
bridgesTo:
  - urn:ngm:class:automated-reasoning
uses:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:tree-of-thoughts
  - urn:ngm:class:tool-use
partOf:
  - urn:ngm:class:cognitive-architecture
relatedTo:
  - urn:ngm:class:llm-agents
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:planning
  - urn:ngm:class:mathematical-reasoning
---

# Multi-Step Reasoning

Multi-step reasoning is the capacity of an AI system to solve problems that require chaining several intermediate inferences, rather than mapping an input directly to an answer in a single step. It encompasses decomposing a problem into sub-problems, maintaining and updating intermediate state, and composing partial results into a final solution. In large language models it is elicited through chain-of-thought prompting, tool use, and search over reasoning paths, and it is a primary differentiator between shallow pattern completion and genuine problem-solving competence.
