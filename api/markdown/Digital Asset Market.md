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
  "domain": "finance",
  "maturity": "emerging",
  "qualityScore": 0.72,
  "subClassOf": {
    "@id": "urn:ngm:class:financial-market",
    "label": "Financial Market"
  },
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:crypto-exchange",
      "label": "Crypto Exchange"
    },
    {
      "@id": "urn:ngm:class:digital-currency-market",
      "label": "Digital Currency Market"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:nft-marketplace",
        "label": "NFT Marketplace"
      },
      {
        "@id": "urn:ngm:class:digital-asset-trading",
        "label": "Digital Asset Trading"
      },
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      },
      {
        "@id": "urn:ngm:class:over-the-counter-desk",
        "label": "Over-the-Counter Desk"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-asset-ecosystem",
        "label": "Digital Asset Ecosystem"
      },
      {
        "@id": "urn:ngm:class:global-financial-system",
        "label": "Global Financial System"
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
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:tokenised-securities-trading",
        "label": "Tokenised Securities Trading"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:custodial-settlement",
        "label": "Custodial Settlement"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
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
      },
      {
        "@id": "urn:ngm:class:cryptographic-token",
        "label": "Cryptographic Token"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:market-surveillance",
        "label": "Market Surveillance"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:financial-regulatory-framework",
        "label": "Financial Regulatory Framework"
      },
      {
        "@id": "urn:ngm:class:travel-rule",
        "label": "Travel Rule"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:traditional-securities-exchange",
        "label": "Traditional Securities Exchange"
      },
      {
        "@id": "urn:ngm:class:fiat-currency-market",
        "label": "Fiat Currency Market"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain-economics",
        "label": "Blockchain Economics"
      },
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
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
