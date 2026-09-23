---
okf_version: "0.2"
type: Class
title: React Prompting
resource: urn:ngm:class:react-prompting
domain: artificial-intelligence
description: ReAct prompting is a prompting strategy that interleaves verbal reasoning traces with discrete actions, enabling a language model to think step by step while interacting with external tools or environments. The model alternates between generating a thought, taking an action such as a search or API call, and observing the result, then folding that observation back into subsequent reasoning. This sy
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:prompt-engineering
requires:
  - urn:ngm:class:large-language-model
enables:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:autonomous-task-execution
  - urn:ngm:class:tool-use
contrastsWith:
  - urn:ngm:class:chain-of-thought-reasoning
uses:
  - urn:ngm:class:tool-use
  - urn:ngm:class:large-language-model
supports:
  - urn:ngm:class:ai-agent
partOf:
  - urn:ngm:class:prompt-engineering
relatedTo:
  - urn:ngm:class:chain-of-thought-reasoning
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:reasoning
---

# React Prompting

ReAct prompting is a prompting strategy that interleaves verbal reasoning traces with discrete actions, enabling a language model to think step by step while interacting with external tools or environments. The model alternates between generating a thought, taking an action such as a search or API call, and observing the result, then folding that observation back into subsequent reasoning. This synergy of reasoning and acting reduces hallucination and grounds the model's conclusions in retrieved evidence.
