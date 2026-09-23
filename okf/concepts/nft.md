---
okf_version: "0.2"
type: Class
title: NFT
resource: urn:ngm:class:nft
domain: blockchain
description: A Non-Fungible Token (NFT) is a cryptographic token deployed on a blockchain that encodes a unique, verifiable ownership claim over a specific digital or physical asset, distinguishing it from fungible tokens where every unit is interchangeable. The on-chain token record contains a unique identifier and owner address, while rich metadata and media assets are typically stored off-chain via IPFS, Ar
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-token-and-asset
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:wallet
  - urn:ngm:class:gas-fee
  - urn:ngm:class:gas-fee
enables:
  - urn:ngm:class:digital-ownership
  - urn:ngm:class:creator-economy
  - urn:ngm:class:tokenization
  - urn:ngm:class:programmable-royalties
  - urn:ngm:class:provenance-tracking
  - urn:ngm:class:neural-network-text-tokenisation
dependsOn:
  - urn:ngm:class:decentralised-storage
  - urn:ngm:class:ethereum
contrastsWith:
  - urn:ngm:class:fungible-token
  - urn:ngm:class:cryptocurrency
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
  - urn:ngm:class:supply-chain
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:erc-1155
  - urn:ngm:class:ipfs
  - urn:ngm:class:arweave
  - urn:ngm:class:public-key-cryptography
standardizedBy:
  - urn:ngm:class:eip
partOf:
  - urn:ngm:class:web3
relatedTo:
  - urn:ngm:class:metaverse
  - urn:ngm:class:de-fi
  - urn:ngm:class:digital-asset
  - urn:ngm:class:eip-process
  - urn:ngm:class:real-world-asset-tokenisation
---

# NFT

A Non-Fungible Token (NFT) is a cryptographic token deployed on a blockchain that encodes a unique, verifiable ownership claim over a specific digital or physical asset, distinguishing it from fungible tokens where every unit is interchangeable. The on-chain token record contains a unique identifier and owner address, while rich metadata and media assets are typically stored off-chain via IPFS, Arweave, or centralised hosting, with a content-addressed URI anchored in the token. Dominant standards include ERC-721 for individual unique tokens and ERC-1155 for semi-fungible batch collections on Ethereum-compatible chains, with equivalents on Solana (Metaplex), Tezos (FA2), and other ecosystems. NFTs enable programmable royalties, provenance tracking, and cross-platform digital ownership in domains spanning digital art, gaming, music, event ticketing, and real-world asset tokenisation.
