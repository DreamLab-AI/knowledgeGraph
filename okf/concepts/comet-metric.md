---
okf_version: "0.2"
type: Class
title: COMET Metric
resource: urn:ngm:class:comet-metric
domain: ai
description: A family of learned, reference-based and reference-free evaluation metrics for machine translation that use pre-trained multilingual language model representations to predict human-quality assessments of translation output. COMET models correlate more strongly with human judgements than n-gram-overlap metrics such as BLEU by capturing semantic and contextual similarity rather than surface string m
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:ai-technique
  - urn:ngm:class:natural-language-processing
hasPart:
  - urn:ngm:class:xlm-roberta
  - urn:ngm:class:regression-model
  - urn:ngm:class:direct-assessment
  - urn:ngm:class:multidimensional-quality-metrics
  - urn:ngm:class:quality-estimation
requires:
  - urn:ngm:class:multilingual-language-model
  - urn:ngm:class:human-annotation
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:parallel-corpus
enables:
  - urn:ngm:class:quality-estimation
  - urn:ngm:class:human-evaluation
  - urn:ngm:class:translation-quality-assurance
  - urn:ngm:class:human-evaluation
  - urn:ngm:class:post-editing-workflow
  - urn:ngm:class:mt-benchmarking
dependsOn:
  - urn:ngm:class:direct-assessment
  - urn:ngm:class:multidimensional-quality-metrics
  - urn:ngm:class:xlm-roberta
  - urn:ngm:class:wmt-shared-task
implements:
  - urn:ngm:class:regression-model
  - urn:ngm:class:ranking-model
  - urn:ngm:class:fine-tuning
contrastsWith:
  - urn:ngm:class:bleu-score
  - urn:ngm:class:chrf
  - urn:ngm:class:ter
  - urn:ngm:class:bleurt
  - urn:ngm:class:meteor
  - urn:ngm:class:translation
uses:
  - urn:ngm:class:machine-translation
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:xlm-roberta
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:multilingual-language-model
  - urn:ngm:class:contrastive-learning
supports:
  - urn:ngm:class:machine-translation
  - urn:ngm:class:neural-machine-translation
  - urn:ngm:class:post-editing-workflow
  - urn:ngm:class:translation-quality-assurance
standardizedBy:
  - urn:ngm:class:wmt-shared-task
  - urn:ngm:class:unbabel
  - urn:ngm:class:instituto-superior-tecnico
relatedTo:
  - urn:ngm:class:neural-machine-translation
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:wmt-shared-task
  - urn:ngm:class:xcomet
  - urn:ngm:class:post-editing
  - urn:ngm:class:bleu-score
  - urn:ngm:class:flores-200
  - urn:ngm:class:large-language-models
  - urn:ngm:class:mqm-annotation
  - urn:ngm:class:llm-as-judge
  - urn:ngm:class:post-editing-workflow
  - urn:ngm:class:translation-quality-assurance
  - urn:ngm:class:sequence-to-sequence-model
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer-architecture
---

# COMET Metric

A family of learned, reference-based and reference-free evaluation metrics for machine translation that use pre-trained multilingual language model representations to predict human-quality assessments of translation output. COMET models correlate more strongly with human judgements than n-gram-overlap metrics such as BLEU by capturing semantic and contextual similarity rather than surface string matching.
