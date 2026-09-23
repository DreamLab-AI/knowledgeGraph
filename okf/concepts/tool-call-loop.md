---
okf_version: "0.2"
type: Class
title: Tool Call Loop
resource: urn:ngm:class:tool-call-loop
domain: ai
description: The core execution cycle of an LLM agent, in which the model emits a structured tool invocation, the harness executes it against the real environment (shell, file system, API, browser), appends the result to the conversation, and re-invokes the model — repeating until the model judges the task complete and returns a final answer; this iterate-observe-act loop is what turns single-turn text generat
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:agent-loop
uses:
  - urn:ngm:class:function-calling
  - urn:ngm:class:tool-use
partOf:
  - urn:ngm:class:agentic-workflow
relatedTo:
  - urn:ngm:class:llm-application-frameworks
---

# Tool Call Loop

The core execution cycle of an LLM agent, in which the model emits a structured tool invocation, the harness executes it against the real environment (shell, file system, API, browser), appends the result to the conversation, and re-invokes the model — repeating until the model judges the task complete and returns a final answer; this iterate-observe-act loop is what turns single-turn text generation into grounded, autonomous task execution.
