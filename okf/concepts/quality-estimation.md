---
okf_version: "0.2"
type: Class
title: Quality Estimation
resource: urn:ngm:class:quality-estimation
domain: machine-learning
description: The task of predicting the quality of machine translation output without access to reference translations, at sentence, word, or document level, enabling production systems to route low-confidence translations to human post-editing, filter parallel corpora, and gate automated publication — in contrast to reference-based metrics that require gold translations for scoring.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:machine-translation
contrastsWith:
  - urn:ngm:class:bleu-score
uses:
  - urn:ngm:class:bert
relatedTo:
  - urn:ngm:class:comet-metric
  - urn:ngm:class:back-translation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Quality Estimation

The task of predicting the quality of machine translation output without access to reference translations, at sentence, word, or document level, enabling production systems to route low-confidence translations to human post-editing, filter parallel corpora, and gate automated publication — in contrast to reference-based metrics that require gold translations for scoring.
