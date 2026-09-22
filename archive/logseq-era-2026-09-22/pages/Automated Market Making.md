public:: true

# Automated Market Making
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2b6e4dfcce43ed2bed4aaf3e3a8bb6598ae6b34cf8da23084711d15e4a93a2db",
  "@type": "Page",
  "vc:slug": "automated-market-making",
  "title": "Automated Market Making",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:de-fi-operations",
      "vc:label": "DeFi Operations"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-trading",
      "vc:label": "Decentralized Trading"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-mining",
      "vc:label": "Liquidity Mining"
    },
    {
      "@id": "urn:visionflow:linked:price-oracle-integration",
      "vc:label": "Price Oracle Integration"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract-deployment",
      "vc:label": "Smart Contract Deployment"
    },
    {
      "@id": "urn:visionflow:linked:token-accessibility",
      "vc:label": "Token Accessibility"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:liquidity-provision",
      "vc:label": "Liquidity Provision"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9787"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Automated Market Making"
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
  "@id": "urn:ngm:class:automated-market-making",
  "@type": "Class",
  "label": "Automated Market Making",
  "definition": "Automated Market Making is the practice and modology of operating decentralized exchange protocols that use algorithmic pricing and liquidity pools to facilitate permissionless trading, encompassing pool design, fee structures, capital efficiency optimization, and impermanent loss mitigation stra...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:bc-defi-and-economics",
        "label": "DeFi and Economics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle Integration"
      },
      {
        "@id": "urn:ngm:class:smart-contract-deployment",
        "label": "Smart Contract Deployment"
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-trading",
        "label": "Decentralized Trading"
      },
      {
        "@id": "urn:ngm:class:liquidity-mining",
        "label": "Liquidity Mining"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:automated-market-making:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2b6e4dfcce43ed2bed4aaf3e3a8bb6598ae6b34cf8da23084711d15e4a93a2db"
  },
  "vc:resolutions": [
    {
      "raw": "[[DeFi Operations]]",
      "resolved": "urn:visionflow:linked:de-fi-operations",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralized Trading]]",
      "resolved": "urn:visionflow:linked:decentralized-trading",
      "kind": "StubLink"
    },
    {
      "raw": "[[Liquidity Mining]]",
      "resolved": "urn:visionflow:linked:liquidity-mining",
      "kind": "StubLink"
    },
    {
      "raw": "[[Price Oracle Integration]]",
      "resolved": "urn:visionflow:linked:price-oracle-integration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Smart Contract Deployment]]",
      "resolved": "urn:visionflow:linked:smart-contract-deployment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Token Accessibility]]",
      "resolved": "urn:visionflow:linked:token-accessibility",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
  - Automated Market Making is the practice and methodology of operating decentralized exchange protocols that use algorithmic pricing and liquidity pools to facilitate permissionless trading, encompassing pool design, fee structures, capital efficiency optimization, and impermanent loss mitigation strategies.

- ### Semantic Classification
  - owl-class:: spatial-computing:AutomatedMarketMaking
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[Blockchain]] (bc)
  - is-subclass-of:: [[DeFi Operations]]
  - requires:: [[Liquidity Provision]], [[Smart Contract Deployment]], [[Price Oracle Integration]]
  - enables:: [[Decentralized Trading]], [[Liquidity Mining]], [[Token Accessibility]]

- ### Content

  ### Technical Details
  Key concepts include:
  - **Constant Product Market Makers**: x * y = k formula ensuring continuous liquidity at all price levels
  - **Concentrated Liquidity**: Capital efficiency through targeted price range provision (Uniswap v3)
  - **Fee Tiers**: Variable trading fees based on asset volatility and liquidity depth
  - **Price Impact**: Relationship between trade size and resulting price movement

  ### Pool Types
  - **Standard Pairs**: Two-token pools with equal weighting
  - **Weighted Pools**: Multi-token pools with custom asset allocations (Balancer)
  - **Stable Pools**: Optimized for correlated assets with minimal slippage (Curve)
  - **Hybrid Pools**: Combining order book and AMM mechanics

  ### Risk Management
  Impermanent loss occurs when liquidity provider holdings diverge from simply holding tokens. Mitigation strategies include selecting correlated pairs, choosing appropriate fee tiers, and active position management.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
