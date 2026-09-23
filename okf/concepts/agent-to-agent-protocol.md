---
okf_version: "0.2"
type: Class
title: Agent-to-Agent Protocol
resource: urn:ngm:class:agent-to-agent-protocol
domain: artificial-intelligence
description: Agent-to-Agent Protocol is a class of communication specifications that define how autonomous AI agents discover one another, advertise capabilities, delegate tasks, and exchange results directly — without requiring a centralised broker — enabling peer-to-peer coordination between agents built by different organisations or on different frameworks. These protocols treat agents as first-class addres
maturity: emerging
quality: 0.92
is-a:
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:coordination-protocol
hasPart:
  - urn:ngm:class:agent-card
  - urn:ngm:class:task-lifecycle
  - urn:ngm:class:service-discovery
  - urn:ngm:class:capability-advertisement
  - urn:ngm:class:agent-identity
requires:
  - urn:ngm:class:mutual-authentication
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:agent-identity
  - urn:ngm:class:capability-advertisement
  - urn:ngm:class:http-protocol
  - urn:ngm:class:json-data-interchange-format-rpc-2-0
enables:
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:task-delegation
  - urn:ngm:class:autonomous-task-execution
  - urn:ngm:class:agentic-internet
dependsOn:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:large-language-model
  - urn:ngm:class:http-protocol
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:server-sent-events
implements:
  - urn:ngm:class:agent2-agent-protocol-google-2025
  - urn:ngm:class:fipa-acl
  - urn:ngm:class:contract-net-protocol
contrastsWith:
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:multi-agent-orchestration
bridgesTo:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:web-of-things
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:supply-chain-automation
  - urn:ngm:class:enterprise-ai
uses:
  - urn:ngm:class:service-discovery
  - urn:ngm:class:message-passing
  - urn:ngm:class:json-ld
  - urn:ngm:class:json-data-interchange-format-rpc-2-0
  - urn:ngm:class:server-sent-events
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:json-web-signature
supports:
  - urn:ngm:class:negotiation
  - urn:ngm:class:error-handling
  - urn:ngm:class:state-management
  - urn:ngm:class:rate-limiting
  - urn:ngm:class:access-control
  - urn:ngm:class:webhook
standardizedBy:
  - urn:ngm:class:linux-foundation
relatedTo:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:agent-network-protocol
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:agent-communication-protocol-ibm-acp
  - urn:ngm:class:openai-swarm
  - urn:ngm:class:swarm-intelligence
---

# Agent-to-Agent Protocol

Agent-to-Agent Protocol is a class of communication specifications that define how autonomous AI agents discover one another, advertise capabilities, delegate tasks, and exchange results directly — without requiring a centralised broker — enabling peer-to-peer coordination between agents built by different organisations or on different frameworks. These protocols treat agents as first-class addressable entities with discoverable skill sets and negotiable service contracts.
