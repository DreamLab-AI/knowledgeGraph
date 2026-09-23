---
okf_version: "0.2"
type: Class
title: Eclipse Attack
resource: urn:ngm:class:eclipse-attack
domain: blockchain
description: An Eclipse Attack is a peer-to-peer network attack in which an adversary monopolises all of a target node's inbound and outbound connections, isolating it from the honest network. The eclipsed node is fed a fabricated view of the blockchain, enabling the attacker to double-spend against that node, delay its transaction confirmations, or waste its mining resources on a private fork. Countermeasures
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:network-component
  - urn:ngm:class:networkcomponent
requires:
  - urn:ngm:class:sybil-attack
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:routing-protocol
enables:
  - urn:ngm:class:double-spending
  - urn:ngm:class:selfish-mining
dependsOn:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:peer-to-peer-network
contrastsWith:
  - urn:ngm:class:network-synchronization
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:distributed-hash-table
bridgesTo:
  - urn:ngm:class:security
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:network-topology
partOf:
  - urn:ngm:class:network-security
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:51-attack
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:denial-of-service
  - urn:ngm:class:routing-attack
  - urn:ngm:class:consensus-mechanism
---

# Eclipse Attack

An Eclipse Attack is a peer-to-peer network attack in which an adversary monopolises all of a target node's inbound and outbound connections, isolating it from the honest network. The eclipsed node is fed a fabricated view of the blockchain, enabling the attacker to double-spend against that node, delay its transaction confirmations, or waste its mining resources on a private fork. Countermeasures include connection diversity, random peer selection, and detecting network-level routing anomalies.
