---
okf_version: "0.2"
type: Class
title: AI Evaluation
resource: urn:ngm:class:ai-evaluation
domain: ai
description: AI Evaluation is the systematic, multi-dimensional measurement of AI model capabilities, reliability, safety, alignment, and societal impact using benchmarks, held-out task suites, human preference judgments, automated graders, and adversarial probing. It encompasses the full lifecycle of rigorous assessment from pre-deployment capability elicitation through post-deployment monitoring, producing q
maturity: emerging
quality: 0.91
is-a:
  - urn:ngm:class:ai-research-area
  - urn:ngm:class:ai-safety
hasPart:
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:llm-as-judge
  - urn:ngm:class:red-teaming
  - urn:ngm:class:capability-elicitation
  - urn:ngm:class:safety-evaluation
  - urn:ngm:class:human-preference-evaluation
  - urn:ngm:class:alignment-evaluation
requires:
  - urn:ngm:class:held-out-test-set
  - urn:ngm:class:human-oracle
  - urn:ngm:class:calibration
  - urn:ngm:class:prompt-sensitivity
  - urn:ngm:class:ai-model-card
enables:
  - urn:ngm:class:model-cards
  - urn:ngm:class:scalable-oversight
  - urn:ngm:class:alignment-evaluation
  - urn:ngm:class:frontier-models
  - urn:ngm:class:ai-ethics
  - urn:ngm:class:eval-factsheet
  - urn:ngm:class:sandbagging
dependsOn:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:rlhf
  - urn:ngm:class:reward-model
implements:
  - urn:ngm:class:elo-rating
  - urn:ngm:class:bradley-terry-model
  - urn:ngm:class:adversarial-testing
  - urn:ngm:class:dynamic-evaluation
contrastsWith:
  - urn:ngm:class:benchmark-contamination
  - urn:ngm:class:benchmark-saturation
  - urn:ngm:class:goodhart-s-law
uses:
  - urn:ngm:class:mmlu
  - urn:ngm:class:helm
  - urn:ngm:class:gpqa
  - urn:ngm:class:aime
  - urn:ngm:class:swe-bench
  - urn:ngm:class:gaia-benchmark
  - urn:ngm:class:humanity-s-last-exam
  - urn:ngm:class:livecodebench
  - urn:ngm:class:chatbot-arena
  - urn:ngm:class:mt-bench
  - urn:ngm:class:arena-hard
  - urn:ngm:class:eleutherai-lm-evaluation-harness
  - urn:ngm:class:inspect-framework
  - urn:ngm:class:uk-ai-safety-institute
supports:
  - urn:ngm:class:ai-benchmark-epistemological-critique
  - urn:ngm:class:bias
  - urn:ngm:class:distribution-shift
relatedTo:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:bias
  - urn:ngm:class:ai-ethics
  - urn:ngm:class:large-language-models
  - urn:ngm:class:ai-benchmark-epistemological-critique
  - urn:ngm:class:prompt-sensitivity
  - urn:ngm:class:task-complexity
---

# AI Evaluation

AI Evaluation is the systematic, multi-dimensional measurement of AI model capabilities, reliability, safety, alignment, and societal impact using benchmarks, held-out task suites, human preference judgments, automated graders, and adversarial probing. It encompasses the full lifecycle of rigorous assessment from pre-deployment capability elicitation through post-deployment monitoring, producing quantitative metrics and qualitative findings that guide model selection, release decisions, regulatory compliance, and ongoing risk assessment. Credible evaluation must guard against benchmark contamination, distribution shift, Goodhart pressures, and over-optimisation toward narrow scores, while ensuring elicitation methods are sufficient to reveal the true capability ceiling of the system under test.
