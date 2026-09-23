---
okf_version: "0.2"
type: Class
title: Dataset
resource: urn:ngm:class:dataset
domain: artificial-intelligence
description: A Dataset is a structured collection of data records sharing a common schema, gathered for a specific purpose such as training machine learning models, conducting research, or supporting analytics. Datasets are characterised by their size, modality (text, image, tabular, audio, video, graph, etc.), provenance, and licensing terms, all of which affect their fitness for use. Data quality, curation m
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:data-architecture
  - urn:ngm:class:computational-modelling
hasPart:
  - urn:ngm:class:data-record
  - urn:ngm:class:schema
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:metadata
  - urn:ngm:class:data-split
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:data-schema
  - urn:ngm:class:data-versioning
requires:
  - urn:ngm:class:data-collection
  - urn:ngm:class:data-cleaning
  - urn:ngm:class:data-annotation
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-lineage
  - urn:ngm:class:data-labelling
  - urn:ngm:class:data-provenance
enables:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:benchmarking
  - urn:ngm:class:data-analysis
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:active-learning
dependsOn:
  - urn:ngm:class:data-quality
  - urn:ngm:class:data-curation
  - urn:ngm:class:data-catalogue
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-management
  - urn:ngm:class:data-management-system
implements:
  - urn:ngm:class:data-governance-framework
  - urn:ngm:class:reproducibility
  - urn:ngm:class:open-data
  - urn:ngm:class:data-ethics
contrastsWith:
  - urn:ngm:class:benchmark-dataset
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:data-lake
  - urn:ngm:class:data-management-system
uses:
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:data-augmentation-strategies
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:active-learning
  - urn:ngm:class:cross-validation
  - urn:ngm:class:federated-learning
  - urn:ngm:class:differential-privacy
supports:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:large-language-models
  - urn:ngm:class:foundation-model
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:feature-engineering
standardizedBy:
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-governance-framework
  - urn:ngm:class:eu-ai-act-regulatory-instrument
relatedTo:
  - urn:ngm:class:computational-modelling
  - urn:ngm:class:data-quality
  - urn:ngm:class:bias
  - urn:ngm:class:fairness
  - urn:ngm:class:privacy
  - urn:ngm:class:regulation
  - urn:ngm:class:overfitting
  - urn:ngm:class:imbalanced-data
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:data-centric-ai
  - urn:ngm:class:data-ethics
---

# Dataset

A Dataset is a structured collection of data records sharing a common schema, gathered for a specific purpose such as training machine learning models, conducting research, or supporting analytics. Datasets are characterised by their size, modality (text, image, tabular, audio, video, graph, etc.), provenance, and licensing terms, all of which affect their fitness for use. Data quality, curation methodology, and bias documentation are critical attributes that determine the reliability of downstream AI systems. The movement from model-centric to data-centric AI has elevated dataset engineering to a first-class research and engineering discipline, with dataset documentation frameworks such as Datasheets for Datasets, Dataset Nutrition Labels, and the Croissant machine-readable format formalising the metadata contract between dataset creators and downstream consumers.
