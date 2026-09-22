public:: true

# Mango Markets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:62b07dea6983282eff45f2381fce8172f7764fb08702080487adae23ea2101c2",
  "@type": "Page",
  "vc:slug": "mango-markets",
  "title": "Mango Markets",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    },
    {
      "@id": "urn:visionflow:linked:yield-farming",
      "vc:label": "Yield Farming"
    },
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Mango Markets"
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
  "@id": "urn:ngm:class:mango-markets",
  "@type": "Class",
  "label": "Mango Markets",
  "definition": "Mango Markets is a decentralised trading platform on Solana offering spot and perpetual markets, notable as the site of a large 2022 exploit that manipulated an oracle price to drain its treasury.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-exchange",
      "label": "Decentralized Exchange"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
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
  "@id": "urn:visionflow:annotation:link-resolutions:mango-markets:2748243a1fd3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:62b07dea6983282eff45f2381fce8172f7764fb08702080487adae23ea2101c2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralized Exchange]]",
      "resolved": "urn:visionflow:linked:decentralized-exchange",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Yield Farming]]",
      "resolved": "urn:visionflow:linked:yield-farming",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
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
  - Mango Markets is a decentralised trading platform on Solana offering spot and perpetual markets, notable as the site of a large 2022 exploit that manipulated an oracle price to drain its treasury.

- ### Semantic Classification
  - owl-class:: metaverse:MangoMarkets
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralized Exchange]]
  - bridges-to:: [[Automated Market Maker]], [[DeFi]]
  - requires:: [[Decentralized Exchange]]
  - enables:: [[Yield Farming]]

- ### Content
  - Mango Markets provides on-chain margin and derivatives trading, drawing collateral and pricing from on-chain data sources. In 2022 an attacker inflated the value of a thinly traded asset to borrow against it and drain a large sum, exposing oracle and liquidity assumptions.
  - The episode became a reference case for price manipulation risk in decentralised finance, where automated market makers and lending rely on accurate, manipulation-resistant price feeds. It connects to broader decentralised exchange design.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
