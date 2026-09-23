---
okf_version: "0.2"
type: Class
title: Inter-Agent Communication
resource: urn:ngm:class:inter-agent-communication
domain: ai
description: Inter-Agent Communication (IAC) is the set of protocols, message formats, and transport mechanisms through which autonomous software agents exchange information, coordinate tasks, delegate subtasks, share observations, and negotiate commitments in multi-agent systems. It spans classical symbolic AI frameworks (FIPA ACL, KQML) and contemporary LLM-based architectures (Model Context Protocol, Agent2
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:multi-agent-system
requires:
  - urn:ngm:class:agent-identity
  - urn:ngm:class:authentication
  - urn:ngm:class:context-window
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:orchestration
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:task-delegation
  - urn:ngm:class:collaborative-reasoning
implements:
  - urn:ngm:class:fipa-acl
  - urn:ngm:class:kqml
contrastsWith:
  - urn:ngm:class:monolithic-ai
  - urn:ngm:class:single-agent-system
bridgesTo:
  - urn:ngm:class:service-oriented-architecture
  - urn:ngm:class:microservices
uses:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:function-calling
  - urn:ngm:class:tool-use
  - urn:ngm:class:rest-api
  - urn:ngm:class:web-socket
  - urn:ngm:class:json-data-interchange-format-schema
supports:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:swarm-intelligence
relatedTo:
  - urn:ngm:class:agent2-agent-protocol
  - urn:ngm:class:message-passing
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:speech-act-theory
  - urn:ngm:class:semantic-interoperability
---

# Inter-Agent Communication

Inter-Agent Communication (IAC) is the set of protocols, message formats, and transport mechanisms through which autonomous software agents exchange information, coordinate tasks, delegate subtasks, share observations, and negotiate commitments in multi-agent systems. It spans classical symbolic AI frameworks (FIPA ACL, KQML) and contemporary LLM-based architectures (Model Context Protocol, Agent2Agent Protocol, tool-calling schemas), defining the content language (what is expressed), the interaction protocol (how exchanges are sequenced), and the transport layer (how messages are delivered). Effective IAC enables heterogeneous agents built on different underlying models to collaborate without shared internal state, encompassing message authentication, semantic interoperability, context propagation, and trust boundaries between agents of differing capability and provenance.
