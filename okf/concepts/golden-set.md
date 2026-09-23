---
okf_version: "0.2"
type: Class
title: Golden Set
resource: urn:ngm:class:golden-set
domain: data
description: A small, carefully curated and human-verified collection of input-output examples that serves as the authoritative reference against which a model, prompt, agent, or pipeline is repeatedly evaluated. Each item pairs a representative input with an expected or ideal output, and the set is deliberately kept stable across versions so that regression can be measured, quality can be tracked over time, a
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:test-dataset
  - urn:ngm:class:testdataset
enables:
  - urn:ngm:class:llm-evaluation
  - urn:ngm:class:benchmarking
  - urn:ngm:class:llmevaluation
uses:
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:groundtruth
partOf:
  - urn:ngm:class:evaluation-harness
  - urn:ngm:class:evaluationharness
---

# Golden Set

A small, carefully curated and human-verified collection of input-output examples that serves as the authoritative reference against which a model, prompt, agent, or pipeline is repeatedly evaluated. Each item pairs a representative input with an expected or ideal output, and the set is deliberately kept stable across versions so that regression can be measured, quality can be tracked over time, and changes can be accepted or rejected on the basis of a consistent benchmark rather than anecdote.
