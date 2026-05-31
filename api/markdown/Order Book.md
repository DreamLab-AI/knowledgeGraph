public:: true

# Order Book
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6b029de9d9eb5e955b95ab10c45bae3e443f0b2304b40fdf6ba662f74cba2a55",
  "@type": "Page",
  "vc:slug": "order-book",
  "title": "Order Book",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:price-discovery",
      "vc:label": "Price Discovery"
    },
    {
      "@id": "urn:visionflow:linked:market-making",
      "vc:label": "Market Making"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-exchange",
      "vc:label": "Decentralised Exchange"
    },
    {
      "@id": "urn:visionflow:linked:exchange-mechanism",
      "vc:label": "Exchange Mechanism"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Order Book"
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
  "@id": "urn:ngm:class:order-book",
  "@type": "Class",
  "label": "Order Book",
  "definition": "A continuously updated record of outstanding buy and sell orders for an asset, organised by price level, against which incoming orders are matched.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:exchange-mechanism",
      "label": "Exchange Mechanism"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      },
      {
        "@id": "urn:ngm:class:market-making",
        "label": "Market Making"
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
  "@id": "urn:visionflow:annotation:link-resolutions:order-book:f16ebb2f1c9b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6b029de9d9eb5e955b95ab10c45bae3e443f0b2304b40fdf6ba662f74cba2a55"
  },
  "vc:resolutions": [
    {
      "raw": "[[Price Discovery]]",
      "resolved": "urn:visionflow:linked:price-discovery",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Market Making]]",
      "resolved": "urn:visionflow:linked:market-making",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Exchange]]",
      "resolved": "urn:visionflow:linked:decentralised-exchange",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Exchange Mechanism]]",
      "resolved": "urn:visionflow:linked:exchange-mechanism",
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
  - A continuously updated record of outstanding buy and sell orders for an asset, organised by price level, against which incoming orders are matched.

- ### Semantic Classification
  - owl-class:: blockchain:OrderBook
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Exchange Mechanism]]
  - bridges-to:: [[Decentralised Exchange]]
  - enables:: [[Price Discovery]], [[Market Making]]

- ### Content
  - An order book lists the limit orders that participants have placed but not yet executed, sorted into bids on one side and asks on the other. The highest bid and lowest ask define the spread, and the depth of resting orders at each level indicates available liquidity.
  - A matching engine pairs incoming orders against the book according to price and time priority. This model supports fine-grained control over execution price and is standard on centralised venues; on-chain implementations are constrained by ledger throughput and the cost of posting and cancelling orders.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
