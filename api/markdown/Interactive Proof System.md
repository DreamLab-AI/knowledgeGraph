An Interactive Proof System is a protocol in which a computationally powerful prover convinces a probabilistic, resource-bounded verifier of the truth of a statement through a sequence of message exchanges. It satisfies completeness, so true statements are accepted with high probability, and soundness, so false statements are rejected except with negligible probability. Interactive proofs generalise classical proofs and form the theoretical basis for zero-knowledge proofs and many cryptographic protocols.

### Overview

- In an interactive proof, the verifier issues random challenges and the prover responds, repeating until the verifier is convinced with overwhelming probability. The use of randomness and interaction extends what can be efficiently verified beyond the class of statements with short classical proofs. The Fiat-Shamir heuristic can remove interaction by deriving challenges from a hash, yielding non-interactive proofs used widely in cryptography.

### Mechanisms

- **Prover and verifier roles** — an unbounded prover convinces a bounded, randomised verifier.
- **Completeness** — true statements are accepted with high probability.
- **Soundness** — false statements are rejected except with negligible probability.
- **Challenge-response rounds** — randomised interaction drives the protocol.
- **Removing interaction** — Fiat-Shamir transforms protocols into non-interactive proofs.

### Applications

- Foundations of zero-knowledge and zk-SNARK proof systems.
- Identification and authentication protocols.
- Verifiable computation and delegated computation.
- Complexity-theoretic characterisations such as IP equals PSPACE.

### Provenance

