A zero-knowledge rollup (ZK-rollup) is a layer-2 scaling construction that executes transactions off-chain in batches and posts a succinct validity proof to a base chain attesting that the new state was computed correctly. Because the proof cryptographically guarantees correctness, the base chain need not re-execute the transactions, achieving high throughput while inheriting the security of the underlying ledger. ZK-rollups offer near-instant finality once a proof is verified, distinguishing them from optimistic designs that rely on challenge periods.

- A [[Zero-Knowledge Rollup]] is a [[Rollup]] that batches transactions off-chain and submits a [[Zero-Knowledge Proof]] attesting their correctness to a base chain such as [[Ethereum]].
- The validity proof, built with [[ZK-SNARK]] or [[PLONK]] systems, lets the base chain accept the new state without re-execution, advancing [[Blockchain Scalability]].
- It contrasts with the [[Optimistic Rollup]] model by replacing fraud-proof challenge windows with immediate cryptographic [[Transaction Finality]].

### Overview

- ZK-rollups move computation off the base chain while keeping security on-chain via succinct proofs, dramatically reducing per-transaction cost and contention for block space.
- A prover compresses thousands of transactions into a single proof; a verifier contract on the base chain checks the proof cheaply and updates the rollup's state root.
- Because validity is proven rather than assumed, withdrawals can settle as soon as a proof is verified, without the multi-day delay of optimistic systems.

### Mechanisms

- Off-chain execution: a sequencer orders and executes transactions to produce a new state.
- Proof generation: a prover produces a succinct validity proof (SNARK or STARK) over the state transition.
- On-chain verification: a smart contract verifies the proof and commits the state root.
- Data availability: transaction data is published so anyone can reconstruct the rollup state.

### Applications

- Scaling payments, token transfers, and DeFi on Ethereum and similar chains.
- Privacy-preserving applications that combine validity with confidentiality.
- Application-specific rollups and appchains requiring high throughput.
- Bridging low-cost execution to the security of an established settlement layer.

### Provenance

