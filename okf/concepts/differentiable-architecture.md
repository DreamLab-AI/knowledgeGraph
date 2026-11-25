---
okf_version: "0.2"
type: Class
title: Differentiable Architecture
resource: urn:ngm:class:differentiable-architecture
domain: artificial-intelligence
description: Differentiable Architecture refers to a neural network design paradigm, most prominently realised in Differentiable Architecture Search (DARTS), in which discrete structural choices — such as which operation to place at each edge of a candidate graph or how to connect layers — are relaxed to continuous mixture weights over a predefined set of operations. This relaxation renders the architecture se
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-model-architecture
enables:
  - urn:ngm:class:machine-learning
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:neural-network-architecture
relatedTo:
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:deep-learning
  - urn:ngm:class:knowledge-distillation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Differentiable Architecture

Differentiable Architecture refers to a neural network design paradigm, most prominently realised in Differentiable Architecture Search (DARTS), in which discrete structural choices — such as which operation to place at each edge of a candidate graph or how to connect layers — are relaxed to continuous mixture weights over a predefined set of operations. This relaxation renders the architecture selection problem differentiable, allowing the architecture parameters to be optimised jointly with network weights via gradient descent on a validation loss. Once optimised, the continuous mixture is discretised to yield a final architecture, dramatically reducing the computational cost of neural architecture search compared to evolutionary or reinforcement learning methods.
