---
okf_version: "0.2"
type: Class
title: UTXO
resource: urn:ngm:class:utxo
domain: blockchain
description: UTXO (Unspent Transaction Output) is an accounting model used by Bitcoin and several other blockchains in which the ledger state consists of discrete unspent outputs rather than account balances. Each transaction consumes one or more existing unspent outputs as inputs and creates new outputs, and a coin is simply an output that has not yet been spent. Ownership is established by satisfying the loc
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:blockchain-domain
hasPart:
  - urn:ngm:class:transaction-output
  - urn:ngm:class:unlocking-script
  - urn:ngm:class:change-output
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:digital-signature
  - urn:ngm:class:locking-script
  - urn:ngm:class:transaction-input
enables:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:transaction-validation
  - urn:ngm:class:coin-selection
  - urn:ngm:class:payment-channel
implements:
  - urn:ngm:class:utxo-model
contrastsWith:
  - urn:ngm:class:account-model
  - urn:ngm:class:ethereum
bridgesTo:
  - urn:ngm:class:utxo-model
  - urn:ngm:class:lightning-network
  - urn:ngm:class:cardano
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:script
supports:
  - urn:ngm:class:privacy
  - urn:ngm:class:light-client-verification
  - urn:ngm:class:stateless-validation
partOf:
  - urn:ngm:class:blockchain-ledger
  - urn:ngm:class:bitcoin-transaction
relatedTo:
  - urn:ngm:class:cardano
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:wallet
---

# UTXO

UTXO (Unspent Transaction Output) is an accounting model used by Bitcoin and several other blockchains in which the ledger state consists of discrete unspent outputs rather than account balances. Each transaction consumes one or more existing unspent outputs as inputs and creates new outputs, and a coin is simply an output that has not yet been spent. Ownership is established by satisfying the locking script attached to an output, typically by providing a valid signature. The model contrasts with the account-based approach used by Ethereum and supports straightforward parallel validation and privacy techniques.
