
A Non-Interactive Proof (NIP) is a cryptographic proof system in which the prover transmits a single message to the verifier, without any back-and-forth challenge-response rounds, allowing verification of a claim without ongoing interaction. Non-interactive proofs are typically constructed from interactive protocols via the Fiat-Shamir heuristic, replacing the verifier's random challenge with a hash of the prover's first message, binding the proof to the statement. The resulting proof string can be broadcast publicly, stored on-chain, or verified asynchronously by any party possessing the verification key. Non-interactive zero-knowledge proofs (NIZKs) additionally guarantee that the proof reveals nothing beyond the truth of the statement, and form the foundation of [[ZK-SNARK]] and [[ZK-STARKs]] schemes used in blockchain privacy and scalability applications.

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

- ### Provenance

