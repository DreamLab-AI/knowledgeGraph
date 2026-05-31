public:: true

# Market Making
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:53a50ea792773ca23f9fc5b93abb67b12b957cf20d472709f6df84fa492f958a",
  "@type": "Page",
  "vc:slug": "market-making",
  "title": "Market Making",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:price-discovery",
      "vc:label": "Price Discovery"
    },
    {
      "@id": "urn:visionflow:linked:order-book",
      "vc:label": "Order Book"
    },
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-provision",
      "vc:label": "Liquidity Provision"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Market Making"
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
  "@id": "urn:ngm:class:market-making",
  "@type": "Class",
  "label": "Market Making",
  "definition": "The practice of quoting both buy and sell prices for an asset to supply liquidity and earn the spread between them.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:liquidity-provision",
      "label": "Liquidity Provision"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
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
  "@id": "urn:visionflow:annotation:link-resolutions:market-making:43cd5230a56e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:53a50ea792773ca23f9fc5b93abb67b12b957cf20d472709f6df84fa492f958a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Price Discovery]]",
      "resolved": "urn:visionflow:linked:price-discovery",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Order Book]]",
      "resolved": "urn:visionflow:linked:order-book",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Provision]]",
      "resolved": "urn:visionflow:linked:liquidity-provision",
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
  - The practice of quoting both buy and sell prices for an asset to supply liquidity and earn the spread between them.

- ### Semantic Classification
  - owl-class:: blockchain:MarketMaking
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Liquidity Provision]]
  - bridges-to:: [[Order Book]], [[Automated Market Maker]]
  - enables:: [[Price Discovery]]

- ### Content
  - Market making involves continuously posting bids and offers so that other participants can trade without waiting for a matching counterparty. The market maker profits from the spread between its buy and sell quotes while bearing inventory risk as prices move.
  - On order book venues this is done by placing and revising limit orders. In automated market maker designs the role is performed algorithmically by liquidity providers who deposit assets into a pool, with the pricing curve setting quotes and fees compensating for the risk of holding the pooled inventory.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
