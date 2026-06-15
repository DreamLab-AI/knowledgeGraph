- ### Definition
  - Danksharding is the long-term data-availability scaling design for [[Ethereum]], a form of [[Sharding]] that supplies cheap blob space for a [[Rollup]] rather than sharding execution. It verifies blob availability with [[Data Availability Sampling]] and [[Erasure Coding]], and is approached incrementally through [[Proto-Danksharding]].

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

- ### Relationships
  - subClassOf:: [[Sharding]]
  - implements:: [[Data Availability Sampling]]
  - implements:: [[Erasure Coding]]
  - enables:: [[Scalability]]
  - enables:: [[Rollup]]
  - bridgesTo:: [[ZK-Rollup]]
  - bridgesTo:: [[Optimistic Rollup]]
  - requires:: [[KZG Commitment]]
  - requires:: [[Blob Transaction]]
  - dependsOn:: [[Data Availability]]
  - dependsOn:: [[Beacon Chain]]
  - uses:: [[Polynomial Commitment]]
  - supports:: [[Validator]]
  - relatedTo:: [[Proto-Danksharding]]
  - relatedTo:: [[Ethereum]]
  - relatedTo:: [[Proof of Stake]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation