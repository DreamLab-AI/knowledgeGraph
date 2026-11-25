---
okf_version: "0.2"
type: Class
title: Score Matching
resource: urn:ngm:class:score-matching
domain: machine-learning
description: Score matching is a method for fitting probability models by matching the gradient of the log-density, the score, of the model to that of the data, avoiding the intractable normalising constant. It underpins score-based generative models and diffusion models.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:machine-learning
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:statistics
enables:
  - urn:ngm:class:diffusion-model
bridgesTo:
  - urn:ngm:class:generative-model
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Score Matching

Score matching is a method for fitting probability models by matching the gradient of the log-density, the score, of the model to that of the data, avoiding the intractable normalising constant. It underpins score-based generative models and diffusion models.
