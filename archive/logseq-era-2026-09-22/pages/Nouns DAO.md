public:: true

# Nouns DAO
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:22080c1ef77d74cc907c46e689659bbb9f3a5f010cdd11b205b5e131adad15e2",
  "@type": "Page",
  "vc:slug": "nouns-dao",
  "title": "Nouns DAO",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:treasury-management",
      "vc:label": "Treasury Management"
    },
    {
      "@id": "urn:visionflow:linked:governance-token",
      "vc:label": "Governance Token"
    },
    {
      "@id": "urn:visionflow:linked:nft-standard",
      "vc:label": "NFT Standard"
    },
    {
      "@id": "urn:visionflow:linked:on-chain-governance",
      "vc:label": "On-chain Governance"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "vc:label": "Decentralised Autonomous Organisation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Nouns DAO"
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
  "@id": "urn:ngm:class:nouns-dao",
  "@type": "Class",
  "label": "Nouns DAO",
  "definition": "An on-chain organisation that auctions one non-fungible token each day, with proceeds funding a shared treasury governed by token holders.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-autonomous-organisation",
      "label": "Decentralised Autonomous Organisation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
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
  "@id": "urn:visionflow:annotation:link-resolutions:nouns-dao:650522175498",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:22080c1ef77d74cc907c46e689659bbb9f3a5f010cdd11b205b5e131adad15e2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Treasury Management]]",
      "resolved": "urn:visionflow:linked:treasury-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Token]]",
      "resolved": "urn:visionflow:linked:governance-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NFT Standard]]",
      "resolved": "urn:visionflow:linked:nft-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[On-chain Governance]]",
      "resolved": "urn:visionflow:linked:on-chain-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Autonomous Organisation]]",
      "resolved": "urn:visionflow:linked:decentralised-autonomous-organisation",
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
  - An on-chain organisation that auctions one non-fungible token each day, with proceeds funding a shared treasury governed by token holders.

- ### Semantic Classification
  - owl-class:: blockchain:NounsDAO
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralised Autonomous Organisation]]
  - bridges-to:: [[NFT Standard]], [[On-chain Governance]]
  - requires:: [[Treasury Management]], [[Governance Token]]

- ### Content
  - Nouns DAO settles a single non-fungible token at auction every day, with each token granting its holder one vote and a proportional stake in the collective treasury. The continuous auction provides a steady inflow of funds and distributes voting power gradually over time.
  - Token holders propose and vote on the use of treasury funds, which has been directed toward projects, grants, and community initiatives. The design ties membership, governance, and funding into a single recurring on-chain process, with all decisions and disbursements executed by contract.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
