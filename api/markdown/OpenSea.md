public:: true

# OpenSea
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c5c3d96670b55afee25d4c5583b929bf9fb1b3c2e67e9bcf8e95d3dd5ba2862c",
  "@type": "Page",
  "vc:slug": "open-sea",
  "title": "OpenSea",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nft",
      "vc:label": "NFT"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset",
      "vc:label": "Digital Asset"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:nft-marketplace",
      "vc:label": "NFT Marketplace"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OpenSea"
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
  "@id": "urn:ngm:class:open-sea",
  "@type": "Class",
  "label": "OpenSea",
  "definition": "OpenSea is a peer-to-peer decentralised marketplace for non-fungible tokens (NFTs), enabling users to mint, list, auction, and trade digital assets on multiple blockchain networks including Ethereum, Polygon, Solana, and others. Founded in 2017, it operates through integration with self-custodial crypto wallets and on-chain smart contracts that escrow assets and execute transfers atomically upon payment settlement. OpenSea pioneered the concept of a permissionless NFT trading platform, supporting diverse token standards such as ERC-721 and ERC-1155, and providing creator royalty enforcement mechanisms at the contract level.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:nft-marketplace",
      "label": "NFT Marketplace"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      },
      {
        "@id": "urn:ngm:class:crypto-wallet",
        "label": "Crypto Wallet"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-trading",
        "label": "Peer-to-Peer Trading"
      },
      {
        "@id": "urn:ngm:class:creator-royalties",
        "label": "Creator Royalties"
      },
      {
        "@id": "urn:ngm:class:nft-minting",
        "label": "NFT Minting"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:polygon",
        "label": "Polygon"
      },
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      },
      {
        "@id": "urn:ngm:class:erc-1155",
        "label": "ERC-1155"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:blur",
        "label": "Blur"
      },
      {
        "@id": "urn:ngm:class:rarible",
        "label": "Rarible"
      },
      {
        "@id": "urn:ngm:class:foundation",
        "label": "Foundation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-ownership",
        "label": "Digital Ownership"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:gas-fee",
        "label": "Gas Fee"
      },
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-art",
        "label": "Digital Art"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:virtual-real-estate",
        "label": "Virtual Real Estate"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:opensea-platform",
      "label": "OpenSea Platform"
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
  "@id": "urn:visionflow:annotation:link-resolutions:open-sea:f661dd162c0e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c5c3d96670b55afee25d4c5583b929bf9fb1b3c2e67e9bcf8e95d3dd5ba2862c"
  },
  "vc:resolutions": [
    {
      "raw": "[[NFT]]",
      "resolved": "urn:visionflow:linked:nft",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset]]",
      "resolved": "urn:visionflow:linked:digital-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NFT Marketplace]]",
      "resolved": "urn:visionflow:linked:nft-marketplace",
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
  - OpenSea is a peer-to-peer, permissionless [[NFT Marketplace]] that enables users to mint, discover, buy, sell, and auction [[NFT]] (non-fungible tokens) and other [[Digital Asset]] types across multiple [[Blockchain]] networks. It integrates with self-custodial [[Crypto Wallet]] software and executes trades via [[Smart Contract]] logic, ensuring atomic settlement of asset transfers and payments without requiring custodial intermediaries.

- ### Overview
  - OpenSea was founded in 2017 by Devin Finzer and Alex Atallah and is widely regarded as one of the first large-scale NFT marketplaces, predating the mainstream NFT boom of 2021.
  - The platform operates as a web-based front-end that aggregates and indexes token listings from multiple [[Blockchain]] networks, allowing buyers and sellers to interact via browser-connected wallets such as [[MetaMask]] or [[WalletConnect]]-compatible apps.
  - Rather than holding assets on behalf of users, OpenSea uses on-chain escrow mechanisms built into [[Smart Contract]] infrastructure, meaning users retain self-custody until a trade executes.
  - The marketplace became notable for its role in popularising [[Digital Ownership]] of art, gaming items, collectibles, and [[Virtual Real Estate]], making [[NFT]] trading accessible to non-technical users through a polished user interface.
  - OpenSea charges a platform fee (typically a percentage of each sale) and also supports optional [[Creator Royalties]] enforced either at the contract level or voluntarily through platform policies.

- ### Key Components
  - **NFT Listings and Discovery**
    - Users can list [[NFT]] assets at fixed prices or configure English-style ascending auctions or Dutch-style descending-price auctions.
    - The platform aggregates listings from multiple chains, providing unified search and filter functionality across collections, traits, and price ranges.
  - **Multi-Chain Support**
    - Originally [[Ethereum]]-only, OpenSea expanded to support [[Polygon]], Solana, Klaytn, Arbitrum, Optimism, Avalanche, and BNB Chain, reducing reliance on any single network.
    - [[Layer 2]] integrations allow lower [[Gas Fee]] transactions, making the platform more accessible for smaller-value trades.
  - **Token Standards**
    - Supports [[ERC-721]] (unique NFTs), [[ERC-1155]] (semi-fungible or batch tokens), and Solana's SPL token standard, enabling diverse asset types including single editions, editions, and gaming items.
  - **Seaport Protocol**
    - OpenSea developed and open-sourced the **Seaport** [[Smart Contract]] protocol, a gas-optimised marketplace settlement contract that improves trade efficiency over its predecessor Wyvern Protocol.
    - Seaport supports complex order types including bundle sales, criteria-based orders, and partial fills.
  - **Creator Tools and Minting**
    - The platform's "lazy minting" feature allows creators to list assets for sale without paying [[Gas Fee]] upfront; the token is minted on-chain only when a buyer purchases it.
    - OpenSea Studio provides collection management dashboards, trait configuration, and metadata tooling for creators deploying NFT projects.
  - **Wallet Integration**
    - Compatible with [[MetaMask]], Coinbase Wallet, Phantom (Solana), [[WalletConnect]], and numerous other self-custodial wallets through standard JSON-RPC and [[WalletConnect]] v2 protocols.
  - **Metadata and Storage**
    - NFT metadata (images, attributes) is referenced via on-chain URIs pointing to [[IPFS]], Arweave, or centralised CDNs, with [[IPFS]] preferred for content-addressed permanence.

- ### Applications and Use Cases
  - **Digital Art Trading**
    - Artists mint unique or edition works as [[NFT]] and list them on OpenSea for direct sale to collectors, bypassing traditional gallery intermediaries and enabling global reach.
    - Notable collections such as CryptoPunks, Bored Ape Yacht Club, and Art Blocks achieved significant trading volume on the platform.
  - **Gaming Items and Virtual Goods**
    - Blockchain games integrate with OpenSea so players can trade in-game items, characters, and skins as interoperable [[NFT]] assets across wallets and secondary markets.
    - Items from games built on [[Ethereum]] or [[Polygon]] appear automatically in user wallets and can be listed directly without developer coordination.
  - **Virtual Real Estate**
    - Parcels of land in metaverse platforms such as [[Decentraland]] and The Sandbox are traded as [[NFT]] on OpenSea, with [[Virtual Real Estate]] markets driven by location, adjacency, and community density.
  - **Domain Names**
    - [[Ethereum Name Service]] (ENS) domains and similar blockchain-native name registries are traded as NFTs, allowing secondary market discovery of desirable human-readable addresses.
  - **Collectibles and Sports Memorabilia**
    - Trading card-style digital collectibles tied to real-world sports events, celebrities, and brands are issued and traded through OpenSea, bridging physical brand licensing into the [[Digital Asset]] economy.
  - **Music and Media**
    - Musicians and media creators tokenise rights, limited editions, and fan experiences as NFTs, using OpenSea as a distribution and secondary-market layer.

- ### Mechanisms
  - **Order Book Model**
    - OpenSea uses an off-chain order book (listings stored on OpenSea servers) with on-chain settlement, reducing gas costs while maintaining decentralised ownership verification.
    - The Seaport [[Smart Contract]] validates order signatures cryptographically, ensuring only the legitimate asset owner can create a valid listing.
  - **Royalty Enforcement**
    - On-chain royalties were historically enforced via the EIP-2981 royalty standard, but enforcement became contested as competing marketplaces bypassed them; OpenSea iterated policy multiple times including optional and operator-filtered approaches.
    - The Operator Filter Registry was introduced to allow collection owners to block trades on platforms not honouring royalties.
  - **Fees**
    - Platform takes a percentage service fee on completed sales, distributed as protocol revenue. Fee rates have varied over the platform's history as competitive pressure from rivals such as [[Blur]] drove fee reductions.
  - **Verification and Curation**
    - Collections can request blue-checkmark verification from OpenSea to signal authenticity and reduce imitation/scam collections, aiding collector trust.

- ### Relationships
  - subClassOf:: [[NFT Marketplace]]
  - requires:: [[NFT]]
  - requires:: [[Crypto Wallet]]
  - requires:: [[Smart Contract]]
  - enables:: [[Digital Asset]]
  - enables:: [[Creator Royalties]]
  - enables:: [[NFT Minting]]
  - enables:: [[Peer-to-Peer Trading]]
  - uses:: [[Ethereum]]
  - uses:: [[Polygon]]
  - uses:: [[ERC-721]]
  - uses:: [[ERC-1155]]
  - uses:: [[IPFS]]
  - dependsOn:: [[Blockchain]]
  - dependsOn:: [[Decentralised Finance]]
  - contrastsWith:: [[Blur]]
  - contrastsWith:: [[Rarible]]
  - contrastsWith:: [[Foundation]]
  - relatedTo:: [[Digital Ownership]]
  - relatedTo:: [[Token Standard]]
  - relatedTo:: [[Gas Fee]]
  - relatedTo:: [[Provenance Tracking]]
  - bridges-to:: [[Digital Art]]
  - bridges-to:: [[Metaverse]]
  - bridges-to:: [[Virtual Real Estate]]

- ### Standards and Context
  - **ERC-721**: The foundational [[Token Standard]] for unique NFTs on Ethereum, defined in Ethereum Improvement Proposal 721; OpenSea indexes all compliant contracts automatically.
  - **ERC-1155**: Multi-token standard enabling both fungible and non-fungible tokens in a single contract, widely used in gaming and batch-edition art.
  - **EIP-2981**: On-chain royalty information standard, allowing marketplace contracts to query the royalty rate for a given token and recipient, providing interoperable [[Creator Royalties]] signals.
  - **Seaport Protocol**: OpenSea's open-source settlement protocol (v1.x), audited by third parties, designed for gas efficiency and advanced order composition; adopted by other platforms as a shared settlement layer.
  - **Regulatory Environment**: NFT marketplaces face evolving scrutiny from securities regulators in multiple jurisdictions (SEC, FCA), particularly regarding whether certain NFT collections constitute investment contracts; OpenSea has navigated SEC enquiries related to insider trading and securities classification.
  - **IPFS and Arweave**: Decentralised storage protocols used to host NFT media and metadata, ensuring asset permanence independent of OpenSea's own servers.

- ### Semantic Classification
  - owl-class:: blockchain:OpenSea
  - owl-role:: Class

- ### Provenance
  - sources:: OpenSea official documentation; Ethereum Improvement Proposals (ERC-721, ERC-1155, EIP-2981); Seaport protocol repository; industry analysis of NFT markets
  - updated:: 2026-06-13
