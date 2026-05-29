- ### Definition
  - A Non-Fungible Token (NFT) is a cryptographic token deployed on a blockchain that provides verifiable, tamper-resistant proof of unique ownership and provenance for a specific digital or physical asset, distinguishing it from fungible tokens where each unit is interchangeable. NFT metadata and media assets are typically stored off-chain (via IPFS or centralised hosting) while only the token identifier and ownership record reside on-chain. Primary token standards include ERC-721 for single-asset tokens and ERC-1155 for semi-fungible batch tokens on Ethereum-compatible chains.

- ### Semantic Classification
  - owl-class:: nft:NFT
  - owl-role:: Concept

- ### Relationships
  - uses [[Smart Contract]]
  - uses [[ERC-721]]
  - uses [[ERC-1155]]
  - enables [[Digital Ownership]]
  - enables [[Creator Economy]]
  - relatedTo [[Metaverse]]

- ### Content
  NFTs exploit the immutability and public verifiability of blockchain ledgers to encode indisputable ownership records. A minting transaction deploys or calls a Smart Contract that assigns a unique token ID to a wallet address; subsequent transfers are recorded as on-chain state changes visible to any party. The ERC-721 standard (finalised via the Ethereum EIP process) defines the interface for single unique tokens, whilst ERC-1155 enables batch minting of both fungible and non-fungible tokens within a single contract, reducing gas costs for collections.

  The metadata URI pattern—where the token ID resolves to a JSON document describing the asset's name, image URL, and attributes—is the primary architectural weakness: if the hosting service for the off-chain media goes offline, the NFT retains on-chain ownership proof but loses its associated content. Decentralised storage via IPFS or Arweave mitigates this by content-addressing assets, ensuring the metadata hash stored on-chain is sufficient to retrieve the content from any node holding it.

  NFTs underpin Digital Ownership in the Creator Economy—enabling artists, musicians, and game studios to sell directly to collectors with programmable royalty splits on secondary sales, encoded into the token contract. In the context of the Metaverse, NFTs serve as portable, cross-platform representations of virtual land, avatars, and in-game items, though interoperability between metaverse platforms remains technically and standardisation-limited. Beyond digital art, NFT mechanics are applied to event ticketing, real-world asset tokenisation, supply-chain provenance, and academic credential issuance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z