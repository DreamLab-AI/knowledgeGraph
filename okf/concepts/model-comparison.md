---
okf_version: "0.2"
type: Class
title: Model Comparison
resource: urn:ngm:class:model-comparison
domain: ai
description: Model comparison is the systematic process of evaluating and contrasting multiple machine learning or AI models against a common set of tasks, datasets, and metrics to determine their relative strengths, weaknesses, and suitability for deployment. It encompasses both quantitative benchmarking and qualitative assessment of factors such as computational cost, latency, robustness, and alignment prope
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:ai-evaluation
requires:
  - urn:ngm:class:performance-metrics
enables:
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:ai-model-card
  - urn:ngm:class:model-selection
  - urn:ngm:class:responsible-ai
dependsOn:
  - urn:ngm:class:foundation-model
implements:
  - urn:ngm:class:optimality
  - urn:ngm:class:multi-objective-optimisation
contrastsWith:
  - urn:ngm:class:human-evaluation
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:ai-regulation
uses:
  - urn:ngm:class:benchmarks
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:statistical-testing
relatedTo:
  - urn:ngm:class:model-performance
  - urn:ngm:class:model-evaluation-results
  - urn:ngm:class:fairness-accuracy-tradeoffs
  - urn:ngm:class:reproducibility
  - urn:ngm:class:leaderboard
---

# Model Comparison

Model comparison is the systematic process of evaluating and contrasting multiple machine learning or AI models against a common set of tasks, datasets, and metrics to determine their relative strengths, weaknesses, and suitability for deployment. It encompasses both quantitative benchmarking and qualitative assessment of factors such as computational cost, latency, robustness, and alignment properties. Rigorous model comparison underpins reproducible research and responsible AI deployment decisions. The discipline has grown substantially as the proliferation of foundation models makes vendor-neutral evaluation increasingly critical.
