- ### Definition
  - Shamir secret sharing splits a secret into shares so that any threshold number of them reconstructs it while fewer reveal nothing, using polynomial interpolation over a finite field.

- ### Semantic Classification
  - owl-class:: metaverse:ShamirSecretSharing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography Domain]]
  - bridges-to:: [[Cryptography]], [[STARK]]
  - requires:: [[Modular Arithmetic]]
  - enables:: [[Threshold Cryptography]]

- ### Content
  - The scheme encodes a secret as the constant term of a random polynomial of degree one less than the threshold, distributing point evaluations as shares. Any threshold subset interpolates the polynomial and recovers the secret, while smaller subsets learn nothing about it.
  - Shamir secret sharing underpins threshold cryptography, distributed key management and secure backup of keys. It relies on arithmetic over finite fields, connecting it to modular arithmetic.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z