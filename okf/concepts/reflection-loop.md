---
okf_version: "0.2"
type: Class
title: Reflection Loop
resource: urn:ngm:class:reflection-loop
domain: ai
description: A reflection loop is an agentic control pattern in which a model critiques its own intermediate output, identifies errors or gaps, and revises before continuing or finalising. By iterating between generation and self-evaluation, the agent improves quality on tasks where a single pass is unreliable. It is a building block of self-correcting LLM agents and tool-using workflows.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-agent-system
relatedTo:
  - urn:ngm:class:agents
  - urn:ngm:class:computer-use-and-browser-agents
---

# Reflection Loop

A reflection loop is an agentic control pattern in which a model critiques its own intermediate output, identifies errors or gaps, and revises before continuing or finalising. By iterating between generation and self-evaluation, the agent improves quality on tasks where a single pass is unreliable. It is a building block of self-correcting LLM agents and tool-using workflows.
