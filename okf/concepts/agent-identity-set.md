---
okf_version: "0.2"
type: Class
title: Agent Identity Set
resource: urn:ngm:class:agent-identity-set
domain: artificial-intelligence
description: An agent identity set is the collection of identity bindings that an agent holds at once, declared as `IdentitySet` in the agent module of the Agent Ontology under the heading "Identity Interfaces (Multi-DID)".[^1] The Agent Ontology declares the class without a definition; this one follows from its properties. visionGraph places it under [[Configuration]], with [[Identity Binding]] as its part.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:configuration
hasPart:
  - urn:ngm:class:identity-binding
relatedTo:
  - urn:ngm:class:agent-identity
generated: {"by":"agent:agent-ontology-import/0.1.0","process":"process:agent-ontology-import/0.1.0","at":"2026-10-30T12:00:00Z"}
---

# Agent Identity Set

An agent identity set is the collection of identity bindings that an agent holds at once, declared as `IdentitySet` in the agent module of the Agent Ontology under the heading "Identity Interfaces (Multi-DID)".[^1] The Agent Ontology declares the class without a definition; this one follows from its properties. visionGraph places it under [[Configuration]], with [[Identity Binding]] as its part.
