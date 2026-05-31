public:: true

# Auction Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b12bcdb51ebbbe03f644f67a39f34f54983fa6ce79008a175d3c28c04c1c7acc",
  "@type": "Page",
  "vc:slug": "auction-theory",
  "title": "Auction Theory",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:game-theory",
      "vc:label": "Game Theory"
    },
    {
      "@id": "urn:visionflow:linked:gas-mechanism",
      "vc:label": "Gas Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:economics",
      "vc:label": "Economics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Auction Theory"
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
  "@id": "urn:ngm:class:auction-theory",
  "@type": "Class",
  "label": "Auction Theory",
  "definition": "A branch of economics and game theory that studies how auctions allocate goods and set prices under different rules and information conditions. It analyses bidder behaviour and the properties of auction formats.",
  "domain": "economics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:game-theory",
      "label": "Game Theory"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:gas-mechanism",
        "label": "Gas Mechanism"
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
  "@id": "urn:visionflow:annotation:link-resolutions:auction-theory:7d7a3c156993",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b12bcdb51ebbbe03f644f67a39f34f54983fa6ce79008a175d3c28c04c1c7acc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Game Theory]]",
      "resolved": "urn:visionflow:linked:game-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gas Mechanism]]",
      "resolved": "urn:visionflow:linked:gas-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Economics]]",
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
  - A branch of economics and game theory that studies how auctions allocate goods and set prices under different rules and information conditions. It analyses bidder behaviour and the properties of auction formats.

- ### Semantic Classification
  - owl-class:: economics:AuctionTheory
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Game Theory]]
  - bridges-to:: [[Economics]]
  - requires:: [[Game Theory]]
  - enables:: [[Gas Mechanism]]

- ### Content
  - Auction theory examines formats such as English, Dutch, first-price sealed-bid, and second-price sealed-bid auctions, analysing how bidders behave and which formats yield efficient allocations or maximise revenue.
  - It has practical applications in spectrum allocation, online advertising, and blockchain fee markets. The 2020 Nobel Prize in Economic Sciences was awarded to Paul Milgrom and Robert Wilson for contributions to auction theory and the design of new auction formats.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
