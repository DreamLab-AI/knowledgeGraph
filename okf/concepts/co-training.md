---
okf_version: "0.2"
type: Class
title: Co Training
resource: urn:ngm:class:co-training
domain: artificial-intelligence
description: Co-training is a semi-supervised machine learning technique where two or more models trained on complementary feature views iteratively label unlabelled data for each other. Each model labels examples confidently classified under its own view, and these pseudo-labels are added to the other model's training set, bootstrapping performance without requiring large labelled corpora.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-technique
enables:
  - urn:ngm:class:generative-ai
bridgesTo:
  - urn:ngm:class:autonomous-robot
uses:
  - urn:ngm:class:machine-learning
  - urn:ngm:class:machine-learning-discipline-model
partOf:
  - urn:ngm:class:semi-supervised-learning
relatedTo:
  - urn:ngm:class:self-training
  - urn:ngm:class:active-learning
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Co Training

Co-training is a semi-supervised machine learning technique where two or more models trained on complementary feature views iteratively label unlabelled data for each other. Each model labels examples confidently classified under its own view, and these pseudo-labels are added to the other model's training set, bootstrapping performance without requiring large labelled corpora.
