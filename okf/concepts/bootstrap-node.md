---
okf_version: "0.2"
type: Class
title: Bootstrap Node
resource: urn:ngm:class:bootstrap-node
domain: blockchain
description: "A Bootstrap Node is a well-known, stable network entry point that newly joining peers contact to obtain their initial list of active participants in a peer-to-peer blockchain network. By providing a curated, long-lived set of peer addresses, bootstrap nodes solve the cold-start problem: without them a new client would have no means of discovering the network. They do not typically validate or stor"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:blockchain-entity
requires:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:cryptographic-protocol
enables:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:blockchain-network
supports:
  - urn:ngm:class:blockchain-scalability
partOf:
  - urn:ngm:class:blockchain-infrastructure
relatedTo:
  - urn:ngm:class:light-node
  - urn:ngm:class:full-node
  - urn:ngm:class:validator-node
  - urn:ngm:class:gossip-protocol
---

# Bootstrap Node

A Bootstrap Node is a well-known, stable network entry point that newly joining peers contact to obtain their initial list of active participants in a peer-to-peer blockchain network. By providing a curated, long-lived set of peer addresses, bootstrap nodes solve the cold-start problem: without them a new client would have no means of discovering the network. They do not typically validate or store blocks themselves; their function is purely topological—seeding new participants into the gossip network so that subsequent peer discovery can proceed organically.
