public:: true

# Market Microstructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fafc5ff65f0d4bf4ea9ff1393d2cee56e49bf8d1e1aafa023313702f044ef085",
  "@type": "Page",
  "vc:slug": "market-microstructure",
  "title": "Market Microstructure",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:order-book",
      "vc:label": "Order Book"
    },
    {
      "@id": "urn:visionflow:linked:prediction-markets",
      "vc:label": "Prediction Markets"
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
      "@id": "urn:visionflow:linked:economics",
      "vc:label": "Economics Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Market Microstructure"
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
  "@id": "urn:ngm:class:market-microstructure",
  "@type": "Class",
  "label": "Market Microstructure",
  "definition": "Market microstructure studies how the rules and mechanics of trading, such as order types, matching and information flow, shape prices, liquidity and transaction costs.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:economics",
      "label": "Economics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:prediction-markets",
        "label": "Prediction Markets"
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
  "@id": "urn:visionflow:annotation:link-resolutions:market-microstructure:78cff167f8bd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fafc5ff65f0d4bf4ea9ff1393d2cee56e49bf8d1e1aafa023313702f044ef085"
  },
  "vc:resolutions": [
    {
      "raw": "[[Order Book]]",
      "resolved": "urn:visionflow:linked:order-book",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Prediction Markets]]",
      "resolved": "urn:visionflow:linked:prediction-markets",
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
      "raw": "[[Economics Domain]]",
      "resolved": "urn:visionflow:linked:economics",
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
  - Market microstructure studies how the rules and mechanics of trading, such as order types, matching and information flow, shape prices, liquidity and transaction costs.

- ### Semantic Classification
  - owl-class:: metaverse:MarketMicrostructure
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Economics Domain]]
  - bridges-to:: [[Automated Market Maker]], [[Decentralized Exchange]]
  - requires:: [[Order Book]]
  - enables:: [[Prediction Markets]]

- ### Content
  - Market microstructure examines how order books, matching rules and the arrival of information determine bid-ask spreads, depth and price impact. It explains how liquidity provision and adverse selection translate into trading costs.
  - The field informs the design of both traditional exchanges and on-chain venues, where automated market makers replace the order book. It connects exchange design to prediction market and decentralised trading mechanisms.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
