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
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:liquidity-pools",
        "label": "Liquidity Pools"
      },
      {
        "@id": "urn:ngm:class:pricing-algorithms",
        "label": "Pricing Algorithms"
      },
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:permissionless-trading",
        "label": "Permissionless Trading"
      },
      {
        "@id": "urn:ngm:class:token-swaps",
        "label": "Token Swaps"
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
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
