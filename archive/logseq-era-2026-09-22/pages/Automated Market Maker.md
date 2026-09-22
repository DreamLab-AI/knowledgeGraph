public:: true

# Automated Market Maker
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d4c2e7003781285ca0b242e0cce8d8212aaaa1e32bcb79b58d0c65c2943fa3e9",
  "@type": "Page",
  "vc:slug": "automated-market-maker",
  "title": "Automated Market Maker",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:liquidity-pools",
      "vc:label": "Liquidity Pools"
    },
    {
      "@id": "urn:visionflow:linked:permissionless-trading",
      "vc:label": "Permissionless Trading"
    },
    {
      "@id": "urn:visionflow:linked:pricing-algorithms",
      "vc:label": "Pricing Algorithms"
    },
    {
      "@id": "urn:visionflow:linked:token-swaps",
      "vc:label": "Token Swaps"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:de-fi-protocol",
      "vc:label": "DeFi Protocol"
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
      "@id": "urn:visionflow:owl:class:smart-contracts",
      "vc:label": "Smart Contracts"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9786"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Automated Market Maker"
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
  "@id": "urn:ngm:class:automated-market-maker",
  "@type": "Class",
  "label": "Automated Market Maker",
  "definition": "Automated Market Maker (AMM) is a decentralized exchange protocol that uses algorithmic pricing mechanisms and liquidity pools instead of traditional order books, enabling permissionless token swaps where prices adjust automatically based on supply and demand within smart contract-managed reserves.",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:defi-protocol",
    "label": "DeFi Protocol"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:lp-token",
        "label": "LP Token"
      },
      {
        "@id": "urn:ngm:class:constant-product-formula",
        "label": "Constant Product Formula"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:permissionless-trading",
        "label": "Permissionless Trading"
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
      },
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:token-bonding-curve",
        "label": "Bonding Curve"
      },
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:order-book-exchange",
        "label": "Order Book Exchange"
      },
      {
        "@id": "urn:ngm:class:centralized-exchange",
        "label": "Centralized Exchange"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:impermanent-loss",
        "label": "Impermanent Loss"
      },
      {
        "@id": "urn:ngm:class:slippage",
        "label": "Slippage"
      },
      {
        "@id": "urn:ngm:class:arbitrage",
        "label": "Arbitrage"
      },
      {
        "@id": "urn:ngm:class:miner-extractable-value",
        "label": "Miner Extractable Value"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:virtual-economy",
        "label": "Virtual Economy"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:amm",
      "label": "AMM"
    },
    {
      "@id": "urn:ngm:class:constant-function-market-maker",
      "label": "Constant Function Market Maker"
    }
  ],
  "quality": 0.7,
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
  "@id": "urn:visionflow:annotation:link-resolutions:automated-market-maker:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d4c2e7003781285ca0b242e0cce8d8212aaaa1e32bcb79b58d0c65c2943fa3e9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Liquidity Pools]]",
      "resolved": "urn:visionflow:linked:liquidity-pools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Permissionless Trading]]",
      "resolved": "urn:visionflow:linked:permissionless-trading",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pricing Algorithms]]",
      "resolved": "urn:visionflow:linked:pricing-algorithms",
      "kind": "StubLink"
    },
    {
      "raw": "[[Token Swaps]]",
      "resolved": "urn:visionflow:linked:token-swaps",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi Protocol]]",
      "resolved": "urn:visionflow:owl:class:de-fi-protocol",
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
      "raw": "[[Smart Contracts]]",
      "resolved": "urn:visionflow:owl:class:smart-contracts",
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
  - Automated Market Maker (AMM) is a decentralized exchange protocol that uses algorithmic pricing mechanisms and liquidity pools instead of traditional order books, enabling permissionless token swaps where prices adjust automatically based on supply and demand within smart contract-managed reserves.

- ### Semantic Classification
  - owl-class:: spatial-computing:AutomatedMarketMaker
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[Blockchain]] (bc)
  - is-subclass-of:: [[DeFi Protocol]]
  - requires:: [[Liquidity Pools]], [[Smart Contracts]], [[Pricing Algorithms]]
  - enables:: [[Permissionless Trading]], [[Liquidity Provision]], [[Token Swaps]]

- ### Content

  ### Technical Details
  Key components include:
  - **Constant Product Formula**: x * y = k pricing mechanism where token quantities maintain constant product
  - **Liquidity Pools**: Smart contracts holding paired token reserves deposited by liquidity providers
  - **LP Tokens**: Receipts representing liquidity provider shares and earning trading fees
  - **Slippage**: Price impact from large trades relative to pool size

  ### Major Protocols
  Uniswap (Ethereum), SushiSwap, Curve Finance (stablecoins), PancakeSwap (BNB Chain), and Balancer (weighted pools).

  ### Advantages and Risks
  Advantages include 24/7 liquidity, permissionless access, and decentralization. Risks include impermanent loss for LPs, smart contract vulnerabilities, and slippage on large trades.

  ### Metaverse Applications
  AMMs enable trading of virtual land tokens, in-game assets, and metaverse project governance tokens.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
