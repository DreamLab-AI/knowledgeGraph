---
okf_version: "0.2"
type: Class
title: Plan and Execute
resource: urn:ngm:class:plan-and-execute
domain: ai
description: Plan and execute is an agentic reasoning strategy in which an LLM-based agent first generates a multi-step plan for a task and then carries out each step, optionally re-planning when steps fail or new information appears. Separating planning from execution improves coherence on long-horizon tasks compared with purely reactive, single-step prompting. It is a common control pattern for autonomous an
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-agent-system
relatedTo:
  - urn:ngm:class:computer-use-and-browser-agents
  - urn:ngm:class:agents
---

# Plan and Execute

Plan and execute is an agentic reasoning strategy in which an LLM-based agent first generates a multi-step plan for a task and then carries out each step, optionally re-planning when steps fail or new information appears. Separating planning from execution improves coherence on long-horizon tasks compared with purely reactive, single-step prompting. It is a common control pattern for autonomous and computer-use agents.
