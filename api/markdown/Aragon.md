public:: true

# Aragon
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e7c04479cde0e5a245fc94928ec043e437a2e784ad18759a5bad8a55890f58fb",
  "@type": "Page",
  "vc:slug": "aragon",
  "title": "Aragon",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "vc:label": "Decentralised Autonomous Organisation"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:smart-contracts",
      "vc:label": "Smart Contracts"
    },
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:dao",
      "vc:label": "DAO"
    },
    {
      "@id": "urn:visionflow:linked:dao-tooling",
      "vc:label": "DAO Tooling"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aragon"
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
  "@id": "urn:ngm:class:aragon",
  "@type": "Class",
  "label": "Aragon",
  "definition": "A framework and set of smart contracts for creating and operating decentralised autonomous organisations on Ethereum, providing modular governance, treasury and permission components.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dao-tooling",
      "label": "DAO Tooling"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aragon:626e57b7df39",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e7c04479cde0e5a245fc94928ec043e437a2e784ad18759a5bad8a55890f58fb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralised Autonomous Organisation]]",
      "resolved": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contracts]]",
      "resolved": "urn:visionflow:linked:smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAO]]",
      "resolved": "urn:visionflow:linked:dao",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAO Tooling]]",
      "resolved": "urn:visionflow:linked:dao-tooling",
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
  - A framework and set of smart contracts for creating and operating decentralised autonomous organisations on Ethereum, providing modular governance, treasury and permission components.

- ### Semantic Classification
  - owl-class:: governance:Aragon
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[DAO Tooling]]
  - bridges-to:: [[DAO]]
  - requires:: [[Decentralised Autonomous Organisation]], [[Ethereum Smart Contract Platform]], [[Smart Contracts]]
  - enables:: [[Governance]]

- ### Content
  - Aragon offers a modular stack of smart contracts and applications that let groups deploy and run decentralised autonomous organisations. Its components manage membership, voting, treasury control and granular permissions, allowing organisations to encode their governance rules on chain.
  - The framework emphasises composability and upgradeability so that a DAO can adopt different voting mechanisms and plugins over time while keeping assets and decisions under collective control.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
