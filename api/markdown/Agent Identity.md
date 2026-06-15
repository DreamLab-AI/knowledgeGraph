public:: true

# Agent Identity

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:agent-identity",
  "@type": "Page",
  "title": "Agent Identity",
  "vc:slug": "agent-identity",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-identity",
  "@type": "Class",
  "label": "Agent Identity",
  "definition": "Agent identity is the set of attributes, credentials, and cryptographic material that uniquely identifies an autonomous software agent and allows other parties to authenticate it, attribute its actions, and decide what it may do. It extends identity management from human and device contexts to AI agents that act on a user's behalf, enabling verifiable accountability across the emerging agentic internet. Robust agent identity typically combines decentralised identifiers, verifiable credentials, and key management.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-management",
      "label": "Identity Management"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:agentic-internet",
        "label": "Agentic Internet"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:did",
        "label": "DID"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      },
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agentic-ai",
        "label": "Agentic AI"
      },
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance"
      },
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
- Agent identity is the credential and attribute set that uniquely identifies an [[AI Agent]] within [[Identity Management]].
- It is a building block of the [[Agentic Internet]].
- It is constructed from [[Verifiable Credentials]], a [[DID]], and [[Key Management]].
- It enables [[Authentication]], [[Accountability]], and [[Trust]] for autonomous actions.
- ### Overview
- As AI agents increasingly act on users' behalf, they need durable, verifiable identities distinct from the humans and devices they operate for.
- Agent identity lets relying parties authenticate an agent, scope its permissions, and attribute its actions for audit.
- It typically composes decentralised identifiers, cryptographic keys, and verifiable credentials describing capabilities and delegation.
- It is foundational to safe tool use and to multi-agent coordination.
- ### Key aspects
- Unique, resolvable identifiers for each agent instance or class.
- Cryptographic key material and disciplined key management.
- Verifiable credentials encoding delegation and authorisation.
- Action attribution and provenance for accountability.
- ### Applications
- Authenticating agents to APIs, services, and other agents.
- Delegated authority where an agent acts within a user's mandate.
- Auditable provenance of agent decisions and tool invocations.
- Trust establishment in open multi-agent ecosystems.
- ### Relationships
- partOf:: [[Agentic Internet]]
- partOf:: [[Identity Management]]
- hasPart:: [[Verifiable Credentials]]
- hasPart:: [[DID]]
- hasPart:: [[Key Management]]
- requires:: [[Authentication]]
- requires:: [[Key Management]]
- enables:: [[Accountability]]
- enables:: [[Trust]]
- enables:: [[Tool Use]]
- uses:: [[Decentralized Identity]]
- bridgesTo:: [[AI Agent]]
- bridgesTo:: [[Autonomous Agent]]
- supports:: [[Multi-Agent System]]
- supports:: [[AI Safety]]
- relatedTo:: [[Agentic AI]]
- relatedTo:: [[Provenance]]
- relatedTo:: [[Single Sign-On]]
- dependsOn:: [[Artificial Intelligence]]
- ### Provenance
- updated:: 2026-06-15
