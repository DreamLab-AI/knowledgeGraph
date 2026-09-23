
Polygon zkEVM is an Ethereum Layer 2 scaling solution built as a zero-knowledge rollup that is bytecode-equivalent with the Ethereum Virtual Machine. It batches transactions off-chain and posts validity proofs to Ethereum, inheriting Layer 1 security while reducing gas fees and increasing throughput. Developers can deploy existing EVM smart contracts with minimal changes.

- ### Overview
  - Polygon zkEVM executes batches of transactions off-chain and generates a succinct validity proof verified by an on-chain contract.
  - It aims for bytecode-level equivalence with the EVM, so Solidity contracts and existing tooling work without modification.
  - The zero-knowledge approach finalises state without the multi-day challenge window required by optimistic rollups.
  - Security is inherited from Ethereum: a single valid proof attests that the entire batch followed protocol rules.
- ### Mechanisms
  - Transaction sequencing and batching by a sequencer node.
  - Proof generation by a prover that produces a SNARK/STARK over the batch trace.
  - On-chain verifier contract that validates the proof and updates rollup state.
  - Data availability posting so users can reconstruct state and exit independently.
  - EVM-equivalence layer translating opcodes into provable arithmetic circuits.
- ### Applications
  - Low-cost decentralised finance trading and lending on Ethereum-compatible rails.
  - High-throughput NFT minting and gaming transactions.
  - Enterprise settlement requiring cryptographic finality.
  - Migration of existing EVM dApps seeking lower gas fees without rewriting code.
- ### Provenance

