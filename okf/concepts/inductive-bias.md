---
okf_version: "0.2"
type: Class
title: Inductive Bias
resource: urn:ngm:class:inductive-bias
domain: machine-learning
description: Inductive bias is the set of assumptions a learning algorithm uses to generalise from finite training data to unseen inputs. Because infinitely many functions fit any finite sample, a learner must prefer some hypotheses over others, and that preference — encoded in model architecture, regularisation, priors, or the choice of hypothesis space — is its inductive bias. Appropriate inductive bias is w
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-research-area
requires:
  - urn:ngm:class:hypothesis-space
  - urn:ngm:class:model-architecture
enables:
  - urn:ngm:class:generalisation
  - urn:ngm:class:supervised-learning
dependsOn:
  - urn:ngm:class:model-architecture
  - urn:ngm:class:regularisation
contrastsWith:
  - urn:ngm:class:overfitting
bridgesTo:
  - urn:ngm:class:no-free-lunch-theorem
uses:
  - urn:ngm:class:regularisation
  - urn:ngm:class:bias-variance-tradeoff
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
partOf:
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:generalisation
  - urn:ngm:class:hypothesis-space
  - urn:ngm:class:deep-learning
---

# Inductive Bias

Inductive bias is the set of assumptions a learning algorithm uses to generalise from finite training data to unseen inputs. Because infinitely many functions fit any finite sample, a learner must prefer some hypotheses over others, and that preference — encoded in model architecture, regularisation, priors, or the choice of hypothesis space — is its inductive bias. Appropriate inductive bias is what lets a model extrapolate sensibly rather than merely memorise.
