
Danksharding is a data-availability scaling design for Ethereum that scales the blockchain by providing large amounts of cheap data space for rollups rather than sharding execution. It uses a unified fee market and a merged block-building process in which a single proposer commits to a block containing many data blobs, the availability of which is verified through data-availability sampling and erasure coding. Danksharding is the long-term target architecture that proto-danksharding incrementally builds towards.

- ### Overview
  - Where traditional sharding splits execution across many chains, danksharding instead scales the data layer so that rollups, which already move computation off-chain, can post their compressed data cheaply and verifiably.
  - A central idea is a single merged proposer who commits to one block containing many data blobs, paired with a unified fee market. This avoids the coordination complexity of many independent shard proposers.
  - Light clients and validators do not need to download every blob; instead they sample small random pieces, relying on erasure coding so that withholding data becomes statistically detectable.

- ### Mechanisms
  - Erasure coding expands blob data with redundancy so that the full content can be reconstructed from a subset, making selective withholding detectable.
  - Data-availability sampling lets nodes confirm with high probability that all data is published by checking only a few random samples.
  - KZG polynomial commitments bind each blob to a succinct commitment that supports efficient sampling proofs.
  - Proposer-builder separation decouples the resource-intensive task of building large blocks from the act of proposing them.

- ### Applications
  - Drastically reducing the data-posting cost for ZK-rollups and optimistic rollups on Ethereum.
  - Increasing aggregate Layer-2 throughput without raising the burden on individual validators.
  - Supporting data-heavy applications such as cross-rollup interoperability and decentralised storage proofs.

- ### Provenance

