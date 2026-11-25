---
okf_version: "0.2"
type: Class
title: End-to-End Learning
resource: urn:ngm:class:end-to-end-learning
domain: machine-learning
description: "A training paradigm in which a single differentiable model is optimised to map raw inputs directly to final task outputs — pixels to steering angles, waveforms to transcripts, text to text — with all intermediate representations learned jointly by gradient descent rather than specified as hand-engineered features or separately built pipeline stages; it trades the modularity, interpretability, and "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:deep-learning
dependsOn:
  - urn:ngm:class:representation-learning
contrastsWith:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:perception-system
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:backpropagation
relatedTo:
  - urn:ngm:class:monolithic-ai
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# End-to-End Learning

A training paradigm in which a single differentiable model is optimised to map raw inputs directly to final task outputs — pixels to steering angles, waveforms to transcripts, text to text — with all intermediate representations learned jointly by gradient descent rather than specified as hand-engineered features or separately built pipeline stages; it trades the modularity, interpretability, and testability of engineered pipelines for the ability to discover representations that human designers would not, and dominates wherever data and compute are abundant.
