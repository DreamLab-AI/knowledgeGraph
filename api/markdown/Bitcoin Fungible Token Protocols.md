public:: true

elevatedFrom:: [[Runes and Glyphs]]
# Bitcoin Fungible Token Protocols
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0c0f140284c906ebb6325b9fce000453e6d1cc56ad15c9a63f52c00f7af20c0d",
  "@type": "Page",
  "vc:slug": "bitcoin-fungible-token-protocols",
  "title": "Bitcoin Fungible Token Protocols",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:digital-objects",
      "vc:label": "Digital Objects"
    },
    {
      "@id": "urn:visionflow:owl:class:melvin-carvalho",
      "vc:label": "Melvin Carvalho"
    },
    {
      "@id": "urn:visionflow:owl:class:runes-and-glyphs",
      "vc:label": "Runes and Glyphs"
    },
    {
      "@id": "urn:visionflow:owl:class:testnet",
      "vc:label": "Testnet"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Runes and Glyphs"
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
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-fungible-token-protocols",
  "@type": "Class",
  "label": "Bitcoin Fungible Token Protocols",
  "definition": "Runes and Glyphs refers to two complementary Bitcoin token protocols: Runes, which encodes fungible token balances directly in Bitcoin transaction outputs using OP_RETURN data, and Glyphs, a related protocol developed by Melvin Carvalho that encodes token metadata as on-chain inscriptions compatible with the Ordinals framework. Together they extend Bitcoin's base layer with native fungible asset issuance without requiring a separate blockchain, enabling DAOs, project tokens, and programmable digital objects on Bitcoin testnet and mainnet.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:digital-objects", "label": "Digital Objects"},
      {"@id": "urn:ngm:class:nft", "label": "NFT"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"},
      {"@id": "urn:ngm:class:asset-tokenization", "label": "Asset Tokenization"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralised-autonomous-organisation", "label": "Decentralised Autonomous Organisation"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:runes-and-glyphs:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0c0f140284c906ebb6325b9fce000453e6d1cc56ad15c9a63f52c00f7af20c0d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Objects]]",
      "resolved": "urn:visionflow:owl:class:digital-objects",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Melvin Carvalho Decentralised Web Advocate]]",
      "resolved": "urn:visionflow:owl:class:melvin-carvalho",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Fungible Token Protocols]]",
      "resolved": "urn:visionflow:owl:class:runes-and-glyphs",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Testnet]]",
      "resolved": "urn:visionflow:owl:class:testnet",
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
  - Runes and Glyphs refers to two complementary Bitcoin token protocols: Runes, which encodes fungible token balances directly in Bitcoin transaction outputs using OP_RETURN data, and Glyphs, a related protocol developed by Melvin Carvalho that encodes token metadata as on-chain inscriptions compatible with the Ordinals framework. Together they extend Bitcoin's base layer with native fungible asset issuance without requiring a separate blockchain, enabling DAOs, project tokens, and programmable digital objects on Bitcoin testnet and mainnet.

- ### Semantic Classification
  - owl-class:: infrastructure:RunesAndGlyphs
  - owl-role:: Concept

- ### Relationships
  - **partOf**: Blockchain
  - **uses**: Digital Objects, NFT
  - **enables**: Digital Asset, Asset Tokenization
  - **relatedTo**: Decentralised Autonomous Organisation

- ### Content
  - ![the-future-of-bitcoin-2-tokens.pdf](../assets/the-future-of-bitcoin-2-tokens_1723564035683_0.pdf)
  - [Note by Melvin Carvalho (primal.net)](https://primal.net/e/note1rneeteg526e9e9zqrst35c93y46xlayzn77augvfhcsutq0d39qscga4xa) [[Bitcoin Fungible Token Protocols]]
  - ![5882083039473943016.jpg](../assets/5882083039473943016_1723118472953_0.jpg)
  - [Note by Melvin Carvalho (primal.net)](https://primal.net/e/note1we622z6jpdl8xpuw2vy966ud8fgf0t40n009qxw3de4edc7gs55qrqldzp) [[Digital Objects]] [[Bitcoin Fungible Token Protocols]] [[Testnet]]
  - [Testnet Glyph Explorer (testcoin.org)](https://testcoin.org/)
  - [Art (npub.info)](https://pages.npub.info/glyphs/TESTNETARTAAA/)
  - [flossverse/rustyGlyphs: based on Melvin Carvalho glyphs and Runes protocols (github.com)](https://github.com/flossverse/rustyGlyphs)
  - ![photo_2024-08-14_00-40-13.jpg](../assets/photo_2024-08-14_00-40-13_1723627663591_0.jpg)
  - [jeasonstudio/runestone: 👁‍🗨 Ordinals runestone javascript implementation (github.com)](https://github.com/jeasonstudio/runestone) [[Bitcoin Fungible Token Protocols]]
  - [jeasonstudio/runestone: 👁‍🗨 Ordinals runestone javascript implementation (github.com)](https://github.com/jeasonstudio/runestone) [[Bitcoin Fungible Token Protocols]]
  - [Testcoin Glyph Explorer](https://testcoin.org/glyphs.html#) [[Melvin Carvalho Decentralised Web Advocate]] [[Testnet]] [[Bitcoin Fungible Token Protocols]]
  - [glyph-protocol/glyphs: glyph protocol (github.com)](https://github.com/glyph-protocol/glyphs) [[Bitcoin Fungible Token Protocols]]
  - [Testcoin Glyph Explorer](https://testcoin.org/glyphs.html#) [[Melvin Carvalho Decentralised Web Advocate]] [[Testnet]] [[Bitcoin Fungible Token Protocols]]
  - [Runes Overview | Blockchain Analytics Dashboard (geniidata.com)](https://geniidata.com/user/Runes_is/runes-overview) [[Bitcoin Fungible Token Protocols]]
  - # DAO
  - Every project, every bot, can be a DAO
  - [UniSat](https://unisat.io/runes/market?tick=WORK%E2%80%A2IN%E2%80%A2PROGRESS)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
