---
okf_version: "0.2"
type: Class
title: ERC-20
resource: urn:ngm:class:erc-20
domain: blockchain
description: ERC-20 is the Ethereum Request for Comments token standard that defines a mandatory six-function interface — totalSupply, balanceOf, transfer, transferFrom, approve, and allowance — plus optional name, symbol, and decimals metadata, enabling any conformant fungible token to interoperate seamlessly with wallets, decentralised exchanges, and smart-contract protocols without bespoke integration. Prop
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:token-standard
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:enterprise-token-standards
hasPart:
  - urn:ngm:class:fungible-token
  - urn:ngm:class:smart-contract
  - urn:ngm:class:transfer-event
requires:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:solidity
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:decentralised-finance
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:stablecoin
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:governance-token
  - urn:ngm:class:fungible-token
  - urn:ngm:class:asset-tokenisation
  - urn:ngm:class:decentralized-exchange-dex
  - urn:ngm:class:token-composability
  - urn:ngm:class:initial-coin-offering
implements:
  - urn:ngm:class:ethereum-improvement-proposal
  - urn:ngm:class:token-standard
  - urn:ngm:class:smart-contract
  - urn:ngm:class:fungible-token
  - urn:ngm:class:blockchain
contrastsWith:
  - urn:ngm:class:erc-721
  - urn:ngm:class:erc-1155
  - urn:ngm:class:erc-777
  - urn:ngm:class:spl-token
  - urn:ngm:class:erc-721
bridgesTo:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:tokenization
  - urn:ngm:class:tokenization
  - urn:ngm:class:security-token
  - urn:ngm:class:tokenized-asset
uses:
  - urn:ngm:class:ethereum
  - urn:ngm:class:evm-compatible-network
  - urn:ngm:class:ethereum
  - urn:ngm:class:blockchain
  - urn:ngm:class:enterprise-smart-contracts
  - urn:ngm:class:evm-compatible-blockchain
supports:
  - urn:ngm:class:token-composability
  - urn:ngm:class:automated-market-maker
standardizedBy:
  - urn:ngm:class:ethereum-smart-contract-platform-foundation
relatedTo:
  - urn:ngm:class:erc-2612-permit
  - urn:ngm:class:wrapped-token
  - urn:ngm:class:erc-2612-permit
  - urn:ngm:class:token-approval
  - urn:ngm:class:erc-20
  - urn:ngm:class:erc1400-standard
  - urn:ngm:class:governance-token
  - urn:ngm:class:utility-token
  - urn:ngm:class:erc3643-standard
  - urn:ngm:class:stablecoin
---

# ERC-20

ERC-20 is the Ethereum Request for Comments token standard that defines a mandatory six-function interface — totalSupply, balanceOf, transfer, transferFrom, approve, and allowance — plus optional name, symbol, and decimals metadata, enabling any conformant fungible token to interoperate seamlessly with wallets, decentralised exchanges, and smart-contract protocols without bespoke integration. Proposed by Fabian Vogelsteller and Vitalik Buterin in November 2015 and formalised as Ethereum Improvement Proposal 20 (EIP-20), it became the foundational primitive of the DeFi ecosystem and the predominant format for utility tokens, governance tokens, stablecoins, and wrapped assets. The standard defines a delegated-transfer pattern via approve and transferFrom that allows smart contracts to spend tokens on a holder's behalf, and it underpins the liquidity infrastructure of all major decentralised exchanges, lending protocols, and yield-aggregators on EVM-compatible networks.
