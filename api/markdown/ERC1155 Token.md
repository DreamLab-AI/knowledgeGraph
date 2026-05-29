public:: true

# ERC1155 Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:195a330b7a502361b814aa6df64e5b7fe9c2d0fa017e0ba7fd614d6f91ae4607",
  "@type": "Page",
  "vc:slug": "erc1155-token",
  "title": "ERC1155 Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:semi-fungible-token",
      "vc:label": "Semi-Fungible Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0517"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ERC1155 Token"
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
  "@id": "urn:ngm:class:erc1155-token",
  "@type": "Class",
  "label": "ERC1155 Token",
  "definition": "ERC1155 is an Ethereum multi-token standard that enables a single smart contract to manage an arbitrary number of fungible, non-fungible, and semi-fungible token classes simultaneously. By batching multiple token operations into a single transaction, ERC1155 dramatically reduces gas consumption compared to deploying separate ERC-20 or ERC-721 contracts for each asset class, making it the dominant standard for blockchain gaming, NFT collections with tiered rarity, and on-chain item inventories.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    },
    {
      "@id": "urn:ngm:class:semi-fungible-token",
      "label": "Semi-Fungible Token"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:erc1155-standard", "label": "ERC1155 Standard"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:gas-optimization", "label": "Gas Optimization"},
      {"@id": "urn:ngm:class:token-standard", "label": "Token Standard"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-gaming", "label": "Blockchain Gaming"},
      {"@id": "urn:ngm:class:nft-marketplace", "label": "NFT Marketplace"},
      {"@id": "urn:ngm:class:digital-asset-market", "label": "Digital Asset Market"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:erc721", "label": "ERC721"},
      {"@id": "urn:ngm:class:erc-20", "label": "ERC-20"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:fungible-token", "label": "Fungible Token"},
      {"@id": "urn:ngm:class:web3", "label": "Web3"},
      {"@id": "urn:ngm:class:smart-contracts", "label": "Smart Contracts"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:erc1155-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:195a330b7a502361b814aa6df64e5b7fe9c2d0fa017e0ba7fd614d6f91ae4607"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semi-Fungible Token]]",
      "resolved": "urn:visionflow:owl:class:semi-fungible-token",
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
  ERC1155 is an Ethereum multi-token standard enabling a single smart contract to manage arbitrary numbers of fungible, non-fungible, and semi-fungible token classes simultaneously. Batch transfer operations drastically reduce gas costs versus deploying separate ERC-20 or ERC-721 contracts per asset class, making it the dominant standard for blockchain gaming, NFT collections, and on-chain item inventories.

- ### Semantic Classification
  - owl-class:: blockchain:ERC1155Token
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Semi-Fungible Token]], [[Token and Asset]]
  - hasPart:: [[ERC1155 Standard]], [[Smart Contract]]
  - requires:: [[Smart Contract]], [[Gas Optimization]], [[Token Standard]]
  - enables:: [[Blockchain Gaming]], [[NFT Marketplace]], [[Digital Asset Market]]
  - contrastsWith:: [[ERC721]], [[ERC-20]]
  - relatedTo:: [[NFT]], [[Fungible Token]], [[Web3]], [[Smart Contracts]]

### Definition

ERC-1155, proposed by Enjin's Witek Radomski in 2018 and finalised as EIP-1155, solves a structural inefficiency in Ethereum's earlier token standards. ERC-20 manages only fungible tokens within one contract, and ERC-721 manages only non-fungible tokens (one contract per NFT collection). Game developers who need thousands of item types—swords, shields, potions, currencies—previously required thousands of separate contracts, incurring massive deployment costs and complicating inventory management.

### Relationships

ERC1155 directly contrasts with ERC721 (pure NFT, one unique token per ID) and ERC-20 (pure fungible, no non-fungible capability). By unifying both paradigms within a single Smart Contract that uses a two-dimensional mapping (token ID → owner address → balance), ERC1155 achieves Gas Optimization through batch operations: a single `safeBatchTransferFrom` call can transfer dozens of different token types in one transaction. This efficiency enables Blockchain Gaming platforms to handle complex in-game economies at scale, and enables NFT Marketplace platforms to list multi-edition or bundle offerings.

### Content

The ERC1155 Standard defines three key interface functions beyond basic transfer: `balanceOfBatch` (query multiple token balances in one call), `safeTransferFrom` (transfer with receiver hook for contract safety), and `uri` (metadata URI per token ID using a substitution pattern). The metadata URI pattern is particularly important: a single URI template with `{id}` placeholder serves all token IDs, dramatically reducing storage overhead for large collections.

Adoption of ERC1155 accelerated with the rise of play-to-earn gaming (2021–2023) and remains the standard of choice for complex digital asset ecosystems. Platforms such as OpenSea, Rarible, and Enjin's ecosystem natively support ERC1155. The standard's semi-fungible capability is especially valued for representing limited-edition items where multiple identical copies of the same design exist (e.g., 1,000 copies of "Legendary Sword") — a paradigm impossible to express cleanly in either ERC-20 or ERC-721 alone. Web3 applications that bundle digital ownership with game mechanics or metaverse assets routinely depend on ERC1155 as their foundational token layer.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
