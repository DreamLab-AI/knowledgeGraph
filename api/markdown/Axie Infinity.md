public:: true

# Axie Infinity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5a798101684a2aac20a233254f04969a6059ee17d604b13e815a55c83a1bd5df",
  "@type": "Page",
  "vc:slug": "axie-infinity",
  "title": "Axie Infinity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nft",
      "vc:label": "NFT"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Axie Infinity"
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
  "@id": "urn:ngm:class:axie-infinity",
  "@type": "Class",
  "label": "Axie Infinity",
  "definition": "Axie Infinity is a blockchain-based game in which players collect, breed, and battle digital creatures called Axies that are represented as non-fungible tokens.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:nft",
      "label": "NFT"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:axie-infinity:0571d17b8b35",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5a798101684a2aac20a233254f04969a6059ee17d604b13e815a55c83a1bd5df"
  },
  "vc:resolutions": [
    {
      "raw": "[[NFT]]",
      "resolved": "urn:visionflow:linked:nft",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
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
  - Axie Infinity is a blockchain-based game in which players collect, breed, and battle digital creatures called Axies that are represented as non-fungible tokens.

- ### Semantic Classification
  - owl-class:: blockchain:AxieInfinity
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[NFT]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[NFT]], [[Smart Contract]]

- ### Content
  - Axie Infinity, developed by Sky Mavis, lets players own Axies as NFTs and earn in-game tokens through play. It popularised the play-to-earn model and at its peak attracted large numbers of players, particularly in Southeast Asia.
  - The game runs on Ronin, an Ethereum sidechain built by Sky Mavis to reduce transaction costs. In 2022 the Ronin bridge suffered a large security breach in which attacker-controlled validators authorised fraudulent withdrawals.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
