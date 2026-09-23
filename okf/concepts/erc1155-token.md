---
okf_version: "0.2"
type: Class
title: ERC1155 Token
resource: urn:ngm:class:erc1155-token
domain: blockchain
description: "ERC1155 is an Ethereum multi-token standard that enables a single smart contract to manage an arbitrary number of fungible, non-fungible, and semi-fungible token classes simultaneously. By batching multiple token operations into a single transaction, ERC1155 dramatically reduces gas consumption compared to deploying separate ERC-20 or ERC-721 contracts for each asset class, making it the dominant "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:semi-fungible-token
hasPart:
  - urn:ngm:class:erc1155-standard
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:gas-optimization
  - urn:ngm:class:token-standard
enables:
  - urn:ngm:class:blockchain-gaming
  - urn:ngm:class:nft-marketplace
  - urn:ngm:class:digital-asset-market
contrastsWith:
  - urn:ngm:class:erc721
  - urn:ngm:class:erc-20-token-standard
relatedTo:
  - urn:ngm:class:nft
  - urn:ngm:class:fungible-token
  - urn:ngm:class:web3
  - urn:ngm:class:smart-contracts
---

# ERC1155 Token

ERC1155 is an Ethereum multi-token standard that enables a single smart contract to manage an arbitrary number of fungible, non-fungible, and semi-fungible token classes simultaneously. By batching multiple token operations into a single transaction, ERC1155 dramatically reduces gas consumption compared to deploying separate ERC-20 or ERC-721 contracts for each asset class, making it the dominant standard for blockchain gaming, NFT collections with tiered rarity, and on-chain item inventories.
