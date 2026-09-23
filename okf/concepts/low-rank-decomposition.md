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
---

# Low-Rank Decomposition

Low-rank decomposition is a linear algebra technique that approximates a matrix as the product of two or more smaller matrices of lower rank, reducing the number of parameters needed to represent it. In machine learning it underlies parameter-efficient fine-tuning methods such as LoRA, which learn a small low-rank update to a pretrained weight matrix instead of updating all parameters. It trades a controlled amount of representational capacity for large reductions in memory and compute cost.
