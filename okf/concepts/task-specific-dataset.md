---
okf_version: "0.2"
type: Class
title: Task-Specific Dataset
resource: urn:ngm:class:task-specific-dataset
domain: machine-learning
description: A task-specific dataset is a curated collection of labelled or structured examples assembled to train or evaluate a machine learning model on a single, narrowly defined task, as distinct from the broad, general-purpose corpora used for pretraining. It typically supports fine-tuning techniques such as LoRA and DoRA, where a smaller, high-quality dataset adapts a pretrained model to a specific domai
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:dataset
enables:
  - urn:ngm:class:fine-tuning
partOf:
  - urn:ngm:class:dataset
---

# Task-Specific Dataset

A task-specific dataset is a curated collection of labelled or structured examples assembled to train or evaluate a machine learning model on a single, narrowly defined task, as distinct from the broad, general-purpose corpora used for pretraining. It typically supports fine-tuning techniques such as LoRA and DoRA, where a smaller, high-quality dataset adapts a pretrained model to a specific domain or behaviour. The quality and relevance of a task-specific dataset directly bound the ceiling of performance achievable through fine-tuning.
