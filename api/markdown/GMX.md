public:: true

# GMX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b19b7f7b5afcf3c9479161ba366a80b6201fe6256fe5e9f4a1333b43d4347882",
  "@type": "Page",
  "vc:slug": "gmx",
  "title": "GMX",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:oracle",
      "vc:label": "Oracle"
    },
    {
      "@id": "urn:visionflow:linked:arbitrum",
      "vc:label": "Arbitrum"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:perpetual-futures",
      "vc:label": "Perpetual Futures"
    },
    {
      "@id": "urn:visionflow:linked:leveraged-trading",
      "vc:label": "Leveraged Trading"
    },
    {
      "@id": "urn:visionflow:linked:d-yd-x",
      "vc:label": "dYdX"
    },
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "GMX"
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
  "@id": "urn:ngm:class:gmx",
  "@type": "Class",
  "label": "GMX",
  "definition": "GMX is a decentralised spot and perpetual-futures exchange deployed on the Arbitrum and Avalanche networks. It allows traders to take leveraged positions against a shared multi-asset liquidity pool rather than a traditional order book, with prices supplied by external oracles. Liquidity providers deposit assets into the pool and earn a share of trading fees while acting as the counterparty to traders.",
  "domain": "gmx",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-finance-domain",
      "label": "Decentralised Finance Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      },
      {
        "@id": "urn:ngm:class:arbitrum",
        "label": "Arbitrum"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:perpetual-futures",
        "label": "Perpetual Futures"
      },
      {
        "@id": "urn:ngm:class:leveraged-trading",
        "label": "Leveraged Trading"
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
  "@id": "urn:visionflow:annotation:link-resolutions:gmx:600637a5a091",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b19b7f7b5afcf3c9479161ba366a80b6201fe6256fe5e9f4a1333b43d4347882"
  },
  "vc:resolutions": [
    {
      "raw": "[[Oracle]]",
      "resolved": "urn:visionflow:linked:oracle",
      "kind": "StubLink"
    },
    {
      "raw": "[[Arbitrum]]",
      "resolved": "urn:visionflow:linked:arbitrum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Perpetual Futures]]",
      "resolved": "urn:visionflow:linked:perpetual-futures",
      "kind": "StubLink"
    },
    {
      "raw": "[[Leveraged Trading]]",
      "resolved": "urn:visionflow:linked:leveraged-trading",
      "kind": "StubLink"
    },
    {
      "raw": "[[dYdX]]",
      "resolved": "urn:visionflow:linked:d-yd-x",
      "kind": "StubLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
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
  - GMX is a decentralised spot and perpetual-futures exchange deployed on the Arbitrum and Avalanche networks. It allows traders to take leveraged positions against a shared multi-asset liquidity pool rather than a traditional order book, with prices supplied by external oracles. Liquidity providers deposit assets into the pool and earn a share of trading fees while acting as the counterparty to traders.

- ### Semantic Classification
  - owl-class:: defi:GMX
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Decentralised Finance Domain]]
  - bridges-to:: [[dYdX]], [[Automated Market Maker]]
  - requires:: [[Oracle]], [[Arbitrum]], [[Liquidity Pool]]
  - enables:: [[Perpetual Futures]], [[Leveraged Trading]]

- ### Content
  - GMX uses a pooled liquidity model in which a basket of assets backs all open positions. Traders open long or short positions with leverage, and profits or losses are settled against this pool. Because execution prices come from oracle feeds rather than matched orders, the design avoids the price impact of thin order books for supported assets.
  - Liquidity providers receive a token representing their share of the pool and earn fees from swaps, leverage trading and liquidations, while bearing the aggregate profit and loss of traders. This couples provider returns to the net performance of the trading population, which differs from order-book venues where market makers manage individual quotes.
  - The protocol has been a prominent example of on-chain perpetuals on layer-two networks, where lower fees make active trading viable. Subsequent versions introduced isolated liquidity pools and broader asset support to manage risk concentration and to widen the range of tradable markets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
