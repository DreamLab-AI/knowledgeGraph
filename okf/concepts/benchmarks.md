---
okf_version: "0.2"
type: Class
title: Benchmarks
resource: urn:ngm:class:benchmarks
domain: ai
description: Benchmarks are standardised tasks, datasets, or workloads used to measure and compare the capabilities or performance of systems, models, or components under controlled, reproducible conditions. In artificial intelligence they encompass curated evaluation suites that probe language understanding, mathematical reasoning, coding, and multimodal perception to produce comparable scores across model ge
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:reproducibility
hasPart:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:held-out-test-sets
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:annotation-pipelines
  - urn:ngm:class:datasets
  - urn:ngm:class:model-cards
requires:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:held-out-test-sets
  - urn:ngm:class:annotation-pipelines
  - urn:ngm:class:data-curation
  - urn:ngm:class:evaluation-harness
enables:
  - urn:ngm:class:model-evaluation-results
  - urn:ngm:class:model-performance
  - urn:ngm:class:reproducibility
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:model-selection
  - urn:ngm:class:model-comparison
dependsOn:
  - urn:ngm:class:data-curation
  - urn:ngm:class:annotation-pipelines
  - urn:ngm:class:statistical-testing
implements:
  - urn:ngm:class:evaluation-harness
  - urn:ngm:class:scoring-function
  - urn:ngm:class:task-formulation
contrastsWith:
  - urn:ngm:class:human-evaluation
  - urn:ngm:class:ablation-studies
bridgesTo:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:hardware-performance
  - urn:ngm:class:ai-regulation
  - urn:ngm:class:eu-ai-act-regulatory-instrument
uses:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:statistical-testing
  - urn:ngm:class:datasets
  - urn:ngm:class:ground-truth-labels
supports:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:model-selection
  - urn:ngm:class:mlops
  - urn:ngm:class:software-testing
  - urn:ngm:class:ai-safety
  - urn:ngm:class:responsible-ai
standardizedBy:
  - urn:ngm:class:mlcommons
  - urn:ngm:class:spec
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-rmf
partOf:
  - urn:ngm:class:scientific-method
  - urn:ngm:class:empirical-research
  - urn:ngm:class:machine-learning-research-infrastructure
relatedTo:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:software-testing
  - urn:ngm:class:adversarial-testing
  - urn:ngm:class:model-cards
  - urn:ngm:class:bias-and-fairness
  - urn:ngm:class:overfitting
  - urn:ngm:class:benign-overfitting
  - urn:ngm:class:goodhart-s-law
  - urn:ngm:class:ablation-studies
  - urn:ngm:class:calibration
  - urn:ngm:class:regularisation
  - urn:ngm:class:deep-learning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:foundation-model
  - urn:ngm:class:annotation-pipelines
---

# Benchmarks

Benchmarks are standardised tasks, datasets, or workloads used to measure and compare the capabilities or performance of systems, models, or components under controlled, reproducible conditions. In artificial intelligence they encompass curated evaluation suites that probe language understanding, mathematical reasoning, coding, and multimodal perception to produce comparable scores across model generations and research groups. In computing, robotics, and hardware engineering, benchmarks quantify throughput, latency, accuracy, and energy efficiency against fixed reference workloads. Benchmark results are published via leaderboards and model cards to support reproducible science, informed procurement, and regulatory accountability.
