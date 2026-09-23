
A bilinear pairing is a mathematical map between two groups to a third group that is linear in each argument separately, commonly realised as the Weil or Tate pairing on elliptic curves over finite fields. Bilinear pairings enable advanced cryptographic constructions including identity-based encryption, short signature schemes (BLS), and zero-knowledge proof systems. They form the algebraic foundation of pairing-based cryptography, which underpins threshold signatures and SNARKs used in modern blockchain protocols.

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

- ### Provenance

