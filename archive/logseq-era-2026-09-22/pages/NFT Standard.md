public:: true

# NFT Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:058b3c454847d3bb3ef35dde703be9fcc3aff67ae0627bf6aa4eb5d68b9a90fb",
  "@type": "Page",
  "vc:slug": "nft-standard",
  "title": "NFT Standard",
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
      "vc:value": "BC-0570"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "NFT Standard"
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
  "@id": "urn:ngm:class:nft-standard",
  "@type": "Class",
  "label": "NFT Standard",
  "definition": "An NFT Standard is a formally specified interface and data schema that defines how non-fungible tokens are created, transferred, and queried on a blockchain network, ensuring interoperability across wallets, marketplaces, and decentralised applications. Dominant examples include ERC-721 (Ethereum, unique single tokens), ERC-1155 (multi-token standard combining fungible and non-fungible types in one contract), and EIP-2981 (royalty standard). These specifications are ratified through Ethereum Improvement Proposals or analogous governance processes on other chains, and they collectively establish the canonical interface any compliant smart contract must expose.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:ethereum-improvement-proposal",
        "label": "Ethereum Improvement Proposal"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      },
      {
        "@id": "urn:ngm:class:erc-1155",
        "label": "ERC-1155"
      },
      {
        "@id": "urn:ngm:class:eip-2981",
        "label": "EIP-2981"
      },
      {
        "@id": "urn:ngm:class:token-metadata",
        "label": "Token Metadata Schema"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:decentralised-storage",
        "label": "Decentralised Storage"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:digital-ownership",
        "label": "Digital Ownership"
      },
      {
        "@id": "urn:ngm:class:nft-marketplace",
        "label": "NFT Marketplace"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:digital-art",
        "label": "Digital Art"
      },
      {
        "@id": "urn:ngm:class:tokenised-real-world-assets",
        "label": "Tokenised Real-World Asset"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-foundation",
        "label": "Ethereum Foundation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse Asset"
      },
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:nft-standards",
      "label": "NFT Standards"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:nft-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:058b3c454847d3bb3ef35dde703be9fcc3aff67ae0627bf6aa4eb5d68b9a90fb"
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
  - An NFT Standard is a formally specified smart-contract interface that governs the creation, ownership transfer, and on-chain querying of [[Non-Fungible Token]]s. Prominent standards include [[ERC-721]] (unique single-instance tokens on [[Ethereum]]), [[ERC-1155]] (batch-compatible multi-token contracts), and [[EIP-2981]] (royalty signalling). These specifications are proposed, debated, and ratified through the [[Ethereum Improvement Proposal]] process or equivalent governance mechanisms on alternative [[Blockchain]] networks, ensuring that any conformant [[Smart Contract]] exposes a predictable interface to wallets, explorers, and [[NFT Marketplace]]s.

- ### Overview
  - Non-fungible tokens require a shared interface convention so that independent parties — wallet software, market aggregators, game engines — can interact with any compliant token contract without bespoke integration work.
  - The [[ERC-721]] standard (finalised 2018, authored by William Entriken et al.) introduced the canonical `ownerOf`, `transferFrom`, `safeTransferFrom`, and `tokenURI` functions that define a minimal NFT interface.
  - [[ERC-1155]] (2019, Enjin team) extended the paradigm to allow a single contract to manage many token types — both fungible and non-fungible — reducing deployment costs and enabling batch transfers.
  - [[EIP-2981]] addresses royalty distribution: it defines a standard `royaltyInfo(tokenId, salePrice)` function so marketplaces can query the creator's royalty entitlement on secondary sales, though enforcement remains discretionary.
  - Beyond Ethereum, analogous standards exist: [[SPL Token]] on [[Solana]], [[FA2]] on [[Tezos]], and [[CW-721]] on [[Cosmos]]-based chains each provide chain-native NFT interface conventions.
  - The importance of standardisation cannot be overstated: it enables composability — the property by which [[Decentralised Finance]] protocols, games, and [[Metaverse Asset]] platforms can interoperate with any token that conforms to the interface.

- ### Key Components
  - **ERC-721 Interface**
    - `balanceOf(owner)` — returns the count of NFTs owned by an address
    - `ownerOf(tokenId)` — resolves the current owner of a specific token
    - `safeTransferFrom` / `transferFrom` — ownership transfer with optional receiver callback
    - `approve` / `setApprovalForAll` — operator delegation model
    - `tokenURI(tokenId)` — pointer to off-chain [[Token Metadata Schema]] (typically JSON on [[IPFS]] or [[Arweave]])
  - **ERC-1155 Extensions**
    - `balanceOfBatch` — batch balance queries across accounts and token IDs
    - `safeBatchTransferFrom` — atomic multi-token transfers, reducing [[Gas Fee]] overhead
    - Supports both fungible (quantity > 1) and non-fungible (quantity = 1) tokens in one contract
    - `uri(tokenId)` for metadata, with `{id}` substitution pattern for efficient lookup
  - **EIP-2981 Royalty Standard**
    - `royaltyInfo(tokenId, salePrice)` returns `(receiver, royaltyAmount)`
    - Widely adopted by [[OpenSea]], [[Blur]], and other [[NFT Marketplace]]s as a best-practice interface
    - Does not enforce payment; relies on marketplace compliance
  - **Token Metadata Schema**
    - JSON schema defining `name`, `description`, `image`, and optional `attributes` array
    - Image and animation assets typically stored on [[IPFS]], [[Arweave]], or centralised CDNs
    - Metadata immutability is a key concern; on-chain storage (fully on-chain NFTs) eliminates external dependency
  - **Operator Model**
    - `setApprovalForAll` enables third-party operators (e.g. marketplace contracts) to act on behalf of token holders — critical for gasless listing flows

- ### Applications and Use Cases
  - **Digital Art and Collectibles**
    - Platforms such as Art Blocks, Foundation, and SuperRare rely on [[ERC-721]] to issue unique generative or curated artworks with verifiable on-chain provenance via [[Provenance Tracking]].
  - **Gaming Assets**
    - [[ERC-1155]] is favoured for in-game economies because a single contract can represent both scarce unique items (sword of legend) and stackable consumables (potions), reducing deployment complexity. See [[Gaming Asset]].
  - **Tokenised Real-World Assets**
    - Property deeds, luxury goods certificates, and financial instruments are being issued as NFTs using ERC-721 or ERC-1155 wrappers, bridging to [[Tokenised Real-World Asset]] use cases.
  - **Identity and Credentials**
    - Soulbound tokens (non-transferable NFTs, proposed in EIP-5192) extend NFT standards to represent [[Digital Identity]], academic credentials, and membership without enabling secondary-market trading.
  - **Music and Media Rights**
    - Artists issue music NFTs representing ownership stakes or streaming rights; [[EIP-2981]] royalty hooks enable automated creator compensation on resale.
  - **Metaverse and Spatial Computing**
    - Virtual land parcels and wearables in platforms like Decentraland and The Sandbox are ERC-721 tokens. Cross-platform avatar item portability depends on standardised interfaces bridging to [[Metaverse Asset]] and [[Spatial Computing]] layers.
  - **Supply Chain Provenance**
    - Luxury brands and pharmaceutical companies use NFTs anchored to physical goods for anti-counterfeiting, connecting blockchain records to physical-world provenance chains.

- ### Relationships
  - implements:: [[Smart Contract]]
  - implements:: [[Ethereum Improvement Proposal]]
  - hasPart:: [[ERC-721]]
  - hasPart:: [[ERC-1155]]
  - hasPart:: [[EIP-2981]]
  - hasPart:: [[Token Metadata Schema]]
  - requires:: [[Blockchain]]
  - requires:: [[Decentralised Storage]]
  - enables:: [[Non-Fungible Token]]
  - enables:: [[Digital Ownership]]
  - enables:: [[On-Chain Royalty]]
  - enables:: [[NFT Marketplace]]
  - dependsOn:: [[Ethereum]]
  - dependsOn:: [[Solidity]]
  - dependsOn:: [[IPFS]]
  - supports:: [[Digital Art]]
  - supports:: [[Gaming Asset]]
  - supports:: [[Tokenised Real-World Asset]]
  - standardizedBy:: [[Ethereum Foundation]]
  - contrastsWith:: [[ERC-20]]
  - contrastsWith:: [[Fungible Token]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Metaverse Asset]]
  - bridges-to:: [[Provenance Tracking]]
  - relatedTo:: [[Token Standard]]
  - relatedTo:: [[Decentralised Finance]]
  - relatedTo:: [[Web3]]

- ### Standards and Governance Context
  - **Ethereum Improvement Proposal (EIP) Process**
    - NFT standards originate as EIPs submitted to the Ethereum community. They pass through Draft → Review → Last Call → Final stages before being considered canonical.
    - The [[Ethereum Foundation]] and core community editors govern the process; no single company controls the standard.
  - **Cross-Chain Standards**
    - [[Solana]]'s [[Metaplex]] Token Metadata Program defines the dominant NFT schema on that chain.
    - [[Tezos]] FA2 (TZIP-12) provides a unified token interface covering fungible and non-fungible cases.
    - [[Flow]] blockchain (used by NBA Top Shot) uses Cadence [[Resource-Oriented Programming]] rather than interface-based standards.
    - [[Cosmos]] ecosystem uses CosmWasm CW-721, a Rust-based analogue of ERC-721.
  - **OpenZeppelin Reference Implementations**
    - [[OpenZeppelin]] provides audited, open-source Solidity implementations of ERC-721 and ERC-1155, which the majority of production NFT projects use as a secure base.
  - **Interoperability Considerations**
    - [[ERC-4907]] (rental standard) and [[ERC-6551]] (token-bound accounts) extend the base NFT standards to enable richer use cases without breaking backward compatibility.
    - Cross-chain NFT bridging remains non-standardised, relying on project-specific bridge contracts and [[Interoperability Protocol]]s.
  - **Regulatory Context**
    - NFT standards are technically agnostic to asset classification, but regulators in the EU ([[MiCA]]) and US are evaluating when NFTs constitute securities or financial instruments, which may impose compliance obligations on issuers.

- ### Provenance
  - sources:: EIP-721 (W. Entriken et al., 2018), EIP-1155 (Witek Radomski et al., 2019), EIP-2981 (Zach Burks et al., 2020), OpenZeppelin documentation, Ethereum.org developer docs
  - updated:: 2026-06-13
