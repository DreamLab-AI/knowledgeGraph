---
okf_version: "0.2"
type: Class
title: Reflection
resource: urn:ngm:class:reflection
domain: artificial-intelligence
description: "An agent pattern in which a model examines its own prior output, judges it against the goal and any available evidence, and then revises the work in a further pass. Reflection turns generation into a loop rather than a single shot: the agent produces a draft, critiques that draft — spotting errors, gaps, unmet constraints, or weak reasoning — and feeds the critique back as input to an improved att"
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:agenticworkflow
requires:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:largelanguagemodel
enables:
  - urn:ngm:class:self-consistency
  - urn:ngm:class:selfconsistency
uses:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:chainofthought
relatedTo:
  - urn:ngm:class:golden-set
  - urn:ngm:class:guardrail
  - urn:ngm:class:goldenset
---

# Reflection

An agent pattern in which a model examines its own prior output, judges it against the goal and any available evidence, and then revises the work in a further pass. Reflection turns generation into a loop rather than a single shot: the agent produces a draft, critiques that draft — spotting errors, gaps, unmet constraints, or weak reasoning — and feeds the critique back as input to an improved attempt. It is distinguished from ordinary multi-step prompting by the fact that the intermediate judgement is about the agent's own work, making the agent both author and reviewer within the same task.
