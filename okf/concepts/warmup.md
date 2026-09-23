---
okf_version: "0.2"
type: Class
title: Warmup
resource: urn:ngm:class:warmup
domain: spatial-computing
description: A training technique where the learning rate starts small and gradually increases over a fixed number of initial steps to stabilise optimisation. Warmup prevents large early gradients from destabilising weight updates and is standard practice for large transformer models, typically preceding a cosine or linear decay schedule.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:sc-content-and-assets
requires:
  - urn:ngm:class:learning-rate-schedule
  - urn:ngm:class:optimiser
enables:
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:gradient-descent
partOf:
  - urn:ngm:class:training
---

# Warmup

A training technique where the learning rate starts small and gradually increases over a fixed number of initial steps to stabilise optimisation. Warmup prevents large early gradients from destabilising weight updates and is standard practice for large transformer models, typically preceding a cosine or linear decay schedule.
