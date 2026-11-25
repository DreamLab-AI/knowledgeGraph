---
okf_version: "0.2"
type: Class
title: Danksharding
resource: urn:ngm:class:danksharding
domain: blockchain
description: Danksharding is a data-availability scaling design for Ethereum that scales the blockchain by providing large amounts of cheap data space for rollups rather than sharding execution. It uses a unified fee market and a merged block-building process in which a single proposer commits to a block containing many data blobs, the availability of which is verified through data-availability sampling and er
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:sharding
requires:
  - urn:ngm:class:kzg-commitment
  - urn:ngm:class:blob-transaction
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:rollup
dependsOn:
  - urn:ngm:class:data-availability
  - urn:ngm:class:beacon-chain
implements:
  - urn:ngm:class:data-availability-sampling
  - urn:ngm:class:erasure-coding
bridgesTo:
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:optimistic-rollup
uses:
  - urn:ngm:class:polynomial-commitment
supports:
  - urn:ngm:class:validator
relatedTo:
  - urn:ngm:class:proto-danksharding
  - urn:ngm:class:ethereum
  - urn:ngm:class:proof-of-stake
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Danksharding

Danksharding is a data-availability scaling design for Ethereum that scales the blockchain by providing large amounts of cheap data space for rollups rather than sharding execution. It uses a unified fee market and a merged block-building process in which a single proposer commits to a block containing many data blobs, the availability of which is verified through data-availability sampling and erasure coding. Danksharding is the long-term target architecture that proto-danksharding incrementally builds towards.
