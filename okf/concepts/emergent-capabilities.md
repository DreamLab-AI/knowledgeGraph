---
okf_version: "0.2"
type: Class
title: Emergent Capabilities
resource: urn:ngm:class:emergent-capabilities
domain: artificial-intelligence
description: Emergent Capabilities are abilities that appear in large language models at scale but are absent or near-random in smaller models, seemingly arising abruptly as parameters, data, or compute increase. Examples include multi-step reasoning, in-context learning, and instruction following. Their unpredictability complicates capability forecasting and is central to debates about scaling and AI safety.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:emergent-behavior
  - urn:ngm:class:scaling-laws
hasPart:
  - urn:ngm:class:chain-of-thought-reasoning
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:instruction-following
  - urn:ngm:class:tool-use
  - urn:ngm:class:phase-transition
  - urn:ngm:class:grokking
requires:
  - urn:ngm:class:large-scale-pretraining
  - urn:ngm:class:compute-resources
  - urn:ngm:class:training-data
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:model-scale
enables:
  - urn:ngm:class:chain-of-thought-reasoning
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:instruction-following
  - urn:ngm:class:tool-use
  - urn:ngm:class:capability-forecasting
  - urn:ngm:class:ai-safety
  - urn:ngm:class:artificial-general-intelligence
dependsOn:
  - urn:ngm:class:model-scale
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:large-scale-pretraining
  - urn:ngm:class:compute-resources
  - urn:ngm:class:training-data
implements:
  - urn:ngm:class:phase-transition
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:emergent-behavior
contrastsWith:
  - urn:ngm:class:narrow-ai
  - urn:ngm:class:smooth-scaling
  - urn:ngm:class:explicit-programming
  - urn:ngm:class:scripted-behavior
bridgesTo:
  - urn:ngm:class:artificial-general-intelligence
  - urn:ngm:class:robotics
  - urn:ngm:class:autonomous-ai-agents
uses:
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:benchmark-evaluation
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:big-bench
supports:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:capability-forecasting
  - urn:ngm:class:frontier-models
  - urn:ngm:class:agent-based-modelling
standardizedBy:
  - urn:ngm:class:big-bench
  - urn:ngm:class:helm
  - urn:ngm:class:mmlu
relatedTo:
  - urn:ngm:class:model-training
  - urn:ngm:class:frontier-models
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:capability-evaluation
  - urn:ngm:class:phase-transition
  - urn:ngm:class:grokking
  - urn:ngm:class:emergent-behavior
  - urn:ngm:class:ai-safety
  - urn:ngm:class:artificial-general-intelligence
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:instruction-tuning
---

# Emergent Capabilities

Emergent Capabilities are abilities that appear in large language models at scale but are absent or near-random in smaller models, seemingly arising abruptly as parameters, data, or compute increase. Examples include multi-step reasoning, in-context learning, and instruction following. Their unpredictability complicates capability forecasting and is central to debates about scaling and AI safety.
