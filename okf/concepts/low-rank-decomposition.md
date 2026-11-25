---
okf_version: "0.2"
type: Class
title: Low-Rank Decomposition
resource: urn:ngm:class:low-rank-decomposition
domain: artificial-intelligence
description: Low-rank decomposition is a linear algebra technique that approximates a matrix as the product of two or more smaller matrices of lower rank, reducing the number of parameters needed to represent it. In machine learning it underlies parameter-efficient fine-tuning methods such as LoRA, which learn a small low-rank update to a pretrained weight matrix instead of updating all parameters. It trades a
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:linear-algebra
enables:
  - urn:ngm:class:parameter-efficient-fine-tuning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Low-Rank Decomposition

Low-rank decomposition is a linear algebra technique that approximates a matrix as the product of two or more smaller matrices of lower rank, reducing the number of parameters needed to represent it. In machine learning it underlies parameter-efficient fine-tuning methods such as LoRA, which learn a small low-rank update to a pretrained weight matrix instead of updating all parameters. It trades a controlled amount of representational capacity for large reductions in memory and compute cost.
