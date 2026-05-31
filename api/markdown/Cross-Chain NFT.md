public:: true

# Cross-Chain NFT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-chain-nft",
  "@type": "Page",
  "vc:slug": "cross-chain-nft",
  "title": "Cross-Chain NFT",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-chain-nft",
  "@type": "Class",
  "label": "Cross-Chain NFT",
  "definition": "A cross-chain NFT is a non-fungible token that can move or be represented across multiple blockchains while preserving its identity, ownership, and metadata. It uses bridges, burn-and-mint mechanisms, or messaging protocols to transfer the canonical token between networks. It enables NFTs to access liquidity, marketplaces, and applications on chains other than where they were minted.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-token-and-asset", "label": "Token and Asset"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}, {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A cross-chain NFT is a non-fungible token portable across blockchains while keeping its identity and provenance. It depends on [[Cross-Chain Bridge]] mechanisms and advances [[Blockchain Interoperability]] for collectibles and game assets.
- ### Content
  - Common designs lock or burn a token on the source chain and mint a verified representation on the destination, ensuring no duplication of the canonical asset. Preserving immutable provenance, royalty enforcement, and metadata fidelity across heterogeneous token standards is the principal difficulty in cross-chain NFT transfer.
