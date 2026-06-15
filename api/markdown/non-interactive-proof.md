- ### Definition
  - [[Non Interactive Proof]] is a [[Cryptographic Proof]] paradigm in which a single prover message suffices for verification, achieved through the Fiat-Shamir transform that replaces interactive verifier challenges with a deterministic hash of the transcript.
  - It is the basis for [[ZK-SNARK]] and [[ZK-STARKs]] constructions that enable succinct, publicly verifiable proofs of computational integrity on blockchains.
  - Non-interactive proofs contrast with [[Interactive Proof System]]s, which require multiple rounds of challenge and response between prover and verifier.

- ### Overview
  - The shift from interactive to non-interactive proofs was crucial for blockchain applications where the verifier (a smart contract) cannot engage in real-time dialogue with the prover.
  - [[Bulletproofs]] provide non-interactive range proofs with logarithmic size, used in confidential transaction protocols.
  - [[STARK]] proofs achieve non-interactivity through the FRI (Fast Reed-Solomon IOP of Proximity) protocol combined with the Fiat-Shamir heuristic.

- ### Key aspects
  - **Fiat-Shamir heuristic**: replaces verifier's random coin with a hash of the prover's commitment, producing a self-contained proof string.
  - **Common reference string (CRS)**: trusted-setup-based systems (Groth16, PLONK) rely on a CRS; transparent systems ([[ZK-STARKs]]) do not.
  - **Succinctness**: proof size is sublinear in the computation size, enabling efficient on-chain verification.
  - **Non-interactive zero-knowledge (NIZK)**: proofs that are simultaneously non-interactive and zero-knowledge, revealing no witness information.

- ### Mechanisms
  - The prover executes the interactive protocol mentally, substituting hash outputs for verifier challenges.
  - The resulting proof tuple is transmitted to the verifier, who checks it deterministically.
  - [[ZK-SNARK]] schemes additionally use polynomial commitments over elliptic curves for constant-size proofs.

- ### Applications
  - [[Zero-Knowledge Rollup]] systems submitting validity proofs to Ethereum mainnet.
  - [[Privacy Preserving Blockchain]] transaction protocols (Zcash, Mina Protocol).
  - Identity attestation where credentials are proved without revealing underlying attributes.
  - [[Zero-Knowledge Machine Learning]] inference attestation.

- ### Relationships
  - implements:: [[Zero-Knowledge Proof]], [[Cryptographic Proof System]]
  - hasPart:: [[Cryptographic Proof]], [[Cryptographic Verification]]
  - uses:: [[Cryptographic Hash Function]], [[ZK-SNARK]]
  - enables:: [[ZK-SNARKs]], [[ZK-STARKs]], [[Zero-Knowledge Rollup]]
  - dependsOn:: [[Cryptographic Hash Function]], [[Cryptographic Primitive]]
  - relatedTo:: [[Interactive Proof System]], [[Cryptographic Proofs]], [[Bulletproofs]], [[STARK]]
  - contrastsWith:: [[Interactive Proof System]]
  - supports:: [[Privacy Preserving Blockchain]], [[Cryptographic Security]]
  - bridgesTo:: [[Zero-Knowledge Machine Learning]]

- ### Provenance
  - updated:: 2026-06-15