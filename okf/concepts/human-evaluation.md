---
okf_version: "0.2"
type: Class
title: Human Evaluation
resource: urn:ngm:class:human-evaluation
domain: ai
description: Human evaluation is the assessment of machine-learning system outputs by human judges against quality criteria such as relevance, fluency, helpfulness, factuality, or preference between alternatives. It complements automatic metrics by capturing nuanced, subjective, and context-dependent judgements that proxy measures miss, and is central to evaluating generative and conversational models. It cont
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-evaluation
requires:
  - urn:ngm:class:benchmarks
  - urn:ngm:class:benchmarks
enables:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
dependsOn:
  - urn:ngm:class:inter-annotator-agreement
implements:
  - urn:ngm:class:model-comparison
contrastsWith:
  - urn:ngm:class:evaluation-metric
uses:
  - urn:ngm:class:crowdsourcing
  - urn:ngm:class:inter-annotator-agreement
  - urn:ngm:class:a-b-testing
supports:
  - urn:ngm:class:model-comparison
  - urn:ngm:class:preference-learning
partOf:
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:conversational-ai
---

# Human Evaluation

Human evaluation is the assessment of machine-learning system outputs by human judges against quality criteria such as relevance, fluency, helpfulness, factuality, or preference between alternatives. It complements automatic metrics by capturing nuanced, subjective, and context-dependent judgements that proxy measures miss, and is central to evaluating generative and conversational models. It contrasts with automatic evaluation in cost, latency, and the need to manage rater agreement and bias.
