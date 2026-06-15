public:: true
alias:: NFTs

# nft
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b8cb100b12807bd8a8267800477ee5ba4bd387e840bbedf02e31787ca9430bb0",
  "@type": "Page",
  "vc:slug": "nft",
  "title": "nft",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nft",
  "@type": "Class",
  "label": "NFT",
  "definition": "A Non-Fungible Token (NFT) is a cryptographic token deployed on a blockchain that encodes a unique, verifiable ownership claim over a specific digital or physical asset, distinguishing it from fungible tokens where every unit is interchangeable. The on-chain token record contains a unique identifier and owner address, while rich metadata and media assets are typically stored off-chain via IPFS, Arweave, or centralised hosting, with a content-addressed URI anchored in the token. Dominant standards include ERC-721 for individual unique tokens and ERC-1155 for semi-fungible batch collections on Ethereum-compatible chains, with equivalents on Solana (Metaplex), Tezos (FA2), and other ecosystems. NFTs enable programmable royalties, provenance tracking, and cross-platform digital ownership in domains spanning digital art, gaming, music, event ticketing, and real-world asset tokenisation.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
      },
      {
        "@id": "urn:ngm:class:arweave",
        "label": "Arweave"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-ownership",
        "label": "Digital Ownership"
      },
      {
        "@id": "urn:ngm:class:creator-economy",
        "label": "Creator Economy"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      },
      {
        "@id": "urn:ngm:class:programmable-royalties",
        "label": "Programmable Royalties"
      },
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      },
      {
        "@id": "urn:ngm:class:gas-fee",
        "label": "Gas Fees"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:decentralised-storage",
        "label": "Decentralised Storage"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:eip-process",
        "label": "EIP Process"
      },
      {
        "@id": "urn:ngm:class:real-world-asset-tokenisation",
        "label": "Real-World Asset Tokenisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ethereum-improvement-proposal",
        "label": "Ethereum Improvement Proposal"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:non-fungible-token",
      "label": "Non-Fungible Token"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A Non-Fungible Token (NFT) is a cryptographic token recorded on a [[Blockchain]] that encodes a unique, tamper-resistant ownership claim over a specific digital or physical asset. Unlike [[Fungible Token]]s (such as [[Cryptocurrency]] units), each NFT has a distinct identifier making it non-interchangeable with any other token. The on-chain record anchors a URI pointing to off-chain metadata hosted via [[IPFS]], [[Arweave]], or centralised servers, while [[Smart Contract]] logic governs minting, transfer, and royalty enforcement. NFTs are foundational to [[Digital Ownership]], the [[Creator Economy]], and [[Web3]] ecosystems.

- ### Overview
  - NFTs emerged from early experiments with coloured coins on Bitcoin and Counterparty (2012–2014), crystallised into the ERC-721 standard on [[Ethereum]] (EIP-721, finalised January 2018), and gained mainstream attention through CryptoKitties (2017), digital art auctions (2021), and metaverse land sales.
  - The fundamental value proposition is trustless provenance: any party can verify, on the public ledger, who owns a given token and the complete ownership history without relying on a centralised registry.
  - NFTs separate the concept of ownership (on-chain) from the asset itself (typically off-chain), creating a novel ownership layer that can be programmed with royalty splits, transfer restrictions, and unlockable content.
  - Criticisms include environmental cost on proof-of-work chains (largely mitigated by Ethereum's move to proof-of-stake in 2022), off-chain metadata fragility, and speculative market dynamics.

- ### Key Mechanisms
  - **Minting**: A [[Smart Contract]] transaction assigns a unique token ID to a wallet address; the event is recorded immutably on the [[Blockchain]].
  - **Token Standards**
    - [[ERC-721]]: the dominant single-token standard defining `ownerOf`, `transferFrom`, and `tokenURI` interfaces on [[Ethereum]]-compatible chains.
    - [[ERC-1155]]: multi-token standard supporting fungible, semi-fungible, and non-fungible tokens in one contract; reduces [[Gas Fees]] for large collections.
    - Metaplex (Solana), FA2 (Tezos), and RMRK (Polkadot) provide equivalent standards on alternative chains.
  - **Metadata URI pattern**: `tokenURI()` returns a JSON document with name, description, image URL, and trait attributes. The URI is the primary architectural weakness — if the hosting service disappears, the NFT loses its associated content.
  - **Content-addressed storage**: [[IPFS]] and [[Arweave]] mitigate URI rot by identifying content by its cryptographic hash, so the on-chain CID is sufficient to retrieve the asset from any node holding a copy.
  - **Programmable royalties**: EIP-2981 defines a standard royalty interface allowing creators to receive a percentage of every secondary-market sale, enforced at the marketplace contract level.
  - **[[Public Key Cryptography]]**: ownership is controlled via [[Wallet]] private keys; transferring an NFT requires a valid cryptographic signature from the current owner's key.

- ### Applications and Use Cases
  - **Digital art and collectibles**: Artists mint limited editions; buyers gain verifiable scarcity. Platforms include OpenSea, Blur, and Foundation.
  - **Gaming and virtual worlds**: In-game items, characters, and virtual land parcels represented as NFTs enable player-owned economies and cross-platform portability. Key examples: Axie Infinity, Decentraland, The Sandbox — all bridging NFTs to [[Metaverse]] environments.
  - **Music and media**: Musicians tokenise albums, stems, and concert recordings to distribute royalties directly via [[Programmable Royalties]] and bypass intermediaries.
  - **Event ticketing**: NFT tickets carry verifiable provenance, programmable resale caps, and post-event utility (e.g., backstage access unlockables), reducing fraud versus traditional barcodes.
  - **Real-world asset tokenisation**: [[Real-World Asset Tokenisation]] maps physical assets (property deeds, luxury goods, fine wine) to on-chain NFTs, enabling fractional ownership and liquidity via [[Decentralised Finance]] protocols.
  - **Identity and credentials**: Soulbound tokens (SBTs, non-transferable NFTs) proposed by Vitalik Buterin represent qualifications, reputation, and attestations — a bridge to [[Decentralised Identifier]]s and verifiable credentials.
  - **Supply chain provenance**: NFTs attached to physical goods carry [[Provenance Tracking]] data through the supply chain, intersecting with [[Supply Chain]] management and IoT oracle feeds.
  - **[[Digital Twin]]**: NFTs can serve as the ownership record for a [[Digital Twin]] of a physical product, linking real-world sensor data to a blockchain-anchored identity.
  - **Spatial computing**: [[Spatial Computing]] platforms use NFTs to represent persistent 3D objects, wearables, and environments accessible in AR/VR layers.

- ### Relationships
  - uses:: [[Smart Contract]]
  - uses:: [[ERC-721]]
  - uses:: [[ERC-1155]]
  - uses:: [[IPFS]]
  - uses:: [[Arweave]]
  - uses:: [[Public Key Cryptography]]
  - enables:: [[Digital Ownership]]
  - enables:: [[Creator Economy]]
  - enables:: [[Tokenisation]]
  - enables:: [[Programmable Royalties]]
  - enables:: [[Provenance Tracking]]
  - requires:: [[Blockchain]]
  - requires:: [[Wallet]]
  - requires:: [[Gas Fees]]
  - dependsOn:: [[Decentralised Storage]]
  - dependsOn:: [[Ethereum]]
  - contrastsWith:: [[Fungible Token]]
  - contrastsWith:: [[Cryptocurrency]]
  - relatedTo:: [[Metaverse]]
  - relatedTo:: [[Decentralised Finance]]
  - relatedTo:: [[Digital Asset]]
  - relatedTo:: [[EIP Process]]
  - relatedTo:: [[Real-World Asset Tokenisation]]
  - bridges-to:: [[Spatial Computing]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Supply Chain]]
  - standardizedBy:: [[Ethereum Improvement Proposal]]
  - partOf:: [[Web3]]

- ### Standards and Context
  - **EIP-721** (January 2018): the foundational Ethereum Improvement Proposal defining the non-fungible token interface; authored by William Entriken, Dieter Shirley, Jacob Evans, and Nastassia Sachs.
  - **EIP-1155** (June 2019): multi-token standard by Witek Radomski (Enjin), enabling mixed fungible/non-fungible collections in a single contract.
  - **EIP-2981**: NFT royalty standard providing a consistent royalty information retrieval interface for marketplaces.
  - **EIP-4907**: rental standard (ERC-4907) separating owner and user roles with expiry, enabling time-limited NFT lending.
  - **Metaplex**: the dominant NFT standard on Solana, supporting compressed NFTs (cNFTs) for drastically reduced minting costs.
  - **IETF / W3C**: no formal cross-chain NFT standard exists at IETF level; W3C DID and VC specs intersect with soulbound token proposals.
  - **Regulatory context**: NFTs have attracted securities law scrutiny in the US (SEC enforcement actions, 2023), AML/KYC requirements in the EU under MiCA (Markets in Crypto-Assets Regulation), and IP law debates around whether owning an NFT conveys copyright in the underlying work.
  - The [[Ethereum Improvement Proposal]] process (governed by the Ethereum Foundation's EIP editors) is the primary standards governance mechanism for NFT token interfaces.

- ### Technical Architecture
  - **On-chain component**: token ID, owner address, approval mappings, and total supply stored in contract storage slots on the [[Blockchain]].
  - **Off-chain component**: JSON metadata file (name, description, image URI, attributes array) and the associated media file (image, audio, video, 3D model).
  - **Metadata hosting options**:
    - Centralised (HTTP): lowest cost, highest fragility — single point of failure.
    - [[IPFS]]: content-addressed, peer-to-peer; requires pinning services (Pinata, nft.storage) for persistence.
    - [[Arweave]]: pay-once permanent storage with cryptoeconomic guarantees; preferred for high-value assets.
    - On-chain SVG/base64: fully on-chain metadata and image, maximally durable but expensive; used by Autoglyphs, Nouns DAO.
  - **Gas optimisation patterns**: lazy minting (defer on-chain record until first sale), batch minting via ERC-1155, and compressed NFTs (Solana cNFTs using Merkle trees).
  - **Marketplace interaction**: NFT marketplaces (OpenSea, Blur, Magic Eden) interact with token contracts via approval (`setApprovalForAll`) and listing mechanisms; royalty enforcement is market-level, not universally enforced at the protocol level.

- ### Criticisms and Limitations
  - **Off-chain metadata fragility**: the most common failure mode — if the `tokenURI` host disappears, the NFT is an on-chain pointer to nothing.
  - **Environmental cost**: proof-of-work minting (pre-Merge Ethereum) was energy-intensive; proof-of-stake chains have dramatically reduced per-transaction energy consumption.
  - **Copyright misalignment**: purchasing an NFT typically conveys no copyright in the underlying work unless explicitly granted by the creator's terms; this is frequently misunderstood.
  - **Wash trading and market manipulation**: thin secondary markets and low barriers to self-trading have inflated reported trading volumes on some platforms.
  - **Smart contract risk**: bugs in minting or marketplace contracts have resulted in exploits and loss of funds (e.g., re-entrancy attacks).
  - **Royalty enforcement**: without protocol-level enforcement, marketplaces can bypass creator royalties, undermining the creator-economy value proposition.

- ### Provenance
  - sources:: EIP-721 (eips.ethereum.org), EIP-1155, EIP-2981, Ethereum Foundation documentation, OpenSea developer docs, Metaplex documentation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
