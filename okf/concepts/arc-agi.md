---
okf_version: "0.2"
type: Class
title: ARC-AGI
resource: urn:ngm:class:arc-agi
domain: ai
description: ARC-AGI (Abstraction and Reasoning Corpus for Artificial General Intelligence) is a benchmark designed by François Chollet and published in 2019 to measure general fluid intelligence in AI systems through abstract visual pattern completion tasks that require novel rule induction rather than pattern recall from training data. Each task presents a small number of input-output grid transformation exa
maturity: emerging
quality: 0.9
is-a:
  - urn:ngm:class:benchmarks
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:benchmark-evaluation
hasPart:
  - urn:ngm:class:arc-agi-2
  - urn:ngm:class:arc-agi-3
  - urn:ngm:class:arc-prize
  - urn:ngm:class:grid-based-tasks
  - urn:ngm:class:core-knowledge-priors
  - urn:ngm:class:evaluation-leaderboard
requires:
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:reasoning
  - urn:ngm:class:visual-reasoning
  - urn:ngm:class:few-shot-generalisation
  - urn:ngm:class:core-knowledge-priors
enables:
  - urn:ngm:class:reasoning
  - urn:ngm:class:pattern-recognition
  - urn:ngm:class:generalisation
  - urn:ngm:class:benchmark-evaluation
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:ai-safety-research
dependsOn:
  - urn:ngm:class:cognitive-science
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:programme-synthesis
implements:
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:benchmark-dataset
  - urn:ngm:class:evaluation-metric
contrastsWith:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transfer-learning
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:cognitive-science
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:benchmark-dataset
  - urn:ngm:class:domain-specific-language
  - urn:ngm:class:inductive-logic-programming
supports:
  - urn:ngm:class:artificial-general-intelligence
  - urn:ngm:class:ai-benchmark-epistemological-critique
  - urn:ngm:class:neuro-symbolic-ai
  - urn:ngm:class:chain-of-thought-reasoning
standardizedBy:
  - urn:ngm:class:arc-prize
relatedTo:
  - urn:ngm:class:artificial-general-intelligence
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:ai-safety-research
  - urn:ngm:class:ai-benchmark-epistemological-critique
  - urn:ngm:class:neuro-symbolic-ai
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:automated-reasoning
---

# ARC-AGI

ARC-AGI (Abstraction and Reasoning Corpus for Artificial General Intelligence) is a benchmark designed by François Chollet and published in 2019 to measure general fluid intelligence in AI systems through abstract visual pattern completion tasks that require novel rule induction rather than pattern recall from training data. Each task presents a small number of input-output grid transformation examples from which the solver must infer the underlying rule and apply it to a new input, using only core knowledge priors available to young children. The benchmark explicitly resists solution by memorisation, making it a proxy test for human-like generalisation ability.
