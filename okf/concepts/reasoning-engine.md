---
okf_version: "0.2"
type: Class
title: Reasoning Engine
resource: urn:ngm:class:reasoning-engine
domain: ai
description: A reasoning engine is a software component that derives new conclusions from a body of knowledge by applying logical inference rules, probabilistic methods, or learned heuristics. Classical reasoning engines operate over symbolic knowledge bases using forward or backward chaining, description-logic subsumption, or constraint solving, while modern neuro-symbolic and LLM-based engines combine learne
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:reasoning
enables:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:multi-step-reasoning
uses:
  - urn:ngm:class:knowledge-graph
relatedTo:
  - urn:ngm:class:llm-agents
  - urn:ngm:class:semantic-web-linked-data-standard
---

# Reasoning Engine

A reasoning engine is a software component that derives new conclusions from a body of knowledge by applying logical inference rules, probabilistic methods, or learned heuristics. Classical reasoning engines operate over symbolic knowledge bases using forward or backward chaining, description-logic subsumption, or constraint solving, while modern neuro-symbolic and LLM-based engines combine learned language representations with structured tool use and search. Reasoning engines power expert systems, semantic-web query answering, automated planning, and multi-step problem solving in agentic AI systems. In the DreamLab mesh the reasoning engine is Whelk, an OWL 2 EL classifier that derives entailments and rejects contradictions before they enter the shared knowledge graph.
