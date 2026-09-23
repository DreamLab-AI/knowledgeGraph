
Key Aggregation is a cryptographic technique that combines multiple individual public keys into a single aggregate public key, against which a combined signature can be verified as though produced by one signer. It is central to modern multi-signature schemes such as MuSig2, where several parties jointly produce one compact signature indistinguishable from a single-key signature. Key aggregation improves privacy, reduces on-chain footprint and lowers verification cost in distributed signing protocols.

- ### Overview
  - Key aggregation exploits the linearity of Schnorr signatures to fold many signers into one verifier-facing key and signature. Naive aggregation is vulnerable to rogue-key attacks, so secure schemes weight each key with a hash-derived coefficient before combination. The result is a constant-size signature whose verification reveals nothing about the number of participants.
- ### Mechanisms
  - Linear combination: summing weighted public keys into a single aggregate key.
  - Rogue-key defence: deriving per-key aggregation coefficients to prevent adversarial key cancellation.
  - Nonce handling: secure multi-round or deterministic nonce generation as in MuSig2.
  - Signature compaction: producing one fixed-size signature regardless of signer count.
  - Verifier indistinguishability: aggregate signatures verify identically to single-signer ones.
- ### Applications
  - Bitcoin multi-signature wallets and Taproot spending paths.
  - Threshold custody and shared-control treasury arrangements.
  - Privacy-preserving collective authorisation in distributed protocols.
  - Reducing on-chain data and verification cost for joint transactions.
- ### Provenance

