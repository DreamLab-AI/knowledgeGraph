A vector commitment is a cryptographic primitive that produces a short, binding commitment to an ordered sequence of values such that the committer can later open any individual position with a compact proof of its value. It is position-binding, meaning one cannot produce valid openings of two different values at the same index, and it supports succinct membership and update proofs. Vector commitments generalise Merkle trees and underpin verifiable databases, stateless blockchains and proof systems.

### Overview

- A vector commitment compresses a vector of values into a single short string that hides nothing necessarily but binds the committer to every entry.
- Later, the committer can reveal the value at any chosen index along with a proof that the verifier checks against the commitment, without revealing other positions.
- The position-binding property guarantees that no adversary can open the same index to two different values, ensuring soundness for verifiable lookups.
- Constructions range from Merkle trees (hash-based, logarithmic proofs) to algebraic schemes such as KZG-based commitments that yield constant-size proofs and efficient updates.

### Mechanisms

- Commit: map a vector to a short commitment value.
- Open: produce a proof for the value at a specific index.
- Verify: check an opening against the commitment and index.
- Update: amend the commitment and proofs when a position changes.
- Aggregation: combine multiple openings into one compact proof in advanced schemes.

### Applications

- Stateless blockchain clients and account state proofs.
- Verifiable databases and authenticated data structures.
- Building blocks within zero-knowledge proof systems.
- Accumulators and verifiable storage with succinct membership proofs.

### Provenance

