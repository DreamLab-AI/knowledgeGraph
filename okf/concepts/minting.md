---
okf_version: "0.2"
type: Class
title: Minting
resource: urn:ngm:class:minting
domain: blockchain
description: "The protocol-governed creation of new tokens on a blockchain, which may be fungible (ERC-20) or non-fungible (ERC-721), increasing total token supply according to defined issuance rules. Minting may be permissioned (restricted to authorised smart contracts or validators), algorithmic (triggered by staking rewards or proof-of-work block production), or demand-driven (as in NFT drops), and directly "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
enables:
  - urn:ngm:class:fungible-token
  - urn:ngm:class:nft-minting
  - urn:ngm:class:token-economics
contrastsWith:
  - urn:ngm:class:deflationary-token
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-721-standard
relatedTo:
  - urn:ngm:class:tokenomics
  - urn:ngm:class:inflation
  - urn:ngm:class:token-standard
---

# Minting

The protocol-governed creation of new tokens on a blockchain, which may be fungible (ERC-20) or non-fungible (ERC-721), increasing total token supply according to defined issuance rules. Minting may be permissioned (restricted to authorised smart contracts or validators), algorithmic (triggered by staking rewards or proof-of-work block production), or demand-driven (as in NFT drops), and directly determines a token's inflation schedule and economic model.
