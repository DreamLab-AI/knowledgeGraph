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
---

# Quality Estimation

The task of predicting the quality of machine translation output without access to reference translations, at sentence, word, or document level, enabling production systems to route low-confidence translations to human post-editing, filter parallel corpora, and gate automated publication — in contrast to reference-based metrics that require gold translations for scoring.
