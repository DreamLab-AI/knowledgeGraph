---
okf_version: "0.2"
type: Class
title: Labelled Data
resource: urn:ngm:class:labelled-data
domain: artificial-intelligence
description: Labelled data is data annotated with target values, categories or structured tags that supervised machine learning models learn to predict. Labels may be produced by human annotators, expert review or semi-automated pipelines, and their quality directly bounds achievable model accuracy. Labelled data underpins tasks such as model evaluation, semantic parsing and sequence labelling, where a defined
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:training-data
requires:
  - urn:ngm:class:dataset
enables:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:semantic-parsing
  - urn:ngm:class:sequence-labelling
partOf:
  - urn:ngm:class:training-data
---

# Labelled Data

Labelled data is data annotated with target values, categories or structured tags that supervised machine learning models learn to predict. Labels may be produced by human annotators, expert review or semi-automated pipelines, and their quality directly bounds achievable model accuracy. Labelled data underpins tasks such as model evaluation, semantic parsing and sequence labelling, where a defined label schema drives both training and assessment.
