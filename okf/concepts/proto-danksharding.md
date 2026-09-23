---
okf_version: "0.2"
type: Class
title: Proto-Danksharding
resource: urn:ngm:class:proto-danksharding
domain: blockchain
description: Proto-danksharding is an Ethereum scaling upgrade, specified in EIP-4844, that introduces blob-carrying transactions to provide cheap, temporary data availability for layer-2 rollups. It adds a new transaction type carrying large binary data blobs that are not accessible to the Ethereum Virtual Machine and are pruned after a short retention period, with KZG commitments proving their contents. It i
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:data-availability
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:data-availability
implements:
  - urn:ngm:class:eip-4844
  - urn:ngm:class:blob-transaction
bridgesTo:
  - urn:ngm:class:danksharding
  - urn:ngm:class:sharding
uses:
  - urn:ngm:class:kzg-commitment
  - urn:ngm:class:blob-transaction
supports:
  - urn:ngm:class:rollup
  - urn:ngm:class:layer-2-scaling
relatedTo:
  - urn:ngm:class:ethereum
  - urn:ngm:class:rollup
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:layer-2-scaling
---

# Proto-Danksharding

Proto-danksharding is an Ethereum scaling upgrade, specified in EIP-4844, that introduces blob-carrying transactions to provide cheap, temporary data availability for layer-2 rollups. It adds a new transaction type carrying large binary data blobs that are not accessible to the Ethereum Virtual Machine and are pruned after a short retention period, with KZG commitments proving their contents. It is an incremental step towards the full danksharding design.
