---
okf_version: "0.2"
type: Class
title: NFT Standard
resource: urn:ngm:class:nft-standard
domain: blockchain
description: An NFT Standard is a formally specified interface and data schema that defines how non-fungible tokens are created, transferred, and queried on a blockchain network, ensuring interoperability across wallets, marketplaces, and decentralised applications. Dominant examples include ERC-721 (Ethereum, unique single tokens), ERC-1155 (multi-token standard combining fungible and non-fungible types in on
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-token-and-asset
hasPart:
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:erc-1155
  - urn:ngm:class:eip-2981
  - urn:ngm:class:token-metadata
  - urn:ngm:class:token-metadata
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:decentralised-storage
enables:
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:digital-ownership
  - urn:ngm:class:nft-marketplace
  - urn:ngm:class:on-chain-royalty
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:solidity
  - urn:ngm:class:ipfs
implements:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:eip
contrastsWith:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:fungible-token
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:metaverse
  - urn:ngm:class:provenance-tracking
  - urn:ngm:class:metaverse
supports:
  - urn:ngm:class:digital-art
  - urn:ngm:class:tokenised-real-world-assets
  - urn:ngm:class:gaming-asset
  - urn:ngm:class:tokenised-real-world-assets
standardizedBy:
  - urn:ngm:class:ethereum-smart-contract-platform-foundation
relatedTo:
  - urn:ngm:class:token-standard
  - urn:ngm:class:de-fi
  - urn:ngm:class:web3
---

# NFT Standard

An NFT Standard is a formally specified interface and data schema that defines how non-fungible tokens are created, transferred, and queried on a blockchain network, ensuring interoperability across wallets, marketplaces, and decentralised applications. Dominant examples include ERC-721 (Ethereum, unique single tokens), ERC-1155 (multi-token standard combining fungible and non-fungible types in one contract), and EIP-2981 (royalty standard). These specifications are ratified through Ethereum Improvement Proposals or analogous governance processes on other chains, and they collectively establish the canonical interface any compliant smart contract must expose.
