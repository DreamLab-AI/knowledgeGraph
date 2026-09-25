A ZK rollup is a Layer 2 scaling construction that executes transactions off-chain and posts a succinct validity proof, typically a zk-SNARK or zk-STARK, to a Layer 1 chain so the base layer can verify correctness without re-executing the batch. Compressed transaction data and the proof are published on-chain, inheriting the security of the underlying settlement layer while drastically reducing per-transaction cost. Unlike optimistic rollups, finality does not require a fraud-proof challenge window because validity is proven cryptographically.

### Overview

- ZK rollups move computation off the main chain and replace re-execution with verification of a validity proof.
- The proof attests that the new state root follows from the previous root and the batch of transactions, so the Layer 1 contract only checks the proof.
- Because validity is cryptographically established, withdrawals do not wait for a dispute period, giving fast finality.
- Data availability is preserved by publishing compressed calldata or blobs on the settlement layer.

### Mechanisms

- Off-chain sequencer batches transactions and computes the new state.
- A prover generates a succinct proof (zk-SNARK or zk-STARK) of correct execution.
- An on-chain verifier contract checks the proof and updates the canonical state root.
- Compressed transaction data is committed for [[Data Availability]], allowing independent state reconstruction.

### Applications

- High-throughput payments and token transfers.
- Decentralised exchange and trading venues needing cheap, fast settlement.
- Application-specific rollups (appchains) for games and identity.
- Bridging assets between Layer 1 and Layer 2 ecosystems.

### Provenance

