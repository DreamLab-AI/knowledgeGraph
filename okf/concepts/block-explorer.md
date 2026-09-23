---
okf_version: "0.2"
type: Class
title: Block Explorer
resource: urn:ngm:class:block-explorer
domain: blockchain
description: A Block Explorer is a web-based or API-accessible tool that indexes and presents the contents of a blockchain in human-readable form, enabling users to search, inspect, and verify blocks, transactions, addresses, smart contracts, and network statistics without operating a full node locally. Block explorers ingest raw node data, parse it according to the chain's consensus rules, and expose it throu
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:blockchain-analytics
enables:
  - urn:ngm:class:transparency
  - urn:ngm:class:audit-trail
uses:
  - urn:ngm:class:full-node
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:data-visualisation
relatedTo:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:mempool
---

# Block Explorer

A Block Explorer is a web-based or API-accessible tool that indexes and presents the contents of a blockchain in human-readable form, enabling users to search, inspect, and verify blocks, transactions, addresses, smart contracts, and network statistics without operating a full node locally. Block explorers ingest raw node data, parse it according to the chain's consensus rules, and expose it through search interfaces and REST or GraphQL APIs. They are the primary transparency and audit interface for blockchain networks.
