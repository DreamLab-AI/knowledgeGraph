- ### Definition
  - A [[Bilinear Pairing]] is an algebraic map e: G₁ × G₂ → Gₜ between elliptic-curve groups satisfying bilinearity, non-degeneracy, and computability.
  - This structure, realised via the Weil or Tate pairing on specific [[Elliptic Curve Cryptography]] curves, is the engine behind [[Pairing-Based Cryptography]].
  - It enables constructions otherwise infeasible: [[BLS Signature]] aggregation, [[Zero Knowledge Proof]] systems (Groth16, PLONK), and [[Identity-Based Encryption]].

- ### Overview
  - Bilinear pairings were introduced to cryptography by Joux (2000) for tripartite Diffie–Hellman, then weaponised constructively by Boneh–Franklin for IBE and Boneh–Lynn–Shacham for short signatures. The hardness assumptions (decisional Diffie–Hellman in pairing-friendly curves, q-Strong Diffie–Hellman) underpin security proofs. Practical deployment uses pairing-friendly curves such as BN254 (Ethereum, Zcash legacy) and BLS12-381 (Ethereum 2.0, Zcash Sapling). Efficient ate-pairing algorithms reduce the Miller loop cost to roughly 1–2 ms on modern CPUs.

- ### Key aspects
  - **Bilinearity** — e(aP, bQ) = e(P, Q)^(ab) for scalars a, b.
  - **Pairing-friendly curves** — BN254, BLS12-381, MNT curves; chosen for efficient Miller loop.
  - **Security levels** — 128-bit security requires BLS12-381 due to subfield attacks on BN254.
  - **Aggregatability** — BLS signatures can be aggregated: verify n signatures with one pairing check.
  - **SNARK enablement** — polynomial commitment schemes (KZG) use pairings for verification.

- ### Mechanisms
  - The Miller algorithm evaluates a rational function on the curve to compute the pairing value in the extension field Gₜ. A final exponentiation maps to the cyclic subgroup of prime order r. Constant-time implementations guard against side-channel attacks during the loop iterations.

- ### Applications
  - Ethereum 2.0 validator BLS signature aggregation.
  - Groth16 and PLONK zero-knowledge proof verification in blockchains.
  - IBE and attribute-based encryption in enterprise key management.
  - Threshold signature schemes in MPC wallets.

- ### Relationships
  - requires:: [[Elliptic Curve Cryptography]]
  - requires:: [[Finite Field Arithmetic]]
  - uses:: [[Pairing-Based Cryptography]]
  - uses:: [[Public Key Cryptography]]
  - enables:: [[Identity-Based Encryption]]
  - enables:: [[BLS Signature]]
  - enables:: [[Zero Knowledge Proof]]
  - enables:: [[Threshold Signature]]
  - hasPart:: [[Weil Pairing]]
  - supports:: [[Blockchain]]
  - supports:: [[SNARK]]
  - relatedTo:: [[Multi-Party Computation]]
  - relatedTo:: [[Digital Signature]]
  - contrastsWith:: [[RSA]]

- ### Provenance
  - updated:: 2026-06-15