public:: true

# Yearn
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:80390f20922896cd7aaa9b13937a59b5b877570c7ce300990aaf4a77fba6f11d",
  "@type": "Page",
  "vc:slug": "yearn",
  "title": "Yearn",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contracts",
      "vc:label": "Smart Contracts"
    },
    {
      "@id": "urn:visionflow:linked:yield-farming",
      "vc:label": "Yield Farming"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:treasury-management",
      "vc:label": "Treasury Management"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Yearn"
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
  "@id": "urn:ngm:class:yearn",
  "@type": "Class",
  "label": "Yearn",
  "definition": "Yearn is a decentralised finance protocol that automates the allocation of deposited assets across yield-generating strategies, abstracting away manual position management for users.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:de-fi",
      "label": "DeFi"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
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
  "@id": "urn:visionflow:annotation:link-resolutions:yearn:56306cdfba08",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:80390f20922896cd7aaa9b13937a59b5b877570c7ce300990aaf4a77fba6f11d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contracts]]",
      "resolved": "urn:visionflow:linked:smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Yield Farming]]",
      "resolved": "urn:visionflow:linked:yield-farming",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Treasury Management]]",
      "resolved": "urn:visionflow:linked:treasury-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
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
  - Yearn is a decentralised finance protocol that automates the allocation of deposited assets across yield-generating strategies, abstracting away manual position management for users.

- ### Semantic Classification
  - owl-class:: metaverse:Yearn
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[DeFi]]
  - bridges-to:: [[Liquidity Pool]], [[Treasury Management]]
  - requires:: [[Smart Contracts]]
  - enables:: [[Yield Farming]]

- ### Content
  - Yearn pools user deposits into vaults that route capital through automated strategies, rebalancing to pursue yield while charging performance and management fees. Strategy contracts encode where and how funds are deployed.
  - The protocol popularised automated yield aggregation in decentralised finance, building on liquidity pools and lending markets. It connects to treasury management practices that seek productive use of idle assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
