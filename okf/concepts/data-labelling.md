---
okf_version: "0.2"
type: Class
title: Data Labelling
resource: urn:ngm:class:data-labelling
domain: machine-learning
description: "Data labelling is the process of annotating raw data, such as images, text, audio or sensor readings, with the target outputs or categories a supervised model is expected to predict. It produces the ground-truth signal that links inputs to desired outputs and largely determines the achievable accuracy of trained models. Labelling combines human annotators, guidelines, tooling and quality control, "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-annotation
hasPart:
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:dataset-curation
requires:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:model-training
dependsOn:
  - urn:ngm:class:data-quality
contrastsWith:
  - urn:ngm:class:active-learning
bridgesTo:
  - urn:ngm:class:dataset-curation
uses:
  - urn:ngm:class:human-in-the-loop
supports:
  - urn:ngm:class:active-learning
  - urn:ngm:class:supervised-learning
partOf:
  - urn:ngm:class:training-data
relatedTo:
  - urn:ngm:class:data-quality
  - urn:ngm:class:ground-truth-labels
---

# Data Labelling

Data labelling is the process of annotating raw data, such as images, text, audio or sensor readings, with the target outputs or categories a supervised model is expected to predict. It produces the ground-truth signal that links inputs to desired outputs and largely determines the achievable accuracy of trained models. Labelling combines human annotators, guidelines, tooling and quality control, increasingly augmented by model-assisted and active-learning workflows.
