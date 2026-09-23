---
okf_version: "0.2"
type: Class
title: Externally Owned Account
resource: urn:ngm:class:externally-owned-account
domain: blockchain
description: An Externally Owned Account (EOA) is a type of Ethereum account controlled by a private key held outside the blockchain — typically by an end user via a wallet — as opposed to a contract account controlled by smart contract code. EOAs can initiate transactions, sign messages, and hold ether and tokens; they have no associated code. Every Ethereum transaction must originate from an EOA, making them
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-wallet
requires:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:encryption
enables:
  - urn:ngm:class:off-chain-governance
  - urn:ngm:class:finance
dependsOn:
  - urn:ngm:class:cryptography
  - urn:ngm:class:security
contrastsWith:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:blockchain-identity
bridgesTo:
  - urn:ngm:class:governance
uses:
  - urn:ngm:class:session-key
  - urn:ngm:class:blockchain-identity
supports:
  - urn:ngm:class:data-management
partOf:
  - urn:ngm:class:blockchain-wallet
relatedTo:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:digital-identity
---

# Externally Owned Account

An Externally Owned Account (EOA) is a type of Ethereum account controlled by a private key held outside the blockchain — typically by an end user via a wallet — as opposed to a contract account controlled by smart contract code. EOAs can initiate transactions, sign messages, and hold ether and tokens; they have no associated code. Every Ethereum transaction must originate from an EOA, making them the fundamental actor type in the Ethereum account model.
