---
okf_version: "0.2"
type: Class
title: Query Strategy
resource: urn:ngm:class:query-strategy
domain: ai
description: A query strategy is the policy by which an active-learning system selects which unlabelled instances to request labels for, aiming to maximise model improvement per labelling cost. Common strategies include uncertainty sampling, query-by-committee, and expected model change. It is the decision-making core that makes active learning more label-efficient than passive supervised learning.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:machine-learning-discipline-technique
relatedTo:
  - urn:ngm:class:active-learning
  - urn:ngm:class:learning-algorithm
---

# Query Strategy

A query strategy is the policy by which an active-learning system selects which unlabelled instances to request labels for, aiming to maximise model improvement per labelling cost. Common strategies include uncertainty sampling, query-by-committee, and expected model change. It is the decision-making core that makes active learning more label-efficient than passive supervised learning.
