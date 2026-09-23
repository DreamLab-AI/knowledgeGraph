---
okf_version: "0.2"
type: Class
title: FIPA ACL
resource: urn:ngm:class:fipa-acl
domain: artificial-intelligence
description: FIPA ACL is the Agent Communication Language standardised by the Foundation for Intelligent Physical Agents, defining a message format and a library of communicative acts that autonomous software agents use to exchange information and coordinate behaviour. Each message carries a performative such as inform, request, or propose, drawn from speech-act theory, together with parameters identifying sen
maturity: established
quality: 0.88
is-a:
  - urn:ngm:class:agent-communication-language
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:inter-agent-communication
hasPart:
  - urn:ngm:class:performative
  - urn:ngm:class:message-envelope
  - urn:ngm:class:interaction-protocol
  - urn:ngm:class:content-language
  - urn:ngm:class:ontology
  - urn:ngm:class:contract-net-protocol
  - urn:ngm:class:conversation-identifier
requires:
  - urn:ngm:class:ontology
  - urn:ngm:class:speech-act-theory
  - urn:ngm:class:message-passing
  - urn:ngm:class:knowledge-interchange-format
  - urn:ngm:class:agent-platform
enables:
  - urn:ngm:class:multi-agent-coordination
  - urn:ngm:class:interoperability
  - urn:ngm:class:distributed-decision-making
  - urn:ngm:class:contract-net-protocol
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:negotiation-protocol
  - urn:ngm:class:task-delegation
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:agent-platform
  - urn:ngm:class:ontology
  - urn:ngm:class:message-passing
  - urn:ngm:class:knowledge-interchange-format
implements:
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:speech-act-theory
  - urn:ngm:class:interaction-protocol
  - urn:ngm:class:message-passing
contrastsWith:
  - urn:ngm:class:kqml
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:agent2-agent-protocol
  - urn:ngm:class:rest-api
  - urn:ngm:class:g-rpc
uses:
  - urn:ngm:class:ontology
  - urn:ngm:class:agent-to-agent-protocol
  - urn:ngm:class:knowledge-interchange-format
  - urn:ngm:class:message-passing
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:owl-2-web-ontology-language
supports:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:agent
  - urn:ngm:class:agent-platform
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:cli-multi-agent-systems
  - urn:ngm:class:distributed-decision-making
standardizedBy:
  - urn:ngm:class:standards
  - urn:ngm:class:ieee
partOf:
  - urn:ngm:class:multi-agent-system
relatedTo:
  - urn:ngm:class:agent-communication-language
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:agent2-agent-protocol
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:multi-agent-orchestration-frameworks
  - urn:ngm:class:distributed-decision-making
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:bdi-agent-architecture
  - urn:ngm:class:multi-agent-reinforcement-learning
  - urn:ngm:class:distributed-collaboration
---

# FIPA ACL

FIPA ACL is the Agent Communication Language standardised by the Foundation for Intelligent Physical Agents, defining a message format and a library of communicative acts that autonomous software agents use to exchange information and coordinate behaviour. Each message carries a performative such as inform, request, or propose, drawn from speech-act theory, together with parameters identifying sender, receiver, content language, and ontology. It provides the interoperability layer that lets heterogeneous agents in a multi-agent system understand one another's intentions.
