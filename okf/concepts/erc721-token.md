---
okf_version: "0.2"
type: Class
title: ERC721 Token
resource: urn:ngm:class:erc721-token
domain: blockchain
description: An ERC721 Token is a non-fungible token (NFT) on the Ethereum blockchain that implements the ERC-721 open standard, which assigns each token a unique integer identifier and tracks ownership via the ownerOf(tokenId) function. Unlike fungible ERC-20 tokens, every ERC-721 token is distinct and non-interchangeable, enabling verifiable digital ownership of unique assets such as digital art, collectible
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:non-fungible-token-nft
hasPart:
  - urn:ngm:class:nft-ownership-proof
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:erc721-standard
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:digital-ownership
enables:
  - urn:ngm:class:nft-marketplace
  - urn:ngm:class:nft-minting
  - urn:ngm:class:digital-asset-trading
  - urn:ngm:class:fractionalized-nft
contrastsWith:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-1155
  - urn:ngm:class:erc1155-token
bridgesTo:
  - urn:ngm:class:non-fungible-token-nft
standardizedBy:
  - urn:ngm:class:erc721
  - urn:ngm:class:token-standard
relatedTo:
  - urn:ngm:class:nft
  - urn:ngm:class:digital-asset
  - urn:ngm:class:asset-tokenisation
  - urn:ngm:class:smart-contracts
---

# ERC721 Token

An ERC721 Token is a non-fungible token (NFT) on the Ethereum blockchain that implements the ERC-721 open standard, which assigns each token a unique integer identifier and tracks ownership via the ownerOf(tokenId) function. Unlike fungible ERC-20 tokens, every ERC-721 token is distinct and non-interchangeable, enabling verifiable digital ownership of unique assets such as digital art, collectibles, in-game items, and real-world asset representations on decentralised marketplaces.
