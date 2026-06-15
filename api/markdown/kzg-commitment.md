- ### Definition
  - A KZG commitment is a [[Polynomial Commitment]] scheme that commits to a polynomial with a single short group element and opens it with a constant-size proof.
  - It is a form of [[Cryptographic Commitment]] whose security relies on [[Elliptic Curve Cryptography]] and pairings.
  - It underpins Ethereum scaling through [[Danksharding]] and blob-based [[Data Availability]].

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

- ### Relationships
  - subClassOf:: [[Polynomial Commitment]]
  - hasPart:: [[Cryptographic Commitment]]
  - partOf:: [[Polynomial Commitment]]
  - partOf:: [[Danksharding]]
  - requires:: [[Elliptic Curve Cryptography]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Cryptographic Commitment]]
  - enables:: [[Data Availability Sampling]]
  - enables:: [[Danksharding]]
  - enables:: [[Data Availability]]
  - supports:: [[Rollup]]
  - supports:: [[Zero-Knowledge Proof]]
  - implements:: [[Polynomial Commitment]]
  - relatedTo:: [[Merkle Tree]]
  - relatedTo:: [[Ethereum]]
  - relatedTo:: [[Data Availability]]
  - bridgesTo:: [[Danksharding]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation