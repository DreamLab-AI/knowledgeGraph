---
okf_version: "0.2"
type: Class
title: Dynamic Scalable BFT
resource: urn:ngm:class:dynamic-scalable-bft
domain: blockchain
description: Dynamic Scalable BFT (DSBFT) is an optimised Byzantine fault-tolerant consensus protocol that combines Distributed Key Generation (DKG) with BLS aggregate signatures to allow a validator committee to reach consensus with O(n) rather than O(n²) message complexity, while supporting dynamic membership—nodes may join or leave the committee without requiring a full protocol restart or trusted dealer fo
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:practical-byzantine-fault-tolerance
hasPart:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:validator-node
requires:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:key-management
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:finality
  - urn:ngm:class:blockchain-governance
uses:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:consensus-algorithm
relatedTo:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:distributed-systems
---

# Dynamic Scalable BFT

Dynamic Scalable BFT (DSBFT) is an optimised Byzantine fault-tolerant consensus protocol that combines Distributed Key Generation (DKG) with BLS aggregate signatures to allow a validator committee to reach consensus with O(n) rather than O(n²) message complexity, while supporting dynamic membership—nodes may join or leave the committee without requiring a full protocol restart or trusted dealer for key setup.
