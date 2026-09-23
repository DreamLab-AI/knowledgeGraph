---
okf_version: "0.2"
type: Class
title: Retraining
resource: urn:ngm:class:retraining
domain: artificial-intelligence
description: Retraining is the process of updating a deployed machine learning model's parameters using new or additional data, typically triggered when monitoring detects data drift or concept drift that degrades predictive performance. It may involve fine-tuning the existing model on recent data or training a fresh model from scratch on an updated dataset. Retraining cadence and triggers are core concerns of
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:model-training
---

# Retraining

Retraining is the process of updating a deployed machine learning model's parameters using new or additional data, typically triggered when monitoring detects data drift or concept drift that degrades predictive performance. It may involve fine-tuning the existing model on recent data or training a fresh model from scratch on an updated dataset. Retraining cadence and triggers are core concerns of MLOps pipelines that keep production models aligned with the current data distribution.
