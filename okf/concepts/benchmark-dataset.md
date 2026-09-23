---
okf_version: "0.2"
type: Class
title: Benchmark Dataset
resource: urn:ngm:class:benchmark-dataset
domain: machine-learning
description: A benchmark dataset is a standardised, publicly shared collection of data with established splits and evaluation protocols, used to compare the performance of machine-learning models on a common task. By fixing the data, metrics, and procedure, benchmarks enable fair, reproducible comparison and track progress over time. Well-known benchmarks have driven advances in computer vision, natural langua
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:dataset
  - urn:ngm:class:labelled-dataset
hasPart:
  - urn:ngm:class:training-data
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:data-annotation
  - urn:ngm:class:leaderboard
requires:
  - urn:ngm:class:data-annotation
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:data-curation
  - urn:ngm:class:data-quality
enables:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:reproducibility
  - urn:ngm:class:benchmark-evaluation
  - urn:ngm:class:capability-evaluation
  - urn:ngm:class:transfer-learning
dependsOn:
  - urn:ngm:class:data-curation
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:data-quality
  - urn:ngm:class:human-evaluation
implements:
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:benchmarking
contrastsWith:
  - urn:ngm:class:ai-benchmark-epistemological-critique
  - urn:ngm:class:overfitting
uses:
  - urn:ngm:class:training-data
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:cross-validation
supports:
  - urn:ngm:class:image-classification
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:object-detection
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:question-answering
  - urn:ngm:class:computer-vision
  - urn:ngm:class:deep-learning
standardizedBy:
  - urn:ngm:class:mlcommons
  - urn:ngm:class:benchmark-standard
partOf:
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:benchmarking
  - urn:ngm:class:leaderboard
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:performance-benchmarks
  - urn:ngm:class:large-scale-datasets
  - urn:ngm:class:beir-benchmark
  - urn:ngm:class:coco-dataset
  - urn:ngm:class:frontier-model-evaluation
  - urn:ngm:class:human-evaluation
  - urn:ngm:class:model-evaluation-results
---

# Benchmark Dataset

A benchmark dataset is a standardised, publicly shared collection of data with established splits and evaluation protocols, used to compare the performance of machine-learning models on a common task. By fixing the data, metrics, and procedure, benchmarks enable fair, reproducible comparison and track progress over time. Well-known benchmarks have driven advances in computer vision, natural language processing, and many other fields.
