---
okf_version: "0.2"
type: Class
title: Capability Advertisement
resource: urn:ngm:class:capability-advertisement
domain: artificial-intelligence
description: Capability Advertisement is the mechanism by which an autonomous agent publishes machine-readable metadata describing the skills, tools and interfaces it exposes, allowing other agents or an orchestrator to discover what it can do without prior hard-coded knowledge. It typically takes the form of a structured manifest, such as an agent card, exchanged during a discovery or handshake phase. It unde
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:service-discovery
requires:
  - urn:ngm:class:service-discovery
enables:
  - urn:ngm:class:agent-orchestrator
partOf:
  - urn:ngm:class:agent-communication-protocol
relatedTo:
  - urn:ngm:class:agent-to-agent-protocol
---

# Capability Advertisement

Capability Advertisement is the mechanism by which an autonomous agent publishes machine-readable metadata describing the skills, tools and interfaces it exposes, allowing other agents or an orchestrator to discover what it can do without prior hard-coded knowledge. It typically takes the form of a structured manifest, such as an agent card, exchanged during a discovery or handshake phase. It underpins dynamic task routing in multi-agent systems built on protocols such as the Agent Communication Protocol and Agent-to-Agent Protocol.
