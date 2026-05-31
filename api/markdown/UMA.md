public:: true

# UMA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f80438c4c6f4dfd6dccc4022c9ae3d6f5819da1c6508300b3930e3479eef689d",
  "@type": "Page",
  "vc:slug": "uma",
  "title": "UMA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
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
      "vc:value": "UMA"
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
  "@id": "urn:ngm:class:uma",
  "@type": "Class",
  "label": "UMA",
  "definition": "UMA is a decentralised finance protocol on Ethereum that provides an optimistic oracle for reporting data to smart contracts and tooling for creating synthetic assets.",
  "domain": "blockchain",
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
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
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
  "@id": "urn:visionflow:annotation:link-resolutions:uma:e811eb783024",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f80438c4c6f4dfd6dccc4022c9ae3d6f5819da1c6508300b3930e3479eef689d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
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
  - UMA is a decentralised finance protocol on Ethereum that provides an optimistic oracle for reporting data to smart contracts and tooling for creating synthetic assets.

- ### Semantic Classification
  - owl-class:: blockchain:UMA
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[DeFi]]
  - bridges-to:: [[DeFi]]
  - requires:: [[Smart Contract]], [[Ethereum]]

- ### Content
  - UMA, short for Universal Market Access, operates an optimistic oracle in which proposed answers are accepted unless disputed within a challenge window. Disputes are resolved by token holder voting, with economic incentives discouraging false reports.
  - The oracle is used by other protocols to bring off-chain data and arbitrary truth claims on chain, and UMA also provides contracts for minting synthetic tokens whose value tracks a reference price.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
