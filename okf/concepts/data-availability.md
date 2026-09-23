---
okf_version: "0.2"
type: Class
title: Data Availability
resource: urn:ngm:class:data-availability
domain: blockchain
description: Data availability is the property of a distributed system—most critically blockchain networks and rollup scaling architectures—that guarantees all data necessary to verify and reconstruct network state is published and retrievable by any participant. The core data availability problem arises when a block producer publishes a block header without releasing the underlying transaction data, making it
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:distributed-systems
requires:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:rollup
  - urn:ngm:class:light-client
  - urn:ngm:class:modular-blockchain
dependsOn:
  - urn:ngm:class:block-propagation
  - urn:ngm:class:distributed-hash-table
implements:
  - urn:ngm:class:danksharding
  - urn:ngm:class:proto-danksharding
contrastsWith:
  - urn:ngm:class:data-withholding-attack
  - urn:ngm:class:state-availability
bridgesTo:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:cdn
uses:
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:data-availability-sampling
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:kzg-polynomial-commitment
  - urn:ngm:class:reed-solomon-codes
  - urn:ngm:class:reed-solomon-codes
relatedTo:
  - urn:ngm:class:sharding
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:data-availability-committee
  - urn:ngm:class:validity-proof
  - urn:ngm:class:fraud-proof
---

# Data Availability

Data availability is the property of a distributed system—most critically blockchain networks and rollup scaling architectures—that guarantees all data necessary to verify and reconstruct network state is published and retrievable by any participant. The core data availability problem arises when a block producer publishes a block header without releasing the underlying transaction data, making it impossible for validators or light clients to verify the block's correctness without downloading all data. Modern solutions combine erasure coding (expanding data such that any sufficient subset allows full reconstruction) with data availability sampling (DAS), enabling light nodes to probabilistically confirm full publication by checking only a small random subset of encoded chunks. Data availability is a foundational primitive in modular blockchain architectures, separating the data publication concern from execution, consensus, and settlement layers.
