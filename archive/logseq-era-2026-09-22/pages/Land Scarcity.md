public:: true

# Land Scarcity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:287dd8c8ddf99d2acd3a7f89de6726887272d0a67ec25aca7936abf48c69a5ea",
  "@type": "Page",
  "vc:slug": "land-scarcity",
  "title": "Land Scarcity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:virtual-economics",
      "vc:label": "Virtual Economics"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-4008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Land Scarcity"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:land-scarcity",
  "@type": "Class",
  "label": "Land Scarcity",
  "definition": "An economic design principle applied in virtual worlds and metaverse platforms whereby the total supply of digital land parcels is hard-capped by the platform protocol, creating artificial scarcity analogous to finite physical real estate. This scarcity underpins virtual real estate markets, drives speculative investment, and enables monetisation through NFT-based ownership of parcels in platforms such as Decentraland and The Sandbox. The principle links metaverse spatial design to tokenomics, digital asset valuation, and broader virtual economy dynamics.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.75,
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:metaverse",
      "label": "Metaverse"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:virtual-economy", "label": "Virtual Economy"},
      {"@id": "urn:ngm:class:metaverse", "label": "Metaverse"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"},
      {"@id": "urn:ngm:class:digital-ownership", "label": "Digital Ownership"},
      {"@id": "urn:ngm:class:nft-marketplace", "label": "NFT Marketplace"},
      {"@id": "urn:ngm:class:economics", "label": "Economics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:tokenization", "label": "Tokenization"},
      {"@id": "urn:ngm:class:property-rights", "label": "Property Rights"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:virtual-world", "label": "Virtual World"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:web3", "label": "Web3"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:land-scarcity:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:287dd8c8ddf99d2acd3a7f89de6726887272d0a67ec25aca7936abf48c69a5ea"
  },
  "vc:resolutions": [
    {
      "raw": "[[Virtual Economics]]",
      "resolved": "urn:visionflow:linked:virtual-economics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Economic principle in virtual worlds where digital land parcels are artificially limited to create value and drive virtual real estate markets.

- ### Semantic Classification
  - owl-class:: spatial-computing:LandScarcity
  - owl-role:: Process
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - is-subclass-of:: [[Metaverse]]

- ### Content

  ## Overview

  Land scarcity in virtual worlds is an intentional protocol-level design choice rather than a physical constraint. Platforms cap total parcel supply in their smart contracts (e.g., Decentraland's 90,601 LAND parcels, The Sandbox's 166,464 LAND tokens), creating a fixed-supply digital real estate market. Owners hold NFTs representing exclusive spatial rights within the platform's coordinate system, and secondary market prices reflect location desirability, adjacency to high-traffic districts, and platform-wide user-growth expectations.

  ## Economic Dynamics

  The scarcity model mirrors classical land economics (Ricardian rent, location value) transposed to virtual coordinate space. Value accrues from platform network effects rather than natural resource productivity. This creates winner-take-most dynamics: parcels adjacent to branded hubs or event venues command premiums analogous to high-street retail. Speculative cycles have demonstrated extreme volatility, with 2021-era valuations collapsing substantially by 2023 as active-user metrics disappointed, raising fundamental questions about sustainable virtual real estate valuation models independent of speculative demand.

  ## Critique

  Critics argue that artificial scarcity is a design choice, not a necessity — platforms could expand coordinate space at negligible computational cost, making scarcity a rent-seeking mechanism rather than an economic inevitability. Open metaverse interoperability advocates propose standards that decouple spatial identity from platform-controlled land registries.

- ### Provenance
  - sources:: [[Virtual Economics]], [[Metaverse]]
  - migration-date:: 2026-04-26T00:00:00Z
