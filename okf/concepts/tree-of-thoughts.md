---
okf_version: "0.2"
type: Class
title: Tree of Thoughts
resource: urn:ngm:class:tree-of-thoughts
domain: artificial-intelligence
description: Tree of Thoughts (ToT) is a deliberate reasoning framework for large language models that generalises linear chain-of-thought prompting into a tree-structured search over intermediate thought steps. At each node in the tree the model generates multiple candidate next-thoughts, evaluates their promise using an LLM-based heuristic, and selects branches to expand via breadth-first or depth-first sear
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:thought-generator
  - urn:ngm:class:thought-evaluator
  - urn:ngm:class:search-algorithm
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:prompt-engineering
enables:
  - urn:ngm:class:mathematical-reasoning
  - urn:ngm:class:automated-planning
  - urn:ngm:class:multi-step-reasoning
  - urn:ngm:class:combinatorial-problem-solving
contrastsWith:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:self-consistency
  - urn:ngm:class:react-prompting
bridgesTo:
  - urn:ngm:class:heuristic-search
  - urn:ngm:class:reinforcement-learning
uses:
  - urn:ngm:class:breadth-first-search
  - urn:ngm:class:depth-first-search
  - urn:ngm:class:beam-search
  - urn:ngm:class:backtracking
partOf:
  - urn:ngm:class:inference-compute
  - urn:ngm:class:reasoning
  - urn:ngm:class:inference-compute
  - urn:ngm:class:reasoning
relatedTo:
  - urn:ngm:class:monte-carlo-tree-search
  - urn:ngm:class:process-reward-model
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:graph-of-thoughts
  - urn:ngm:class:skeleton-of-thought
---

# Tree of Thoughts

Tree of Thoughts (ToT) is a deliberate reasoning framework for large language models that generalises linear chain-of-thought prompting into a tree-structured search over intermediate thought steps. At each node in the tree the model generates multiple candidate next-thoughts, evaluates their promise using an LLM-based heuristic, and selects branches to expand via breadth-first or depth-first search with backtracking. This enables systematic exploration of alternative reasoning paths and is particularly effective for combinatorial planning, mathematical proof construction, or multi-step problem-solving where greedy left-to-right decoding is insufficient. ToT was formalised by Yao et al. (2023) and represents the foundational instance of inference-time compute scaling through structured search.
