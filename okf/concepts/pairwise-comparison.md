---
okf_version: "0.2"
type: Class
title: Pairwise Comparison
resource: urn:ngm:class:pairwise-comparison
domain: machine-learning
description: Pairwise comparison is a method of evaluation in which items are judged two at a time, with each judgement expressing which of the two is preferred or superior on some criterion. Because relative judgements are easier and more reliable for humans than absolute scoring, pairwise comparison is widely used to elicit preferences and to construct rankings from many such local decisions. Statistical mod
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:model-performance
requires:
  - urn:ngm:class:human-feedback
  - urn:ngm:class:preference-learning
enables:
  - urn:ngm:class:reward-model
  - urn:ngm:class:preference-learning
dependsOn:
  - urn:ngm:class:human-feedback
implements:
  - urn:ngm:class:bradley-terry-model
bridgesTo:
  - urn:ngm:class:preference-learning
uses:
  - urn:ngm:class:bradley-terry-model
  - urn:ngm:class:probability-distribution
supports:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:recommendation-system
partOf:
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:direct-preference-optimisation
  - urn:ngm:class:reward-model
---

# Pairwise Comparison

Pairwise comparison is a method of evaluation in which items are judged two at a time, with each judgement expressing which of the two is preferred or superior on some criterion. Because relative judgements are easier and more reliable for humans than absolute scoring, pairwise comparison is widely used to elicit preferences and to construct rankings from many such local decisions. Statistical models such as the Bradley-Terry model convert collections of pairwise outcomes into latent strength or quality scores. In machine learning it is the dominant feedback format for training reward models and aligning language models with human preferences.
