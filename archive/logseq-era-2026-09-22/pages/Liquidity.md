public:: true

# Liquidity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:496854887b543626702438f4225e9aa97c3de85445004aa25f575b33ed5025a6",
  "@type": "Page",
  "vc:slug": "liquidity",
  "title": "Liquidity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    },
    {
      "@id": "urn:visionflow:linked:market-making",
      "vc:label": "Market Making"
    },
    {
      "@id": "urn:visionflow:linked:order-book",
      "vc:label": "Order Book"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:https-www-investopedia-com-terms-l-liquidity-asp",
      "vc:label": "https://www.investopedia.com/terms/l/liquidity.asp"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Liquidity"
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
  "@id": "urn:ngm:class:liquidity",
  "@type": "Class",
  "label": "Liquidity",
  "definition": "The degree to which an asset can be bought or sold quickly without causing a significant change in its price. In decentralised markets, liquidity is supplied by participants who deposit assets into pools or order books, enabling efficient price discovery and low-slippage trade execution.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:de-fi",
    "label": "DeFi"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:market-depth",
        "label": "Market Depth"
      },
      {
        "@id": "urn:ngm:class:bid-ask-spread",
        "label": "Bid-Ask Spread"
      },
      {
        "@id": "urn:ngm:class:liquidity-provider",
        "label": "Liquidity Provider"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      },
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      },
      {
        "@id": "urn:ngm:class:token-swapping",
        "label": "Token Swap"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:market-making",
        "label": "Market Making"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:constant-product-formula",
        "label": "Constant Product Formula"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
      },
      {
        "@id": "urn:ngm:class:arbitrage",
        "label": "Arbitrage"
      },
      {
        "@id": "urn:ngm:class:capital-efficiency",
        "label": "Capital Efficiency"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:impermanent-loss",
        "label": "Impermanent Loss"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:asset-liquidity",
      "label": "Asset Liquidity"
    },
    {
      "@id": "urn:ngm:class:market-liquidity",
      "label": "Market Liquidity"
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
  "@id": "urn:visionflow:annotation:link-resolutions:liquidity:59b47e9ec520",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:496854887b543626702438f4225e9aa97c3de85445004aa25f575b33ed5025a6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Exchange]]",
      "resolved": "urn:visionflow:linked:decentralized-exchange",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Market Making]]",
      "resolved": "urn:visionflow:linked:market-making",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Order Book]]",
      "resolved": "urn:visionflow:linked:order-book",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.investopedia.com/terms/l/liquidity.asp]]",
      "resolved": "urn:visionflow:linked:https-www-investopedia-com-terms-l-liquidity-asp",
      "kind": "StubLink"
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
  - The degree to which an asset can be bought or sold quickly without causing a large change in its price. In decentralised markets liquidity is supplied by participants who deposit assets into pools or order books.

- ### Semantic Classification
  - owl-class:: blockchain:Liquidity
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[DeFi]]
  - bridges-to:: [[Market Making]], [[Order Book]]
  - requires:: [[Liquidity Pool]]
  - enables:: [[Automated Market Maker]], [[Decentralized Exchange]]

- ### Content
  - Liquidity measures how readily an asset converts to another asset at a stable price. High liquidity means large trades move the price only slightly, while thin liquidity causes price slippage and wide spreads.
  - In decentralised finance, liquidity is contributed by users who deposit pairs of assets into pools or post orders, in exchange for trading fees. The available depth determines the cost and feasibility of swaps executed through automated market makers and exchanges.

- ### Provenance
  - sources:: [[https://www.investopedia.com/terms/l/liquidity.asp]]
  - migration-date:: 2026-05-29T00:00:00Z
