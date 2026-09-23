---
okf_version: "0.2"
type: Class
title: Benchmark Evaluation
resource: urn:ngm:class:benchmark-evaluation
domain: ai
description: "Benchmark evaluation is the systematic measurement of a model or system against a standardised dataset and scoring protocol so that results are comparable across systems and over time. A benchmark specifies the task, the data splits, the permitted inputs, and the metrics used to rank performance. In machine learning, benchmark evaluation drives the field's empirical progress, but it is subject to "
maturity: established
quality: 0.78
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-evaluation
  - urn:ngm:class:benchmarking
hasPart:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:benchmark-dataset
  - urn:ngm:class:leaderboard
  - urn:ngm:class:model-evaluation-results
requires:
  - urn:ngm:class:benchmark-dataset
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:statistical-hypothesis-testing
enables:
  - urn:ngm:class:model-evaluation-results
  - urn:ngm:class:leaderboard
  - urn:ngm:class:reproducibility
  - urn:ngm:class:capability-evaluation
  - urn:ngm:class:frontier-model-evaluation
dependsOn:
  - urn:ngm:class:data-annotation
  - urn:ngm:class:data-quality
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:evaluation-harness
implements:
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:benchmarking
contrastsWith:
  - urn:ngm:class:human-evaluation
  - urn:ngm:class:heuristic-evaluation
  - urn:ngm:class:ai-benchmark-epistemological-critique
uses:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:performance-benchmarks
  - urn:ngm:class:benchmark-dataset
  - urn:ngm:class:evaluation-harness
  - urn:ngm:class:statistical-hypothesis-testing
  - urn:ngm:class:cross-validation
supports:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:question-answering
  - urn:ngm:class:deep-learning
  - urn:ngm:class:large-language-models
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:transfer-learning
standardizedBy:
  - urn:ngm:class:mlcommons
  - urn:ngm:class:benchmark-standard
relatedTo:
  - urn:ngm:class:evaluation-harness
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:ai-benchmark-epistemological-critique
  - urn:ngm:class:frontier-model-evaluation
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:mlcommons
  - urn:ngm:class:beir-benchmark
  - urn:ngm:class:mteb-benchmark
  - urn:ngm:class:overfitting
  - urn:ngm:class:bias
  - urn:ngm:class:ai-ethics
  - urn:ngm:class:red-teaming
---

# Benchmark Evaluation

Benchmark evaluation is the systematic measurement of a model or system against a standardised dataset and scoring protocol so that results are comparable across systems and over time. A benchmark specifies the task, the data splits, the permitted inputs, and the metrics used to rank performance. In machine learning, benchmark evaluation drives the field's empirical progress, but it is subject to well-known failure modes including train-test contamination, overfitting to leaderboards, and construct validity gaps between the benchmark and the real-world capability it purports to measure.
