---
okf_version: "0.2"
type: Class
title: Capability Evaluation
resource: urn:ngm:class:capability-evaluation
domain: artificial-intelligence
description: Capability evaluation is the systematic measurement of what an AI model can do, especially the elicitation and assessment of potentially dangerous capabilities such as autonomous replication, cyber-offence, or assistance with weapons. It combines benchmarks, structured tasks, and adversarial elicitation (including red-teaming) to establish upper bounds on model behaviour under best-effort promptin
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:ai-evaluation
requires:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:red-teaming
enables:
  - urn:ngm:class:responsible-scaling-policy
  - urn:ngm:class:ai-safety
contrastsWith:
  - urn:ngm:class:safety-evaluation
bridgesTo:
  - urn:ngm:class:responsible-scaling-policy
  - urn:ngm:class:safety-evaluation
uses:
  - urn:ngm:class:red-teaming
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:safety-evaluation
supports:
  - urn:ngm:class:alignment
  - urn:ngm:class:interpretability
partOf:
  - urn:ngm:class:ai-evaluation
  - urn:ngm:class:ai-safety
relatedTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:ai-agent
  - urn:ngm:class:alignment
---

# Capability Evaluation

Capability evaluation is the systematic measurement of what an AI model can do, especially the elicitation and assessment of potentially dangerous capabilities such as autonomous replication, cyber-offence, or assistance with weapons. It combines benchmarks, structured tasks, and adversarial elicitation (including red-teaming) to establish upper bounds on model behaviour under best-effort prompting and tooling. Results feed safety cases and trigger the thresholds defined in responsible scaling and preparedness frameworks.
