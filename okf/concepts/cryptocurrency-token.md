---
okf_version: "0.2"
type: Class
title: Cryptocurrency Token
resource: urn:ngm:class:cryptocurrency-token
domain: blockchain
description: A programmable digital asset implemented via smart contracts on a blockchain platform, categorised into utility tokens (access rights), security tokens (equity or debt instruments), governance tokens (protocol voting rights), and non-fungible tokens (NFTs, unique digital ownership). Token behaviour and interoperability are defined by standards such as ERC-20, ERC-721, and ERC-1155.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:bc-token-and-asset
hasPart:
  - urn:ngm:class:fungible-token
  - urn:ngm:class:governance-token
  - urn:ngm:class:utility-token
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:security-token
  - urn:ngm:class:wrapped-token
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-key
  - urn:ngm:class:digital-wallet
enables:
  - urn:ngm:class:dao
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:staking
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:distributed-ledger
implements:
  - urn:ngm:class:erc-1155
contrastsWith:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:central-bank-digital-currency-cbdc
bridgesTo:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:supply-chain
  - urn:ngm:class:finance
uses:
  - urn:ngm:class:blockchain-oracle
  - urn:ngm:class:automated-market-maker
standardizedBy:
  - urn:ngm:class:token-standard
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-721-standard
partOf:
  - urn:ngm:class:de-fi
  - urn:ngm:class:token-economy
relatedTo:
  - urn:ngm:class:token-economics
  - urn:ngm:class:initial-coin-offering
  - urn:ngm:class:airdrop
---

# Cryptocurrency Token

A programmable digital asset implemented via smart contracts on a blockchain platform, categorised into utility tokens (access rights), security tokens (equity or debt instruments), governance tokens (protocol voting rights), and non-fungible tokens (NFTs, unique digital ownership). Token behaviour and interoperability are defined by standards such as ERC-20, ERC-721, and ERC-1155.
