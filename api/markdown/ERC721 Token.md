public:: true

# ERC721 Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2780a532b4dc920b658dbcd520d4ef1f3f5290b1a9603747dce6d8492e0d2da8",
  "@type": "Page",
  "vc:slug": "erc721-token",
  "title": "ERC721 Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:non-fungible-token",
      "vc:label": "Non Fungible Token"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0516"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ERC721 Token"
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
  "@id": "urn:ngm:class:erc721-token",
  "@type": "Class",
  "label": "ERC721 Token",
  "definition": "An ERC721 Token is a non-fungible token (NFT) on the Ethereum blockchain that implements the ERC-721 open standard, which assigns each token a unique integer identifier and tracks ownership via the ownerOf(tokenId) function. Unlike fungible ERC-20 tokens, every ERC-721 token is distinct and non-interchangeable, enabling verifiable digital ownership of unique assets such as digital art, collectibles, in-game items, and real-world asset representations on decentralised marketplaces.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    },
    {
      "@id": "urn:ngm:class:non-fungible-token-nft",
      "label": "Non-Fungible Token (NFT)"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:nft-ownership-proof", "label": "NFT Ownership Proof"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:erc721-standard", "label": "ERC721 Standard"},
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:digital-ownership", "label": "Digital Ownership"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:nft-marketplace", "label": "NFT Marketplace"},
      {"@id": "urn:ngm:class:nft-minting", "label": "NFT Minting"},
      {"@id": "urn:ngm:class:digital-asset-trading", "label": "Digital Asset Trading"},
      {"@id": "urn:ngm:class:fractionalized-nft", "label": "Fractionalized NFT"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:erc-20", "label": "ERC-20"},
      {"@id": "urn:ngm:class:erc-1155", "label": "ERC-1155"},
      {"@id": "urn:ngm:class:erc1155-token", "label": "ERC1155 Token"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"},
      {"@id": "urn:ngm:class:asset-tokenization", "label": "Asset Tokenization"},
      {"@id": "urn:ngm:class:smart-contracts", "label": "Smart Contracts"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:erc721", "label": "ERC721"},
      {"@id": "urn:ngm:class:token-standard", "label": "Token Standard"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:erc721-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2780a532b4dc920b658dbcd520d4ef1f3f5290b1a9603747dce6d8492e0d2da8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Non Fungible Token]]",
      "resolved": "urn:visionflow:linked:non-fungible-token",
      "kind": "StubLink"
    },
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
  An ERC721 Token is a non-fungible token (NFT) on the Ethereum blockchain that implements the ERC-721 open standard, which assigns each token a unique integer identifier and tracks ownership via the ownerOf(tokenId) function. Unlike fungible ERC-20 tokens, every ERC-721 token is distinct and non-interchangeable, enabling verifiable digital ownership of unique assets such as digital art, collectibles, in-game items, and real-world asset representations on decentralised marketplaces.

- ### Semantic Classification
  - owl-class:: blockchain:ERC721Token
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Non-Fungible Token (NFT)]]
  - hasPart:: [[NFT Ownership Proof]], [[Smart Contract]]
  - requires:: [[ERC721 Standard]], [[Blockchain Transaction]], [[Digital Ownership]]
  - enables:: [[NFT Marketplace]], [[NFT Minting]], [[Digital Asset Trading]], [[Fractionalized NFT]]
  - contrastsWith:: [[ERC-20]], [[ERC-1155]], [[ERC1155 Token]]
  - relatedTo:: [[NFT]], [[Digital Asset]], [[Asset Tokenization]], [[Smart Contracts]]
  - standardizedBy:: [[ERC721]], [[Token Standard]]

- ### Content

  ### ERC721 Token Standard

  ERC-721 (Ethereum Request for Comments 721) was proposed by William Entriken, Dieter Shirley, Jacob Evans, and Nastassia Sachs in January 2018 and finalised as an Ethereum standard later that year. It defines a minimum interface that a smart contract must implement to allow unique tokens to be managed, owned, and traded. The mandatory functions include balanceOf(owner), ownerOf(tokenId), safeTransferFrom, transferFrom, approve, and getApproved, with an optional metadata extension adding name(), symbol(), and tokenURI(tokenId).

  ### Non-Fungibility and Unique Identity

  The key departure from ERC-20 is that each ERC-721 token carries an immutable uint256 tokenId that is unique within its contract. Two ERC-721 tokens from the same contract are not interchangeable even if they represent similar assets; they may carry different metadata URIs pointing to distinct images, attributes, or provenance records. This uniqueness property makes ERC-721 the primary standard for digital art provenance, gaming item ownership, event ticketing, and real-world asset tokenisation.

  ### Marketplaces and Ecosystem

  ERC-721 tokens trade on decentralised NFT marketplaces such as OpenSea, Blur, and Rarible, where the on-chain ownerOf record serves as the authoritative proof of ownership. Secondary royalty mechanisms (e.g., EIP-2981) allow creators to receive a percentage of every resale. Fractionalisaton protocols wrap ERC-721 tokens into fungible ERC-20 shares, enabling collective ownership of high-value assets. The ERC-1155 standard later extended the concept to support both fungible and non-fungible tokens in a single contract, offering gas savings for batch transfers.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
