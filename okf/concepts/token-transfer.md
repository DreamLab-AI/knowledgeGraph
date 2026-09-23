---
okf_version: "0.2"
type: Class
title: Token Transfer
resource: urn:ngm:class:token-transfer
domain: blockchain
description: A token transfer is the operation of moving ownership of a fungible or non-fungible blockchain token from one account to another, recorded as a state change on a distributed ledger. On smart-contract platforms it is typically realised by invoking a transfer function defined by a token standard such as ERC-20, which debits the sender's balance, credits the recipient, and emits an event. Token trans
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:consensus
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:tokenization
  - urn:ngm:class:de-fi
  - urn:ngm:class:neural-network-text-tokenisation
dependsOn:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:gas
implements:
  - urn:ngm:class:token
uses:
  - urn:ngm:class:token-standard
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:wallet
supports:
  - urn:ngm:class:token-economics
  - urn:ngm:class:cryptocurrency
partOf:
  - urn:ngm:class:smart-contract-execution
relatedTo:
  - urn:ngm:class:ledger
  - urn:ngm:class:fungible-token
  - urn:ngm:class:event-log
  - urn:ngm:class:non-fungible-token
---

# Token Transfer

A token transfer is the operation of moving ownership of a fungible or non-fungible blockchain token from one account to another, recorded as a state change on a distributed ledger. On smart-contract platforms it is typically realised by invoking a transfer function defined by a token standard such as ERC-20, which debits the sender's balance, credits the recipient, and emits an event. Token transfers are the elementary settlement primitive underlying payments, trading, and decentralised finance.
