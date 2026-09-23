---
okf_version: "0.2"
type: Class
title: Workflow Automation
resource: urn:ngm:class:workflow-automation
domain: artificial-intelligence
description: Workflow automation is the systematic encoding of business processes, data-transformation pipelines, or task sequences into executable software so that they proceed reliably and repeatedly with minimal human intervention, using rule-based triggers, conditional branching, state machines, and event-driven messaging. It spans a spectrum from deterministic rule engines and robotic process automation (
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-application
hasPart:
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:task-scheduling
  - urn:ngm:class:human-in-the-loop
requires:
  - urn:ngm:class:api-integration
  - urn:ngm:class:event-streaming
  - urn:ngm:class:data-pipeline
enables:
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:business-process-management
  - urn:ngm:class:hyperautomation
  - urn:ngm:class:intelligent-automation
  - urn:ngm:class:intelligent-automation
dependsOn:
  - urn:ngm:class:planning-and-scheduling
  - urn:ngm:class:observability
  - urn:ngm:class:idempotency
contrastsWith:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:manual-processing
bridgesTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:orchestration
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:function-calling
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:state-machine
standardizedBy:
  - urn:ngm:class:bpmn
  - urn:ngm:class:dmn
relatedTo:
  - urn:ngm:class:low-code-platform
  - urn:ngm:class:integration-platform-as-a-service
  - urn:ngm:class:low-code-platform
---

# Workflow Automation

Workflow automation is the systematic encoding of business processes, data-transformation pipelines, or task sequences into executable software so that they proceed reliably and repeatedly with minimal human intervention, using rule-based triggers, conditional branching, state machines, and event-driven messaging. It spans a spectrum from deterministic rule engines and robotic process automation (RPA), which replicate structured human UI interactions, to agentic AI systems in which large language models serve as planning kernels that dynamically compose multi-step tool-call sequences in response to high-level goals. Architecturally, workflow automation systems couple an orchestration layer — responsible for sequencing, error recovery, and state persistence — with an integration layer that provides connectors to APIs, databases, messaging queues, and human-approval interfaces. By reducing operational latency, enforcing process compliance, and enabling organisations to scale knowledge-work capacity, workflow automation has become a foundational capability across enterprise IT, scientific data pipelines, and AI agent infrastructure.
