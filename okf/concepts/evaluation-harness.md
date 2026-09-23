---
okf_version: "0.2"
type: Class
title: Evaluation Harness
resource: urn:ngm:class:evaluation-harness
domain: ai
description: An evaluation harness is a software framework that automates the systematic assessment of AI model capabilities across standardised benchmark tasks, providing reproducible prompt formatting, answer extraction, scoring, and aggregated reporting. It enables consistent, comparable measurement of model performance across tasks, modalities, and versions, forming the backbone of LLM leaderboards and mod
maturity: emerging
quality: 0.88
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-evaluation
  - urn:ngm:class:benchmarks
  - urn:ngm:class:reproducibility
hasPart:
  - urn:ngm:class:benchmark-registry
  - urn:ngm:class:model-backend
  - urn:ngm:class:prompt-template
  - urn:ngm:class:answer-extractor
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:results-aggregator
  - urn:ngm:class:decontamination-pipeline
requires:
  - urn:ngm:class:benchmarks
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:large-language-models
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:held-out-test-sets
enables:
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:model-evaluation-results
  - urn:ngm:class:reproducibility
  - urn:ngm:class:model-selection
  - urn:ngm:class:ai-governance
  - urn:ngm:class:mlops
  - urn:ngm:class:frontier-model-evaluation
dependsOn:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:benchmarks
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:datasets
  - urn:ngm:class:neural-network-text-tokenisation
implements:
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:scoring-protocol
  - urn:ngm:class:evaluation-harness
  - urn:ngm:class:continuous-integration
contrastsWith:
  - urn:ngm:class:human-evaluation
  - urn:ngm:class:chatbot-arena
  - urn:ngm:class:manual-testing
  - urn:ngm:class:red-teaming
uses:
  - urn:ngm:class:benchmarks
  - urn:ngm:class:large-language-models
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:prompt-template
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:chain-of-thought
supports:
  - urn:ngm:class:model-selection
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-safety
  - urn:ngm:class:ai-governance
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:alignment
standardizedBy:
  - urn:ngm:class:eleutherai
  - urn:ngm:class:stanford-crfm
  - urn:ngm:class:mlcommons
  - urn:ngm:class:hugging-face
relatedTo:
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:helm
  - urn:ngm:class:agent-harness
  - urn:ngm:class:external-ai-harness
  - urn:ngm:class:capability-evaluation
  - urn:ngm:class:frontier-model-evaluation
  - urn:ngm:class:ai-benchmark-epistemological-critique
  - urn:ngm:class:benchmark-dataset
  - urn:ngm:class:model-cards
---

# Evaluation Harness

An evaluation harness is a software framework that automates the systematic assessment of AI model capabilities across standardised benchmark tasks, providing reproducible prompt formatting, answer extraction, scoring, and aggregated reporting. It enables consistent, comparable measurement of model performance across tasks, modalities, and versions, forming the backbone of LLM leaderboards and model selection workflows.
