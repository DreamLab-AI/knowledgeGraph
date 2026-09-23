---
okf_version: "0.2"
type: Class
title: Annotated Dataset
resource: urn:ngm:class:annotated-dataset
domain: machine-learning
description: A dataset in which each example carries human- or machine-assigned labels — class names, bounding boxes, segmentation masks, transcripts, action-unit codes, or relevance judgements — produced under a documented annotation scheme with quality controls such as inter-annotator agreement; annotated datasets are the primary fuel of supervised learning, and their coverage, label accuracy, and demographi
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:dataset
requires:
  - urn:ngm:class:data-annotation
enables:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:face-recognition
relatedTo:
  - urn:ngm:class:training-data
  - urn:ngm:class:active-learning
  - urn:ngm:class:synthetic-data-generation
---

# Annotated Dataset

A dataset in which each example carries human- or machine-assigned labels — class names, bounding boxes, segmentation masks, transcripts, action-unit codes, or relevance judgements — produced under a documented annotation scheme with quality controls such as inter-annotator agreement; annotated datasets are the primary fuel of supervised learning, and their coverage, label accuracy, and demographic balance bound the accuracy and fairness of every model trained on them.
