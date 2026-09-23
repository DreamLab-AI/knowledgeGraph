---
okf_version: "0.2"
type: Class
title: Evaluation Layer
resource: urn:ngm:class:evaluation-layer
domain: ai
description: The Evaluation Layer is the cross-cutting stratum that measures the quality, safety, and performance of system components against defined criteria. It sits alongside training and inference, drawing on their outputs to produce judgements that feed governance and research strata. It contains benchmarks, metrics, test harnesses, and the scoring procedures that quantify behaviour.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:ai-governance-and-ethics
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:model-layer
  - urn:ngm:class:inference-layer
enables:
  - urn:ngm:class:research-layer
  - urn:ngm:class:governance-layer
bridgesTo:
  - urn:ngm:class:benchmarks
  - urn:ngm:class:statistical-significance
---

# Evaluation Layer

The Evaluation Layer is the cross-cutting stratum that measures the quality, safety, and performance of system components against defined criteria. It sits alongside training and inference, drawing on their outputs to produce judgements that feed governance and research strata. It contains benchmarks, metrics, test harnesses, and the scoring procedures that quantify behaviour.
