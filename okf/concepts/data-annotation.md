---
okf_version: "0.2"
type: Class
title: Data Annotation
resource: urn:ngm:class:data-annotation
domain: machine-learning
description: Data Annotation is the process of labeling or tagging raw data (images, text, audio, video) with structured, meaningful labels that provide ground truth for supervised machine learning models, enabling algorithms to learn from human-validated examples.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:machine-learning-discipline-pipeline
hasPart:
  - urn:ngm:class:inter-annotator-agreement
  - urn:ngm:class:quality-control
requires:
  - urn:ngm:class:raw-data
  - urn:ngm:class:human-annotator
enables:
  - urn:ngm:class:training-data
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:active-learning
dependsOn:
  - urn:ngm:class:data-collection
  - urn:ngm:class:data-preprocessing
contrastsWith:
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:synthetic-data-generation
bridgesTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:privacy-regulation
uses:
  - urn:ngm:class:crowdsourcing
  - urn:ngm:class:active-learning
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:speech-recognition
relatedTo:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:object-detection
  - urn:ngm:class:semantic-segmentation
---

# Data Annotation

Data Annotation is the process of labeling or tagging raw data (images, text, audio, video) with structured, meaningful labels that provide ground truth for supervised machine learning models, enabling algorithms to learn from human-validated examples.
