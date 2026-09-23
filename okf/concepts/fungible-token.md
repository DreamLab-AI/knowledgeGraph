---
okf_version: "0.2"
type: Class
title: Fungible Token
resource: urn:ngm:class:fungible-token
domain: blockchain
description: A blockchain token where each unit is identical and fully interchangeable with any other unit of the same type, analogous to traditional fiat currency. Fungibility is enforced at the protocol level via standards such as ERC-20, ensuring uniform value and seamless divisibility across all holders.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:token
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:token-swapping
implements:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:spl-token
contrastsWith:
  - urn:ngm:class:nft
  - urn:ngm:class:semi-fungible-token
bridgesTo:
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:digital-currency
uses:
  - urn:ngm:class:wallet
  - urn:ngm:class:public-key-cryptography
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:stablecoin
  - urn:ngm:class:initial-coin-offering
standardizedBy:
  - urn:ngm:class:eip
relatedTo:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:deflationary-token
  - urn:ngm:class:tokenomics
  - urn:ngm:class:token-standard
---

# Fungible Token

A blockchain token where each unit is identical and fully interchangeable with any other unit of the same type, analogous to traditional fiat currency. Fungibility is enforced at the protocol level via standards such as ERC-20, ensuring uniform value and seamless divisibility across all holders.
