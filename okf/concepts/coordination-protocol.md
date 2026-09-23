---
okf_version: "0.2"
type: Class
title: Coordination Protocol
resource: urn:ngm:class:coordination-protocol
domain: distributed-systems
description: A Coordination Protocol is a formally specified set of rules, message formats, and interaction sequences that govern how distributed agents or system components communicate and synchronise their actions to achieve a common objective. It defines the obligations, permissions, and commitments of each participant at each state of an interaction, ensuring predictable collective behaviour despite indepe
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:communication-protocol
hasPart:
  - urn:ngm:class:two-phase-commit
  - urn:ngm:class:contract-net-protocol
requires:
  - urn:ngm:class:message-format
  - urn:ngm:class:network-transport
enables:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:distributed-transaction
  - urn:ngm:class:state-machine-replication
dependsOn:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:formal-specification
implements:
  - urn:ngm:class:coordination-mechanisms
  - urn:ngm:class:finite-state-machine
  - urn:ngm:class:speech-act-theory
contrastsWith:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:serialisation-format
bridgesTo:
  - urn:ngm:class:llm-application-framework
  - urn:ngm:class:model-context-protocol
uses:
  - urn:ngm:class:message-passing
  - urn:ngm:class:agent-communication-language
  - urn:ngm:class:publish-subscribe-pattern
supports:
  - urn:ngm:class:interoperability
  - urn:ngm:class:fault-tolerance
standardizedBy:
  - urn:ngm:class:fipa
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:raft-consensus
---

# Coordination Protocol

A Coordination Protocol is a formally specified set of rules, message formats, and interaction sequences that govern how distributed agents or system components communicate and synchronise their actions to achieve a common objective. It defines the obligations, permissions, and commitments of each participant at each state of an interaction, ensuring predictable collective behaviour despite independent agent decision-making.
