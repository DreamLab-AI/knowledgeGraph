---
okf_version: "0.2"
type: Class
title: Event Log
resource: urn:ngm:class:event-log
domain: blockchain
description: "An Event Log is an append-only record of discrete events emitted by a system, used to capture state changes for auditing, indexing and downstream processing. On blockchains, smart contracts emit events that are written to transaction receipts and stored in the log structure of each block, where they can be efficiently queried by off-chain services. Event logs provide an immutable, ordered history "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:append-only-log
hasPart:
  - urn:ngm:class:event-emission
  - urn:ngm:class:state-change
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:immutability
enables:
  - urn:ngm:class:observability
  - urn:ngm:class:audit-log
dependsOn:
  - urn:ngm:class:solidity
implements:
  - urn:ngm:class:audit-log
uses:
  - urn:ngm:class:event-emission
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
supports:
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:blockchain-data
partOf:
  - urn:ngm:class:append-only-log
relatedTo:
  - urn:ngm:class:state-change
  - urn:ngm:class:immutability
  - urn:ngm:class:blockchain-data
---

# Event Log

An Event Log is an append-only record of discrete events emitted by a system, used to capture state changes for auditing, indexing and downstream processing. On blockchains, smart contracts emit events that are written to transaction receipts and stored in the log structure of each block, where they can be efficiently queried by off-chain services. Event logs provide an immutable, ordered history that decentralised applications use to reconstruct state and trigger reactions.
