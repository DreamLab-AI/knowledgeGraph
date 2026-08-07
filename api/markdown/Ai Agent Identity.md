public:: true

# Ai Agent Identity

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:ai-agent-identity",
  "@type": "Page",
  "title": "Ai Agent Identity",
  "vc:slug": "ai-agent-identity",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-agent-identity",
  "@type": "Class",
  "label": "Ai Agent Identity",
  "definition": "A persistent, verifiable digital identity assigned to an autonomous AI agent, enabling it to authenticate, sign transactions, and participate in decentralised systems on behalf of itself or a principal. AI agent identity encompasses credential issuance, key management, and delegation of authority scoped to the agent's operational context. Such identities may be anchored on a blockchain ledger to ensure auditability and prevent impersonation. They bridge self-sovereign identity (SSI) principles with agentic software systems.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:verifiable-credentials",
      "label": "Verifiable Credentials"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credential"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      },
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:human-identity",
        "label": "Human Identity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Ai Agent Identity]] is a verifiable, persistent credential set enabling [[Autonomous Agent]] systems to authenticate and transact within [[Decentralized Identifier]] and [[Blockchain]] infrastructures.
  - It extends [[Self-Sovereign Identity]] principles to non-human actors, allowing agents to hold [[Verifiable Credential]] objects and sign operations with [[Digital Signature]] mechanisms.

- ### Overview
  - As AI agents increasingly act on behalf of humans in financial, legal, and operational domains, the question of how such agents are identified and held accountable has become critical.
  - AI agent identity frameworks typically anchor an agent's public key to an on-chain DID document, enabling third parties to verify the agent's authority.
  - Delegation chains allow human principals to grant scoped, time-limited powers to agents without exposing root credentials.

- ### Key Aspects
  - **Credential anchoring** — agent public keys registered on a [[Distributed Ledger]] for tamper-evident provenance.
  - **Delegation scoping** — authority constraints limiting what an agent may sign or authorise.
  - **Lifecycle management** — key rotation, revocation, and expiry policies for agent credentials.
  - **Auditability** — blockchain-backed logs enabling post-hoc verification of agent actions.

- ### Applications
  - Autonomous trading agents holding on-chain identities for DeFi participation.
  - AI assistants signing documents or commitments on behalf of users with explicit delegation.
  - Multi-agent orchestration systems where sub-agents authenticate to orchestrators.
  - Regulatory compliance proofs demonstrating that an agent operated within sanctioned boundaries.

- ### Relationships
  - bridgesTo:: [[Self-Sovereign Identity]]
  - bridgesTo:: [[Decentralized Identifier]]
  - requires:: [[Cryptographic Key Management]]
  - requires:: [[Public Key Infrastructure]]
  - uses:: [[Digital Signature]]
  - uses:: [[Verifiable Credential]]
  - enables:: [[Autonomous Agent]]
  - enables:: [[Multi-Agent System]]
  - relatedTo:: [[Access Control]]
  - relatedTo:: [[Trust Framework]]
  - relatedTo:: [[Smart Contract]]
  - contrastsWith:: [[Human Identity]]
  - dependsOn:: [[Blockchain]]
  - dependsOn:: [[Distributed Ledger]]
  - supports:: [[Accountability]]

- ### Provenance
  - updated:: 2026-06-15
