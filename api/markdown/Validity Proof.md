
A validity proof is a cryptographic proof, typically a succinct zero-knowledge proof, that attests that a batch of state transitions was computed correctly according to the rules of a system. In layer-2 rollups it allows a base chain to accept a compressed state update after verifying a single proof, without re-executing the underlying transactions. Validity proofs give immediate, trustless finality in contrast to optimistic schemes that rely on fraud challenges.

- ### Overview
  - In a [[ZK-Rollup]], an operator executes many transactions off-chain, computes a new state root, and generates a validity proof that the transition is correct.
  - The base chain verifies only the compact proof, which is far cheaper than re-running the transactions, achieving large throughput gains.
  - Because correctness is proven cryptographically, withdrawals and state updates finalise as soon as the proof is verified.
  - This contrasts with optimistic rollups, which assume validity and rely on a challenge window during which fraud proofs may dispute a batch.
- ### Mechanisms
  - Circuit: the state-transition function is expressed as an arithmetic circuit or trace.
  - Proving: a prover generates a succinct argument that a satisfying witness exists.
  - Verification: an on-chain verifier checks the proof in time independent of the batch size.
  - Aggregation: proofs may be recursively composed to amortise verification cost.
- ### Applications
  - Layer-2 scaling of blockchains via ZK-rollups with fast finality.
  - Trustless bridges and cross-domain messaging proving correct state.
  - Verifiable off-chain computation and privacy-preserving applications.
- ### Provenance

