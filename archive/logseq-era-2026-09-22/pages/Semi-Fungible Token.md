public:: true

# Semi-Fungible Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:086b878064d5da2d21a69c8a90dfd39f5098ab75e20d7bfc23d75a703db0f1a8",
  "@type": "Page",
  "vc:slug": "semi-fungible-token",
  "title": "Semi-Fungible Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:token",
      "vc:label": "Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0511"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Semi-Fungible Token"
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
  "@id": "urn:ngm:class:semi-fungible-token",
  "@type": "Class",
  "label": "Semi-Fungible Token",
  "definition": "A blockchain token standard that combines fungible and non-fungible properties, typically implemented under ERC-1155. Semi-fungible tokens represent classes of interchangeable assets (e.g. event tickets of the same tier) that may transition to uniquely non-fungible assets upon redemption or use, enabling a single contract to manage both fungible currencies and unique collectibles with reduced gas costs.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    },
    {
      "@id": "urn:ngm:class:token",
      "label": "Token"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:erc-1155", "label": "ERC-1155"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:erc1155-standard", "label": "ERC1155 Standard"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fungible-token", "label": "Fungible Token"},
      {"@id": "urn:ngm:class:non-fungible-token-nft", "label": "Non-Fungible Token (NFT)"},
      {"@id": "urn:ngm:class:security-token", "label": "Security Token"},
      {"@id": "urn:ngm:class:nft-marketplace", "label": "NFT Marketplace"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-asset-trading", "label": "Digital Asset Trading"},
      {"@id": "urn:ngm:class:asset-tokenisation", "label": "Asset Tokenisation"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:semi-fungible-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:086b878064d5da2d21a69c8a90dfd39f5098ab75e20d7bfc23d75a703db0f1a8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token]]",
      "resolved": "urn:visionflow:owl:class:token",
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
  - A token that can represent both fungible and non-fungible properties, typically starting as fungible but becoming non-fungible under certain conditions, or representing classes of interchangeable assets.

- ### Semantic Classification
  - owl-class:: blockchain:SemiFungibleToken
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Token]]

- ### Content
  Semi-Fungible Token — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
