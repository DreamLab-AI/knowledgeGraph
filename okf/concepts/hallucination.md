---
okf_version: "0.2"
type: Class
title: Hallucination
resource: urn:ngm:class:hallucination
domain: ai
description: Hallucination in artificial intelligence refers to the phenomenon whereby a generative model produces fluent, confident, and syntactically plausible output that is factually incorrect, unsupported by provided context, or entirely fabricated. It is a fundamental failure mode of large language models, vision-language models, and other neural generative systems that optimise for next-token probabilit
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-risk
requires:
  - urn:ngm:class:output-verification
  - urn:ngm:class:human-oversight
enables:
  - urn:ngm:class:misinformation
  - urn:ngm:class:ai-safety-research
dependsOn:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:neural-network
  - urn:ngm:class:autoregressive-generation
contrastsWith:
  - urn:ngm:class:factual-grounding
  - urn:ngm:class:calibration
  - urn:ngm:class:truthfulness
bridgesTo:
  - urn:ngm:class:information-integrity
  - urn:ngm:class:ai-governance
  - urn:ngm:class:trust-and-safety
uses:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:tool-augmented-reasoning
  - urn:ngm:class:chain-of-thought
relatedTo:
  - urn:ngm:class:ai-risk
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:uncertainty-quantification
---

# Hallucination

Hallucination in artificial intelligence refers to the phenomenon whereby a generative model produces fluent, confident, and syntactically plausible output that is factually incorrect, unsupported by provided context, or entirely fabricated. It is a fundamental failure mode of large language models, vision-language models, and other neural generative systems that optimise for next-token probability rather than verifiable truth. Hallucinations range from subtle factual distortions to wholesale invention of citations, persons, dates, or events, and represent a critical safety and reliability concern for deployed AI systems. Mitigation strategies include retrieval-augmented generation, grounding with tool use, chain-of-thought prompting, and output verification pipelines.
