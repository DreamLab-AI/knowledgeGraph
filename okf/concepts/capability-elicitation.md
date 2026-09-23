---
okf_version: "0.2"
type: Class
title: Capability Elicitation
resource: urn:ngm:class:capability-elicitation
domain: ai
description: Capability elicitation is the systematic process of designing prompts, scaffolding, and evaluation protocols to uncover the true maximum performance of an AI model on a given task or domain, distinguishing what a model is genuinely capable of from what it demonstrates under default conditions. It is a central concern in AI safety research and frontier model evaluation because models may possess la
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-evaluation
  - urn:ngm:class:safety-evaluation
  - urn:ngm:class:ai-safety-research
  - urn:ngm:class:benchmark-evaluation
hasPart:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:few-shot-prompting
  - urn:ngm:class:red-teaming
  - urn:ngm:class:scaffolded-evaluation
  - urn:ngm:class:adversarial-jailbreaking
  - urn:ngm:class:best-of-n-sampling
  - urn:ngm:class:tool-augmented-evaluation
  - urn:ngm:class:agentic-evaluation
  - urn:ngm:class:fine-tuning-elicitation
requires:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:red-teaming
  - urn:ngm:class:benchmark-dataset
  - urn:ngm:class:model-access
  - urn:ngm:class:expert-evaluators
  - urn:ngm:class:chain-of-thought-reasoning
enables:
  - urn:ngm:class:safety-assessment
  - urn:ngm:class:model-evaluation-results
  - urn:ngm:class:dangerous-capability-detection
  - urn:ngm:class:deployment-decision-making
  - urn:ngm:class:responsible-scaling-policy
  - urn:ngm:class:ai-governance
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:frontier-ai-oversight
dependsOn:
  - urn:ngm:class:chain-of-thought-reasoning
  - urn:ngm:class:few-shot-prompting
  - urn:ngm:class:large-language-model
  - urn:ngm:class:benchmarking
  - urn:ngm:class:alignment
  - urn:ngm:class:prompt-engineering
implements:
  - urn:ngm:class:safety-evaluation
  - urn:ngm:class:ai-safety-research
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:aisi-frontier-ai-safety-framework
contrastsWith:
  - urn:ngm:class:standard-benchmark-evaluation
  - urn:ngm:class:default-prompting
  - urn:ngm:class:capability-suppression
  - urn:ngm:class:surface-level-safety-evaluation
  - urn:ngm:class:naive-evaluation
uses:
  - urn:ngm:class:red-teaming
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:few-shot-prompting
  - urn:ngm:class:scaffolded-evaluation
  - urn:ngm:class:adversarial-machine-learning
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:mechanistic-interpretability
supports:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:alignment
  - urn:ngm:class:ai-governance
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:aisi-frontier-ai-safety-framework
  - urn:ngm:class:human-oversight
  - urn:ngm:class:scalable-oversight
  - urn:ngm:class:eu-ai-act-regulatory-instrument
standardizedBy:
  - urn:ngm:class:metr
  - urn:ngm:class:ai-safety-institute
  - urn:ngm:class:anthropic-responsible-scaling-policy
  - urn:ngm:class:openai-preparedness-framework
  - urn:ngm:class:google-deepmind-frontier-safety-framework
  - urn:ngm:class:nist-ai-rmf
relatedTo:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:alignment
  - urn:ngm:class:safety-evaluation
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:emergent-capabilities
  - urn:ngm:class:frontier-ai
  - urn:ngm:class:large-language-model
  - urn:ngm:class:mechanistic-interpretability
  - urn:ngm:class:scalable-oversight
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:mesa-optimisation
  - urn:ngm:class:reward-hacking
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:ai-benchmark-epistemological-critique
  - urn:ngm:class:benchmarks
  - urn:ngm:class:chain-of-thought
---

# Capability Elicitation

Capability elicitation is the systematic process of designing prompts, scaffolding, and evaluation protocols to uncover the true maximum performance of an AI model on a given task or domain, distinguishing what a model is genuinely capable of from what it demonstrates under default conditions. It is a central concern in AI safety research and frontier model evaluation because models may possess latent capabilities — such as the ability to reason about dangerous knowledge, produce deceptive outputs, or autonomously pursue goals — that are not revealed by standard benchmarks but can be surfaced through carefully constructed elicitation methods including chain-of-thought prompting, multi-step scaffolding, and adversarial jailbreaking.
