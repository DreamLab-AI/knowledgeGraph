---
okf_version: "0.2"
type: Class
title: Instruction Following
resource: urn:ngm:class:instruction-following
domain: artificial-intelligence
description: Instruction following is a language model capability enabling accurate parsing and faithful execution of explicit user or system directives specified in natural language, encompassing multi-step tasks, output format constraints, persona assignments, conditional branching, and constraint satisfaction. It is principally acquired through supervised instruction tuning on curated (instruction, response
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:rlhf
  - urn:ngm:class:large-language-model
  - urn:ngm:class:supervised-fine-tuning
enables:
  - urn:ngm:class:tool-use
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:function-calling
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:planning
  - urn:ngm:class:planning
dependsOn:
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:context-window
  - urn:ngm:class:attention-mechanism
contrastsWith:
  - urn:ngm:class:sycophancy
  - urn:ngm:class:specification-gaming
  - urn:ngm:class:reward-hacking
bridgesTo:
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:task-planning
  - urn:ngm:class:task-planning
uses:
  - urn:ngm:class:chain-of-thought-reasoning
  - urn:ngm:class:structured-output
  - urn:ngm:class:system-prompt
  - urn:ngm:class:direct-preference-optimisation
relatedTo:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:alignment
  - urn:ngm:class:ifeval
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:helpfulness
  - urn:ngm:class:constitutional-ai-training-methodology
---

# Instruction Following

Instruction following is a language model capability enabling accurate parsing and faithful execution of explicit user or system directives specified in natural language, encompassing multi-step tasks, output format constraints, persona assignments, conditional branching, and constraint satisfaction. It is principally acquired through supervised instruction tuning on curated (instruction, response) datasets and further refined via reinforcement learning from human feedback (RLHF) or direct preference optimisation (DPO). Instruction following is evaluated by the degree to which a model correctly fulfils all stated requirements simultaneously without omitting or violating any constraint, and is a prerequisite for reliable agentic behaviour where a model must decompose and execute multi-step plans expressed as natural language specifications. Failure modes include instruction forgetting in long contexts, sycophantic overriding, and specification gaming.
