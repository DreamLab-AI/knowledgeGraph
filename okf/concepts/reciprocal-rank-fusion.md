---
okf_version: "0.2"
type: Class
title: Reciprocal Rank Fusion
resource: urn:ngm:class:reciprocal-rank-fusion
domain: ai
description: Reciprocal Rank Fusion (RRF) is a rank-aggregation method that combines multiple ranked result lists by summing the reciprocal of each document's rank across lists, weighted by a small smoothing constant. It requires no score calibration between systems, making it ideal for merging lexical and vector retrieval results in hybrid search. Its robustness and parameter simplicity have made it a default
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:information-retrieval
relatedTo:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:ai-search
---

# Reciprocal Rank Fusion

Reciprocal Rank Fusion (RRF) is a rank-aggregation method that combines multiple ranked result lists by summing the reciprocal of each document's rank across lists, weighted by a small smoothing constant. It requires no score calibration between systems, making it ideal for merging lexical and vector retrieval results in hybrid search. Its robustness and parameter simplicity have made it a default fusion technique in modern retrieval pipelines.
