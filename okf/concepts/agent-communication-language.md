---
okf_version: "0.2"
type: Class
title: Agent Communication Language
resource: urn:ngm:class:agent-communication-language
domain: infrastructure
description: An Agent Communication Language (ACL) is a formal, standardised message format and semantics that lets autonomous software agents exchange information, requests and commitments independently of their internal implementation. ACLs define performatives (speech acts such as inform, request and propose), a content language and an ontology reference so that interacting agents share a common interpretat
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:multi-agent-system
hasPart:
  - urn:ngm:class:message-passing
requires:
  - urn:ngm:class:ontology
  - urn:ngm:class:semantic-interoperability
enables:
  - urn:ngm:class:interoperability
implements:
  - urn:ngm:class:fipa
bridgesTo:
  - urn:ngm:class:interoperability-protocol
uses:
  - urn:ngm:class:api
supports:
  - urn:ngm:class:decision-making
standardizedBy:
  - urn:ngm:class:fipa
partOf:
  - urn:ngm:class:multi-agent-system
relatedTo:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:data-integration
  - urn:ngm:class:linked-data
---

# Agent Communication Language

An Agent Communication Language (ACL) is a formal, standardised message format and semantics that lets autonomous software agents exchange information, requests and commitments independently of their internal implementation. ACLs define performatives (speech acts such as inform, request and propose), a content language and an ontology reference so that interacting agents share a common interpretation of messages. Established examples include FIPA-ACL and KQML.
