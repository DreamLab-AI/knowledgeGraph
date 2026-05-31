public:: true

# OpenSea
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c5c3d96670b55afee25d4c5583b929bf9fb1b3c2e67e9bcf8e95d3dd5ba2862c",
  "@type": "Page",
  "vc:slug": "open-sea",
  "title": "OpenSea",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nft",
      "vc:label": "NFT"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset",
      "vc:label": "Digital Asset"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:nft-marketplace",
      "vc:label": "NFT Marketplace"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OpenSea"
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
  "@id": "urn:ngm:class:open-sea",
  "@type": "Class",
  "label": "OpenSea",
  "definition": "OpenSea is a marketplace for buying, selling, and trading non-fungible tokens across multiple blockchains.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:nft-marketplace",
      "label": "NFT Marketplace"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
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
  "@id": "urn:visionflow:annotation:link-resolutions:open-sea:f661dd162c0e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c5c3d96670b55afee25d4c5583b929bf9fb1b3c2e67e9bcf8e95d3dd5ba2862c"
  },
  "vc:resolutions": [
    {
      "raw": "[[NFT]]",
      "resolved": "urn:visionflow:linked:nft",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset]]",
      "resolved": "urn:visionflow:linked:digital-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NFT Marketplace]]",
      "resolved": "urn:visionflow:linked:nft-marketplace",
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
  - OpenSea is a marketplace for buying, selling, and trading non-fungible tokens across multiple blockchains.

- ### Semantic Classification
  - owl-class:: blockchain:OpenSea
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[NFT Marketplace]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[NFT]]
  - enables:: [[Digital Asset]]

- ### Content
  - OpenSea operates an online marketplace where users can list, discover, and trade non-fungible tokens representing digital art, collectibles, and other items.
  - The platform interacts with smart contracts on supported blockchains to facilitate the transfer and sale of tokenised assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
