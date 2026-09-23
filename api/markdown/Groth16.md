
A pairing-based zk-SNARK proving system that produces constant-size proofs verifiable with a few elliptic curve pairing operations, at the cost of a per-circuit trusted setup.

- ### Semantic Classification

- ### Content
  - Groth16 is a succinct non-interactive argument whose proofs consist of only three group elements and are verified with a small fixed number of pairing checks. It is valued for very small proof sizes and fast verification.
  - The scheme requires a trusted setup that is specific to the circuit being proved, producing a structured reference string. It has been a common choice for privacy and scaling systems where minimal on-chain verification cost matters.

- ### Provenance

