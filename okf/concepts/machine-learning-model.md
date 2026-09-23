---
okf_version: "0.2"
type: Class
title: Machine Learning Model (Artefact)
resource: urn:ngm:class:machine-learning-model
domain: machine-learning
description: "The trained artefact produced by a machine learning pipeline: a parameterised function — such as a decision tree ensemble, support vector machine or neural network — whose weights have been fitted to data by an optimisation procedure, and which maps new inputs to predictions, classifications, rankings or generated content; the unit that is evaluated, selected, versioned, deployed, monitored and ev"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:machine-learning-discipline
dependsOn:
  - urn:ngm:class:feature-selection
uses:
  - urn:ngm:class:supervised-learning
relatedTo:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
---

# Machine Learning Model (Artefact)

The trained artefact produced by a machine learning pipeline: a parameterised function — such as a decision tree ensemble, support vector machine or neural network — whose weights have been fitted to data by an optimisation procedure, and which maps new inputs to predictions, classifications, rankings or generated content; the unit that is evaluated, selected, versioned, deployed, monitored and eventually retrained or retired in production systems.
