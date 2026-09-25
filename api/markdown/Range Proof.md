A range proof is a cryptographic zero-knowledge protocol that allows a prover to convince a verifier that a committed secret value lies within a specified numeric interval, without revealing the value itself. It is essential to confidential transaction systems, where amounts are hidden inside commitments yet must be proven non-negative to prevent inflation via negative-value forgery. Modern constructions such as Bulletproofs achieve compact, logarithmic-sized proofs without a trusted setup, making range proofs practical for on-chain privacy.

### Overview

- In confidential ledger designs, transaction amounts are concealed inside additively homomorphic commitments so that balances can be checked without revealing values. A malicious party could otherwise commit to a negative amount and mint money out of thin air.
- A range proof closes this attack surface by demonstrating, in zero knowledge, that each committed amount falls in a valid range such as [0, 2^64).
- Early designs based on bit decomposition produced large proofs that scaled linearly with the bit-width. Bulletproofs reduced proof size to logarithmic scale and removed any trusted setup requirement.
- Verification cost and proof aggregation are central engineering concerns, since a block may contain thousands of range proofs.

### Mechanisms

- Commit to the value with a [[Pedersen Commitment]] that hides the amount and binds the prover.
- Express the range constraint as an inner-product or arithmetic-circuit relation over the committed bits.
- Produce a succinct, non-interactive argument via the Fiat-Shamir transform.
- Aggregate multiple proofs to amortise size and verification work across outputs.

### Applications

- Hiding amounts in [[Confidential Transactions]] on Bitcoin sidechains and privacy coins.
- Underpinning amount privacy in [[Monero]] and the [[Liquid Network]].
- Proving solvency or reserve bounds without revealing exact holdings.
- Validating bounded inputs in privacy-preserving smart contracts.

### Provenance

