---
okf_version: "0.2"
type: Class
title: ERC-20 Token Standard
resource: urn:ngm:class:erc-20-token-standard
domain: blockchain
description: The ERC-20 Token Standard is the foundational Ethereum Request for Comments specification that defines a common interface for fungible tokens on the Ethereum blockchain, enabling seamless interoperability between token contracts, wallets, decentralised exchanges, and other smart contract systems. Proposed by Fabian Vogelsteller in 2015 and formalised as an Ethereum Improvement Proposal, it specifi
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:enterprise-token-standards
hasPart:
  - urn:ngm:class:transfer-event
requires:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:asset-tokenisation
  - urn:ngm:class:decentralized-exchange-dex
  - urn:ngm:class:token-composability
  - urn:ngm:class:initial-coin-offering
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:solidity
implements:
  - urn:ngm:class:eip
  - urn:ngm:class:fungible-token
contrastsWith:
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:erc-1155
  - urn:ngm:class:erc-777
bridgesTo:
  - urn:ngm:class:security-token
  - urn:ngm:class:tokenized-asset
uses:
  - urn:ngm:class:enterprise-smart-contracts
  - urn:ngm:class:evm-compatible-blockchain
supports:
  - urn:ngm:class:cryptocurrency-wallet
  - urn:ngm:class:blockchain-interoperability
standardizedBy:
  - urn:ngm:class:ethereum-smart-contract-platform-foundation
relatedTo:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc1400-standard
  - urn:ngm:class:governance-token
  - urn:ngm:class:utility-token
  - urn:ngm:class:erc3643-standard
  - urn:ngm:class:stablecoin
---

# ERC-20 Token Standard

The ERC-20 Token Standard is the foundational Ethereum Request for Comments specification that defines a common interface for fungible tokens on the Ethereum blockchain, enabling seamless interoperability between token contracts, wallets, decentralised exchanges, and other smart contract systems. Proposed by Fabian Vogelsteller in 2015 and formalised as an Ethereum Improvement Proposal, it specifies six mandatory functions—totalSupply, balanceOf, transfer, transferFrom, approve, and allowance—and two events. ERC-20 standardisation catalysed the 2017 ICO boom and remains the dominant token interface in decentralised finance, with thousands of tokens deployed to this specification. Its simplicity has made it the basis for numerous extended standards including ERC-777, ERC-1400, and ERC-3643.
