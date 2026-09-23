---
okf_version: "0.2"
type: Class
title: Bradley Terry Model
resource: urn:ngm:class:bradley-terry-model
domain: machine-learning
description: "The Bradley-Terry model is a probabilistic model for paired comparisons that estimates a latent strength or quality score for each item and predicts the probability that one item beats another via the logistic of their score difference. Fitted by maximum-likelihood from observed comparison outcomes, it produces a global ranking from local pairwise data. In machine learning it underpins preference "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:reward-modelling
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:statistical-model
hasPart:
  - urn:ngm:class:pairwise-comparison
  - urn:ngm:class:logistic-function
  - urn:ngm:class:latent-strength-parameter
  - urn:ngm:class:log-likelihood-function
  - urn:ngm:class:comparison-outcome-matrix
  - urn:ngm:class:strength-parameter-vector
requires:
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:pairwise-comparison
  - urn:ngm:class:optimisation
  - urn:ngm:class:connected-comparison-graph
enables:
  - urn:ngm:class:direct-preference-optimisation
  - urn:ngm:class:reward-model
  - urn:ngm:class:human-preference-ranking
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:llm-evaluation
  - urn:ngm:class:sports-ranking
  - urn:ngm:class:crowdsourcing-aggregation
dependsOn:
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:logistic-regression
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:newton-raphson-method
  - urn:ngm:class:iterative-scaling
implements:
  - urn:ngm:class:preference-learning
  - urn:ngm:class:ranking-algorithm
  - urn:ngm:class:choice-model
  - urn:ngm:class:paired-comparison-model
contrastsWith:
  - urn:ngm:class:elo-rating-system
  - urn:ngm:class:trueskill
  - urn:ngm:class:thurstone-model
  - urn:ngm:class:plackett-luce-model
  - urn:ngm:class:kahneman-tversky-optimisation
  - urn:ngm:class:identity-preference-optimisation
bridgesTo:
  - urn:ngm:class:rlhf
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:rlaif
  - urn:ngm:class:simpo
  - urn:ngm:class:ipo
  - urn:ngm:class:dpo
uses:
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:pairwise-comparison
  - urn:ngm:class:logistic-function
  - urn:ngm:class:newton-raphson-method
  - urn:ngm:class:iterative-scaling
  - urn:ngm:class:convex-optimisation
supports:
  - urn:ngm:class:reward-model
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:rlhf
  - urn:ngm:class:process-reward-model
  - urn:ngm:class:constitutional-ai-training-methodology
standardizedBy:
  - urn:ngm:class:biometrika
  - urn:ngm:class:icml
  - urn:ngm:class:neur-ips
relatedTo:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:statistical-model
  - urn:ngm:class:preference-learning
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:logistic-regression
  - urn:ngm:class:crowdsourcing
  - urn:ngm:class:sports-ranking
  - urn:ngm:class:human-feedback
  - urn:ngm:class:discrete-choice-model
  - urn:ngm:class:luce-choice-axiom
---

# Bradley Terry Model

The Bradley-Terry model is a probabilistic model for paired comparisons that estimates a latent strength or quality score for each item and predicts the probability that one item beats another via the logistic of their score difference. Fitted by maximum-likelihood from observed comparison outcomes, it produces a global ranking from local pairwise data. In machine learning it underpins preference modelling and reward learning from human comparisons.
