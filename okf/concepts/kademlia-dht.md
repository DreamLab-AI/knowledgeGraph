---
okf_version: "0.2"
type: Class
title: Kademlia DHT
resource: urn:ngm:class:kademlia-dht
domain: infrastructure
description: Kademlia DHT is a distributed hash table protocol introduced by Petar Maymounkov and David Mazières in 2002 that organises participating nodes into a structured peer-to-peer overlay network using XOR metric distances between 160-bit node identifiers, enabling efficient O(log n) key-value lookup, storage, and routing with provable convergence guarantees. Each node maintains a routing table of k-buc
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-hash-table
hasPart:
  - urn:ngm:class:k-bucket
  - urn:ngm:class:xor-metric
  - urn:ngm:class:routing-table
  - urn:ngm:class:node-identifier
requires:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:bootstrap-node
enables:
  - urn:ngm:class:ipfs
  - urn:ngm:class:libp2p
  - urn:ngm:class:filecoin
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:decentralised-storage
dependsOn:
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:cryptographic-hash-function
implements:
  - urn:ngm:class:distributed-system-protocol
  - urn:ngm:class:overlay-network
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:udp
relatedTo:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:sybil-attack
  - urn:ngm:class:eclipse-attack
---

# Kademlia DHT

Kademlia DHT is a distributed hash table protocol introduced by Petar Maymounkov and David Mazières in 2002 that organises participating nodes into a structured peer-to-peer overlay network using XOR metric distances between 160-bit node identifiers, enabling efficient O(log n) key-value lookup, storage, and routing with provable convergence guarantees. Each node maintains a routing table of k-buckets covering progressively finer-grained regions of the identifier space, and uses iterative or recursive RPC-based lookups to locate the nodes closest to a target key in at most O(log n) network hops. Kademlia's XOR metric is the defining technical innovation that enables symmetric routing—every lookup converges along the same path regardless of direction—making it the most widely deployed DHT protocol underlying BitTorrent, Ethereum, IPFS, and numerous other decentralised systems.
