---
okf_version: "0.2"
type: Class
title: BLEU Score
resource: urn:ngm:class:bleu-score
domain: ai
description: BLEU Score (Bilingual Evaluation Understudy) is an automatic evaluation metric for machine translation and text generation quality that measures the overlap of n-gram sequences between a candidate output and one or more human reference translations, applying a brevity penalty to discourage pathologically short outputs. Scores range from 0 to 1 (or 0 to 100 in percentage form), with higher values i
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:ai-technique
  - urn:ngm:class:performance-metrics
hasPart:
  - urn:ngm:class:n-gram-overlap
  - urn:ngm:class:brevity-penalty
  - urn:ngm:class:modified-precision
  - urn:ngm:class:geometric-mean
  - urn:ngm:class:neural-network-text-tokenisation
requires:
  - urn:ngm:class:reference-translation
  - urn:ngm:class:tokenization
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:parallel-corpus
  - urn:ngm:class:test-dataset
enables:
  - urn:ngm:class:automated-evaluation
  - urn:ngm:class:model-comparison
  - urn:ngm:class:regression-testing
  - urn:ngm:class:benchmark-evaluation
  - urn:ngm:class:reproducible-research
dependsOn:
  - urn:ngm:class:reference-translation
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:corpus
implements:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:modified-precision
contrastsWith:
  - urn:ngm:class:evaluation-harness
  - urn:ngm:class:comet-metric
  - urn:ngm:class:bert-score
  - urn:ngm:class:human-evaluation
  - urn:ngm:class:meteor-metric
  - urn:ngm:class:bertscore
  - urn:ngm:class:meteor
  - urn:ngm:class:rouge
bridgesTo:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:evaluation-harness
  - urn:ngm:class:benchmark-dataset
uses:
  - urn:ngm:class:machine-translation
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:n-gram-overlap
  - urn:ngm:class:geometric-mean
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:reference-translation
supports:
  - urn:ngm:class:machine-translation
  - urn:ngm:class:text-summarisation
  - urn:ngm:class:benchmark-evaluation
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:text-generation
standardizedBy:
  - urn:ngm:class:sacrebleu
  - urn:ngm:class:benchmark-evaluation
relatedTo:
  - urn:ngm:class:benchmarks
  - urn:ngm:class:text-generation
  - urn:ngm:class:language-model
  - urn:ngm:class:sacrebleu
  - urn:ngm:class:meteor-metric
  - urn:ngm:class:rouge-metric
  - urn:ngm:class:comet-metric
  - urn:ngm:class:bert-score
  - urn:ngm:class:wmt-benchmark
  - urn:ngm:class:meteor
  - urn:ngm:class:rouge
  - urn:ngm:class:bertscore
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:bert
  - urn:ngm:class:natural-language-processing
---

# BLEU Score

BLEU Score (Bilingual Evaluation Understudy) is an automatic evaluation metric for machine translation and text generation quality that measures the overlap of n-gram sequences between a candidate output and one or more human reference translations, applying a brevity penalty to discourage pathologically short outputs. Scores range from 0 to 1 (or 0 to 100 in percentage form), with higher values indicating closer correspondence to the reference. BLEU correlates moderately with human judgement at the corpus level but is known to be unreliable for single-sentence evaluation and insufficient alone for capturing semantic adequacy.
