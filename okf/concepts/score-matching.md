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
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:statistics
enables:
  - urn:ngm:class:diffusion-model
bridgesTo:
  - urn:ngm:class:generative-model
---

# Score Matching

Score matching is a method for fitting probability models by matching the gradient of the log-density, the score, of the model to that of the data, avoiding the intractable normalising constant. It underpins score-based generative models and diffusion models.
