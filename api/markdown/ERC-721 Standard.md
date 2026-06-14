public:: true

# ERC-721 Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:erc-721-standard",
  "@type": "Page",
  "vc:slug": "erc-721-standard",
  "title": "ERC-721 Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:erc-721-standard",
  "@type": "Class",
  "label": "ERC-721 Standard",
  "definition": "ERC-721 is an Ethereum token standard defining a minimal interface for non-fungible tokens (NFTs), where each token carries a unique identifier that distinguishes it from every other token in the same contract. It specifies ownership tracking, safe transfer functions, and an optional metadata extension for associating URIs with token properties.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:nft-standard", "label": "NFT Standard"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:ethereum-smart-contract-platform", "label": "Ethereum Smart Contract Platform"},
      {"@id": "urn:ngm:class:erc-1155", "label": "ERC-1155"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:erc20-standard", "label": "ERC20 Standard"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:ipfs", "label": "IPFS"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[ERC-721 Standard]] is an [[Ethereum Smart Contract Platform]] Improvement Proposal formalising the interface for non-fungible tokens ([[NFT]]) on EVM-compatible chains, granting each token a unique `uint256` tokenId and providing `transferFrom`, `approve`, and `safeTransferFrom` functions for secure ownership transfer with optional receiver callbacks.

- ### Relationships
  - ERC-721 contrasts with the fungible [[ERC-20 Standard]] and was extended by the multi-token [[ERC-1155]] standard; token metadata is commonly persisted via [[IPFS]] to ensure content-addressed permanence, and the tokens themselves are issued and traded within the broader [[NFT]] economy on [[Ethereum Smart Contract Platform]] and compatible chains.

- ### Content
  - ERC-721 was authored principally by William Entriken, Dieter Shirley, Jacob Evans, and Nastassia Sachs, with the proposal (EIP-721) published in January 2018 and finalised in June 2018. It was motivated by the viral success of CryptoKitties (November 2017), which demonstrated both the demand for unique digital assets on Ethereum and the lack of a standardised interface for them. Before ERC-721, each NFT project implemented bespoke ownership logic, making marketplace aggregation impossible.
  - The standard defines a core interface (`IERC721`) with six mandatory functions: `balanceOf`, `ownerOf`, `safeTransferFrom` (two overloads), `transferFrom`, `approve`, and `setApprovalForAll`. An optional `IERC721Metadata` extension adds `name`, `symbol`, and `tokenURI`, where `tokenURI` returns a URL (typically an IPFS CID or HTTPS endpoint) pointing to a JSON object describing the token's attributes. The `safeTransferFrom` function checks whether the receiving address implements `IERC721Receiver`, preventing tokens from being locked in non-compatible contracts.
  - ERC-721 matters because it created the infrastructure for a multi-billion-dollar NFT market encompassing digital art, gaming items, virtual land, event tickets, and on-chain credentials. Platforms including OpenSea, Blur, and Rarible aggregate ERC-721 tokens across thousands of contracts through a unified interface, enabling price discovery and liquidity that would be impossible with bespoke implementations. The royalty mechanism (ERC-2981, a companion standard) piggybacks on ERC-721 to enforce creator fees at the smart-contract level.
  - In 2024–2025, ERC-721 usage has matured beyond speculative art into utility applications: on-chain identity documents, verifiable credentials, gaming item interoperability (via ERC-6551 token-bound accounts that give each NFT its own wallet), and real-world asset tokenisation. Layer-2 deployments on Optimism, Arbitrum, and Base have reduced minting gas costs by 10–100x, reviving retail participation. The standard itself is stable and considered complete; development energy has shifted to companion standards that extend its capabilities rather than replace it.

