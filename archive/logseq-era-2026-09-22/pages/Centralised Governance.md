public:: true

# Centralised Governance

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:centralised-governance",
  "@type": "Page",
  "title": "Centralised Governance",
  "vc:slug": "centralised-governance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:centralised-governance",
  "@type": "Class",
  "label": "Centralised Governance",
  "definition": "Centralised governance is a model in which decision-making authority over a system, protocol, or organisation is concentrated in a single entity or a small controlling group. In contrast to distributed models, changes, upgrades, and policy are determined by this authority rather than by broad stakeholder consensus, which can deliver faster, more decisive action at the cost of reduced censorship resistance and a single point of control. It is the conventional baseline against which decentralised governance defines itself.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-governance",
      "label": "Decentralised Governance"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      },
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      },
      {
        "@id": "urn:ngm:class:decentralisation",
        "label": "Decentralisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:corporate-governance",
        "label": "Corporate Governance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:financial-services",
        "label": "Financial Services"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
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
  - Centralised governance is a model in which decision-making authority over a system, protocol, or organisation is concentrated in a single entity or a small controlling group. In contrast to distributed models, changes, upgrades, and policy are determined by this authority rather than by broad stakeholder consensus, which can deliver faster, more decisive action at the cost of reduced censorship resistance and a single point of control. It is the conventional baseline against which decentralised governance defines itself.
  - Related concepts: [[Decentralised Governance]] [[Governance]] [[Corporate Governance]] [[DAO]]
- ### Overview
  - Under centralised governance a defined authority holds the right to set policy and execute changes without requiring distributed consensus.
  - The model offers efficiency and clear accountability but introduces a single point of control and potential failure.
  - It is the prevailing structure in traditional corporations and in many permissioned blockchain deployments.
  - Blockchain projects often position decentralised governance explicitly in opposition to this centralised baseline.
- ### Key aspects
  - Authority is concentrated in a single entity or small controlling group.
  - Decisions can be made and enforced rapidly without broad stakeholder voting.
  - Accountability is clear but censorship resistance is low.
  - Contrasts directly with [[Decentralised Governance]] and [[DAO]] structures.
  - Aligns with conventional [[Corporate Governance]] and regulatory oversight models.
- ### Applications
  - Permissioned blockchains where a consortium or operator controls protocol changes.
  - Traditional corporate decision-making under board and executive authority.
  - Regulated platforms that require an accountable controlling entity for [[Compliance]].
  - Early-stage protocols retaining admin keys before progressive decentralisation.
- ### Relationships
  - subClassOf:: [[Decentralised Governance]]
  - contrastsWith:: [[Decentralised Governance]]
  - contrastsWith:: [[DAO]]
  - contrastsWith:: [[Decentralisation]]
  - relatedTo:: [[Governance]]
  - relatedTo:: [[Corporate Governance]]
  - relatedTo:: [[Regulatory Compliance]]
  - enables:: [[Compliance]]
  - enables:: [[Audit]]
  - requires:: [[Access Control]]
  - supports:: [[Financial Services]]
  - partOf:: [[Governance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
