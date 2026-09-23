---
okf_version: "0.2"
type: Class
title: Agent Execution Sandboxes
resource: urn:ngm:class:agent-execution-sandboxes
domain: infrastructure
description: Isolated execution environments providing secure, ephemeral containers and virtual machines for AI-generated code execution, tool use, and autonomous agent operation — including E2B, Daytona, Docker MCP Gateway, Cloudflare Sandboxes, Modal, Vercel Sandbox, and Fly Machines — with hardware-level isolation via Firecracker microVMs, gVisor syscall interception, or Kata Containers to prevent escape to
maturity: emerging
quality: 0.9
is-a:
  - urn:ngm:class:agent-harness
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:containerisation
hasPart:
  - urn:ngm:class:container-runtime
  - urn:ngm:class:mcp-server
  - urn:ngm:class:code-execution
  - urn:ngm:class:agent-memory
  - urn:ngm:class:api-gateway
  - urn:ngm:class:open-container-initiative
requires:
  - urn:ngm:class:containerisation
  - urn:ngm:class:tool-use
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:open-container-initiative
  - urn:ngm:class:cloud-computing
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:autonomous-coding
  - urn:ngm:class:terminal-coding-agents
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:agent-evaluation-benchmarks
dependsOn:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:serverless-architecture
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:microservices-architecture
implements:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:open-container-initiative
  - urn:ngm:class:tool-call-loop
  - urn:ngm:class:function-calling
  - urn:ngm:class:mcp-server
contrastsWith:
  - urn:ngm:class:internal-ai-harness
  - urn:ngm:class:regulatory-sandbox
  - urn:ngm:class:container-orchestration
bridgesTo:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:agent-development-sdks
uses:
  - urn:ngm:class:function-calling
  - urn:ngm:class:mcp-server
  - urn:ngm:class:mcp-client
  - urn:ngm:class:external-ai-harness
  - urn:ngm:class:vector-database
  - urn:ngm:class:agent-loop
  - urn:ngm:class:tool-call-loop
supports:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:agent-evaluation-benchmarks
  - urn:ngm:class:swe-bench
  - urn:ngm:class:agentic-ai
standardizedBy:
  - urn:ngm:class:open-container-initiative
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:eu-ai-act-regulatory-instrument
relatedTo:
  - urn:ngm:class:agent-development-sdks
  - urn:ngm:class:multi-agent-orchestration-frameworks
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:llm-application-frameworks
  - urn:ngm:class:terminal-coding-agents
  - urn:ngm:class:vision-claw-agentic-container
  - urn:ngm:class:decentralised-agentic-infrastructure-stack
  - urn:ngm:class:swe-bench
  - urn:ngm:class:edge-computing
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:agentic-rag
---

# Agent Execution Sandboxes

Isolated execution environments providing secure, ephemeral containers and virtual machines for AI-generated code execution, tool use, and autonomous agent operation — including E2B, Daytona, Docker MCP Gateway, Cloudflare Sandboxes, Modal, Vercel Sandbox, and Fly Machines — with hardware-level isolation via Firecracker microVMs, gVisor syscall interception, or Kata Containers to prevent escape to host infrastructure.
