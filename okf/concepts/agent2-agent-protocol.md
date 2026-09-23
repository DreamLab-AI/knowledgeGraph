---
okf_version: "0.2"
type: Class
title: Agent2Agent Protocol
resource: urn:ngm:class:agent2-agent-protocol
domain: ai
description: Agent2Agent Protocol (A2A) is an open specification developed by Google and partner organisations that enables heterogeneous AI agents to discover, communicate, and collaborate across organisational and platform boundaries. It defines a standardised messaging envelope, capability advertisement mechanism, and task-delegation schema so that agents built on different frameworks — such as LangChain, C
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:communication-protocol
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:orchestration
bridgesTo:
  - urn:ngm:class:interoperability-protocol
uses:
  - urn:ngm:class:rest-api
  - urn:ngm:class:model-context-protocol
relatedTo:
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:agent-event-stream
  - urn:ngm:class:server-sent-events
---

# Agent2Agent Protocol

Agent2Agent Protocol (A2A) is an open specification developed by Google and partner organisations that enables heterogeneous AI agents to discover, communicate, and collaborate across organisational and platform boundaries. It defines a standardised messaging envelope, capability advertisement mechanism, and task-delegation schema so that agents built on different frameworks — such as LangChain, CrewAI, or custom enterprise systems — can interoperate without bespoke integration code. The protocol operates over HTTPS with JSON-RPC 2.0 and supports both synchronous request-response and asynchronous streaming via Server-Sent Events. Agent capability cards, analogous to service discovery manifests, allow an agent to advertise its skills so that orchestrating agents can route work appropriately.
