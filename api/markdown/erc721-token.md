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