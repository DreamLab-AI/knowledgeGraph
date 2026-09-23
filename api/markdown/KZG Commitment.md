
A KZG commitment is a polynomial commitment scheme, named after Kate, Zaverucha and Goldberg, that lets a prover commit to a polynomial with a single constant-size group element and later open it at any point with a constant-size proof. Its security rests on elliptic-curve pairings and a structured reference string produced by a trusted setup. It is central to modern data-availability and scaling designs on Ethereum, including proto-danksharding and danksharding.

- ### Overview
  - The scheme encodes data as the coefficients of a polynomial, then commits to that polynomial as one curve point.
  - A verifier can check that a claimed evaluation at a point is correct using a succinct proof and a pairing check.
  - A one-time trusted setup ceremony produces the structured reference string that the scheme depends on.

- ### Mechanisms
  - Commitment to a polynomial as a single group element.
  - Opening proofs that are constant-size regardless of polynomial degree.
  - Pairing-based verification of evaluations.
  - A structured reference string from a multi-party trusted setup.

- ### Applications
  - Blob commitments enabling [[Data Availability Sampling]] in [[Danksharding]].
  - Compact data availability proofs for a [[Rollup]].
  - A building block in some [[Zero-Knowledge Proof]] systems.
  - An alternative to [[Merkle Tree]] inclusion proofs for large data sets.

- ### Provenance

