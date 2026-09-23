---
okf_version: "0.2"
type: Class
title: Terminal Coding Agents
resource: urn:ngm:class:terminal-coding-agents
domain: ai
description: Terminal-native AI coding agents that operate through CLI interfaces with tool-call loops, providing autonomous software development capabilities via text-based interaction — includes opencode, Gemini CLI, Codex, crush, Open Interpreter, goose, and aider.
maturity: established
quality: 0.91
is-a:
  - urn:ngm:class:agent-harness
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:software-development-automation
  - urn:ngm:class:autonomous-agent
hasPart:
  - urn:ngm:class:agent-loop
  - urn:ngm:class:tool-use
  - urn:ngm:class:file-system
  - urn:ngm:class:code-execution
  - urn:ngm:class:sandboxed-code-execution
  - urn:ngm:class:harness-configuration-packs
  - urn:ngm:class:agent-memory
  - urn:ngm:class:git
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:tool-registry
  - urn:ngm:class:observability
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:tool-use
  - urn:ngm:class:agent-loop
  - urn:ngm:class:sandboxed-code-execution
  - urn:ngm:class:foundation-model
  - urn:ngm:class:function-calling
  - urn:ngm:class:context-window
  - urn:ngm:class:state-persistence
enables:
  - urn:ngm:class:software-development-automation
  - urn:ngm:class:task-automation
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:workflow-orchestration
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:durable-execution
  - urn:ngm:class:agentic-ai
dependsOn:
  - urn:ngm:class:agent-harness
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:agent-development-sdks
  - urn:ngm:class:state-persistence
  - urn:ngm:class:observability
  - urn:ngm:class:agent-execution-sandboxes
  - urn:ngm:class:context-window
implements:
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:progressive-disclosure-harnesses
  - urn:ngm:class:checkpointing
  - urn:ngm:class:plan-and-execute
contrastsWith:
  - urn:ngm:class:ide-coding-agents
  - urn:ngm:class:personal-agent-runtimes
  - urn:ngm:class:robotic-process-automation
uses:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:function-calling
  - urn:ngm:class:harness-configuration-packs
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:process-isolation
  - urn:ngm:class:open-telemetry
  - urn:ngm:class:agent-memory
supports:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:agent-evaluation-benchmarks
  - urn:ngm:class:personal-agent-runtimes
  - urn:ngm:class:ai-alignment
standardizedBy:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:agent-to-agent-protocol
relatedTo:
  - urn:ngm:class:ide-coding-agents
  - urn:ngm:class:harness-configuration-packs
  - urn:ngm:class:agent-execution-sandboxes
  - urn:ngm:class:multi-agent-orchestration-frameworks
  - urn:ngm:class:agent-evaluation-benchmarks
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:lang-graph
  - urn:ngm:class:foundation-model
---

# Terminal Coding Agents

Terminal-native AI coding agents that operate through CLI interfaces with tool-call loops, providing autonomous software development capabilities via text-based interaction — includes opencode, Gemini CLI, Codex, crush, Open Interpreter, goose, and aider.
