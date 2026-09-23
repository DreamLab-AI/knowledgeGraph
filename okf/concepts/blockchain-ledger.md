---
okf_version: "0.2"
type: Class
title: Blockchain Ledger
resource: urn:ngm:class:blockchain-ledger
domain: blockchain
description: A Blockchain Ledger is the authoritative, append-only register of all validated transactions and state changes maintained collectively by participants in a blockchain network, representing the shared ground truth from which account balances, ownership records, and contract states are derived. Unlike a traditional centralised ledger maintained by a single institution, a blockchain ledger is replica
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:distributed-ledger
hasPart:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:immutable-record
  - urn:ngm:class:genesis-block
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:utxo
requires:
  - urn:ngm:class:blockchain-consensus
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:digital-signature
  - urn:ngm:class:node
enables:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:transparency
  - urn:ngm:class:smart-contract
  - urn:ngm:class:tokenization
  - urn:ngm:class:de-fi
implements:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:append-only-log
contrastsWith:
  - urn:ngm:class:record-keeping-system
  - urn:ngm:class:centralised-database
bridgesTo:
  - urn:ngm:class:data-provenance
  - urn:ngm:class:supply-chain-traceability
partOf:
  - urn:ngm:class:blockchain
  - urn:ngm:class:peer-to-peer-network
relatedTo:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:state-channel
---

# Blockchain Ledger

A Blockchain Ledger is the authoritative, append-only register of all validated transactions and state changes maintained collectively by participants in a blockchain network, representing the shared ground truth from which account balances, ownership records, and contract states are derived. Unlike a traditional centralised ledger maintained by a single institution, a blockchain ledger is replicated across potentially thousands of nodes, with consensus rules ensuring that all honest participants converge on the same view of history. Its integrity derives from cryptographic chaining rather than institutional trust.
