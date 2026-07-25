public:: true

# Token Metadata
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:token-metadata",
  "@type": "Page",
  "vc:slug": "token-metadata",
  "title": "Token Metadata",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:token-metadata",
  "@type": "Class",
  "label": "Token Metadata",
  "definition": "Token metadata is the structured descriptive data associated with a blockchain token, typically including attributes such as name, description, image references, traits, and provenance. For non-fungible tokens it is commonly stored as a JSON document referenced by a tokenURI and often hosted on decentralised storage such as IPFS to preserve immutability and addressability.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-token-and-asset", "label": "Token and Asset"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:non-fungible-token-nft", "label": "Non-Fungible Token (NFT)"}, {"@id": "urn:ngm:class:nft-minting", "label": "NFT Minting"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The structured descriptive data describing a token's name, traits, media, and provenance, usually referenced by a tokenURI. It is a required component of a [[Non-Fungible Token (NFT)]] and is fixed during [[NFT Minting]].
- ### Content
  - Metadata schemas such as the ERC-721 and ERC-1155 metadata standards define expected fields so that marketplaces and wallets can render tokens consistently. Because on-chain storage is costly, metadata is frequently kept off-chain on IPFS or Arweave with the chain holding only a content hash or URI for verifiable integrity.
