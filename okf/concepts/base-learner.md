---
okf_version: "0.2"
type: Class
title: Base Learner
resource: urn:ngm:class:base-learner
domain: machine-learning
description: A base learner is an individual model trained as one member of an ensemble, whose predictions are combined with those of other base learners to produce a final output. Base learners are typically simple or weak relative to the ensemble as a whole - for example shallow decision trees in a random forest or boosting sequence - so that their errors are diverse and can partially cancel when aggregated.
maturity: established
quality: 0
is-a:
  - urn:ngm:class:machine-learning-model
---

# Base Learner

A base learner is an individual model trained as one member of an ensemble, whose predictions are combined with those of other base learners to produce a final output. Base learners are typically simple or weak relative to the ensemble as a whole - for example shallow decision trees in a random forest or boosting sequence - so that their errors are diverse and can partially cancel when aggregated. The choice of base learner architecture and training procedure directly affects the diversity and accuracy of the resulting ensemble.
