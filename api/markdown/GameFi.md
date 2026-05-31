public:: true

# GameFi
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a30a35454da8523562010408fd0691444270dbe7b890781c035ef3684317be32",
  "@type": "Page",
  "vc:slug": "game-fi",
  "title": "GameFi",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:token",
      "vc:label": "Token"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:gaming",
      "vc:label": "gaming"
    },
    {
      "@id": "urn:visionflow:linked:nft",
      "vc:label": "NFT"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-play-to-earn",
      "vc:label": "https://en.wikipedia.org/wiki/Play-to-earn"
    },
    {
      "@id": "urn:visionflow:linked:https-ethereum-org-en-gaming",
      "vc:label": "https://ethereum.org/en/gaming/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "GameFi"
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
  "@id": "urn:ngm:class:game-fi",
  "@type": "Class",
  "label": "GameFi",
  "definition": "GameFi refers to the combination of gaming with decentralised finance, where players can earn cryptocurrency or tokenised assets through gameplay. It overlaps with blockchain gaming and play-to-earn models.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:de-fi",
      "label": "DeFi"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:gaming",
        "label": "gaming"
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
  "@id": "urn:visionflow:annotation:link-resolutions:game-fi:033672a60d00",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a30a35454da8523562010408fd0691444270dbe7b890781c035ef3684317be32"
  },
  "vc:resolutions": [
    {
      "raw": "[[Token]]",
      "resolved": "urn:visionflow:linked:token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[gaming]]",
      "resolved": "urn:visionflow:linked:gaming",
      "kind": "StubLink"
    },
    {
      "raw": "[[NFT]]",
      "resolved": "urn:visionflow:linked:nft",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Play-to-earn]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-play-to-earn",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://ethereum.org/en/gaming/]]",
      "resolved": "urn:visionflow:linked:https-ethereum-org-en-gaming",
      "kind": "StubLink"
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
  - GameFi refers to the combination of gaming with decentralised finance, where players can earn cryptocurrency or tokenised assets through gameplay. It overlaps with blockchain gaming and play-to-earn models.

- ### Semantic Classification
  - owl-class:: blockchain:GameFi
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[DeFi]]
  - bridges-to:: [[NFT]]
  - requires:: [[Token]], [[Smart Contract]]
  - enables:: [[gaming]]

- ### Content
  - GameFi describes games built on blockchain technology where in-game items and rewards exist as tokens or non-fungible tokens that players own and can trade. Some designs let players earn value through play, a model known as play-to-earn.
  - The approach links game economies to cryptocurrency markets, which introduces both new incentives and financial risk for players. Sustaining these economies has proven difficult when rewards depend on continued inflows of new participants.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Play-to-earn]], [[https://ethereum.org/en/gaming/]]
  - migration-date:: 2026-05-29T00:00:00Z
