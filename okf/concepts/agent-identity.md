---
okf_version: "0.2"
type: Class
title: Agent Identity
resource: urn:ngm:class:agent-identity
domain: artificial-intelligence
description: Agent identity is the set of attributes, credentials, and cryptographic material that uniquely identifies an autonomous software agent and allows other parties to authenticate it, attribute its actions, and decide what it may do. It extends identity management from human and device contexts to AI agents that act on a user's behalf, enabling verifiable accountability across the emerging agentic int
maturity: emerging
quality: 0.88
is-a:
  - urn:ngm:class:identity-management
  - urn:ngm:class:trust-framework
  - urn:ngm:class:decentralized-identity
hasPart:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:did
  - urn:ngm:class:key-management
  - urn:ngm:class:capability-token
  - urn:ngm:class:audit-trail
  - urn:ngm:class:digital-signature
  - urn:ngm:class:did
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:key-management
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:trust-framework
enables:
  - urn:ngm:class:accountability
  - urn:ngm:class:trust
  - urn:ngm:class:tool-use
  - urn:ngm:class:delegation
  - urn:ngm:class:authorisation
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:access-control
dependsOn:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:foundation-model
  - urn:ngm:class:large-language-models
implements:
  - urn:ngm:class:oauth
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:spiffe
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:did
contrastsWith:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:api-key-authentication
  - urn:ngm:class:centralized-identity-provider
bridgesTo:
  - urn:ngm:class:ai-agent
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:microsoft-entra
  - urn:ngm:class:amazon-bedrock
uses:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:oauth
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:spiffe
supports:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:ai-safety
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:sandboxing
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:ietf
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:agent-to-agent-protocol
  - urn:ngm:class:eu-ai-act-regulatory-instrument
partOf:
  - urn:ngm:class:agentic-internet
  - urn:ngm:class:identity-management
relatedTo:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:provenance
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:agent-memory
  - urn:ngm:class:agent-loop
  - urn:ngm:class:agentic-internet
---

# Agent Identity

Agent identity is the set of attributes, credentials, and cryptographic material that uniquely identifies an autonomous software agent and allows other parties to authenticate it, attribute its actions, and decide what it may do. It extends identity management from human and device contexts to AI agents that act on a user's behalf, enabling verifiable accountability across the emerging agentic internet. Robust agent identity typically combines decentralised identifiers, verifiable credentials, and key management.
