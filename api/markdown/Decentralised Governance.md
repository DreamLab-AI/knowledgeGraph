public:: true

# Decentralised Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:785125842be614163393fe719d636886ea065960cfa175265546871128791063",
  "@type": "Page",
  "vc:slug": "decentralised-governance",
  "title": "Decentralised Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:transparency",
      "vc:label": "Transparency"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "vc:label": "Decentralised Autonomous Organisation"
    },
    {
      "@id": "urn:visionflow:linked:decentralisation",
      "vc:label": "Decentralisation"
    },
    {
      "@id": "urn:visionflow:linked:dao",
      "vc:label": "DAO"
    },
    {
      "@id": "urn:visionflow:linked:governance-framework",
      "vc:label": "Governance Framework"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Decentralised Governance"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralised-governance",
  "@type": "Class",
  "label": "Decentralised Governance",
  "definition": "A model of collective decision-making in which authority is distributed across participants rather than concentrated in a central body, often implemented through on-chain voting and smart contracts.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance-framework",
      "label": "Governance Framework"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:decentralised-governance:7baca5f28dce",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:785125842be614163393fe719d636886ea065960cfa175265546871128791063"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transparency]]",
      "resolved": "urn:visionflow:linked:transparency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Autonomous Organisation]]",
      "resolved": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralisation]]",
      "resolved": "urn:visionflow:linked:decentralisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAO]]",
      "resolved": "urn:visionflow:linked:dao",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Framework]]",
      "resolved": "urn:visionflow:linked:governance-framework",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A model of collective decision-making in which authority is distributed across participants rather than concentrated in a central body, often implemented through on-chain voting and smart contracts.

- ### Semantic Classification
  - owl-class:: governance:DecentralisedGovernance
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Governance Framework]]
  - bridges-to:: [[Decentralisation]], [[DAO]]
  - requires:: [[Smart Contract]], [[Transparency]]
  - enables:: [[Decentralised Autonomous Organisation]]

- ### Content
  - Decentralised governance distributes the power to propose, deliberate and decide across a network of stakeholders. It is commonly associated with blockchain-based systems where voting rights are encoded in tokens and proposals are executed automatically once thresholds are met.
  - The approach aims to reduce single points of control and increase participant accountability. Practical implementations vary in how they balance broad participation against the coordination costs and security considerations that arise when many parties hold decision rights.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
