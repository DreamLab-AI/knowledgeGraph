public:: true

# NFT Marketplace
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:02574053f23436eeab43ed7461cd8265b724bd99e55fe919a9651752e5ed6d91",
  "@type": "Page",
  "vc:slug": "nft-marketplace",
  "title": "NFT Marketplace",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0572"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "NFT Marketplace"
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
  "@id": "urn:ngm:class:nft-marketplace",
  "@type": "Class",
  "label": "NFT Marketplace",
  "definition": "A digital platform enabling the creation, listing, buying, selling, and auctioning of non-fungible tokens (NFTs). NFT marketplaces provide discovery, escrow, royalty enforcement, and settlement infrastructure for unique digital assets, typically integrating smart contracts for trustless ownership transfer and on-chain provenance tracking.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:nft-minting", "label": "NFT Minting"},
      {"@id": "urn:ngm:class:nft-standard", "label": "NFT Standard"},
      {"@id": "urn:ngm:class:creator-royalty-token", "label": "Creator Royalty Token"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:erc-721", "label": "ERC-721"},
      {"@id": "urn:ngm:class:erc-1155", "label": "ERC-1155"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-asset-trading", "label": "Digital Asset Trading"},
      {"@id": "urn:ngm:class:decentralized-exchange", "label": "Decentralized Exchange"},
      {"@id": "urn:ngm:class:digital-marketplace", "label": "Digital Marketplace"},
      {"@id": "urn:ngm:class:non-fungible-token-nft", "label": "Non-Fungible Token (NFT)"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fractionalized-nft", "label": "Fractionalized NFT"},
      {"@id": "urn:ngm:class:nft-renting", "label": "NFT Renting"}
    ]
  },
  "quality": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:nft-marketplace:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:02574053f23436eeab43ed7461cd8265b724bd99e55fe919a9651752e5ed6d91"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
  - Platform for trading NFTs.

- ### Semantic Classification
  - owl-class:: blockchain:NftMarketplace
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  NFT Marketplace — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
