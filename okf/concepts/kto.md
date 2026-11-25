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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# KTO

KTO (Kahneman-Tversky Optimization) is a method for aligning language models that learns from binary good or bad feedback on individual outputs rather than paired preference comparisons. Drawing on prospect theory, it defines a utility-based loss that down-weights losses relative to gains, simplifying data collection compared with preference-pair methods. It is an alternative to direct preference optimization in the post-training alignment toolkit.
