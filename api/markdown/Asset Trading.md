public:: true

# Asset Trading
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ebf204c663151541db89a92b0979156ceece2915413e87d9df965a0b4f1b988e",
  "@type": "Page",
  "vc:slug": "asset-trading",
  "title": "Asset Trading",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-services",
      "vc:label": "Financial Services"
    },
    {
      "@id": "urn:visionflow:linked:market-making",
      "vc:label": "Market Making"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-management",
      "vc:label": "Asset Management"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    },
    {
      "@id": "urn:visionflow:owl:class:decentralized-finance-de-fi",
      "vc:label": "Decentralized Finance (DeFi)"
    },
    {
      "@id": "urn:visionflow:owl:class:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:owl:class:price-discovery",
      "vc:label": "Price Discovery"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-7030"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Asset Trading"
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
  "@id": "urn:ngm:class:asset-trading",
  "@type": "Class",
  "label": "Asset Trading",
  "definition": "The exchange of digital and traditional financial assets through centralized exchanges (CEXs), decentralized exchanges (DEXs), and hybrid platforms.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    },
    {
      "@id": "urn:ngm:class:financial-services",
      "label": "Financial Services"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:market-making",
        "label": "Market Making"
      },
      {
        "@id": "urn:ngm:class:asset-management",
        "label": "Asset Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      }
    ]
  },
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:asset-trading:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ebf204c663151541db89a92b0979156ceece2915413e87d9df965a0b4f1b988e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Services]]",
      "resolved": "urn:visionflow:linked:financial-services",
      "kind": "StubLink"
    },
    {
      "raw": "[[Market Making]]",
      "resolved": "urn:visionflow:linked:market-making",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asset Management]]",
      "resolved": "urn:visionflow:owl:class:asset-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Exchange]]",
      "resolved": "urn:visionflow:owl:class:decentralized-exchange",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Finance (DeFi)]]",
      "resolved": "urn:visionflow:owl:class:decentralized-finance-de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:owl:class:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Price Discovery]]",
      "resolved": "urn:visionflow:owl:class:price-discovery",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
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
  - The exchange of digital and traditional financial assets through centralized exchanges (CEXs), decentralized exchanges (DEXs), and hybrid platforms. Asset trading in the blockchain context enables peer-to-peer token swaps via smart contracts, eliminating intermediaries while users retain custody of their assets, with weekly DEX trading volumes averaging $18.6 billion and over 9.7 million unique wallets interacting with DeFi protocols in 2025.

- ### Semantic Classification
  - owl-class:: blockchain:AssetTrading
  - owl-role:: Concept
  - belongs-to-domain:: [[Decentralized Finance (DeFi)]]

- ### Relationships
  - bridges-to:: [[Blockchain]]
  - is-subclass-of:: [[Financial Services]]
  - enables:: [[Decentralized Exchange]]

- ### Content

  ## Trading Mechanisms
  - **Centralized Exchanges (CEXs)**: Traditional order book matching with custodial asset holding
  - **Decentralized Exchanges (DEXs)**: Smart contract-based swaps enabling self-custody trading
  - **Automated Market Makers (AMMs)**: Algorithmic liquidity pools replacing order books
  - **Aggregators**: Cross-platform routing for optimal trade execution

  ## DEX Characteristics
  - Self-custody: Users retain complete control of their funds via wallet connections
  - Enhanced privacy: Minimal or no KYC verification requirements
  - Global accessibility: No regional restrictions on participation
  - Wide token availability: Including new and niche projects not listed on CEXs
  - Immutable transactions: Executed through audited smart contracts

  ## Market Scale (2025)
  - Total Value Locked (TVL) in DeFi exceeds $100 billion
  - Weekly DEX trading volume averages $18.6 billion
  - Over 1,127 tracked decentralized exchanges
  - 24-hour DEX trading volume of $5.4 billion
  - Leading platforms: Uniswap, PancakeSwap, SushiSwap, Jupiter, Hyperliquid

  ## Key Trends
  - Cross-chain interoperability enabling seamless asset swaps across blockchain networks
  - Decentralized derivatives markets attracting institutional investors
  - Layer 3 scaling solutions improving transaction throughput
  - Privacy-preserving technologies including zero-knowledge rollups
  - Institutional-grade compliance tooling and real-time settlement layers

  ## Relationships
  - is-subclass-of:: [[Financial Services]]
  - uses:: [[Smart Contract]]
  - uses:: [[Liquidity Pool]]
  - enables:: [[Decentralized Exchange]]
  - related-to:: [[Asset Management]]
  - related-to:: [[Market Making]]
  - supports:: [[Price Discovery]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
