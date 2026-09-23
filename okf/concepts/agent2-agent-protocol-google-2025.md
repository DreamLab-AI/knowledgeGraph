---
okf_version: "0.2"
type: Class
title: Agent2Agent Protocol (Google 2025)
resource: urn:ngm:class:agent2-agent-protocol-google-2025
domain: ai
description: The Agent2Agent Protocol (A2A), released by Google as an open specification in April 2025 and transferred to the Linux Foundation in June 2025, is a JSON-RPC 2.0 over HTTP(S) protocol — extended with Server-Sent Events for streaming — that enables AI agents to discover one another via standardised, cryptographically signed agent cards hosted at well-known URIs, delegate tasks through a six-state t
maturity: established
quality: 0.93
is-a:
  - urn:ngm:class:agent-to-agent-protocol
  - urn:ngm:class:coordination-protocol
  - urn:ngm:class:agent-communication-protocol
hasPart:
  - urn:ngm:class:agent-card
  - urn:ngm:class:task-lifecycle
  - urn:ngm:class:push-notification
  - urn:ngm:class:service-discovery
requires:
  - urn:ngm:class:mutual-authentication
  - urn:ngm:class:agent-identity
  - urn:ngm:class:http-protocol
  - urn:ngm:class:json-data-interchange-format-rpc-2-0
  - urn:ngm:class:oauth-2-0
enables:
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:task-delegation
  - urn:ngm:class:autonomous-task-execution
  - urn:ngm:class:agentic-internet
  - urn:ngm:class:multi-agent-system
dependsOn:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:http-protocol
  - urn:ngm:class:agent-runtime
implements:
  - urn:ngm:class:json-data-interchange-format-rpc-2-0
  - urn:ngm:class:server-sent-events
  - urn:ngm:class:json-web-signature
  - urn:ngm:class:json-canonicalization-scheme
  - urn:ngm:class:json-data-interchange-format-schema
contrastsWith:
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:openai-swarm
bridgesTo:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:enterprise-ai
  - urn:ngm:class:supply-chain-automation
  - urn:ngm:class:web-of-things
uses:
  - urn:ngm:class:service-discovery
  - urn:ngm:class:message-passing
  - urn:ngm:class:json-data-interchange-format-rpc-2-0
  - urn:ngm:class:server-sent-events
  - urn:ngm:class:http-protocol
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:json-web-signature
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:well-known-uri
supports:
  - urn:ngm:class:negotiation
  - urn:ngm:class:error-handling
  - urn:ngm:class:state-management
  - urn:ngm:class:access-control
  - urn:ngm:class:rate-limiting
  - urn:ngm:class:capability-advertisement
standardizedBy:
  - urn:ngm:class:linux-foundation
relatedTo:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:agent-network-protocol
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:agent-communication-protocol-ibm-acp
  - urn:ngm:class:swarm-intelligence
  - urn:ngm:class:trust-framework
---

# Agent2Agent Protocol (Google 2025)

The Agent2Agent Protocol (A2A), released by Google as an open specification in April 2025 and transferred to the Linux Foundation in June 2025, is a JSON-RPC 2.0 over HTTP(S) protocol — extended with Server-Sent Events for streaming — that enables AI agents to discover one another via standardised, cryptographically signed agent cards hosted at well-known URIs, delegate tasks through a six-state task lifecycle, stream results back to requesting agents, and operate regardless of the underlying model or framework used to implement the agents. Reaching version 1.2 by March 2026 with over 150 supporting organisations, it is designed as a complementary peer-to-peer layer alongside Anthropic's Model Context Protocol, together forming the emerging two-protocol stack for the agentic internet.
