---
okf_version: "0.2"
type: Class
title: Ethereum Account
resource: urn:ngm:class:ethereum-account
domain: blockchain
description: "An Ethereum account is a state entity on the Ethereum blockchain identified by a 20-byte address and holding a balance, nonce, and optionally code and storage. There are two kinds: externally owned accounts controlled by a private key, and contract accounts controlled by their deployed smart-contract code. Accounts are the unit against which transactions are debited, gas is charged, and state tran"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:ethereum
  - urn:ngm:class:bc-protocol-and-consensus
hasPart:
  - urn:ngm:class:nonce
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:address
  - urn:ngm:class:gas
enables:
  - urn:ngm:class:transaction
  - urn:ngm:class:smart-contract
dependsOn:
  - urn:ngm:class:blockchain
bridgesTo:
  - urn:ngm:class:account-abstraction
uses:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:key-management
partOf:
  - urn:ngm:class:ethereum
  - urn:ngm:class:ledger
relatedTo:
  - urn:ngm:class:wallet
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:proof-of-stake
---

# Ethereum Account

An Ethereum account is a state entity on the Ethereum blockchain identified by a 20-byte address and holding a balance, nonce, and optionally code and storage. There are two kinds: externally owned accounts controlled by a private key, and contract accounts controlled by their deployed smart-contract code. Accounts are the unit against which transactions are debited, gas is charged, and state transitions are applied.
