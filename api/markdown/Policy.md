public:: true

# Policy

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:policy",
  "@type": "Page",
  "title": "Policy",
  "vc:slug": "policy",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:policy",
  "@type": "Class",
  "label": "Policy",
  "definition": "A policy is an explicit, authoritative statement of intent that guides decisions and prescribes acceptable behaviour or actions within an organisation or system. Policies translate high-level goals into rules, principles and constraints that can be applied consistently and enforced. In computing the term also denotes machine-readable rule sets, such as access-control policies, while in reinforcement learning a policy is a mapping from states to actions.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance-framework",
      "label": "Governance Framework"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:enforcement",
        "label": "Enforcement"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:regulatory-framework",
        "label": "Regulatory Framework"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
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
  - A policy is an explicit, authoritative statement of intent that guides decisions and prescribes acceptable behaviour or actions within an organisation or system. Policies translate high-level goals into rules, principles and constraints that can be applied consistently and enforced. In computing the term also denotes machine-readable rule sets, such as access-control policies, while in reinforcement learning a policy is a mapping from states to actions.
  - Related core concepts: [[Governance Framework]] [[Regulation]] [[Decision Making]] [[Compliance]] [[Access Control]]
- ### Overview
  - Policies operate at many levels: organisational policies set behavioural expectations and risk appetite, technical policies encode enforceable rules in systems, and in machine learning a policy is the decision function an agent learns. Across these senses the common thread is that a policy is a stable, reusable specification of how to act given a situation, separating the statement of intent from the mechanisms that enforce or execute it.
- ### Key aspects
  - Declarative intent expressed as principles, rules or constraints.
  - Separation between policy definition and the enforcement mechanism.
  - Enforcement and auditing ensure that stated policy is actually applied.
  - Machine-readable policies allow automated decision and access control.
  - In reinforcement learning, a policy maps observed states to actions.
- ### Applications
  - Access-control and authorisation rules in security systems.
  - Organisational compliance and information-governance frameworks.
  - Configuration and admission control in cloud platforms.
  - Decision functions for reinforcement-learning agents.
- ### Relationships
  - subClassOf:: [[Governance Framework]]
  - partOf:: [[Governance Framework]]
  - hasPart:: [[Enforcement]]
  - requires:: [[Decision Making]]
  - requires:: [[Compliance]]
  - implements:: [[Regulation]]
  - enables:: [[Regulatory Compliance]]
  - supports:: [[Access Control]]
  - supports:: [[Authorization]]
  - relatedTo:: [[Regulatory Framework]]
  - relatedTo:: [[Markov Decision Process]]
  - relatedTo:: [[Reinforcement Learning]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
