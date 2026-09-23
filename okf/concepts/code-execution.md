---
okf_version: "0.2"
type: Class
title: Code Execution
resource: urn:ngm:class:code-execution
domain: ai
description: Code execution, in the context of AI agents, is the capability whereby a model generates source code and runs it in a sandboxed interpreter or runtime, then incorporates the results into its reasoning. It transforms a language model from a text generator into a tool-using agent that can compute, manipulate data, call APIs, and verify outputs programmatically. It matters because executable tool use
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:tool-use
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:ai-agent-systems
  - urn:ngm:class:llm-agents
  - urn:ngm:class:cli-multi-agent-systems
hasPart:
  - urn:ngm:class:sandboxed-code-execution
  - urn:ngm:class:shell-environment
  - urn:ngm:class:python
  - urn:ngm:class:bash
  - urn:ngm:class:sandbox-environment
  - urn:ngm:class:resource-governance
  - urn:ngm:class:output-parser
  - urn:ngm:class:execution-timeout
  - urn:ngm:class:firecracker
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:gvisor
  - urn:ngm:class:state-management
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:sandbox-environment
  - urn:ngm:class:firecracker
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:function-calling
  - urn:ngm:class:tool-schema
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:code-generation
  - urn:ngm:class:prompt-engineering
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:automated-code-review
  - urn:ngm:class:automated-testing
  - urn:ngm:class:repository-scale-refactoring
  - urn:ngm:class:autonomous-debugging
  - urn:ngm:class:data-analysis
  - urn:ngm:class:api-integration
  - urn:ngm:class:self-correcting-agent
  - urn:ngm:class:ci-cd-automation
  - urn:ngm:class:dev-sec-ops
  - urn:ngm:class:software-engineering-agents
dependsOn:
  - urn:ngm:class:code-generation
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:function-calling
  - urn:ngm:class:large-language-models
  - urn:ngm:class:orchestration
  - urn:ngm:class:state-management
  - urn:ngm:class:tool-use
  - urn:ngm:class:reinforcement-learning
implements:
  - urn:ngm:class:codeact
  - urn:ngm:class:re-act
  - urn:ngm:class:openhands
  - urn:ngm:class:cli-multi-agent-systems
  - urn:ngm:class:swe-agent
  - urn:ngm:class:auto-gen
  - urn:ngm:class:lang-graph
contrastsWith:
  - urn:ngm:class:static-analysis
  - urn:ngm:class:code-generation
  - urn:ngm:class:symbolic-execution
  - urn:ngm:class:formal-verification
  - urn:ngm:class:low-code-platform
  - urn:ngm:class:robotic-process-automation
uses:
  - urn:ngm:class:python
  - urn:ngm:class:bash
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:firecracker
  - urn:ngm:class:gvisor
  - urn:ngm:class:e2b
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:open-telemetry
  - urn:ngm:class:git
  - urn:ngm:class:natural-language-processing
supports:
  - urn:ngm:class:cli-multi-agent-systems
  - urn:ngm:class:software-engineering-agents
  - urn:ngm:class:automated-testing
  - urn:ngm:class:dev-sec-ops
  - urn:ngm:class:ci-cd-automation
  - urn:ngm:class:human-in-the-loop-learning
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:task-decomposition
  - urn:ngm:class:planning-agent
standardizedBy:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:openai-research-organisation-agents-sdk
  - urn:ngm:class:agent2-agent-protocol
relatedTo:
  - urn:ngm:class:cli-multi-agent-systems
  - urn:ngm:class:code-generation
  - urn:ngm:class:tool-use
  - urn:ngm:class:orchestration
  - urn:ngm:class:llm-agents
  - urn:ngm:class:agent-orchestrator
  - urn:ngm:class:planning-agent
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:function-calling
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:automated-testing
  - urn:ngm:class:software-engineering-agents
---

# Code Execution

Code execution, in the context of AI agents, is the capability whereby a model generates source code and runs it in a sandboxed interpreter or runtime, then incorporates the results into its reasoning. It transforms a language model from a text generator into a tool-using agent that can compute, manipulate data, call APIs, and verify outputs programmatically. It matters because executable tool use grounds agent behaviour in deterministic computation and extends capabilities beyond what next-token prediction alone can achieve.
