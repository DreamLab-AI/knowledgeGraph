public:: true

# Digital Asset Market
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1000f2da1f833b9029b5303e2d7cf5d6215fa756021d405bfed9ab842e6ea1af",
  "@type": "Page",
  "vc:slug": "digital-asset-market",
  "title": "Digital Asset Market",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9570"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Asset Market"
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
  "@id": "urn:ngm:class:digital-asset-market",
  "@type": "Class",
  "label": "Digital Asset Market",
  "definition": "A marketplace — centralised or decentralised — where digital assets including cryptocurrencies, NFTs, and tokenised securities are bought, sold, and exchanged. Digital asset markets encompass order-book exchanges, automated market makers, NFT marketplaces, and OTC desks, each governed by distinct liquidity, pricing, and regulatory mechanisms.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:nft-marketplace",
        "label": "NFT Marketplace"
      },
      {
        "@id": "urn:ngm:class:digital-asset-trading",
        "label": "Digital Asset Trading"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:digital-asset-infrastructure",
        "label": "Digital Asset Infrastructure"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-asset-ecosystem",
        "label": "Digital Asset Ecosystem"
      },
      {
        "@id": "urn:ngm:class:blockchain-economics",
        "label": "Blockchain Economics"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-asset-market:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1000f2da1f833b9029b5303e2d7cf5d6215fa756021d405bfed9ab842e6ea1af"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - A marketplace — centralised or decentralised — where digital assets including cryptocurrencies, NFTs, and tokenised securities are bought, sold, and exchanged. Digital asset markets encompass order-book exchanges, automated market makers, NFT marketplaces, and OTC desks, each governed by distinct liquidity, pricing, and regulatory mechanisms.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalAssetMarket
  - owl-role:: concept

- ### Relationships
  - Has Part [[NFT Marketplace]]
  - Has Part [[Digital Asset Trading]]
  - Requires [[Blockchain]]
  - Requires [[Digital Asset Infrastructure]]
  - Uses [[Automated Market Maker]]
  - Uses [[Smart Contract]]
  - Related To [[Digital Asset Ecosystem]]
  - Related To [[Blockchain Economics]]

- ### Content

  ## Overview

  A digital asset market enables buying, selling, and exchanging of digital assets including cryptocurrencies, NFTs, and tokenised securities. Markets may be centralised (order-book exchanges with custodial settlement) or decentralised (AMM-based DEXs with on-chain settlement via smart contracts). NFT marketplaces represent a distinct segment focused on unique digital ownership. Market health depends on liquidity provision, price discovery mechanisms, and regulatory compliance frameworks.

  #### Related Concepts
  - [[NFT Marketplace]]
  - [[Automated Market Maker]]
  - [[Digital Asset Ecosystem]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
