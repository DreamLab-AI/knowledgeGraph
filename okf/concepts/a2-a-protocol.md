---
okf_version: "0.2"
type: Class
title: A2A Protocol
resource: urn:ngm:class:a2-a-protocol
domain: ai
description: The Agent-to-Agent (A2A) Protocol is an open communication specification, initially proposed by Google in April 2025 and transferred to the Linux Foundation in June 2025, that defines how autonomous AI agents discover one another, negotiate capabilities, delegate tasks, and exchange results across heterogeneous agent frameworks and cloud environments. It uses HTTP/HTTPS transport with JSON-RPC 2.0
maturity: emerging
quality: 0.88
is-a:
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:agent-to-agent-protocol
hasPart:
  - urn:ngm:class:agent-card
  - urn:ngm:class:task-lifecycle
  - urn:ngm:class:capability-negotiation
  - urn:ngm:class:streaming-api
requires:
  - urn:ngm:class:http-protocol
  - urn:ngm:class:json-data-interchange-format-rpc-2-0
  - urn:ngm:class:server-sent-events
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:mutual-tls
enables:
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:task-delegation
  - urn:ngm:class:enterprise-ai
  - urn:ngm:class:agent-marketplace
  - urn:ngm:class:workflow-automation
dependsOn:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:service-discovery
  - urn:ngm:class:large-language-model
  - urn:ngm:class:agent-identity
  - urn:ngm:class:credential-management
contrastsWith:
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:model-context-protocol
bridgesTo:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:web-of-things
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:api-gateway
uses:
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:function-calling
  - urn:ngm:class:json-ld
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:json-ld
  - urn:ngm:class:protobuf
  - urn:ngm:class:g-rpc
  - urn:ngm:class:service-discovery
  - urn:ngm:class:message-passing
supports:
  - urn:ngm:class:supply-chain-automation
  - urn:ngm:class:agent-orchestrator
  - urn:ngm:class:task-and-motion-planning
  - urn:ngm:class:cost-attribution
  - urn:ngm:class:human-in-the-loop
relatedTo:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:fipa-acl
  - urn:ngm:class:contract-net-protocol
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:ai-safety
  - urn:ngm:class:ai-governance
  - urn:ngm:class:agent2-agent-protocol-google-2025
  - urn:ngm:class:open-agent-network
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:rate-limiting
  - urn:ngm:class:open-source
  - urn:ngm:class:api-integration
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:digital-twin
---

# A2A Protocol

The Agent-to-Agent (A2A) Protocol is an open communication specification, initially proposed by Google in April 2025 and transferred to the Linux Foundation in June 2025, that defines how autonomous AI agents discover one another, negotiate capabilities, delegate tasks, and exchange results across heterogeneous agent frameworks and cloud environments. It uses HTTP/HTTPS transport with JSON-RPC 2.0 structured messages and Server-Sent Events for streaming, an Agent Card system at a well-known URI for capability advertisement, and enterprise-grade authentication through OAuth 2.0, mTLS, and JWT, enabling cross-vendor agent interoperability without requiring shared infrastructure. A2A complements tool-access protocols such as the Model Context Protocol by standardising the agent-to-agent interaction layer, and reached v1.0 production readiness in 2026 with adoption by over 150 organisations including Microsoft, AWS, Salesforce, SAP, and ServiceNow.
