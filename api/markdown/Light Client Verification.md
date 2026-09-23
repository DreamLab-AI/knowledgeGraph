
Light client verification is the technique by which a resource-constrained client confirms facts about a blockchain without downloading or executing its full history. By tracking block headers and validating compact cryptographic proofs against committed state roots, a light client can verify transaction inclusion and consensus with minimal data and computation. It is foundational to mobile wallets, embedded clients, and trust-minimised cross-chain bridges.

- Light client verification lets a [[Light Client]] confirm blockchain facts without the full chain. It tracks each [[Block Header]] and checks a [[Merkle Proof]] against a committed [[Merkle Root]], implementing trust-minimised [[Cryptographic Proof]] of transaction inclusion and consensus.
- ### Overview
- A full node downloads and validates every block and transaction; a light client instead syncs only headers and requests compact proofs for the specific facts it cares about.
- Inclusion is proven by Merkle (or Verkle) proofs linking a transaction or state entry to a header's committed root, while consensus validity is checked against the chain's finality and validator/sync-committee signatures.
- The same primitives enable trust-minimised interoperability: a chain or bridge can run a light client of a counterparty chain to verify its state directly rather than trusting external attestors.
- ### Mechanisms
- Header-chain synchronisation and validation.
- Merkle inclusion proofs against committed state and transaction roots.
- Consensus checks via signatures, finality gadgets, or sync committees.
- Succinct proofs (including zero-knowledge proofs) to compress verification.
- Fraud or validity assumptions backed by data availability guarantees.
- ### Applications
- Mobile and embedded wallets verifying balances and payments cheaply.
- Trust-minimised [[Cross-Chain Bridge]] designs and [[Blockchain Interoperability]].
- On-chain light clients underpinning protocols such as [[IBC]].
- Verification layers complementing [[Rollup]] and scalability schemes.
- ### Provenance

