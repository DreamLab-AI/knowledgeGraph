---
okf_version: "0.2"
type: Class
title: ERC20 Token
resource: urn:ngm:class:erc20-token
domain: blockchain
description: An ERC20 Token is a fungible token implementing the ERC-20 interface standard on the Ethereum blockchain, which defines a uniform set of six mandatory functions (totalSupply, balanceOf, transfer, transferFrom, approve, allowance) enabling interoperability between token contracts, decentralised exchanges, wallets, and DeFi protocols without bespoke integration. ERC-20 became the dominant token stan
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:fungible-token
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
  - urn:ngm:class:token-standard
enables:
  - urn:ngm:class:transaction
  - urn:ngm:class:wallet
contrastsWith:
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:nft
uses:
  - urn:ngm:class:gas
  - urn:ngm:class:token-economics
relatedTo:
  - urn:ngm:class:stablecoin-token
  - urn:ngm:class:governance-token
  - urn:ngm:class:utility-token
  - urn:ngm:class:security-token
  - urn:ngm:class:payment-token
  - urn:ngm:class:liquidity-pool
---

# ERC20 Token

An ERC20 Token is a fungible token implementing the ERC-20 interface standard on the Ethereum blockchain, which defines a uniform set of six mandatory functions (totalSupply, balanceOf, transfer, transferFrom, approve, allowance) enabling interoperability between token contracts, decentralised exchanges, wallets, and DeFi protocols without bespoke integration. ERC-20 became the dominant token standard following its formalisation in 2015 and is used for utility tokens, governance tokens, stablecoins, and wrapped assets. The standard's fungibility means all token units are identical and mutually interchangeable, contrasting with ERC-721 non-fungible tokens that represent distinct assets.
