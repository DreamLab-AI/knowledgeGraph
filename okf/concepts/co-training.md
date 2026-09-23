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
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:machine-learning-model
partOf:
  - urn:ngm:class:semi-supervised-learning
relatedTo:
  - urn:ngm:class:self-training
  - urn:ngm:class:active-learning
---

# Co Training

Co-training is a semi-supervised machine learning technique where two or more models trained on complementary feature views iteratively label unlabelled data for each other. Each model labels examples confidently classified under its own view, and these pseudo-labels are added to the other model's training set, bootstrapping performance without requiring large labelled corpora.
