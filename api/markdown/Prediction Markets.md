public:: true

# Prediction Markets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fccd79dff4d2c345f0c7f577ecf16cabd29458eca46797f1b8ffff247a6896ab",
  "@type": "Page",
  "vc:slug": "prediction-markets",
  "title": "Prediction Markets",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:order-book",
      "vc:label": "Order Book"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:smart-contracts",
      "vc:label": "Smart Contracts"
    },
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
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
      "vc:value": "Prediction Markets"
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
  "@id": "urn:ngm:class:prediction-markets",
  "@type": "Class",
  "label": "Prediction Markets",
  "definition": "Prediction markets are exchanges where participants trade contracts whose payoff depends on the outcome of future events, so the market price reflects an aggregated probability estimate.",
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
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
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
  "@id": "urn:visionflow:annotation:link-resolutions:prediction-markets:0be2e25ccaad",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fccd79dff4d2c345f0c7f577ecf16cabd29458eca46797f1b8ffff247a6896ab"
  },
  "vc:resolutions": [
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
      "raw": "[[Smart Contracts]]",
      "resolved": "urn:visionflow:linked:smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
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
  - Prediction markets are exchanges where participants trade contracts whose payoff depends on the outcome of future events, so the market price reflects an aggregated probability estimate.

- ### Semantic Classification
  - owl-class:: metaverse:PredictionMarkets
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Economics Domain]]
  - bridges-to:: [[Smart Contracts]], [[Automated Market Maker]]
  - requires:: [[Order Book]]
  - enables:: [[DeFi]]

- ### Content
  - By letting traders profit from correct forecasts, prediction markets give participants an incentive to reveal information, and the resulting prices act as continuously updated probability estimates. Liquidity and incentive design determine how accurate those estimates are.
  - On-chain prediction markets implement contract settlement through smart contracts and often use automated market makers to provide liquidity. They connect economic forecasting to decentralised finance infrastructure.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
