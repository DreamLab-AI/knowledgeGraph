---
okf_version: "0.2"
type: Class
title: Application-Specific Blockchain
resource: urn:ngm:class:application-specific-blockchain
domain: blockchain
description: An application-specific blockchain is a sovereign blockchain purpose-built to run a single application or tightly scoped set of applications, rather than serving as a general-purpose smart-contract platform. By controlling the full stack — consensus, execution, and governance — it can optimise throughput, fee economics, and customisation for its target use case. This architecture, popularised by t
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:blockchain-network
enables:
  - urn:ngm:class:throughput
  - urn:ngm:class:scalability
dependsOn:
  - urn:ngm:class:consensus
implements:
  - urn:ngm:class:cosmos-sdk
  - urn:ngm:class:tendermint
contrastsWith:
  - urn:ngm:class:layer-1
bridgesTo:
  - urn:ngm:class:ibc
uses:
  - urn:ngm:class:consensus
  - urn:ngm:class:validator-set
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:blockchain-application
partOf:
  - urn:ngm:class:cosmos
relatedTo:
  - urn:ngm:class:rollup
  - urn:ngm:class:layer-3
  - urn:ngm:class:ibc
  - urn:ngm:class:polkadot
---

# Application-Specific Blockchain

An application-specific blockchain is a sovereign blockchain purpose-built to run a single application or tightly scoped set of applications, rather than serving as a general-purpose smart-contract platform. By controlling the full stack — consensus, execution, and governance — it can optimise throughput, fee economics, and customisation for its target use case. This architecture, popularised by the Cosmos ecosystem and rollup frameworks, trades shared security for sovereignty and performance.
