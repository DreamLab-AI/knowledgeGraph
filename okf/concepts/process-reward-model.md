---
okf_version: "0.2"
type: Class
title: Process Reward Model
resource: urn:ngm:class:process-reward-model
domain: artificial-intelligence
description: A process reward model is a reward model that scores the individual intermediate steps of a model's reasoning trajectory rather than only its final answer. By supervising each step of a chain of thought, it provides dense, step-level feedback that guides search and reinforcement learning toward sound reasoning processes. Process reward models contrast with outcome reward models, which assign a sin
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:reward-model
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:reward-modelling
requires:
  - urn:ngm:class:large-language-model
enables:
  - urn:ngm:class:reasoning
dependsOn:
  - urn:ngm:class:reward-model
implements:
  - urn:ngm:class:preference-learning
uses:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:reward-modelling
supports:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
partOf:
  - urn:ngm:class:reward-model
  - urn:ngm:class:reinforcement-learning
relatedTo:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:reasoning
  - urn:ngm:class:preference-learning
---

# Process Reward Model

A process reward model is a reward model that scores the individual intermediate steps of a model's reasoning trajectory rather than only its final answer. By supervising each step of a chain of thought, it provides dense, step-level feedback that guides search and reinforcement learning toward sound reasoning processes. Process reward models contrast with outcome reward models, which assign a single reward based solely on the final result.
