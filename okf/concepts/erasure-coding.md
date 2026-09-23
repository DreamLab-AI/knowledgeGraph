---
okf_version: "0.2"
type: Class
title: Erasure Coding
resource: urn:ngm:class:erasure-coding
domain: infrastructure
description: Erasure coding is a forward error-correction (FEC) technique that encodes a data object into n encoded fragments (shards or chunks), distributed across nodes or storage devices, such that any k of those n fragments are sufficient to reconstruct the original data without any centralised copy. The redundancy overhead ratio (n − k) / k is typically far lower than full replication, making erasure codi
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:forward-error-correction
hasPart:
  - urn:ngm:class:reed-solomon-codes
  - urn:ngm:class:ldpc-codes
  - urn:ngm:class:galois-field-arithmetic
  - urn:ngm:class:fountain-codes
requires:
  - urn:ngm:class:galois-field-arithmetic
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:shard-distribution
enables:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:data-availability-sampling
  - urn:ngm:class:high-availability
  - urn:ngm:class:storage-efficiency
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:failure-domain
implements:
  - urn:ngm:class:forward-error-correction
  - urn:ngm:class:data-durability
contrastsWith:
  - urn:ngm:class:data-replication
  - urn:ngm:class:replication
  - urn:ngm:class:replication
bridgesTo:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:danksharding
  - urn:ngm:class:data-availability
  - urn:ngm:class:data-availability
uses:
  - urn:ngm:class:polynomial-commitment
  - urn:ngm:class:kzg-commitment
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:kzg-commitment
supports:
  - urn:ngm:class:ipfs
  - urn:ngm:class:filecoin
  - urn:ngm:class:ceph
  - urn:ngm:class:raid
partOf:
  - urn:ngm:class:forward-error-correction
  - urn:ngm:class:storage-infrastructure
relatedTo:
  - urn:ngm:class:replication
  - urn:ngm:class:network-coding
  - urn:ngm:class:secret-sharing
  - urn:ngm:class:replication
---

# Erasure Coding

Erasure coding is a forward error-correction (FEC) technique that encodes a data object into n encoded fragments (shards or chunks), distributed across nodes or storage devices, such that any k of those n fragments are sufficient to reconstruct the original data without any centralised copy. The redundancy overhead ratio (n − k) / k is typically far lower than full replication, making erasure coding the preferred durability mechanism in large-scale distributed storage, distributed ledger systems, and content-addressed networks where storage efficiency and fault tolerance are simultaneously required. Foundational schemes include Reed-Solomon codes (based on Galois Field arithmetic), as well as computationally efficient variants such as LDPC, Fountain codes (LT and Raptor), and Cauchy Reed-Solomon; newer constructions couple erasure codes with polynomial commitments (e.g. KZG) to provide data availability proofs in blockchain systems.
