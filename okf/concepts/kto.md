---
okf_version: "0.2"
type: Class
title: KTO
resource: urn:ngm:class:kto
domain: ai
description: "KTO (Kahneman-Tversky Optimization) is a method for aligning language models that learns from binary good or bad feedback on individual outputs rather than paired preference comparisons. Drawing on prospect theory, it defines a utility-based loss that down-weights losses relative to gains, simplifying data collection compared with preference-pair methods. It is an alternative to direct preference "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:parameter-efficient-fine-tuning
relatedTo:
  - urn:ngm:class:direct-preference-optimisation
  - urn:ngm:class:model-training
---

# KTO

KTO (Kahneman-Tversky Optimization) is a method for aligning language models that learns from binary good or bad feedback on individual outputs rather than paired preference comparisons. Drawing on prospect theory, it defines a utility-based loss that down-weights losses relative to gains, simplifying data collection compared with preference-pair methods. It is an alternative to direct preference optimization in the post-training alignment toolkit.
