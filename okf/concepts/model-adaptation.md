---
okf_version: "0.2"
type: Class
title: Model Adaptation
resource: urn:ngm:class:model-adaptation
domain: machine-learning
description: Model adaptation is the process of adjusting a pretrained model's parameters or behaviour to perform well on a new task, domain, or dataset distinct from the one it was originally trained on. It spans a spectrum from full fine-tuning of all parameters to parameter-efficient methods such as LoRA, which inject small trainable matrices into frozen layers to adapt behaviour at a fraction of the memory
maturity: established
quality: 0
is-a:
  - urn:ngm:class:transfer-learning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Model Adaptation

Model adaptation is the process of adjusting a pretrained model's parameters or behaviour to perform well on a new task, domain, or dataset distinct from the one it was originally trained on. It spans a spectrum from full fine-tuning of all parameters to parameter-efficient methods such as LoRA, which inject small trainable matrices into frozen layers to adapt behaviour at a fraction of the memory and compute cost. Effective model adaptation must balance plasticity, the ability to acquire new task-specific behaviour, against catastrophic forgetting of prior capability. It is the practical mechanism through which large pretrained foundation models are specialised for downstream applications.
