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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Retraining

Retraining is the process of updating a deployed machine learning model's parameters using new or additional data, typically triggered when monitoring detects data drift or concept drift that degrades predictive performance. It may involve fine-tuning the existing model on recent data or training a fresh model from scratch on an updated dataset. Retraining cadence and triggers are core concerns of MLOps pipelines that keep production models aligned with the current data distribution.
