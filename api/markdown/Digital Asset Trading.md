public:: true

# Digital Asset Trading
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:925cd02c0fd0cad0a646b68e66d739f628a80d13c8911a9996ed464de60848ac",
  "@type": "Page",
  "vc:slug": "digital-asset-trading",
  "title": "Digital Asset Trading",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:exchange-platform",
      "vc:label": "Exchange Platform"
    },
    {
      "@id": "urn:visionflow:linked:market-making",
      "vc:label": "Market Making"
    },
    {
      "@id": "urn:visionflow:linked:order-matching",
      "vc:label": "Order Matching"
    },
    {
      "@id": "urn:visionflow:linked:settlement-systems",
      "vc:label": "Settlement Systems"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:financial-trading",
      "vc:label": "Financial Trading"
    },
    {
      "@id": "urn:visionflow:owl:class:liquidity-provision",
      "vc:label": "Liquidity Provision"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:price-discovery",
      "vc:label": "Price Discovery"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9851"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Asset Trading"
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
  "@id": "urn:ngm:class:digital-asset-trading",
  "@type": "Class",
  "label": "Digital Asset Trading",
  "definition": "The buying, selling, and exchange of cryptocurrencies, tokens, and other blockchain-based assets through centralised exchanges, decentralised protocols, and over-the-counter markets using various order types, trading strategies, and execution mechanisms to achieve price discovery and liquidity.",
  "domain": "finance",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:financial-trading",
    "label": "Financial Trading"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:exchange-platform",
        "label": "Exchange Platform"
      },
      {
        "@id": "urn:ngm:class:order-matching",
        "label": "Order Matching"
      },
      {
        "@id": "urn:ngm:class:settlement-systems",
        "label": "Settlement Systems"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:market-making",
        "label": "Market Making"
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      },
      {
        "@id": "urn:ngm:class:arbitrage",
        "label": "Arbitrage"
      },
      {
        "@id": "urn:ngm:class:algorithmic-trading",
        "label": "Algorithmic Trading"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:spot-trading",
        "label": "Spot Trading"
      },
      {
        "@id": "urn:ngm:class:derivatives-trading",
        "label": "Derivatives Trading"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      },
      {
        "@id": "urn:ngm:class:over-the-counter-trading",
        "label": "Over-the-Counter Trading"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:custody-solution",
        "label": "Custody Solution"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:traditional-securities-trading",
        "label": "Traditional Securities Trading"
      },
      {
        "@id": "urn:ngm:class:fiat-currency-exchange",
        "label": "Fiat Currency Exchange"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cryptocurrency-trading",
      "label": "Cryptocurrency Trading"
    },
    {
      "@id": "urn:ngm:class:crypto-asset-trading",
      "label": "Crypto Asset Trading"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-asset-trading:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:925cd02c0fd0cad0a646b68e66d739f628a80d13c8911a9996ed464de60848ac"
  },
  "vc:resolutions": [
    {
      "raw": "[[Exchange Platform]]",
      "resolved": "urn:visionflow:linked:exchange-platform",
      "kind": "StubLink"
    },
    {
      "raw": "[[Market Making]]",
      "resolved": "urn:visionflow:linked:market-making",
      "kind": "StubLink"
    },
    {
      "raw": "[[Order Matching]]",
      "resolved": "urn:visionflow:linked:order-matching",
      "kind": "StubLink"
    },
    {
      "raw": "[[Settlement Systems]]",
      "resolved": "urn:visionflow:linked:settlement-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Trading]]",
      "resolved": "urn:visionflow:owl:class:financial-trading",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Provision]]",
      "resolved": "urn:visionflow:owl:class:liquidity-provision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Price Discovery]]",
      "resolved": "urn:visionflow:owl:class:price-discovery",
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
  - The buying, selling, and exchange of cryptocurrencies, tokens, and other blockchain-based assets through centralised exchanges, decentralised protocols, and over-the-counter markets using various order types, trading strategies, and execution mechanisms to achieve price discovery and liquidity.

bridges-to:: [[Blockchain]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalAssetTrading
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Financial Trading]]
  - requires:: [[Exchange Platform]], [[Order Matching]], [[Settlement Systems]]
  - enables:: [[Price Discovery]], [[Liquidity Provision]], [[Market Making]]

- ### Content

  - ## Technical Details
  - **Trading Venues**:
		- Centralized exchanges (CEX): Order book matching, custody
		- Decentralized exchanges (DEX): AMM pools, on-chain settlement
		- OTC desks: Large block trades, negotiated pricing
		- Dark pools: Institutional anonymous trading
  - **Order Types**:
		- Market orders: Immediate execution at best price
		- Limit orders: Execution at specified price or better
		- Stop orders: Triggered execution at threshold
		- TWAP/VWAP: Time/volume-weighted execution
  - **2024 Market Structure**:
		- Daily spot volume: $50-100+ billion globally
		- Derivatives volume exceeding spot markets
		- DEX share growing (10-15% of volume)
		- Institutional trading infrastructure maturing
  - **Key Exchanges**: Binance, Coinbase, Kraken, Uniswap, dYdX
  - ## Applications
  - Retail cryptocurrency investing
  - Institutional trading operations
  - Arbitrage and market making
  - Hedging and risk management
  - Algorithmic strategy execution

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
